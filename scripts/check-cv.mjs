import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const files = [
  {
    path: "public/Ezequiel_Pacheco_CV_ES.pdf",
    locale: "es",
    marker: "Contenido actualizado: agosto de 2026.",
  },
  {
    path: "public/Ezequiel_Pacheco_CV_EN.pdf",
    locale: "en",
    marker: "Content updated: August 2026.",
  },
];

for (const file of files) {
  const info = execFileSync("pdfinfo", [file.path], { encoding: "utf8" });
  const text = execFileSync("pdftotext", ["-layout", file.path, "-"], {
    encoding: "utf8",
  });
  const compactText = text.replace(/\s+/g, "");
  const urls = execFileSync("pdfinfo", ["-url", file.path], {
    encoding: "utf8",
  });
  if (!/Page size:\s+.*A4/i.test(info))
    throw new Error(`${file.path}: expected A4`);
  if (!/Tagged:\s+yes/i.test(info))
    throw new Error(`${file.path}: expected tagged PDF`);
  if (!compactText.includes("PRODUCTBUILDER&FULL-STACKENGINEER"))
    throw new Error(`${file.path}: role missing`);
  if (!text.includes(file.marker))
    throw new Error(`${file.path}: final marker missing or clipped`);
  if (
    !urls.includes("mailto:") ||
    !urls.includes("linkedin.com") ||
    !urls.includes("github.com")
  )
    throw new Error(`${file.path}: expected links missing`);
  if (
    /(?:localhost|127\.\d+\.\d+\.\d+|0\.0\.0\.0|\[::1\]|file:|https?:\/\/(?:10\.|192\.168\.|172\.(?:1[6-9]|2\d|3[01])\.))/i.test(
      urls,
    )
  )
    throw new Error(`${file.path}: local or private link found`);
  if (text.includes("Full Stack Developer con foco en backend"))
    throw new Error(`${file.path}: stale role found`);
  if (readFileSync(file.path).length < 20_000)
    throw new Error(`${file.path}: unexpectedly small`);
}

process.stdout.write(
  "CV ES/EN válidos: A4, tagged, links y contenido completo.\n",
);
