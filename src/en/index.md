---
layout: home
---

<script setup>
import { useData } from "vitepress";
import SiteHome from "vitepress-sls-blog-tmpl/SiteHome.vue";
import { PROPS } from "../.vitepress/props.js";

const { theme, localeIndex } = useData();

const hero = {
name: "The system of personal freedom",
text: "The path of freedom opens the way to happiness",
tagline: "The philosophy of Freedom",
image: {
src: theme.value.mainHeroImg,
alt: "Logo of The system of personal freedom",
},
actions: [
{
theme: "brand",
text: `📃 About the project`,
link: `/${localeIndex.value}/doc/about`,
},
{
theme: "alt",
text: `🗞️ Articles, podcast texts`,
link: `${PROPS.blogUrl}/${localeIndex.value}/recent/1`,
},
{
theme: "alt",
text: `📢 ${theme.value.t.socialMedia}`,
link: `/${localeIndex.value}/${theme.value.linksUrl}`,
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
