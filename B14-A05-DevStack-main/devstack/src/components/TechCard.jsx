const DIFFICULTY_STYLES = {
  'Beginner-Friendly': 'bg-green-50 text-green-700',
  'Intermediate': 'bg-amber-50 text-amber-700',
  'Advanced': 'bg-red-50 text-red-700',
};

const CATEGORY_STYLES = {
  Frontend: 'bg-blue-50 text-blue-700',
  Backend: 'bg-purple-50 text-purple-700',
  Database: 'bg-orange-50 text-orange-700',
  Language: 'bg-teal-50 text-teal-700',
  Styling: 'bg-pink-50 text-pink-700',
  DevOps: 'bg-gray-100 text-gray-700',
  Tools: 'bg-indigo-50 text-indigo-700',
};

export default function TechCard({ tech, isAdded, onAdd }) {
  return (
    <div
      id={`card-${tech.id}`}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 p-5 flex flex-col gap-4"
    >
      {/* Top Row: Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center p-2 border border-gray-100">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/40x40/f3f4f6/9ca3af?text=${tech.name.charAt(0)}`;
            }}
          />
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-50 text-violet-600 border border-violet-100">
          {tech.badge}
        </span>
      </div>

      {/* Name */}
      <div>
        <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed line-clamp-3">{tech.description}</p>
      </div>

      {/* Chips: Category + Difficulty */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${CATEGORY_STYLES[tech.category] || 'bg-gray-100 text-gray-600'}`}>
          {tech.category}
        </span>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${DIFFICULTY_STYLES[tech.difficulty] || 'bg-gray-100 text-gray-600'}`}>
          {tech.difficulty}
        </span>
      </div>

      {/* Rating + Add Button */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 text-base">★</span>
          <span className="text-sm font-semibold text-gray-800">{tech.rating}</span>
        </div>

        {/* Add to Stack Button */}
        <button
          id={`add-btn-${tech.id}`}
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
            isAdded
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-900 text-white hover:bg-gray-700 active:scale-95'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
}
