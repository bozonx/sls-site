---
layout: page
---
<script setup>
import { useData } from "vitepress";
import SiteHome from "vitepress-sls-blog-tmpl/SiteHome.vue";
import { PROPS } from "../.vitepress/props.js";

const { theme, localeIndex } = useData();

const hero = {
name: "Система Личной Свободы",
text: "Путь свободы открывает дорогу к счастью",
tagline: "Философия свободы",
image: {
src: theme.value.mainHeroImg,
alt: "Логотип Система Личной Свободы",
},
actions: [
{
theme: "brand",
text: `📃 О проекте`,
link: `/${localeIndex.value}/doc/about`,
},
{
theme: "alt",
text: `🗞️ Статьи, тексты подкастов`,
link: `${PROPS.blogUrl}/${localeIndex.value}/recent/1`,
},
{
theme: "alt",
text: "`📢 ${PROPS.t.socialMedia}"`,
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
