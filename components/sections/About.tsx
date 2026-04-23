export default function About() {
  const quickFacts = [
    { label: "Location", value: "Addis Ababa, Ethiopia" },
    { label: "Status", value: "Open to Opportunities" },
    { label: "Focus", value: "Full Stack Development" },
  ];

  return (
    <section id="about-section" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider">
          About Me
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Story */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              From curiosity to code
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I started coding when I realized how satisfying it is to solve real-world problems through software.
              </p>
              <p>
                I love understanding how entire systems work together and collaborating seamlessly with a team to bring ideas to life.
              </p>
              <p>
                My goal is to deliver scalable, efficient solutions while contributing meaningfully to the tech community.
              </p>
            </div>
          </div>

          {/* Right Column - Quick Facts */}
          <div className="space-y-4">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{fact.label}</p>
                <p className="text-gray-900 dark:text-white font-medium">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}