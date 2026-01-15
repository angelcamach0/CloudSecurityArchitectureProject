
<!-- Acknowledgments -->
## Security Notes

- This app uses a basic CSP and referrer policy in `index.html` for local/dev.
- For production, set equivalent headers at the hosting layer (Netlify/Vercel/CloudFront) to enforce them.

## Contact Form

- The contact form posts to a Cloudflare Pages Function (`/api/contact`) that sends email via MailChannels.
- Configure environment variables in Cloudflare: `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, optional `CONTACT_TO_NAME`, `CONTACT_FROM_NAME`.
- Add Turnstile keys: `TURNSTILE_SECRET_KEY` (server) and `VITE_TURNSTILE_SITE_KEY` (client).
- For rate limiting, bind a KV namespace named `RATE_LIMIT` and optionally set `RATE_LIMIT_MAX` and `RATE_LIMIT_WINDOW_SECONDS`.

## :gem: Acknowledgements

This section used to mention useful resources and libraries that used in 3D Portfolio

 - https://github.com/ladunjexa/reactjs18-3d-portfolio
 - [Email JS](https://www.emailjs.com/)
 - [Framer Motion](https://www.framer.com/motion/)
 - [React Tilt](https://www.npmjs.com/package/react-tilt)
 - [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component)
 - #JSMastery

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="center">
<img src="https://github.com/ladunjexa/Threejs_3D_Portfolio/blob/main/public/logo.png" height="auto" width="10%" />
</p>
# angelcamach0
