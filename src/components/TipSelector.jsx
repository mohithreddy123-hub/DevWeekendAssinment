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
        className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-2"
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
              className={`py-3 px-2 rounded-xl font-semibold text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 cursor-pointer ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 ring-2 ring-indigo-500'
                  : 'bg-slate-900/40 border border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:text-white focus-visible:ring-indigo-500/20'
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
              className={`h-3.5 w-3.5 transition-colors duration-200 ${
                error ? 'text-rose-500' : 'text-slate-500 group-focus-within:text-indigo-400'
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
            className={`w-full pl-4 pr-10 py-3 bg-slate-900/60 border rounded-xl text-left text-sm font-semibold text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-200 ${
              customValue
                ? error
                  ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20'
                  : 'border-indigo-500 focus:border-indigo-500 focus:ring-indigo-500/20'
                : error
                  ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20'
                  : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
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
          className={`text-xs text-rose-400 font-semibold flex items-center transition-all duration-250 ease-out ${
            error ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'
          }`}
        >
          {error}
        </p>
      </div>
    </div>
  );
};
