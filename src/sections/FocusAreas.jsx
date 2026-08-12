// const services = [
//   {
//     number: "01",
//     title: "Academic Support and Tutoring",
//     text: "Learner-centred academic support designed to strengthen knowledge, skills, confidence, and academic performance.",
//     items: [
//       "Individual and group tutoring",
//       "English and language learning",
//       "Literacy and numeracy support",
//       "Homework support",
//       "Examination preparation",
//       "Remedial learning",
//     ],
//   },
//   {
//     number: "02",
//     title: "Teacher Training and Professional Development",
//     text: "Training that strengthens classroom practice, instructional leadership, learner engagement, and technology use.",
//     items: [
//       "Literacy and language instruction",
//       "Phonics and phonemic awareness",
//       "Classroom management",
//       "Learner-centred teaching",
//       "Assessment",
//       "Coaching and mentoring",
//     ],
//   },
//   {
//     number: "03",
//     title: "Youth Empowerment and Leadership",
//     text: "We equip young people with knowledge, skills, confidence, and leadership abilities.",
//     items: [
//       "Leadership development",
//       "Communication",
//       "Life skills",
//       "Entrepreneurship",
//       "Digital skills",
//       "Career guidance",
//     ],
//   },
//   {
//     number: "04",
//     title: "Girls' Empowerment and Inclusion",
//     text: "We create opportunities for girls and young women to develop confidence, skills, talents, leadership abilities, and aspirations.",
//     items: [
//       "Leadership",
//       "Skills development",
//       "Mentorship",
//       "Safe learning environments",
//       "Inclusion",
//     ],
//   },
//   {
//     number: "05",
//     title: "Talent Identification and Development",
//     text: "We help children and young people identify, develop, and showcase their unique talents.",
//     items: [
//       "Music",
//       "Dance",
//       "Drama and theatre",
//       "Film and media",
//       "Creative arts",
//       "Public speaking",
//       "Sports",
//     ],
//   },
//   {
//     number: "06",
//     title: "Guidance, Counselling and Mentorship",
//     text: "We support learners and young people to make informed decisions, overcome challenges, build confidence, and develop positive attitudes.",
//   },
//   {
//     number: "07",
//     title: "Education Technology and Digital Learning",
//     text: "We promote effective technology use to improve teaching, learning, assessment, communication, and access to educational resources.",
//   },
//   {
//     number: "08",
//     title: "Education Research and Consultancy",
//     text: "Research and consultancy services supporting evidence-based decision-making and better education programs.",
//     items: [
//       "Education research",
//       "Baseline and endline assessments",
//       "Data collection",
//       "Monitoring and evaluation",
//       "Program design",
//       "School improvement consultancy",
//     ],
//   },
//   {
//     number: "09",
//     title: "Parent and Community Engagement",
//     text: "We support parents and communities to become active partners in children's education.",
//     items: [
//       "Positive parenting",
//       "Learning at home",
//       "Child protection",
//       "Positive discipline",
//       "Talent development",
//       "School-family collaboration",
//     ],
//   },
//   {
//     number: "10",
//     title: "Creative Arts and Language Training",
//     text: "Practical training in languages and creative arts that develops communication skills, creativity, confidence, and practical abilities.",
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="bg-gray-50 py-24">
//       <div className="mx-auto max-w-7xl px-6">
        
//         <div className="mx-auto max-w-3xl text-center">
//           <p className="font-bold uppercase tracking-widest text-teal-700">
//             What We Do
//           </p>

//           <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
//             Our Services
//           </h2>

//           <p className="mt-5 leading-7 text-gray-600">
//             Practical education solutions designed for learners, educators,
//             families, schools, and communities.
//           </p>
//         </div>

//         <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {services.map((service) => (
//             <article
//               key={service.number}
//               className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
//             >
//               <div className="flex items-center justify-between">
//                 <span className="text-3xl font-bold text-teal-100">
//                   {service.number}
//                 </span>

//                 <div className="h-10 w-10 rounded-full bg-teal-50" />
//               </div>

//               <h3 className="mt-5 text-xl font-bold text-gray-900">
//                 {service.title}
//               </h3>

//               <p className="mt-3 text-sm leading-7 text-gray-600">
//                 {service.text}
//               </p>

//               {service.items && (
//                 <ul className="mt-5 space-y-2">
//                   {service.items.map((item) => (
//                     <li
//                       key={item}
//                       className="flex gap-2 text-sm text-gray-600"
//                     >
//                       <span className="text-teal-600">✓</span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
const services = [
  {
    number: "01",
    title: "Academic Support and Tutoring",
    text: "Learner-centred academic support designed to strengthen knowledge, skills, confidence, and academic performance.",
    image: "/dance.png",
    items: [
      "Individual and group tutoring",
      "English and language learning",
      "Literacy and numeracy support",
      "Homework support",
      "Examination preparation",
      "Remedial learning",
    ],
  },
  {
    number: "02",
    title: "Teacher Training and Professional Development",
    text: "Training that strengthens classroom practice, instructional leadership, learner engagement, and technology use.",
    image: "/dance1.png",
    items: [
      "Literacy and language instruction",
      "Phonics and phonemic awareness",
      "Classroom management",
      "Learner-centred teaching",
      "Assessment",
      "Coaching and mentoring",
    ],
  },
  {
    number: "03",
    title: "Youth Empowerment and Leadership",
    text: "We equip young people with knowledge, skills, confidence, and leadership abilities.",
    image: "/dance.png",
    items: [
      "Leadership development",
      "Communication",
      "Life skills",
      "Entrepreneurship",
      "Digital skills",
      "Career guidance",
    ],
  },
  {
    number: "04",
    title: "Girls' Empowerment and Inclusion",
    text: "We create opportunities for girls and young women to develop confidence, skills, talents, leadership abilities, and aspirations.",
    image: "/dance1.png",
    items: [
      "Leadership",
      "Skills development",
      "Mentorship",
      "Safe learning environments",
      "Inclusion",
    ],
  },
  {
    number: "05",
    title: "Talent Identification and Development",
    text: "We help children and young people identify, develop, and showcase their unique talents.",
    image: "/dance.png",
    items: [
      "Music",
      "Dance",
      "Drama and theatre",
      "Film and media",
      "Creative arts",
      "Public speaking",
      "Sports",
    ],
  },
  {
    number: "06",
    title: "Guidance, Counselling and Mentorship",
    text: "We support learners and young people to make informed decisions, overcome challenges, build confidence, and develop positive attitudes.",
    image: "/dance1.png",
  },
  {
    number: "07",
    title: "Education Technology and Digital Learning",
    text: "We promote effective technology use to improve teaching, learning, assessment, communication, and access to educational resources.",
    image: "/dance3.png",
  },
  {
    number: "08",
    title: "Education Research and Consultancy",
    text: "Research and consultancy services supporting evidence-based decision-making and better education programs.",
    image: "/dance1.png",
    items: [
      "Education research",
      "Baseline and endline assessments",
      "Data collection",
      "Monitoring and evaluation",
      "Program design",
      "School improvement consultancy",
    ],
  },
  {
    number: "09",
    title: "Parent and Community Engagement",
    text: "We support parents and communities to become active partners in children's education.",
    image: "/dance.png",
    items: [
      "Positive parenting",
      "Learning at home",
      "Child protection",
      "Positive discipline",
      "Talent development",
      "School-family collaboration",
    ],
  },
  {
    number: "10",
    title: "Creative Arts and Language Training",
    text: "Practical training in languages and creative arts that develops communication skills, creativity, confidence, and practical abilities.",
    image: "/dance1.png",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative overflow-hidden
        bg-gray-50
        py-20
        sm:py-24
        lg:py-28
      "
    >

      {/* ================= BACKGROUND DECORATION ================= */}

      <div
        className="
          pointer-events-none
          absolute -left-32 top-20
          h-72 w-72
          rounded-full
          bg-green-100/60
          blur-3xl
        "
      ></div>

      <div
        className="
          pointer-events-none
          absolute -right-32 bottom-20
          h-72 w-72
          rounded-full
          bg-blue-100/60
          blur-3xl
        "
      ></div>

      {/* Decorative circles */}

      <div
        className="
          pointer-events-none
          absolute left-[8%] top-32
          h-3 w-3
          rounded-full
          bg-green-400/40
        "
      ></div>

      <div
        className="
          pointer-events-none
          absolute right-[12%] top-52
          h-4 w-4
          rounded-full
          bg-blue-400/40
        "
      ></div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= SECTION HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Label */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-green-100
              bg-green-50
              px-4
              py-2
              shadow-sm
            "
          >
            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-green-600
              "
            ></span>

            <p
              className="
                font-bold
                uppercase
                tracking-widest
                text-green-700
              "
            >
              What We Do
            </p>
          </div>

          {/* Heading */}

          <h2
            className="
              mt-4
              text-3xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
              lg:text-5xl
            "
          >
            Our{" "}

            <span className="text-green-700">
              Services
            </span>
          </h2>

          {/* Decorative line */}

          <div className="mt-5 flex justify-center gap-1.5">

            <span
              className="
                h-1
                w-12
                rounded-full
                bg-green-600
              "
            ></span>

            <span
              className="
                h-1
                w-6
                rounded-full
                bg-blue-600
              "
            ></span>

            <span
              className="
                h-1
                w-2
                rounded-full
                bg-gray-300
              "
            ></span>

          </div>

          {/* Description */}

          <p
            className="
              mt-5
              leading-7
              text-gray-600
              sm:text-lg
            "
          >
            Practical education solutions designed for learners,
            educators, families, schools, and communities.
          </p>

        </div>

        {/* ================= SERVICES GRID ================= */}

        <div
          className="
            mt-14
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {services.map((service) => (

            <article
              key={service.number}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-gray-100
                bg-white
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-green-100
                hover:shadow-2xl
              "
            >

              {/* ================= LOGO BACKGROUND ================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-center
                  bg-no-repeat
                  bg-[length:260px]
                  opacity-[0.045]
                  transition-all
                  duration-700
                  group-hover:scale-110
                  group-hover:opacity-[0.08]
                "
                style={{
                  backgroundImage: "url('/logo.png')",
                }}
              ></div>

              {/* ================= CARD TOP GRADIENT ================= */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  z-20
                  h-1
                  w-full
                  bg-gradient-to-r
                  from-green-600
                  via-green-400
                  to-blue-600
                  opacity-80
                  transition-all
                  duration-500
                  group-hover:h-1.5
                  group-hover:opacity-100
                "
              ></div>

              {/* ================= IMAGE ================= */}

              <div
                className="
                  relative
                  h-52
                  w-full
                  overflow-hidden
                  sm:h-56
                "
              >

                <img
                  src={service.image}
                  alt={`${service.title} - Improve Education`}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Image overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                  "
                ></div>

                {/* Image top gradient */}

                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-20
                    bg-gradient-to-b
                    from-black/30
                    to-transparent
                  "
                ></div>

                {/* Service number on image */}

                <div
                  className="
                    absolute
                    bottom-4
                    left-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/30
                    bg-white/90
                    shadow-lg
                    backdrop-blur-sm
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-3
                  "
                >
                  <span
                    className="
                      text-sm
                      font-extrabold
                      text-green-700
                    "
                  >
                    {service.number}
                  </span>
                </div>

                {/* Image label */}

                <div
                  className="
                    absolute
                    bottom-4
                    right-5
                    rounded-full
                    border
                    border-white/20
                    bg-black/30
                    px-3
                    py-1.5
                    text-xs
                    font-semibold
                    text-white
                    backdrop-blur-md
                  "
                >
                  Improve Education
                </div>

              </div>

              {/* ================= CARD CONTENT ================= */}

              <div
                className="
                  relative
                  z-10
                  p-6
                  sm:p-7
                "
              >

                {/* ================= CARD HEADER ================= */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  {/* Small number */}

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-br
                      from-green-50
                      to-blue-50
                      ring-1
                      ring-green-100
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-extrabold
                        text-green-700
                      "
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Logo */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      border
                      border-gray-100
                      bg-white
                      p-1
                      shadow-sm
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-3
                      group-hover:shadow-md
                    "
                  >

                    <img
                      src="/logo.png"
                      alt="Improve Education Logo"
                      className="
                        h-full
                        w-full
                        object-contain
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    />

                  </div>

                </div>

                {/* ================= TITLE ================= */}

                <h3
                  className="
                    relative
                    mt-6
                    text-xl
                    font-extrabold
                    leading-7
                    text-gray-900
                    transition-colors
                    duration-300
                    group-hover:text-green-700
                  "
                >
                  {service.title}
                </h3>

                {/* ================= DESCRIPTION ================= */}

                <p
                  className="
                    relative
                    mt-3
                    text-sm
                    leading-7
                    text-gray-600
                  "
                >
                  {service.text}
                </p>

                {/* ================= ITEMS ================= */}

                {service.items && (
                  <ul
                    className="
                      relative
                      mt-5
                      space-y-2.5
                    "
                  >

                    {service.items.map((item) => (

                      <li
                        key={item}
                        className="
                          group/item
                          flex
                          items-start
                          gap-2.5
                          text-sm
                          text-gray-600
                          transition-all
                          duration-300
                          hover:translate-x-1
                          hover:text-gray-900
                        "
                      >

                        {/* Check icon */}

                        <span
                          className="
                            mt-0.5
                            flex
                            h-5
                            w-5
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-green-50
                            text-xs
                            font-bold
                            text-green-600
                            transition-all
                            duration-300
                            group-hover/item:bg-green-600
                            group-hover/item:text-white
                          "
                        >
                          ✓
                        </span>

                        <span>
                          {item}
                        </span>

                      </li>

                    ))}

                  </ul>
                )}

                {/* ================= BOTTOM LINK ================= */}

                <div
                  className="
                    relative
                    mt-6
                    border-t
                    border-gray-100
                    pt-5
                  "
                >

                  <a
                    href="#contact"
                    className="
                      group/link
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-green-700
                      transition-all
                      duration-300
                      hover:text-blue-700
                    "
                  >

                    Learn More

                    <span
                      className="
                        transition-transform
                        duration-300
                        group-hover/link:translate-x-1
                      "
                    >
                      →
                    </span>

                  </a>

                </div>

              </div>

              {/* ================= HOVER CORNER ================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  right-0
                  h-16
                  w-16
                  translate-x-8
                  translate-y-8
                  rounded-full
                  bg-gradient-to-br
                  from-green-500/10
                  to-blue-500/10
                  transition-all
                  duration-500
                  group-hover:scale-150
                "
              ></div>

            </article>

          ))}

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div
          className="
            relative
            mt-14
            overflow-hidden
            rounded-3xl
            bg-gradient-to-r
            from-green-700
            to-blue-700
            px-6
            py-8
            text-center
            shadow-xl
            sm:px-10
            lg:flex
            lg:items-center
            lg:justify-between
            lg:text-left
          "
        >

          {/* CTA logo watermark */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-1/2
              h-64
              w-64
              -translate-y-1/2
              bg-contain
              bg-center
              bg-no-repeat
              opacity-10
            "
            style={{
              backgroundImage: "url('/logo.png')",
            }}
          ></div>

          {/* Decorative circle */}

          <div
            className="
              absolute
              -right-10
              -top-20
              h-48
              w-48
              rounded-full
              bg-white/10
            "
          ></div>

          {/* CTA text */}

          <div className="relative z-10">

            <h3
              className="
                text-xl
                font-extrabold
                text-white
                sm:text-2xl
              "
            >
              Ready to improve education?
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-green-50
                sm:text-base
              "
            >
              Let's work together to create meaningful
              learning opportunities.
            </p>

          </div>

          {/* CTA button */}

          <a
            href="#contact"
            className="
              relative
              z-10
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-6
              py-3
              font-bold
              text-green-700
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-green-50
              hover:shadow-xl
              lg:mt-0
            "
          >

            Get Started

            <span
              className="
                transition-transform
                duration-300
              "
            >
              →
            </span>

          </a>

        </div>

      </div>

    </section>
  );
}