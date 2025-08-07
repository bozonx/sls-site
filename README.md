[![Netlify Status](https://api.netlify.com/api/v1/badges/3e0c4b4e-4fab-419a-a5ff-8a4e860e9f18/deploy-status)](https://app.netlify.com/sites/p-libereco/deploys)

# Personal freedom system site

## Run

Use node version: 18 or greater

- Install dependencies:

  ```bash
  yarn
  ```

- Run locally:

  ```bash
  yarn dev
  ```

  Go to `http://localhost:5173/`

- Build and Preview

  ```bash
  yarn build && yarn preview
  ```

  Go to `http://localhost:4173/`

  Local admin panel is on `http://localhost:4173/admin/`

## Cloud flare

```
pnpm cf:deploy
```
