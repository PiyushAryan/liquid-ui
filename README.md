# Dictionary Hero Registry

A standalone Next.js app that publishes the `dictionary-hero` component as a shadcn custom registry item.

## Develop

```bash
npm install
npm run registry:build
npm run dev
```

```bash
pnpm install
pnpm run registry:build
pnpm run dev
```

```bash
yarn install
yarn registry:build
yarn dev
```

```bash
bun install
bun run registry:build
bun run dev
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

```bash
pnpm dlx shadcn@latest list http://localhost:3000/r/registry.json
pnpm dlx shadcn@latest view http://localhost:3000/r/dictionary-hero.json
pnpm dlx shadcn@latest add http://localhost:3000/r/dictionary-hero.json
```

```bash
yarn dlx shadcn@latest list http://localhost:3000/r/registry.json
yarn dlx shadcn@latest view http://localhost:3000/r/dictionary-hero.json
yarn dlx shadcn@latest add http://localhost:3000/r/dictionary-hero.json
```

```bash
bunx shadcn@latest list http://localhost:3000/r/registry.json
bunx shadcn@latest view http://localhost:3000/r/dictionary-hero.json
bunx shadcn@latest add http://localhost:3000/r/dictionary-hero.json
```

## Publish

Deploy this folder as its own Next.js app. After deployment, other developers can install the component with:

```bash
npx shadcn@latest add https://design.piyusharyan.online/r/dictionary-hero.json
```

```bash
pnpm dlx shadcn@latest add https://design.piyusharyan.online/r/dictionary-hero.json
yarn dlx shadcn@latest add https://design.piyusharyan.online/r/dictionary-hero.json
bunx shadcn@latest add https://design.piyusharyan.online/r/dictionary-hero.json
```
