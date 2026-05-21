import { Percent } from 'lucide-react';

export const TipSelector = ({ 
  activeTip, 
  customValue, 
  onPresetSelect, 
  onCustomChange, 
  onCustomBlur,
  error 
}) => {
  const presets = [10, 15, 20, 25];

  return (
    <div className="w-full flex flex-col" role="group" aria-labelledby="tip-label">
      <span 
        id="tip-label"
        className="text-xs font-bold text-slate-500/90 tracking-wider uppercase mb-2"
      >
        Select Tip %
      </span>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {presets.map((percent) => {
          const isActive = activeTip === percent.toString() && !customValue;
          return (
            <button
              key={percent}
              type="button"
              onClick={() => onPresetSelect(percent)}
              aria-pressed={isActive}
              className={`py-3 px-2 rounded-xl font-semibold text-sm transition-all duration-300 ease-spring cursor-pointer border hover:-translate-y-0.5 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/15 ${
                isActive
                  ? 'bg-slate-900 text-white shadow-[0_10px_20px_-8px_rgba(15,23,42,0.3)] border-slate-900'
                  : 'bg-slate-100/60 hover:bg-slate-200/50 hover:border-slate-300/60 text-slate-700 border-slate-200/40 hover:text-slate-900 hover:shadow-[0_4px_12px_-4px_rgba(15,23,42,0.03)]'
              }`}
            >
              {percent}%
            </button>
          );
        })}
        
        {/* Custom input spans remaining columns */}
        <div className="relative group col-span-2 sm:col-span-1 md:col-span-2">
          <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none">
            <Percent 
              className={`h-3.5 w-3.5 transition-all duration-300 ease-out group-focus-within:scale-110 ${
                error ? 'text-rose-500' : 'text-slate-400 group-focus-within:text-indigo-600'
              }`} 
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            inputMode="decimal"
            placeholder="Enter %"
            value={customValue}
            onChange={(e) => onCustomChange(e.target.value)}
            onBlur={onCustomBlur}
            aria-label="Custom tip percentage"
            className={`w-full pl-4 pr-10 py-3 bg-slate-50/30 hover:bg-slate-100/40 focus:bg-white border rounded-xl text-left text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all duration-300 ease-out ${
              customValue
                ? error
                  ? 'border-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 focus:shadow-[0_0_20px_-3px_rgba(244,63,94,0.08)]'
                  : 'border-indigo-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:shadow-[0_0_20px_-3px_rgba(99,102,241,0.08)]'
                : error
                  ? 'border-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 focus:shadow-[0_0_20px_-3px_rgba(244,63,94,0.08)]'
                  : 'border-slate-200/60 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:shadow-[0_0_20px_-3px_rgba(99,102,241,0.08)]'
            }`}
            aria-invalid={!!error}
            aria-describedby={error ? "tip-error" : undefined}
          />
        </div>
      </div>
      
      {/* Error container with fixed height */}
      <div className="h-6 mt-1 flex items-center">
        <p
          id="tip-error"
          role="alert"
          className={`text-xs text-rose-600 font-semibold flex items-center transition-all duration-250 ease-out ${
            error ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'
          }`}
        >
          {error}
        </p>
      </div>
    </div>
  );
};
