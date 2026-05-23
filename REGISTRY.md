# Dictionary Hero shadcn registry

This project publishes the `dictionary-hero` design component as a standalone shadcn registry item.

## Source files

- `registry.json` is the registry entrypoint.
- `registry/default/registry.json` declares the `dictionary-hero` item.
- `registry/default/dictionary-hero/dictionary-hero.tsx` is the installable component source.

## Build

```bash
npm run registry:build
```

Also works with:

```bash
pnpm run registry:build
yarn registry:build
bun run registry:build
```

This writes static JSON files to `public/r`:

- `public/r/registry.json`
- `public/r/dictionary-hero.json`

## Test locally

Start the Next.js server:

```bash
npm run dev
```

Or:

```bash
pnpm run dev
yarn dev
bun run dev
```

Then test the registry:

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

After deployment, users can install the component directly:

```bash
npx shadcn@latest add https://design.piyusharyan.online/r/dictionary-hero.json
```

```bash
pnpm dlx shadcn@latest add https://design.piyusharyan.online/r/dictionary-hero.json
yarn dlx shadcn@latest add https://design.piyusharyan.online/r/dictionary-hero.json
bunx shadcn@latest add https://design.piyusharyan.online/r/dictionary-hero.json
```

Or add it as a namespace in `components.json`:

```bash
npx shadcn@latest registry add @dictionary-hero=https://design.piyusharyan.online/r/{name}.json
npx shadcn@latest add @dictionary-hero/dictionary-hero
```

```bash
pnpm dlx shadcn@latest registry add @dictionary-hero=https://design.piyusharyan.online/r/{name}.json
pnpm dlx shadcn@latest add @dictionary-hero/dictionary-hero
```

```bash
yarn dlx shadcn@latest registry add @dictionary-hero=https://design.piyusharyan.online/r/{name}.json
yarn dlx shadcn@latest add @dictionary-hero/dictionary-hero
```

```bash
bunx shadcn@latest registry add @dictionary-hero=https://design.piyusharyan.online/r/{name}.json
bunx shadcn@latest add @dictionary-hero/dictionary-hero
```
