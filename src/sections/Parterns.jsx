const partners = [
  "Government Institutions",
  "NGOs",
  "Foundations",
  "Donors",
  "Schools",
  "Universities",
  "Cultural Institutions",
  "Creative Industry Organizations",
  "Media Organizations",
  "Private Companies",
  "Artists & Creative Professionals",
];

const partnershipOpportunities = [
  {
    title: "Funding",
    text: "Support talent development and creative education programs.",
  },
  {
    title: "Equipment",
    text: "Provide artistic and production equipment.",
  },
  {
    title: "Training",
    text: "Provide expertise, mentorship and professional development.",
  },
  {
    title: "Program Partnerships",
    text: "Co-create programs for schools and communities.",
  },
  {
    title: "Sponsorship",
    text: "Support performances, competitions, festivals and showcases.",
  },
  {
    title: "Opportunities",
    text: "Connect young talents to internships, networks and professional opportunities.",
  },
];

const supportOptions = [
  "Partnering with us",
  "Sponsoring a program",
  "Supporting a young talent",
  "Providing equipment",
  "Providing professional mentorship",
  "Funding community creative activities",
  "Sharing our work",
];

export default function Partners() {
  return (
    <section id="Partners" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5">

        {/* WHY PARTNER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase text-teal-700">
            Why Partner With Us?
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-gray-900">
            Together, We Can Turn{" "}
            <span className="text-teal-700">
              Potential Into Opportunity
            </span>
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            Many talented young people have ability but lack access to
            training, mentorship, equipment and opportunities.
          </p>

          <p className="mt-3 text-sm text-gray-700">
            Improve Education creates a bridge between{" "}
            <b className="text-teal-700">
              talent and opportunity.
            </b>
          </p>
        </div>

        {/* PARTNER TAGS */}
        <div className="mt-10 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            We Welcome Partnerships With
          </h2>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {partners.map((partner) => (
              <span
                key={partner}
                className="rounded-full bg-teal-50 px-4 py-2 text-xs
                font-semibold text-teal-800 hover:bg-teal-100"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* OPPORTUNITIES */}
        <div className="mt-14">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Partnership Opportunities
          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipOpportunities.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 p-5
                shadow-sm hover:-translate-y-1 hover:border-teal-200"
              >
                <span className="text-teal-700">✓</span>

                <h3 className="mt-3 font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SUPPORT */}
        <div className="mt-14 rounded-3xl bg-gray-900 p-8 text-white">
          <p className="text-xs font-bold uppercase text-emerald-300">
            Support Our Mission
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Talent Is Everywhere.
            <span className="text-emerald-300">
              {" "}Opportunity Should Be Too.
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-300">
            Your support can help young people discover talents,
            develop skills and access opportunities.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {supportOptions.map((option) => (
              <span
                key={option}
                className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-gray-300"
              >
                {option}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#Partners"
              className="rounded-full bg-emerald-400 px-6 py-3
              text-sm font-bold text-gray-900"
            >
              Partner With Us →
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/20
              px-6 py-3 text-sm font-bold text-white"
            >
              Support Our Work →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}