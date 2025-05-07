# Institute-Based Shuttle Management System

A **Telegram-based AI shuttle booking** platform (this repo) and the source code for the bot program is at [https://github.com/Jerryblessed/IBTROS.git](https://github.com/Jerryblessed/IBTROS.git) designed for institutions (schools, hospitals, banks, etc.) and individuals in Nigeria. It leverages natural language processing, video background branding, and email-based contact to provide smart, affordable, and inclusive mobility solutions.

---

## 🚀 Features

* **Fullscreen Video Header**: Engaging Vimeo background with fallback image (`/public/ibtros.png`).
* **Natural Language Booking**: Users request rides via Telegram bot or web interface using plain language.
* **CO₂ Emission Reduction**: Promotes carpooling to lower emissions, contributing to cleaner air.
* **Inclusive Access**: Equal empowerment for men, women, and riders with disabilities.
* **Email Contact Form**: Top-left contact button opens a modal to send email via default mail client.
* **Responsive Layout**: Fully responsive React + Tailwind CSS design.
* **Animated Sections**: Subtle entrance animations using Framer Motion.

---

## 📁 Project Structure

```
├── public/
│   ├── ibtros.png         # Fallback header image
│   └── ...
├── src/
│   ├── app/
│   │   ├── layout.tsx     # RootLayout (Next.js)
│   │   ├── page.tsx       # Renders HomePage component
│   └── components/
│       └── HomePage.tsx   # Main landing page component
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
└── package.json
```

---

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Jerryblessed/ibtrosweb.git
   cd ibshuttle-web
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment**

   * Ensure `NEXT_PUBLIC_` variables are set if needed (e.g., mail settings).

4. **Run development server**

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📝 Usage

* **Contact**: Click the mail icon at top-left to open the contact modal and send an email.
* **Launch Bot**: Click **Launch Bot** to connect with the Telegram bot at `https://t.me/IBmeal_bot`.
* **Booking**: Follow the interactive walkthrough or message the bot directly in Telegram.

---

## 🌐 Deployment

1. Build the app:

   ```bash
   npm run build
   ```
2. Start production server:

   ```bash
   npm start
   ```

Deploy on Vercel, Netlify, or any static-ready host supporting Next.js.

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests in the GitHub repository.

---

## 📄 License

This project is licensed under the MIT License.
