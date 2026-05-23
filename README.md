# Dictionary Hero Registry

A standalone Next.js app that publishes the `dictionary-hero` component as a shadcn custom registry item.

## Develop

```bash
npm install
npm run registry:build
npm run dev
```

The preview app runs at `http://localhost:3000`.

## Registry URLs

- Catalog: `/r/registry.json`
- Component: `/r/dictionary-hero.json`

## Local shadcn checks

```bash
npx shadcn@latest list http://localhost:3000/r/registry.json
npx shadcn@latest view http://localhost:3000/r/dictionary-hero.json
npx shadcn@latest add http://localhost:3000/r/dictionary-hero.json
```

## Publish

Deploy this folder as its own Next.js app. After deployment, other developers can install the component with:

```bash
npx shadcn@latest add https://dictionary-hero.vercel.app/r/dictionary-hero.json
```
