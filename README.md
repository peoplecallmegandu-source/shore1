# Aurora Coffee — Marketing Website

A responsive, multi-page site for a modern small-batch coffee roaster. Designed with glassmorphism, dark mode support, gradients, micro-animations, parallax effects, and Tailwind CSS utility classes applied directly in the HTML.

Project structure

my-project/
├── public/
│   ├── index.html          # Main landing page with hero, quiz, gallery, testimonials
│   ├── about.html          # Our story and farmer partners
│   ├── contact.html        # Contact form (POSTs to /api/contact)
│   └── services.html       # Shop and subscription info
├── server/
│   └── index.js            # Express server to serve static files and accept contact POSTs
├── package.json            # Dependencies and run scripts
├── render.yaml             # Render deployment configuration
└── README.md               # This file

Key features

- Fully responsive, full-bleed layouts (w-full, max-w-none) that fill the viewport width on all devices.
- Tailwind CSS utility classes used inline (via CDN) for styling.
- Google Fonts: Poppins and Playfair Display (declared at the top of HTML files as required).
- Glassmorphism: translucent panels with backdrop blur.
- Dark/light theme toggle with smooth switching (stored in localStorage).
- Parallax and subtle float animations in the hero section.
- Interactive components:
  - Roast quiz with progress bar
  - Carousel gallery
  - FAQ accordion
  - Newsletter modal (with client-side validation)
  - Contact form with server-side endpoint (/api/contact)
- Accessibility: ARIA attributes, keyboard shortcuts (Esc to close modals), and focusable controls.
- Lazy loading for images using loading="lazy".
- SEO meta tags and Open Graph image placeholder.

Development & local setup

1. Clone the repository or copy files to your project folder.
2. Install dependencies:

   npm install

3. Run the app locally:

   npm start

   The app will be available at http://localhost:3000

   For development with automatic restarts (requires nodemon):

   npm run dev

Deployment

- A render.yaml file is included to make it easy to deploy to Render.com. Push the project to a Git repo and connect to Render. Render will run `npm install` and `npm start`.

Customization notes

- Images are inserted as placeholders using the special image placeholder format: `{{image: description }}`. The system that processes this project can fetch high-quality images from Unsplash/Pexels/Pixabay based on the descriptions. If you supply your own images, replace the src attributes with the base64 data URI or file path.

- Fonts are declared in HTML and included via Google Fonts.

- To add or modify routes for the server, edit server/index.js. The server currently simulates contact form handling and logs messages to the console.

Accessibility & Performance

- All interactive elements include keyboard support for basic operations, modals close on Escape, and the navigation is keyboard friendly.
- Images are lazy loaded and transitions are hardware-accelerated where possible.

Notes & next steps

- Integrate a real email provider (SendGrid, Postmark) or a database to store contact messages.
- Replace placeholder images with your product photography or assets.
- Add payment/checkout integration if you want to implement a full e-commerce flow.
- Expand the shop page to fetch inventory from an API or CMS for dynamic content.

Enjoy! If you'd like me to customize the content, brand colors, or add an e-commerce checkout, tell me what you'd like and I'll update the project.