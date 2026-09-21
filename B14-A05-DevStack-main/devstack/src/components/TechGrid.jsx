import TechCard from './TechCard';
import YourStack from './YourStack';

export default function TechGrid({ technologies, stack, loading, onAdd, onRemove, onRemoveAll }) {
  return (
    <section id="technologies" className="bg-gray-50/50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Explore the <span className="brand-gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-500 mt-2 text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Grid + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Tech Cards Grid */}
          <div className="flex-1">
            {loading ? (
              /* Loading Spinner */
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-violet-500 animate-spin" />
                <p className="text-sm text-gray-500 font-medium">Loading technologies...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    isAdded={stack.some((s) => s.id === tech.id)}
                    onAdd={onAdd}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Your Stack Sidebar */}
          <div className="w-full lg:w-72 xl:w-80">
            <YourStack
              stack={stack}
              onRemove={onRemove}
              onRemoveAll={onRemoveAll}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
