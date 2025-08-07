// worker.js
var worker_default = {
  /**
   * Обработчик запросов воркера
   * - Пытается отдать статический файл из `ASSETS`
   * - Если файл не найден, пробует вернуть `404.html` со статусом 404
   */
  async fetch(request, env) {
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse && assetResponse.status !== 404) {
      return assetResponse;
    }
    const url = new URL(request.url);
    const notFoundRequest = new Request(new URL("/404.html", url.origin), {
      headers: request.headers,
      method: "GET"
    });
    const notFoundResponse = await env.ASSETS.fetch(notFoundRequest);
    if (notFoundResponse && notFoundResponse.status === 200) {
      return new Response(notFoundResponse.body, {
        status: 404,
        headers: notFoundResponse.headers
      });
    }
    return new Response("Not found", { status: 404 });
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
