# Seki Home Realty website

Static, GitHub Pages-ready website for [sekihomerealty.com](https://sekihomerealty.com/).

## Publish on GitHub Pages

1. Create a **public** repository in your personal GitHub account, for example `seki-home-realty`.
2. From this folder, initialize Git and push the `main` branch:

   ```powershell
   git init
   git add .
   git commit -m "Launch Seki Home Realty static site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/seki-home-realty.git
   git push -u origin main
   ```

3. In GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, then select `main` and `/ (root)`.
4. In **Settings → Pages**, add `sekihomerealty.com` as the custom domain and enable **Enforce HTTPS** once available.
5. Only after GitHub accepts the domain, update the WordPress-managed DNS records:
   - `@` A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` CNAME: `YOUR-USERNAME.github.io`

Keep all existing mail records (MX, SPF, DKIM, and DMARC) unchanged.

The `CNAME` file sets the intended primary domain. Update it only if a different domain will be used.
