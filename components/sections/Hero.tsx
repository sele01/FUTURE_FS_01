"use client";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Position Badge */}
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider">
          Software Engineer. Problem Solver.
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          I solve real problems
          <br />
          <span className="text-blue-600 dark:text-blue-400">efficiently.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Software Engineering Student | Coursera Learner | Future Interns Full Stack Track
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("projects-section")}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("about-section")}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            About Me
          </button>
        </div>

        {/* Invisible scroll targets - we'll replace these with actual sections soon */}
        <div id="about-section" className="h-0" />
        <div id="projects-section" className="h-0" />
      </div>
    </section>
  );
}