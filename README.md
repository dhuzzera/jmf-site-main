# Site Jussara Muehlbauer França

Site institucional profissional em React + Vite + Tailwind CSS.

## Rodar localmente

```bash
npm install
npm run dev
```

## Gerar build

```bash
npm run build
```

## Publicar no GitHub Pages

Este projeto inclui um workflow em `.github/workflows/jekyll-gh-pages.yml`.

1. Crie um repositório no GitHub e faça push do código.
2. Vá em **Settings > Pages**.
3. Em **Build and deployment**, selecione **GitHub Actions**.
4. Aguarde o workflow terminar.
5. O link público aparecerá na área do GitHub Pages.

## Estrutura

```
├── index.html          # Entry point HTML
├── src/
│   ├── main.jsx        # React entry
│   ├── index.css       # Tailwind imports
│   ├── App.jsx         # Main component
│   └── components/     # Page sections
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Services.jsx
│       ├── Differentials.jsx
│       ├── Testimonials.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
```
