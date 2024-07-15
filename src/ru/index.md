---
editLink: false
lastUpdated: false
prev: false
next: false
layout: page
---

<script setup>
import { useData } from "vitepress";
import SiteHome from "vitepress-sls-blog-tmpl/src/SiteHome.vue";

const { theme } = useData();

const hero = {
  name: "Система Личной Свободы",
  text: "Философия свободы",
  tagline: "Путь свободы открывает дорогу счастью",
  image: {
    src: "/img/site-big-logo.webp",
    alt: "Лого СЛС",
  },
  actions: [
    {
      theme: "brand",
      text: "Youtube канал",
      link: "https://www.youtube.com/@slsfreedom",
    },
    {
      theme: "alt",
      text: "Telegram канал",
      link: "https://t.me/slsfreedom",
    },
    {
      theme: "alt",
      text: "Поддержать проект",
      link: "/ru/page/donate",
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
