export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside
      id="your-stack-panel"
      className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sticky top-24 self-start"
    >
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
        {stack.length > 0 ? (
          <p className="text-sm font-medium brand-gradient-text mt-0.5">
            {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
          </p>
        ) : (
          <p className="text-sm text-gray-400 mt-0.5">No technologies selected yet.</p>
        )}
      </div>

      {/* Stack Items or Empty State */}
      {stack.length === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-xl py-10 flex items-center justify-center">
          <p className="text-sm text-gray-400 font-medium">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
          {stack.map((tech) => (
            <div
              key={tech.id}
              id={`stack-item-${tech.id}`}
              className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100 hover:border-gray-200 transition-colors"
            >
              {/* Icon */}
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center p-1.5 border border-gray-100 flex-shrink-0">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/32x32/f3f4f6/9ca3af?text=${tech.name.charAt(0)}`;
                  }}
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{tech.name}</p>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>

              {/* Remove Button */}
              <button
                id={`remove-btn-${tech.id}`}
                onClick={() => onRemove(tech.id)}
                className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-lg hover:bg-gray-200 flex-shrink-0"
                aria-label={`Remove ${tech.name}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All Button */}
      {stack.length > 0 && (
        <button
          id="remove-all-btn"
          onClick={onRemoveAll}
          className="mt-4 w-full py-2.5 rounded-xl border-2 border-red-200 text-red-500 font-semibold text-sm hover:bg-red-50 hover:border-red-300 transition-all duration-200 active:scale-95"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
