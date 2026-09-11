SokoFlow Easy Deploy

This version intentionally uses only 3 required files:
1. worker.js
2. wrangler.jsonc
3. package.json

There is NO src folder and NO public folder.

Upload these 3 files directly to the main page of your GitHub repository.
Then connect the repository to Cloudflare Workers.

Deploy command:
npx wrangler deploy
