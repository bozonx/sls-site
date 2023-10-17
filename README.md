# The System of Personal Freedom site

## Adding a new blog page

Put the new md file to `/texts/[language]/blog/[season]/[article-name]/index.md`.
Where:

* `[language]` is a language of the article
* `[season]` is a name of a season like `2023-1`. Where on the left side is a year is and on the right a number of the season of this year.
* `[article-name]` it is an url-friendly name.
* `index.md` - it is a content or the article in Markdown format

Season and article name have to be the same for all the languages.

## Meta data of an article

Articles have to have meta data inside a tag `<meta>...</meta>`.
Meta data is in YAML format. The meta data has to be paced at the beginning of the document.

```
<meta>
date: YYYY-MM-DD
tags:
  - some_tag
  ...
title: The heading of an article which is used as a header and in the title HTML tag
descr: A short description which will be use in lists and description meta tag
commentUrl: https://t.me/slsfreedom/...
videoLink: https://www.youtube.com/watch?v=...
podcasts:
  site: https://slsfreedom.mave.digital/...
  castbox: https://castbox.fm/episode/...
  soundstream: https://soundstream.media/clip/...
  spotify: https://open.spotify.com/episode/...
  vk: https://vk.com/...
  yandexMusic: https://music.yandex.ru/album/...
</meta>
```


## Markdown formatting of articles

* use `-` for lists
* use `**` for a bold text
* use `*` for an italic text
* use `***` for a bold-italic text
* use `> ` for a blockquote


## Developing

Clone the repo.

```bash
yarn install

# HMR development mode
yarn dev

# Build a production version of the project
yarn build

# preview the just built project
yarn preview
```

After building the production just commit it and push the repo.
