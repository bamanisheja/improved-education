const focusAreas = [
  {
    title: "Quality Education",
    text: "Supporting learners, teachers, and schools to improve teaching and learning outcomes.",
  },
  {
    title: "Inclusive Education",
    text: "Promoting equal learning opportunities for children and young people, including vulnerable and underserved groups.",
  },
  {
    title: "Youth Development",
    text: "Equipping young people with leadership, life, digital, communication, and employability skills.",
  },
  {
    title: "Girls and Young Women",
    text: "Creating opportunities for girls and young women to learn, lead, develop their talents, and participate fully in society.",
  },
  {
    title: "Teacher and School Leadership",
    text: "Strengthening educators and school leaders through training, coaching, mentoring, and professional development.",
  },
  {
    title: "Technology-Enabled Education",
    text: "Using appropriate digital tools and innovative approaches to make education more accessible and effective.",
  },
  {
    title: "Talent and Creative Development",
    text: "Helping learners discover and develop abilities in arts, music, drama, dance, film, languages, and other areas.",
  },
  {
    title: "Family and Community Engagement",
    text: "Strengthening parents and communities as partners in children's learning, development, and wellbeing.",
  },
  {
    title: "Research and Evidence",
    text: "Using data, research, assessment, and monitoring to understand educational challenges and develop evidence-based solutions.",
  },
];

export default function FocusAreas() {
  return (
    <section id="focus" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-widest text-teal-700">
            Our Focus
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Areas where we create impact
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="rounded-2xl border border-gray-100 p-6 transition hover:border-teal-200 hover:bg-teal-50"
            >
              <span className="text-sm font-bold text-teal-600">
                0{index + 1}
              </span>

              <h3 className="mt-3 text-lg font-bold text-gray-900">
                {area.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                {area.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}