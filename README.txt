JustAShringar — Next.js + TypeScript starter

How to run locally:
1. Extract this folder.
2. In terminal, cd into the project folder: justashringar-nextjs
3. Install dependencies:
   npm install
4. Run the dev server:
   npm run dev
5. Open http://localhost:3000 in your browser.

IMPORTANT: Formspree setup
- Sign up at https://formspree.io and create a form.
- Copy the Form ID (looks like xqkvnldp) and open pages/contact.tsx
- Replace the string 'yourFormIDHere' in useForm('yourFormIDHere') with your real Form ID.
- Then the contact form submissions will be delivered to your email.

Files included: pages (index, about, products, shop, contact), styles, package.json, tsconfig.

If you want, I can also prepare a ready-to-deploy Vercel configuration or help you deploy the site.
