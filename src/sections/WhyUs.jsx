// const focusAreas = [
//   {
//     title: "Quality Education",
//     text: "Supporting learners, teachers, and schools to improve teaching and learning outcomes.",
//   },
//   {
//     title: "Inclusive Education",
//     text: "Promoting equal learning opportunities for children and young people, including vulnerable and underserved groups.",
//   },
//   {
//     title: "Youth Development",
//     text: "Equipping young people with leadership, life, digital, communication, and employability skills.",
//   },
//   {
//     title: "Girls and Young Women",
//     text: "Creating opportunities for girls and young women to learn, lead, develop their talents, and participate fully in society.",
//   },
//   {
//     title: "Teacher and School Leadership",
//     text: "Strengthening educators and school leaders through training, coaching, mentoring, and professional development.",
//   },
//   {
//     title: "Technology-Enabled Education",
//     text: "Using appropriate digital tools and innovative approaches to make education more accessible and effective.",
//   },
//   {
//     title: "Talent and Creative Development",
//     text: "Helping learners discover and develop abilities in arts, music, drama, dance, film, languages, and other areas.",
//   },
//   {
//     title: "Family and Community Engagement",
//     text: "Strengthening parents and communities as partners in children's learning, development, and wellbeing.",
//   },
//   {
//     title: "Research and Evidence",
//     text: "Using data, research, assessment, and monitoring to understand educational challenges and develop evidence-based solutions.",
//   },
// ];

// export default function FocusAreas() {
//   return (
//     <section id="focus" className="bg-white py-24">
//       <div className="mx-auto max-w-7xl px-6">
        
//         <div className="max-w-3xl">
//           <p className="font-bold uppercase tracking-widest text-teal-700">
//             Our Focus
//           </p>

//           <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
//             Areas where we create impact
//           </h2>
//         </div>

//         <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {focusAreas.map((area, index) => (
//             <div
//               key={area.title}
//               className="rounded-2xl border border-gray-100 p-6 transition hover:border-teal-200 hover:bg-teal-50"
//             >
//               <span className="text-sm font-bold text-teal-600">
//                 0{index + 1}
//               </span>

//               <h3 className="mt-3 text-lg font-bold text-gray-900">
//                 {area.title}
//               </h3>

//               <p className="mt-2 text-sm leading-7 text-gray-600">
//                 {area.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
const impactAreas = [
  "Young people reached",
  "Talents identified",
  "Young people trained",
  "Performances and showcases",
  "Schools and communities reached",
  "Creative productions created",
  "Partnerships established",
  "Young people accessing new opportunities",
  "Improvement in confidence and creative skills",
];

export default function FocusAreas() {
  return (
    <section id="focus" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* OUR IMPACT */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            Our Impact
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Creating Opportunities Where{" "}
            <span className="text-teal-700">
              Talent Can Thrive
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Our impact is measured not only by how many young people we
            reach, but by the opportunities and transformation that follow.
          </p>
        </div>

        {/* WE TRACK */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-gray-900">
            We Track
          </h3>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {impactAreas.map((impact) => (
              <div
                key={impact}
                className="
                  rounded-xl
                  border border-gray-100
                  bg-gray-50
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-teal-200
                  hover:bg-teal-50
                  hover:shadow-md
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex h-8 w-8 shrink-0
                      items-center justify-center
                      rounded-full
                      bg-teal-100
                      text-sm font-bold
                      text-teal-700
                    "
                  >
                    ✓
                  </span>

                  <p className="text-sm font-semibold text-gray-800">
                    {impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OUR AMBITION */}
        <div
          className="
            mt-10
            rounded-2xl
            bg-gradient-to-r
            from-teal-700
            to-blue-700
            p-6
            text-white
            shadow-lg
            sm:p-8
          "
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-100">
            Our Ambition
          </p>

          <p className="mt-3 max-w-4xl text-base leading-7 sm:text-lg">
            To build a growing network where young people can discover
            their talent, develop their abilities, express themselves
            and access opportunities.
          </p>
        </div>

      </div>
    </section>
  );
}