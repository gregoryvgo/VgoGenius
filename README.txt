# 🌐 VgoGenius — Δημιουργία με Αξιοπιστία και Όραμα

## 📘 Περιγραφή
Η **VgoGenius** είναι μια σύγχρονη πλατφόρμα ανάπτυξης ιστοσελίδων με **Next.js 14** και **Tailwind CSS**.  
Στόχος είναι η δημιουργία **γρήγορων, καλαίσθητων και SEO-optimized** websites που φιλοξενούνται στη **Vercel**.

---

## ⚙️ Τεχνολογίες
- 🧩 **Next.js 14 (App Router)**
- ⚛️ **React 18**
- 🎨 **Tailwind CSS**
- 🧭 **Lucide React Icons**
- 🗺️ **next-sitemap** για αυτόματο `sitemap.xml` και `robots.txt`
- 🖼️ **Optimized WebP Images** για ταχύτητα φόρτωσης
- 📬 **Formspree / Cloudflare Workers** για φόρμες επικοινωνίας

---

## 📁 Δομή Project
VgoGenius/
├── app/
│ ├── vgogenius/
│ │ ├── page.js → Αρχική σελίδα
│ │ ├── layout.js → Κοινό layout με Header & Footer
│ │ ├── components/ → Επαναχρησιμοποιήσιμα components
│ │ └── ...
│ └── globals.css → Κεντρικό CSS (Tailwind)
├── public/
│ ├── images/ → Optimized εικόνες .webp
│ ├── videos/ → Βίντεο φόντου (αν υπάρχουν)
│ ├── sitemap.xml
│ └── robots.txt
├── lib/seo.js → SEO metadata generator
├── scripts/optimize-images.js → Script για βελτιστοποίηση εικόνων
├── package.json
├── tailwind.config.js
└── README.md

yaml
Αντιγραφή κώδικα

---

## 🚀 Εκτέλεση Τοπικά
```bash
npm install
npm run dev
Έπειτα άνοιξε τον browser στη διεύθυνση:
👉 http://localhost:3000

🌍 Ανάπτυξη στη Vercel
Κάνε push το project στο GitHub.

Σύνδεσε το repository στο Vercel Dashboard.

Επίλεξε framework Next.js.

Πάτα Deploy — θα δημιουργηθεί αυτόματα το URL:

arduino
Αντιγραφή κώδικα
https://vgogenius.vercel.app
Μόλις αγοράσεις το domain (vgogenius.gr), πρόσθεσέ το από:
Settings → Domains → Add Domain

🧠 SEO Ρυθμίσεις
Κάθε σελίδα χρησιμοποιεί τη συνάρτηση:

js
Αντιγραφή κώδικα
import { generatePageMeta } from "@/lib/seo";
Το αρχείο lib/seo.js διαχειρίζεται:

Meta Tags (title, description, keywords)

OpenGraph / Twitter Cards

Canonical URLs

Robots & Sitemap

📨 Επικοινωνία
📮 Για δοκιμαστικές φόρμες → Formspree.io

☁️ Για μεγαλύτερα projects → Cloudflare Worker με custom endpoint

👨‍💻 Δημιουργός
Γρηγόρης Βγόντζας
Ιδρυτής & Web Developer — VgoGenius

yaml
Αντιγραφή κώδικα

---

📌 Μπορείς να το επικολλήσεις **όπως είναι** μέσα στο αρχείο `README.md`.  
Το GitHub θα το εμφανίζει με εικονίδια, μορφοποίηση και πλήρη ελληνική περιγραφή.
