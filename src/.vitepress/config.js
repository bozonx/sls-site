import { defineConfig } from "vitepress";
import siteConfigBase from "vitepress-sls-blog-tmpl/siteConfigBase.js";
import { loadSiteLocale } from "vitepress-sls-blog-tmpl/siteConfigHelper.js";
import { PROPS } from "./props.js";

export default async () => {
  const ru = await loadSiteLocale("ru", __filename, PROPS);
  const en = await loadSiteLocale("en", __filename, PROPS);
  const configBase = siteConfigBase(PROPS, en);

  return defineConfig({
    ...configBase,
    locales: {
      ...configBase.locales,
      en: { lang: "en-US", ...en },
      ru: { lang: "ru-RU", ...ru },
    },
    themeConfig: {
      ...configBase.themeConfig,
      logo: "/img/logo.svg",
    },
    head: [
      ...configBase.head,
      // do not recognize telephone numbers on the page
      ["meta", { name: "format-detection", content: "telephone=no" }],

      [
        "script",
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-PEBENST1JE",
        },
      ],
      [
        "script",
        {},
        `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
       gtag('config', 'G-PEBENST1JE');`,
      ],
    ],
  });
};
