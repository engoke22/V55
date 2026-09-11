SokoFlow Pro update package.

EASIEST UPDATE:
1. Open the SAME GitHub repository already connected to Cloudflare.
2. Replace worker.js with this new worker.js.
3. Replace wrangler.jsonc and package.json.
4. Commit to the connected production branch.
5. Cloudflare automatically redeploys.

IMPORTANT: This is a functional prototype. Accounts, uploaded images and products use browser localStorage, so they are not shared between devices. For a real public marketplace, move users/products/images to Cloudflare D1/R2 and keep admin credentials in Workers Secrets.
