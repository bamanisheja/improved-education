export default function About() {
  const focusAreas = [
    {
      title: "Discover",
      text: "We identify talents and potential among children and young people.",
    },
    {
      title: "Develop",
      text: "We provide training, coaching, mentorship and practical opportunities to nurture identified talents.",
    },
    {
      title: "Educate",
      text: "We use drama, music, dance and fashion as creative approaches to education and life-skills development.",
    },
    {
      title: "Mobilize",
      text: "We use performances, campaigns, events and creative content to engage and inspire communities.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= ABOUT US ================= */}
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Left Side */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              About Us
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
              Unlocking Potential Through{" "}
              <span className="text-teal-700">
                Talent and Creativity
              </span>
            </h2>

            <div className="mt-4 h-1 w-16 rounded-full bg-teal-600" />

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
              Improve Education is a talent development and creative
              education organization committed to helping children and young
              people discover their potential, develop their talents and use
              creativity to create positive change.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              We believe that every young person has potential, but not
              everyone has the opportunity to discover and develop it.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Through talent detection, structured training, mentorship and
              creative opportunities, we help young people turn their abilities
              into confidence, skills and meaningful opportunities.
            </p>
          </div>

          {/* Right Side - Highlight */}
          <div className="rounded-2xl bg-teal-50 p-6 shadow-sm sm:p-8">

            <div className="mb-6">
              <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-700 shadow-sm">
                Our Approach
              </span>

              <h3 className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl">
                Four interconnected areas
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Our work connects talent discovery, development, creative
                education and community engagement.
              </p>
            </div>

            {/* Focus Areas */}
            <div className="grid gap-3 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="
                    rounded-xl
                    border
                    border-teal-100
                    bg-white
                    p-4
                    shadow-sm
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >
                  <h4 className="text-sm font-bold text-teal-700 sm:text-base">
                    {area.title}
                  </h4>

                  <p className="mt-1.5 text-xs leading-5 text-gray-600 sm:text-sm">
                    {area.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= OUR STORY ================= */}
        <div className="mt-14 lg:mt-20">
          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              border-teal-100
              bg-teal-50
              p-6
              shadow-sm
              sm:p-8
              lg:p-10
            "
          >
            <div className="max-w-4xl">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                Our Story
              </p>

              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                From Potential to{" "}
                <span className="text-teal-700">
                  Opportunity
                </span>
              </h2>

              <div className="mt-4 h-1 w-16 rounded-full bg-teal-600" />

              <p className="mt-6 text-sm leading-7 text-gray-700 sm:text-base">
                Improve Education was founded from a simple but powerful
                belief: every learner has potential, and every talent deserves
                an opportunity to grow.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base">
                Our journey began through years of experience in teaching,
                school leadership, teacher training, community engagement, and
                working with young people. We saw that education should go
                beyond academic performance. Children and young people also
                need opportunities to discover who they are, express
                themselves, build confidence, and develop their talents.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base">
                This inspired us to create Improve Education—an organization
                dedicated to identifying, nurturing, and developing talent
                while using education and creativity to inspire positive
                change.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base">
                Through drama, music, dance, fashion, and innovative learning,
                we create opportunities for learners and young people to
                discover their abilities and turn them into skills, confidence,
                and meaningful opportunities.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base">
                We believe that when education meets creativity, talent becomes
                a pathway to personal growth, employment, entrepreneurship, and
                community transformation.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base">
                Today, Improve Education continues to work with learners,
                educators, families, schools, and communities to build an
                environment where every person can learn, create, perform, and
                thrive.
              </p>

              {/* Story Highlight */}
              <div
                className="
                  mt-7
                  rounded-2xl
                  bg-white
                  p-5
                  shadow-sm
                  sm:p-6
                "
              >
                <p className="text-sm font-semibold leading-7 text-gray-800 sm:text-base">
                  Our story is still being written—and we invite you to be
                  part of it.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700">
                    Learn
                  </span>

                  <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700">
                    Create
                  </span>

                  <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700">
                    Perform
                  </span>

                  <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700">
                    Thrive
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================= VISION & MISSION ================= */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {/* Vision */}
          <div
            className="
              rounded-2xl
              bg-gray-900
              p-6
              text-white
              shadow-md
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              sm:p-8
            "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700">
                <span className="text-lg">◉</span>
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
                Our Vision
              </p>
            </div>

            <h3 className="mt-4 text-xl font-bold sm:text-2xl">
              A Future Full of Potential
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-300 sm:text-base">
              A society where every child and young person discovers their
              potential, develops their talent and uses creativity to transform
              their future and community.
            </p>
          </div>

          {/* Mission */}
          <div
            className="
              rounded-2xl
              bg-teal-700
              p-6
              text-white
              shadow-md
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              sm:p-8
            "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <span className="text-lg">✦</span>
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-100">
                Our Mission
              </p>
            </div>

            <h3 className="mt-4 text-xl font-bold sm:text-2xl">
              Empowering Through Creativity
            </h3>

            <p className="mt-3 text-sm leading-7 text-teal-50 sm:text-base">
              To identify and develop talents among children and young people
              and use drama, music, dance and fashion to educate, inspire,
              empower and mobilize individuals and communities.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}