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
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              {/* <img
                src="/logo.png"
                alt="Improve Education"
                className="h-12 w-auto rounded-lg bg-white p-1"
              /> */}

              <div>
                <p className="font-bold text-white">
                   Education
                </p>

                <p className="text-xs text-gray-500">
                  Transforming Education
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Transforming education, empowering people, and building the
              future through innovative and inclusive education solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-teal-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white">
              Our Services
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>Academic Support</li>
              <li>Teacher Training</li>
              <li>Youth Empowerment</li>
              <li>Girls' Empowerment</li>
              <li>Digital Learning</li>
              <li>Education Research</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4 text-sm">
              <div>
                <p className="text-gray-500">Email</p>

                <a
                  href="mailto:info@improveeducation.org"
                  className="text-teal-400 hover:underline"
                >
                  improveeducation3@gmail.com
                </a>
              </div>

              <div>
                <p className="text-gray-500">Phone</p>
                <p>+250785977077</p>
              </div>

              <div>
                <p className="text-gray-500">Location</p>
                <p>Rwanda</p>
              </div>
            </div>
          </div>
        </div>
        {/* Social Media */}
<div className="mt-7">

  <p className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
    Connect With Us
  </p>

  <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">

    {/* YouTube */}
    <a
      href="https://youtube.com/@improveeducation_5?si=Ka2cbJ9Gd_yxDHMn"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-gray-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-red-600 hover:text-white hover:shadow-lg"
    >
      <span className="font-bold">▶</span>
      <span>YouTube</span>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/improve.education?igsh=MXF0NWFmZjcwY3E5dg=="
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-gray-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:text-white hover:shadow-lg"
    >
      <span className="font-bold">◎</span>
      <span>Instagram</span>
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/share/1BhDZ9pCVc/"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-gray-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-lg"
    >
      <span className="text-lg font-bold">f</span>
      <span>Facebook</span>
    </a>

    {/* TikTok */}
    <a
      href="https://www.tiktok.com/@improveeducation?_r=1&_t=ZS-98nUbKDoIWC"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-gray-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white hover:shadow-lg"
    >
      <span className="font-bold">♪</span>
      <span>TikTok</span>
    </a>

  </div>
</div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Improve Education. All rights reserved.
        </div>
      </div>
    </footer>
  );
}