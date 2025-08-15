# Dark Light Mode In Next.JS 15 and Tailwind 4.1

A fully custom, dependency-free solution for adding light/dark mode to your Next.js 15 + Tailwind CSS 4.1 projects.  
**No `next-themes`, no ShadCN UI, no extra packages** — just clean, SSR-friendly code with client-side theme persistence and zero flicker.

## 🧐 Why This Exists

Often, common solutions rely on external packages like `next-themes`, ShadCN UI, or other UI frameworks. While convenient, they can introduce:

- **SSR hydration mismatches** and flickering (FOUC)
- **Extra dependencies**, increasing bundle size
- Hidden complexity, especially with new Next.js 15 features

This project gives you a **lightweight, fully custom alternative** that:

- Completely avoids external dependencies  
- Works seamlessly with Next.js 15's App Router (using `app/`)  
- Uses SSR-friendly persistence (cookies or inline head scripts)  
- Ensures no flicker on load or theme toggle

## ✨ Features

- **Pure implementation** — no `next-themes`, no ShadCN, no UI libs
- **SSR-safe** — initial theme is rendered correctly, avoiding mismatch
- **Persistent theme** — saves user preference via `localStorage`
- **Zero flicker** — inline theme detection applied before hydration
- **Clean and minimal** — easy to understand and extend
- **No Tailwind Config Needed** — Works without editing tailwind.config.js.

## 🛠 Developer

[![GitHub](https://img.shields.io/badge/GitHub-thesakshijaiswal-181717?style=for-the-badge&logo=github)](https://github.com/thesakshijaiswal)

``If this repo helped you, please consider giving it a ⭐``