// import { useState } from "react";

// const menuItems = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Services", href: "#services" },
//   { name: "Focus Areas", href: "#focus" },
//   { name: "Why Us", href: "#why-us" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-md">

//       {/* Main Header */}
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

//         {/* ================= LOGO ================= */}
//         <a
//           href="#home"
//           className="group flex items-center gap-3"
//         >

//           {/* Logo Image */}
//           <div className="flex h-20 w-24 items-center justify-center overflow-hidden rounded-lg">
//             <img
//               src="/logo.png"
//               alt="Improve Education Logo"
//               className="h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-110"
//             />
//           </div>

//           {/* Organization Name */}
//           <div className="hidden sm:block">
//             <h1 className="text-xl font-extrabold leading-tight text-blue-700 lg:text-2xl">
//               Improve Education
//             </h1>

//             <p className="mt-1 text-xs font-medium text-green-700 lg:text-sm">
//               Learn • Grow • Succeed
//             </p>

//             <p className="text-xs text-gray-500">
//               Better Education, Better Future
//             </p>
//           </div>

//         </a>

//         {/* ================= DESKTOP MENU ================= */}
//         <nav className="hidden items-center gap-6 lg:flex">

//           {menuItems.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="relative text-sm font-semibold text-gray-700 transition duration-300 hover:text-green-700"
//             >
//               {item.name}

//               {/* Hover underline */}
//               <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-green-600 transition-all duration-300 hover:w-full"></span>
//             </a>
//           ))}

//           {/* Get Involved Button */}
//           <a
//             href="#contact"
//             className="rounded-full bg-green-700 px-5 py-2.5 text-sm font-bold text-white shadow-md transition duration-300 hover:bg-blue-700 hover:shadow-lg"
//           >
//             Get Involved
//           </a>

//         </nav>

//         {/* ================= MOBILE BUTTON ================= */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="rounded-lg border border-gray-200 p-2 text-gray-700 transition hover:bg-gray-50 lg:hidden"
//           aria-label="Toggle menu"
//           aria-expanded={isOpen}
//         >
//           <span className="text-xl">
//             {isOpen ? "✕" : "☰"}
//           </span>
//         </button>

//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       {isOpen && (
//         <nav className="border-t border-gray-100 bg-white px-6 py-5 shadow-lg lg:hidden">

//           <div className="flex flex-col gap-4">

//             {menuItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className="rounded-lg px-3 py-2 font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-700"
//               >
//                 {item.name}
//               </a>
//             ))}

//             <a
//               href="#contact"
//               onClick={() => setIsOpen(false)}
//               className="mt-2 rounded-full bg-green-700 px-5 py-3 text-center font-bold text-white transition hover:bg-blue-700"
//             >
//               Get Involved
//             </a>

//           </div>

//         </nav>
//       )}

//     </header>
//   );
// }
import { useState } from "react";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Focus Areas", href: "#focus" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md">

      {/* Top brand accent */}
      <div className="h-1 w-full bg-gradient-to-r from-green-700 via-green-500 to-blue-700"></div>

      {/* Main Header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 sm:py-3 lg:px-8">

        {/* ================= LOGO ================= */}
        <a
          href="#home"
          className="group flex items-center gap-3"
        >

          {/* Logo Image */}
          <div
            className="
              relative flex h-16 w-20 items-center justify-center
              overflow-hidden rounded-xl bg-white
              p-1.5 shadow-sm ring-1 ring-gray-100
              transition-all duration-500
              group-hover:scale-105
              group-hover:shadow-lg
              group-hover:ring-green-200
              sm:h-20 sm:w-24
              lg:h-20 lg:w-24
            "
          >

            {/* Green decorative corner */}
            <span className="absolute left-0 top-0 h-5 w-5 rounded-tl-xl border-l-2 border-t-2 border-green-600 opacity-70 transition-all duration-300 group-hover:h-7 group-hover:w-7"></span>

            {/* Logo */}
            <img
              src="/logo.png"
              alt="Improve Education Logo"
              className="
                h-full w-full object-contain
                transition-all duration-500 ease-out
                group-hover:scale-110
              "
            />

            {/* Blue decorative corner */}
            <span className="absolute bottom-0 right-0 h-5 w-5 rounded-br-xl border-b-2 border-r-2 border-blue-600 opacity-70 transition-all duration-300 group-hover:h-7 group-hover:w-7"></span>

          </div>

          {/* Organization Name */}
          <div className="hidden sm:block">

            <h1
              className="
                text-xl font-extrabold leading-tight
                tracking-tight text-blue-700
                transition-colors duration-300
                group-hover:text-green-700
                lg:text-2xl
              "
            >
              Improve Education
            </h1>

            <p
              className="
                mt-1 text-xs font-bold tracking-wide
                text-green-700
                lg:text-sm
              "
            >
              Learn • Grow • Succeed
            </p>

            <p className="text-xs text-gray-500">
              Better Education, Better Future
            </p>

            {/* Small brand line */}
            <div className="mt-1.5 flex items-center gap-1">
              <span className="h-1 w-5 rounded-full bg-green-600"></span>
              <span className="h-1 w-3 rounded-full bg-blue-600"></span>
            </div>

          </div>

        </a>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden items-center gap-2 lg:flex">

          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                group relative rounded-lg
                px-3 py-2
                text-sm font-semibold text-gray-700
                transition-all duration-300
                hover:bg-green-50
                hover:text-green-700
              "
            >

              {/* Menu text */}
              <span className="relative z-10">
                {item.name}
              </span>

              {/* Animated underline */}
              <span
                className="
                  absolute bottom-1 left-1/2
                  h-0.5 w-0
                  -translate-x-1/2
                  rounded-full
                  bg-gradient-to-r from-green-600 to-blue-600
                  transition-all duration-300
                  group-hover:w-[65%]
                "
              ></span>

              {/* Small hover dot */}
              <span
                className="
                  absolute bottom-0.5 left-1/2
                  h-1 w-1
                  -translate-x-1/2
                  rounded-full
                  bg-green-600
                  opacity-0
                  transition-all duration-300
                  group-hover:opacity-100
                "
              ></span>

            </a>
          ))}

          {/* ================= GET INVOLVED BUTTON ================= */}
          <a
            href="#contact"
            className="
              group ml-2 inline-flex items-center gap-2
              rounded-full
              bg-gradient-to-r from-green-700 to-green-600
              px-5 py-2.5
              text-sm font-bold text-white
              shadow-md shadow-green-700/20
              transition-all duration-300
              hover:-translate-y-0.5
              hover:from-blue-700
              hover:to-blue-600
              hover:shadow-lg hover:shadow-blue-700/25
              focus:outline-none focus:ring-2
              focus:ring-green-500 focus:ring-offset-2
            "
          >
            <span>Get Involved</span>

            {/* Animated arrow */}
            <span
              className="
                text-base
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>

        </nav>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            relative flex h-11 w-11
            items-center justify-center
            rounded-xl
            border border-gray-200
            bg-white
            text-gray-700
            shadow-sm
            transition-all duration-300
            hover:border-green-300
            hover:bg-green-50
            hover:text-green-700
            hover:shadow-md
            lg:hidden
          "
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className="
              text-xl font-semibold
              transition-transform duration-300
            "
          >
            {isOpen ? "✕" : "☰"}
          </span>
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <nav
          className="
            border-t border-gray-100
            bg-white
            px-4 py-5
            shadow-lg
            lg:hidden
          "
        >

          {/* Mobile brand indicator */}
          <div className="mb-4 flex items-center gap-2 px-3">

            <span className="h-2 w-2 rounded-full bg-green-600"></span>

            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Improve Education
            </span>

            <span className="h-px flex-1 bg-gray-100"></span>

          </div>

          <div className="flex flex-col gap-1">

            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  group relative flex items-center
                  justify-between
                  rounded-xl
                  px-4 py-3
                  font-semibold text-gray-700
                  transition-all duration-300
                  hover:bg-gradient-to-r
                  hover:from-green-50
                  hover:to-blue-50
                  hover:text-green-700
                "
              >

                <span>
                  {item.name}
                </span>

                {/* Mobile arrow */}
                <span
                  className="
                    text-gray-400
                    transition-all duration-300
                    group-hover:translate-x-1
                    group-hover:text-green-600
                  "
                >
                  →
                </span>

                {/* Mobile left indicator */}
                <span
                  className="
                    absolute left-0
                    h-0 w-1
                    rounded-full
                    bg-gradient-to-b
                    from-green-600 to-blue-600
                    transition-all duration-300
                    group-hover:h-7
                  "
                ></span>

              </a>
            ))}

            {/* Mobile Get Involved */}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="
                group mt-3
                flex items-center
                justify-center gap-2
                rounded-full
                bg-gradient-to-r
                from-green-700 to-green-600
                px-5 py-3.5
                text-center
                font-bold text-white
                shadow-md
                transition-all duration-300
                hover:from-blue-700
                hover:to-blue-600
                hover:shadow-lg
              "
            >

              <span>Get Involved</span>

              <span
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </a>

          </div>

        </nav>
      )}

    </header>
  );
}