import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/en/",
  "/proyectos/minecall",
  "/proyectos/el-editor",
  "/proyectos/chichitos",
  "/en/projects/minecall",
  "/en/projects/el-editor",
  "/en/projects/chichitos",
  "/cv/",
  "/en/cv/",
];

test("diez rutas, metadata localizada y red limpia", async ({ page }) => {
  const consoleErrors: string[] = [];
  const failedRequests: string[] = [];
  page.on(
    "console",
    (message) =>
      message.type() === "error" && consoleErrors.push(message.text()),
  );
  page.on("requestfailed", (request) => failedRequests.push(request.url()));
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.ok()).toBe(true);
    await expect(page.locator("html")).toHaveAttribute(
      "lang",
      route.startsWith("/en") ? "en" : "es-AR",
    );
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
  }
  expect(consoleErrors).toEqual([]);
  expect(failedRequests).toEqual([]);
});

test("idioma, navegación y casos destacados", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/en\/$/);
  await expect(
    page.getByRole("heading", { name: "Decisions, ownership and evidence." }),
  ).toBeVisible();
  for (const name of ["MineCall", "El Editor", "Chichitos"]) {
    await page.getByRole("link", { name: `View case: ${name}` }).click();
    await expect(page.getByRole("heading", { name, level: 1 })).toBeVisible();
    await page.getByRole("link", { name: "Back to portfolio" }).click();
  }
});

test("media accesible, video con controles y límites honestos", async ({
  page,
}) => {
  await page.goto("/proyectos/minecall");
  const images = page.locator(".case-media img");
  for (let index = 0; index < (await images.count()); index += 1)
    await expect(images.nth(index)).not.toHaveAttribute("alt", "");
  await expect(page.locator("video[controls]")).toHaveCount(1);
  await expect(page.getByText(/no una grabación/i)).toBeVisible();
  await page.goto("/proyectos/el-editor");
  await expect(page.locator(".case-media img")).toHaveCount(1);
  await expect(page.getByText(/no representa una interfaz/i)).toBeVisible();
  await page.goto("/proyectos/chichitos");
  await expect(page.locator(".case-media img")).toHaveCount(3);
  await expect(
    page.getByText(/No se afirma carrito persistente/i),
  ).toBeVisible();
});

test("mobile, desktop, teclado y foco", async ({ page }) => {
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await expect(page.locator(".case-preview")).toHaveCount(3);
  }
  await page.setViewportSize({ width: 390, height: 900 });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Saltar al contenido" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main")).toBeInViewport();
});
