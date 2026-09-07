
import { useState } from "react";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },

  {
    name: "Services",
    href: "#services",
    dropdown: [
      { name: "Talent Detection", href: "#services" },
      { name: "Talent Develpment", href: "#services" },
      { name: "Education Through Arts ", href: "#services" },
      { name: "Community Mobilization", href: "#services" },
      
    ],
  },

  {
    name: "Focus Areas",
    href: "#focus",
    dropdown: [
      { name: "Young people reached", href: "#focus" },
      { name: "Performances and showcases", href: "#focus" },
      { name: " Partnerships established", href: "#focus" },
     { name: "    Talents identified", href: "#focus" },
      { name: "Schools and communities reached", href: "#focus" },
      { name: "Young people accessing new opportunities", href: "#focus" },
      
        
       { name: " Creative productions created", href: "#focus" },
      { name: "Improvement in confidence and creative skills", href: "#focus" },
    ],
  },

  {
    name: "Why Us",
    href: "#why-us",
    dropdown: [
      { name: "Learner-Centred Approach", href: "#why-us" },
      { name: "Inclusive Education", href: "#why-us" },
      { name: "Experienced Team", href: "#why-us" },
      { name: "Practical Solutions", href: "#why-us" },
      { name: "Innovation & Technology", href: "#why-us" },
      { name: "Community Impact", href: "#why-us" },
      { name: "Evidence-Based Approach", href: "#why-us" },
    ],
  },
    { name: "Staff", href: "#staff" },
    { name: "Partners", href: "#Partners" },
    
  


  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md">

      {/* Main Header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}
        <a
          href="#home"
          className="group flex items-center gap-3"
        >

          {/* Logo Image */}
          <div className="flex h-20 w-24 items-center justify-center overflow-hidden rounded-lg">
            <img
              src="/logo.png"
              alt="Improve Education Logo"
              className="h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-110"
            />
          </div>

          {/* Organization Name */}
          <div className="hidden sm:block">
            <h1 className="text-xl font-extrabold leading-tight text-blue-700 lg:text-2xl">
              Improve Education
            </h1>

            <p className="mt-1 text-xs font-medium text-green-700 lg:text-sm">
              Learn • Grow • Succeed
            </p>

            <p className="text-xs text-gray-500">
              Better Education, Better Future
            </p>
          </div>

        </a>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden items-center gap-5 lg:flex">

          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() =>
                item.dropdown &&
                setActiveDropdown(item.name)
              }
              onMouseLeave={() =>
                item.dropdown &&
                setActiveDropdown(null)
              }
            >

              {/* Main navigation item */}
              <a
                href={item.href}
                className="group flex items-center gap-1.5 py-3 text-sm font-semibold text-gray-700 transition duration-300 hover:text-green-700"
              >

                <span className="relative">
                  {item.name}

                  {/* Animated underline */}
                  <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </span>

                {/* Dropdown arrow */}
                {item.dropdown && (
                  <span
                    className={`text-xs transition-transform duration-300 ${
                      activeDropdown === item.name
                        ? "rotate-180 text-green-700"
                        : ""
                    }`}
                  >
                    ▼
                  </span>
                )}

              </a>

              {/* ================= DROPDOWN ================= */}
              {item.dropdown && activeDropdown === item.name && (
                <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">

                  <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl">

                    {/* Dropdown heading */}
                    <div className="mb-1 border-b border-gray-100 px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
                        {item.name}
                      </p>
                    </div>

                    {/* Dropdown items */}
                    <div className="max-h-96 overflow-y-auto">

                      {item.dropdown.map((dropdownItem, index) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-teal-50 hover:pl-5 hover:text-teal-700"
                        >

                          {/* Number */}
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-bold text-teal-700 transition group-hover:bg-teal-600 group-hover:text-white">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          {/* Text */}
                          <span>
                            {dropdownItem.name}
                          </span>

                          {/* Arrow */}
                          <span className="ml-auto opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                            →
                          </span>

                        </a>
                      ))}

                    </div>

                  </div>
                </div>
              )}

            </div>
          ))}

          {/* ================= GET INVOLVED ================= */}
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-green-700 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
          >

            <span className="relative z-10">
              Get Involved
            </span>

            {/* Button animation */}
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full"></span>

          </a>

        </nav>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-gray-200 bg-white p-2.5 text-gray-700 shadow-sm transition-all duration-300 hover:border-green-300 hover:bg-green-50 hover:text-green-700 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="text-xl">
            {isOpen ? "✕" : "☰"}
          </span>
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 py-5 shadow-xl lg:hidden">

          <div className="mx-auto max-w-7xl">

            <div className="flex flex-col gap-2">

              {menuItems.map((item) => (
                <div key={item.name}>

                  {/* Mobile main item */}
                  <div className="flex items-center">

                    <a
                      href={item.href}
                      onClick={() => {
                        if (!item.dropdown) {
                          setIsOpen(false);
                        }
                      }}
                      className="flex-1 rounded-xl px-4 py-3 font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                    >
                      {item.name}
                    </a>

                    {/* Mobile dropdown button */}
                    {item.dropdown && (
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.name
                              ? null
                              : item.name
                          )
                        }
                        className="mr-1 rounded-lg px-3 py-3 text-gray-500 transition hover:bg-green-50 hover:text-green-700"
                        aria-label={`Open ${item.name} submenu`}
                      >
                        <span
                          className={`inline-block text-xs transition-transform duration-300 ${
                            activeDropdown === item.name
                              ? "rotate-180"
                              : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>
                    )}

                  </div>

                  {/* ================= MOBILE DROPDOWN ================= */}
                  {item.dropdown &&
                    activeDropdown === item.name && (
                      <div className="ml-4 mt-1 rounded-xl border-l-2 border-green-500 bg-gray-50 p-2">

                        {item.dropdown.map(
                          (dropdownItem, index) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => {
                                setIsOpen(false);
                                setActiveDropdown(null);
                              }}
                              className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 transition-all duration-200 hover:bg-white hover:text-green-700 hover:shadow-sm"
                            >

                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-[10px] font-bold text-green-700 group-hover:bg-green-600 group-hover:text-white">
                                {String(index + 1).padStart(2, "0")}
                              </span>

                              <span>
                                {dropdownItem.name}
                              </span>

                              <span className="ml-auto opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                                →
                              </span>

                            </a>
                          )
                        )}

                      </div>
                    )}

                </div>
              ))}

              {/* ================= MOBILE GET INVOLVED ================= */}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 rounded-full bg-green-700 px-5 py-3 text-center font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
              >
                Get Involved
              </a>

            </div>

          </div>

        </nav>
      )}

    </header>
  );
}