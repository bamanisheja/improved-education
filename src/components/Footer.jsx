// const links = [
//   { name: "Home", href: "#home" },
//   { name: "About Us", href: "#about" },
//   { name: "Services", href: "#services" },
//   { name: "Focus Areas", href: "#focus" },
//   { name: "Why Us", href: "#why-us" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-gray-950 text-gray-300">
//       <div className="mx-auto max-w-7xl px-6 py-14">
//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-3">
//               <img
//                 src="/logo.png"
//                 alt="Improve Education"
//                 className="h-12 w-auto rounded-lg bg-white p-1"
//               />

//               <div>
//                 <p className="font-bold text-white">
//                   Improve Education
//                 </p>

//                 <p className="text-xs text-gray-500">
//                   Transforming Education
//                 </p>
//               </div>
//             </div>

//             <p className="mt-5 text-sm leading-7 text-gray-400">
//               Transforming education, empowering people, and building the
//               future through innovative and inclusive education solutions.
//             </p>
//           </div>

//           {/* Navigation */}
//           <div>
//             <h3 className="font-bold text-white">
//               Quick Links
//             </h3>

//             <ul className="mt-5 space-y-3">
//               {links.map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     className="text-sm hover:text-teal-400"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="font-bold text-white">
//               Our Services
//             </h3>

//             <ul className="mt-5 space-y-3 text-sm">
//               <li>Academic Support</li>
//               <li>Teacher Training</li>
//               <li>Youth Empowerment</li>
//               <li>Girls' Empowerment</li>
//               <li>Digital Learning</li>
//               <li>Education Research</li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="font-bold text-white">
//               Contact Us
//             </h3>

//             <div className="mt-5 space-y-4 text-sm">
//               <div>
//                 <p className="text-gray-500">Email</p>

//                 <a
//                   href="mailto:info@improveeducation.org"
//                   className="text-teal-400 hover:underline"
//                 >
//                   improveeducation3@gmail.com
//                 </a>
//               </div>

//               <div>
//                 <p className="text-gray-500">Phone</p>
//                 <p>+250785977077</p>
//               </div>

//               <div>
//                 <p className="text-gray-500">Location</p>
//                 <p>Rwanda</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
//           © {new Date().getFullYear()} Improve Education. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }
const links = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Focus Areas", href: "#focus" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-gray-300">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-green-700/10 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-700/10 blur-3xl"></div>

      {/* Green and Blue top line */}
      <div className="h-1 w-full bg-gradient-to-r from-green-600 via-blue-600 to-green-500"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-2">

            {/* Logo */}
            <a
              href="#home"
              className="group inline-flex items-center gap-4"
            >
              <div className="flex h-20 w-24 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-lg transition duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="Improve Education Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                  Improve Education
                </h2>

                <p className="mt-1 text-sm font-semibold text-green-400">
                  Learn • Grow • Succeed
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Better Education, Better Future
                </p>
              </div>
            </a>

            {/* Description */}
            <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
              Transforming education, empowering people, and building the
              future through innovative, inclusive, and quality education
              solutions.
            </p>

            {/* Credentials / Values */}
            <div className="mt-7">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Our Credentials
              </h3>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">

                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center transition hover:border-green-500/40 hover:bg-green-500/10">
                  <div className="text-xl">🎓</div>
                  <p className="mt-2 text-xs font-semibold text-gray-300">
                    Quality Education
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center transition hover:border-blue-500/40 hover:bg-blue-500/10">
                  <div className="text-xl">💡</div>
                  <p className="mt-2 text-xs font-semibold text-gray-300">
                    Innovation
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center transition hover:border-green-500/40 hover:bg-green-500/10">
                  <div className="text-xl">🤝</div>
                  <p className="mt-2 text-xs font-semibold text-gray-300">
                    Empowerment
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center transition hover:border-blue-500/40 hover:bg-blue-500/10">
                  <div className="text-xl">🚀</div>
                  <p className="mt-2 text-xs font-semibold text-gray-300">
                    Success
                  </p>
                </div>

              </div>
            </div>

            {/* Social Media */}
            <div className="mt-7">

              <p className="mb-3 text-sm font-semibold text-white">
                Follow Us
              </p>

              <div className="flex items-center gap-3">

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.55.45-1 1-1z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:improveeducation3@gmail.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* ================= NAVIGATION ================= */}
          <div>
            <h3 className="text-base font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-2 h-1 w-10 rounded-full bg-green-500"></div>

            <ul className="mt-6 space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-green-400"
                  >
                    <span className="mr-2 text-green-500 opacity-0 transition group-hover:opacity-100">
                      →
                    </span>

                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h3 className="text-base font-bold text-white">
              Our Services
            </h3>

            <div className="mt-2 h-1 w-10 rounded-full bg-blue-500"></div>

            <ul className="mt-6 space-y-3 text-sm">

              <li className="transition hover:text-green-400">
                Academic Support
              </li>

              <li className="transition hover:text-green-400">
                Teacher Training
              </li>

              <li className="transition hover:text-green-400">
                Youth Empowerment
              </li>

              <li className="transition hover:text-green-400">
                Girls' Empowerment
              </li>

              <li className="transition hover:text-green-400">
                Digital Learning
              </li>

              <li className="transition hover:text-green-400">
                Education Research
              </li>

            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="text-base font-bold text-white">
              Contact Us
            </h3>

            <div className="mt-2 h-1 w-10 rounded-full bg-green-500"></div>

            <div className="mt-6 space-y-5 text-sm">

              {/* Email */}
              <div className="flex gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                  ✉
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Email
                  </p>

                  <a
                    href="mailto:improveeducation3@gmail.com"
                    className="mt-1 block break-all text-gray-300 transition hover:text-green-400"
                  >
                    improveeducation3@gmail.com
                  </a>
                </div>

              </div>

              {/* Phone */}
              <div className="flex gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  ☎
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Phone
                  </p>

                  <a
                    href="tel:+250785977077"
                    className="mt-1 block text-gray-300 transition hover:text-blue-400"
                  >
                    +250 785 977 077
                  </a>
                </div>

              </div>

              {/* Location */}
              <div className="flex gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                  📍
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 text-gray-300">
                    Rwanda
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* ================= NEWSLETTER / CTA ================= */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-green-900/30 to-blue-900/30 p-6 sm:p-8">

          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                Help Us Build a Better Future
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Join us in transforming education and empowering communities.
              </p>
            </div>

            <a
              href="#contact"
              className="whitespace-nowrap rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-300 hover:bg-blue-600 hover:shadow-xl"
            >
              Get Involved →
            </a>

          </div>
        </div>

        {/* ================= BOTTOM FOOTER ================= */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-center text-sm text-gray-500 md:flex-row md:items-center md:justify-between md:text-left">

          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-300">
              Improve Education
            </span>
            . All rights reserved.
          </p>

          <div className="flex justify-center gap-5 md:justify-end">
            <a
              href="#"
              className="transition hover:text-green-400"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-green-400"
            >
              Terms & Conditions
            </a>
          </div>

        </div>

        {/* Back to top */}
        <div className="mt-6 flex justify-center">
          <a
            href="#home"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-gray-400 transition hover:border-green-500/50 hover:text-green-400"
          >
            ↑ Back to Top
          </a>
        </div>

      </div>
    </footer>
  );
}