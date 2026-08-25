import { chromium } from "@playwright/test";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const mode = process.argv[2];
if (!["cv", "og"].includes(mode)) throw new Error("Expected cv or og mode");

const baseURL = "http://127.0.0.1:4321";
const server = spawn(
  "npm",
  ["run", "preview", "--", "--host", "127.0.0.1", "--port", "4321"],
  { stdio: "ignore" },
);

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(baseURL);
      if (response.ok) return;
    } catch {
      await new Promise((resolveWait) => setTimeout(resolveWait, 1));
    }
    await new Promise((resolveWait) => setTimeout(resolveWait, 250));
  }
  throw new Error("Preview server did not become ready");
}

try {
  await waitForServer();
  const browser = await chromium.launch({ headless: true });
  if (mode === "cv") {
    const page = await browser.newPage();
    for (const item of [
      { path: "/cv/", output: "Ezequiel_Pacheco_CV_ES.pdf" },
      { path: "/en/cv/", output: "Ezequiel_Pacheco_CV_EN.pdf" },
    ]) {
      await page.goto(`${baseURL}${item.path}`, { waitUntil: "networkidle" });
      await page.pdf({
        path: resolve("public", item.output),
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
        tagged: true,
        outline: true,
      });
    }
  } else {
    await mkdir(resolve("public", "og"), { recursive: true });
    const page = await browser.newPage({
      viewport: { width: 1200, height: 630 },
      deviceScaleFactor: 1,
    });
    for (const locale of ["es", "en"]) {
      const prefix = locale === "es" ? "" : "/en";
      const home = locale === "es" ? "/" : "/en/";
      await page.goto(`${baseURL}${home}`, { waitUntil: "networkidle" });
      await page.screenshot({
        path: resolve("public", "og", `${locale}-home.png`),
      });
      for (const slug of ["minecall", "el-editor", "chichitos"]) {
        const path =
          locale === "es" ? `/proyectos/${slug}` : `${prefix}/projects/${slug}`;
        await page.goto(`${baseURL}${path}`, { waitUntil: "networkidle" });
        await page.screenshot({
          path: resolve("public", "og", `${locale}-${slug}.png`),
        });
      }
    }
  }
  await browser.close();
} finally {
  server.kill("SIGTERM");
}
