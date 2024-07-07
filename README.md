This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Approach

This is my first time creating app like this. My initial thought is how I can make an app that display the array of data (json data) one at a time.

I did thought using some global state is a better idea at least in this case, for small amount of incoming data. I am using zustand for simple global state because of its simplicity. I just track each index, update it after one question done.

For the UI wise, this is my first time using MUI so it quite challenging to understand, I usually use tailwind with shadcn/next UI. It's should be responsive as like edbot.ai website accross the browser.
