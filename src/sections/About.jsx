// export  default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-cyan-700"
//     >
//       <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
        
//         <div className="text-white">
//           <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-teal-200">
//             Improve Education
//           </p>

//           <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
//             Transforming Education.
//             <br />
//             Empowering People.
//             <br />
//             Building the Future.
//           </h1>

//           <p className="mt-6 max-w-2xl text-lg leading-8 text-teal-50">
//             Improve Education is an education-focused organization committed
//             to improving learning outcomes and creating opportunities for
//             learners, educators, young people, families, and communities.
//           </p>


//           <div className="mt-8 flex flex-wrap gap-4">
//             <a
//               href="#services"
//               className="rounded-full bg-white px-6 py-3 font-semibold text-teal-800 transition hover:bg-teal-50"
//             >
//               Explore Our Services
//             </a>

//             <a
//               href="#contact"
//               className="rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
//             >
//               Work With Us
//             </a>
//           </div>
//         </div>

//         {/* Simple visual */}
//         <div className="hidden lg:flex justify-center">
//           <div className="relative h-80 w-80">
//             <div className="absolute inset-0 rounded-full bg-white/10" />
//             <div className="absolute inset-8 rounded-full bg-white/10" />
//             <div className="absolute inset-16 flex items-center justify-center rounded-full bg-white text-center shadow-2xl">
//               <div>
//                 <div className="text-5xl">📚</div>
//                 <p className="mt-3  font-bold text-teal-800">
//                   Learn
//                   <br />
//                   Grow
//                   <br />
//                   Lead
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-teal-900"
    >
      {/* =========================================================
          BACKGROUND IMAGE
          ========================================================= */}

      <div
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat transition-transform duration-[3000ms] hover:scale-105"
        style={{
          backgroundImage: "url('/dance1.png')",
        }}
      />

      {/* =========================================================
          DARK OVERLAY
          Makes the text easy to read
          ========================================================= */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-black/80 via-teal-900/70 to-blue-900/60" />

      {/* Additional image overlay */}

      <div className="absolute inset-0 -z-10 bg-black/20" />

      {/* =========================================================
          DECORATIVE GRADIENT
          ========================================================= */}

      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      {/* =========================================================
          LOGO WATERMARK
          ========================================================= */}

      <div
        className="pointer-events-none absolute right-[-80px] top-1/2 -z-10 hidden h-[500px] w-[500px] -translate-y-1/2 bg-contain bg-center bg-no-repeat opacity-[0.08] lg:block"
        style={{
          backgroundImage: "url('/logo.png')",
        }}
      />

      {/* =========================================================
          DECORATIVE CIRCLES
          ========================================================= */}

      <div className="pointer-events-none absolute left-[8%] top-24 h-3 w-3 animate-pulse rounded-full bg-green-300/70" />

      <div className="pointer-events-none absolute right-[18%] top-32 h-4 w-4 animate-pulse rounded-full bg-white/50" />

      <div className="pointer-events-none absolute bottom-24 left-[20%] h-2 w-2 rounded-full bg-blue-300/70" />

      {/* =========================================================
          MAIN CONTAINER
          ========================================================= */}

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-8 lg:py-32">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* =====================================================
              LEFT CONTENT
              ===================================================== */}

          <div className="text-white">

            {/* Small heading */}

            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                py-2
                shadow-lg
                backdrop-blur-md
              "
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-100">
                Improve Education
              </p>
            </div>

            {/* =================================================
                MAIN TITLE
                ================================================= */}

            <h1
              className="
                max-w-4xl
                text-4xl
                font-extrabold
                leading-[1.1]
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              Transforming Education.
              <br />

              <span className="text-green-300">
                Empowering People.
              </span>

              <br />

              <span className="text-white">
                Building the Future.
              </span>
            </h1>

            {/* =================================================
                DECORATIVE LINE
                ================================================= */}

            <div className="mt-6 flex items-center gap-2">

              <span className="h-1 w-16 rounded-full bg-green-400" />

              <span className="h-1 w-8 rounded-full bg-blue-400" />

              <span className="h-1 w-3 rounded-full bg-white/60" />

            </div>

            {/* =================================================
                DESCRIPTION
                ================================================= */}

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-teal-50
                sm:text-lg
                sm:leading-8
                lg:text-xl
              "
            >
              Improve Education is an education-focused organization
              committed to improving learning outcomes and creating
              opportunities for learners, educators, young people,
              families, and communities.
            </p>

            {/* =================================================
                BUTTONS
                ================================================= */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">

              {/* Explore Services */}

              <a
                href="#services"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-white
                  px-6
                  py-3.5
                  font-semibold
                  text-teal-800
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-teal-50
                  hover:shadow-2xl
                  sm:px-7
                "
              >
                Explore Our Services

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>

              {/* Work With Us */}

              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/50
                  bg-white/5
                  px-6
                  py-3.5
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white
                  hover:bg-white/15
                  hover:shadow-xl
                  sm:px-7
                "
              >
                Work With Us

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>

            </div>

            {/* =================================================
                QUICK INFORMATION
                ================================================= */}

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-5">

              {/* Learn */}

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/10
                  p-4
                  text-center
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/15
                "
              >
                <div className="text-2xl sm:text-3xl">
                  📚
                </div>

                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
                  Learn
                </p>
              </div>

              {/* Grow */}

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/10
                  p-4
                  text-center
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/15
                "
              >
                <div className="text-2xl sm:text-3xl">
                  🌱
                </div>

                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
                  Grow
                </p>
              </div>

              {/* Lead */}

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/10
                  p-4
                  text-center
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/15
                "
              >
                <div className="text-2xl sm:text-3xl">
                  ⭐
                </div>

                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
                  Lead
                </p>
              </div>

            </div>

          </div>

          {/* =====================================================
              RIGHT VISUAL
              ===================================================== */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative h-[320px] w-[320px] sm:h-[390px] sm:w-[390px] lg:h-[470px] lg:w-[470px]">

              {/* Outer rotating ring */}

              <div
                className="
                  absolute
                  inset-0
                  animate-[spin_25s_linear_infinite]
                  rounded-full
                  border
                  border-white/20
                "
              />

              {/* Second ring */}

              <div
                className="
                  absolute
                  inset-5
                  rounded-full
                  border
                  border-green-300/20
                "
              />

              {/* Third ring */}

              <div
                className="
                  absolute
                  inset-12
                  rounded-full
                  border
                  border-blue-300/20
                "
              />

              {/* =================================================
                  IMAGE CIRCLE
                  ================================================= */}

              <div
                className="
                  absolute
                  inset-20
                  overflow-hidden
                  rounded-full
                  border-4
                  border-white/30
                  bg-white/10
                  shadow-2xl
                  backdrop-blur-sm
                  sm:inset-24
                  lg:inset-28
                "
              >

                <img
                  src="/dance1.png"
                  alt="Improve Education learners"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    hover:scale-110
                  "
                />

                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent" />

              </div>

              {/* =================================================
                  FLOATING LOGO
                  ================================================= */}

              <div
                className="
                  absolute
                  left-2
                  top-16
                  flex
                  h-20
                  w-20
                  animate-bounce
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/30
                  bg-white
                  p-2
                  shadow-2xl
                  sm:left-4
                  sm:h-24
                  sm:w-24
                  lg:left-0
                  lg:top-20
                "
                style={{
                  animationDuration: "4s",
                }}
              >

                <img
                  src="/logo.png"
                  alt="Improve Education Logo"
                  className="h-full w-full object-contain"
                />

              </div>

              {/* =================================================
                  FLOATING LEARN CARD
                  ================================================= */}

              <div
                className="
                  absolute
                  bottom-10
                  right-0
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/95
                  px-5
                  py-3
                  shadow-2xl
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  sm:bottom-16
                  sm:right-2
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-green-100
                      text-xl
                    "
                  >
                    📖
                  </div>

                  <div>

                    <p className="text-xs font-medium text-gray-500">
                      Our Mission
                    </p>

                    <p className="font-bold text-teal-800">
                      Learn • Grow • Lead
                    </p>

                  </div>

                </div>

              </div>

              {/* =================================================
                  FLOATING STAR
                  ================================================= */}

              <div
                className="
                  absolute
                  right-6
                  top-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  text-xl
                  shadow-lg
                  backdrop-blur-md
                  sm:right-10
                  sm:top-10
                "
              >
                ✨
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =========================================================
          BOTTOM WAVE / FADE
          ========================================================= */}

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />

      {/* =========================================================
          SCROLL INDICATOR
          ========================================================= */}

      <a
        href="#about"
        className="
          absolute
          bottom-5
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-1
          text-white/70
          transition
          hover:text-white
          sm:flex
        "
      >

        <span className="text-xs font-medium">
          Scroll to explore
        </span>

        <span className="animate-bounce text-lg">
          ↓
        </span>

      </a>

    </section>
  );
}