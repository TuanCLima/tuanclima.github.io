# Tuan Lima — GitHub Pages Home

A small static entry point for my GitHub Pages site, linking to my current portfolio and selected engineering work.

[Portfolio](https://tuanlima.netlify.app/) · [Portfolio source](https://github.com/TuanCLima/portfolio) · [GitHub profile](https://github.com/TuanCLima)

## Website

The public entry page is `site/index.html`. It contains no application dependencies, database calls or API credentials.

```bash
python3 -m http.server 4321 --directory site
```

Open [localhost:4321](http://localhost:4321). The Pages workflow uploads only `site/`; source files and local configuration are excluded from the website artifact.

The repository name is intentionally kept as `tuanclima.github.io`, which is the account's GitHub Pages address.

## Historical Firebase experiment

The `src/` directory and webpack configuration preserve an earlier Firestore experiment. They are not part of the published website. The original script reads and updates the `users` collection, so it should only be explored against a disposable Firebase project that you control.

`.env.example` lists the original configuration keys without account values. No local `.env` is needed to preview or publish the current static homepage.

## License

The legacy `package.json` declares ISC. No separate project-wide license file is included.
