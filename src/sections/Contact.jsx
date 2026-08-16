// const reasons = [
//   {
//     title: "Practical and Learner-Centred",
//     text: "Our programs are designed around the real needs of learners, educators, families, and communities.",
//   },
//   {
//     title: "Experienced Education Professionals",
//     text: "Our team brings experience in teaching, school leadership, teacher development, research, assessment, and program implementation.",
//   },
//   {
//     title: "Innovative Approaches",
//     text: "We combine education, technology, creativity, research, and mentorship to develop effective solutions.",
//   },
//   {
//     title: "Inclusive",
//     text: "We intentionally consider girls, vulnerable youth, learners facing barriers, and underserved communities.",
//   },
//   {
//     title: "Evidence-Based",
//     text: "We use assessment, data, research, and monitoring to inform programs and measure progress.",
//   },
//   {
//     title: "Partnership-Oriented",
//     text: "We work with schools, parents, government institutions, organizations, development partners, and communities.",
//   },
//   {
//     title: "Focused on Sustainable Change",
//     text: "We build knowledge, skills, systems, and partnerships needed for long-term improvement.",
//   },
// ];

// export default function WhyUs() {
//   return (
//     <section id="why-us" className="bg-gray-900 py-24 text-white">
//       <div className="mx-auto max-w-7xl px-6">
        
//         <div className="max-w-3xl">
//           <p className="font-bold uppercase tracking-widest text-teal-300">
//             Why Choose Us?
//           </p>

//           <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
//             Building meaningful and sustainable change.
//           </h2>

//           <p className="mt-5 leading-8 text-gray-300">
//             We combine practical experience, innovation, evidence, inclusion,
//             and partnerships to create education solutions that make a real
//             difference.
//           </p>
//         </div>

//         <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//           {reasons.map((reason) => (
//             <div
//               key={reason.title}
//               className="rounded-2xl border border-white/10 bg-white/5 p-6"
//             >
//               <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 font-bold">
//                 ✓
//               </div>

//               <h3 className="text-lg font-bold">
//                 {reason.title}
//               </h3>

//               <p className="mt-3 text-sm leading-7 text-gray-300">
//                 {reason.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
const reasons = [
  {
    number: "01",
    icon: "🎯",
    title: "Practical and Learner-Centred",
    text: "Our programs are designed around the real needs of learners, educators, families, and communities.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    number: "02",
    icon: "👨‍🏫",
    title: "Experienced Education Professionals",
    text: "Our team brings experience in teaching, school leadership, teacher development, research, assessment, and program implementation.",
    color: "from-teal-400 to-cyan-500",
  },
  {
    number: "03",
    icon: "💡",
    title: "Innovative Approaches",
    text: "We combine education, technology, creativity, research, and mentorship to develop effective solutions.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    number: "04",
    icon: "🤝",
    title: "Inclusive",
    text: "We intentionally consider girls, vulnerable youth, learners facing barriers, and underserved communities.",
    color: "from-green-400 to-emerald-500",
  },
  {
    number: "05",
    icon: "📊",
    title: "Evidence-Based",
    text: "We use assessment, data, research, and monitoring to inform programs and measure progress.",
    color: "from-emerald-400 to-cyan-500",
  },
  {
    number: "06",
    icon: "🌍",
    title: "Partnership-Oriented",
    text: "We work with schools, parents, government institutions, organizations, development partners, and communities.",
    color: "from-teal-400 to-emerald-500",
  },
  {
    number: "07",
    icon: "🌱",
    title: "Focused on Sustainable Change",
    text: "We build knowledge, skills, systems, and partnerships needed for long-term improvement.",
    color: "from-cyan-400 to-teal-500",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-slate-950
        via-teal-950
        to-slate-900
        py-24
        text-white
        sm:py-28
      "
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-emerald-500/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/3
          h-72
          w-72
          rounded-full
          bg-teal-500/10
          blur-3xl
        "
      />

      {/* Decorative circles */}

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-32
          h-3
          w-3
          animate-pulse
          rounded-full
          bg-emerald-400
          shadow-lg
          shadow-emerald-400/50
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-24
          h-4
          w-4
          animate-pulse
          rounded-full
          bg-cyan-300
          shadow-lg
          shadow-cyan-400/50
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-20
          right-[20%]
          h-2
          w-2
          rounded-full
          bg-emerald-300
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">

        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Small badge */}

          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-300/20
              bg-emerald-400/10
              px-5
              py-2
              backdrop-blur-md
            "
          >
            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-emerald-400
              "
            />

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-emerald-300
                sm:text-sm
              "
            >
              Why Choose Us?
            </p>
          </div>

          {/* Main heading */}

          <h2
            className="
              text-4xl
              font-extrabold
              leading-tight
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Building meaningful
            <br />

            <span
              className="
                bg-gradient-to-r
                from-emerald-300
                via-teal-300
                to-cyan-300
                bg-clip-text
                text-transparent
              "
            >
              and sustainable change.
            </span>
          </h2>

          {/* Decorative line */}

          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-1 w-16 rounded-full bg-emerald-400" />
            <span className="h-1 w-8 rounded-full bg-teal-400" />
            <span className="h-1 w-3 rounded-full bg-cyan-400" />
          </div>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-300
              sm:text-lg
            "
          >
            We combine practical experience, innovation, evidence,
            inclusion, and partnerships to create education solutions
            that make a real difference.
          </p>

        </div>

        {/* =================================================
            REASONS GRID
        ================================================== */}

        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.06]
                p-7
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-emerald-300/30
                hover:bg-white/[0.09]
                hover:shadow-2xl
                hover:shadow-emerald-900/20
              "
            >

              {/* Card glow */}

              <div
                className={`
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-32
                  w-32
                  rounded-full
                  bg-gradient-to-br
                  ${reason.color}
                  opacity-10
                  blur-3xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-30
                `}
              />

              {/* Number */}

              <div className="flex items-center justify-between">

                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    ${reason.color}
                    text-xl
                    shadow-lg
                    transition-transform
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-3
                  `}
                >
                  {reason.icon}
                </div>

                <span
                  className="
                    text-sm
                    font-extrabold
                    tracking-widest
                    text-white/30
                    transition-colors
                    duration-300
                    group-hover:text-emerald-300/70
                  "
                >
                  {reason.number}
                </span>

              </div>

              {/* Card title */}

              <h3
                className="
                  mt-6
                  text-xl
                  font-bold
                  leading-snug
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-emerald-300
                "
              >
                {reason.title}
              </h3>

              {/* Card text */}

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-slate-300
                  transition-colors
                  duration-300
                  group-hover:text-slate-200
                "
              >
                {reason.text}
              </p>

              {/* Bottom line */}

              <div className="mt-6 flex items-center gap-2">

                <span
                  className={`
                    h-1
                    w-12
                    rounded-full
                    bg-gradient-to-r
                    ${reason.color}
                    transition-all
                    duration-500
                    group-hover:w-20
                  `}
                />

                <span
                  className="
                    h-1
                    w-2
                    rounded-full
                    bg-white/30
                  "
                />

              </div>

              {/* Hover arrow */}

              <div
                className="
                  absolute
                  bottom-7
                  right-7
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-sm
                  text-white/50
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:translate-x-1
                  group-hover:opacity-100
                  group-hover:text-emerald-300
                "
              >
                →
              </div>

            </div>
          ))}
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-3xl
            border
            border-emerald-300/20
            bg-gradient-to-r
            from-emerald-500/10
            via-teal-500/10
            to-cyan-500/10
            p-8
            text-center
            shadow-2xl
            backdrop-blur-xl
            sm:p-10
          "
        >

          {/* CTA glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-32
              w-64
              -translate-x-1/2
              rounded-full
              bg-emerald-400/10
              blur-3xl
            "
          />

          <div className="relative">

            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-emerald-400
                to-teal-500
                text-2xl
                shadow-lg
                shadow-emerald-900/30
              "
            >
              🌱
            </div>

            <h3
              className="
                mt-5
                text-2xl
                font-extrabold
                text-white
                sm:text-3xl
              "
            >
              Together, We Can Transform Education
            </h3>

            <p
              className="
                mx-auto
                mt-3
                max-w-2xl
                text-sm
                leading-7
                text-slate-300
                sm:text-base
              "
            >
              Let's create opportunities, strengthen communities,
              empower learners, and build a better future through
              education.
            </p>

            <a
              href="#contact"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-emerald-400
                to-teal-400
                px-7
                py-3.5
                font-bold
                text-slate-950
                shadow-xl
                shadow-emerald-900/30
                transition-all
                duration-300
                hover:-translate-y-1
                hover:from-emerald-300
                hover:to-cyan-300
                hover:shadow-2xl
                hover:shadow-emerald-400/20
              "
            >
              Work With Us

              <span
                className="
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>

          </div>
        </div>

      </div>

      {/* =====================================================
          BOTTOM DECORATIVE GRADIENT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-slate-950
          to-transparent
        "
      />

    </section>
  );
}