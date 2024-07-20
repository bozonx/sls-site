---
layout: page
---

<script setup>
import { useData } from "vitepress";
import SiteHome from "vitepress-sls-blog-tmpl/SiteHome.vue";

const { theme, localeIndex } = useData();

const hero = {
  name: "The system of personal freedom",
  text: "The philosophy of Freedom",
  tagline: "The path of freedom opens the way to happiness",
  image: {
    src: theme.value.mainHeroImg,
    alt: "Logo of The system of personal freedom",
  },
  actions: [
    {
      theme: "brand",
      text: "Youtube channel (RU)",
      link: "https://www.youtube.com/@slsfreedom",
    },
    {
      theme: "alt",
      text: "Telegram (RU)",
      link: "https://t.me/slsfreedom",
    },
    {
      theme: "alt",
      text: "Support us",
      link: `/${localeIndex.value}/${theme.value.donateUrl}`,
    },
  ],
}
const features = [
//   {
//     icon: "🤝",
//     title: "Антифем это равноправие",
//     details: "За что выступает движение антифеминизм",
//     linkText: "Читать о",
//     link: "/ru/doc/what-the-antifeminism-movement-stands-for",
//   },
//   {
//     icon: "📖",
//     title: "Правда о современном феминизме",
//     details: "описание",
//     linkText: "Читать о",
//     link: "/ru/doc/the-truth-about-modern-feminism",
//   },
//   {
//     icon: "⚔️",
//     title: "Как победить феминизм",
//     details: "описание",
//     linkText: "Читать о",
//     link: "/ru/doc/how-to-defeat-feminism",
//   },
]
</script>

<SiteHome :hero="hero" :features="features">
</SiteHome>
