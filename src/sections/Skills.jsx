import skills from "../data/skills.json";

export default function Skills() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-slate-100 dark:bg-slate-900"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
