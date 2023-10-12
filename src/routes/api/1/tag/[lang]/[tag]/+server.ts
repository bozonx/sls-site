import { error } from '@sveltejs/kit';


export const prerender = true


export async function GET(event) {
  const langStr = event.params.lang
  const pageNum = Number(event.params.page)

  let rawContent: any[] = [
    {
      title: 'aaa0',
      thumb: '/img.jpg',
      content: 'some content',
      date: '2023-10-10',
    },
  ]

  // try {
  //   rawContent = await getBlogPage(langStr, event.params.file)
  // }
  // catch (e) {
  //   throw error(404, 'Not found');
  // }

  return new Response(JSON.stringify({
    result: rawContent,
    page: pageNum,
  }));
}
