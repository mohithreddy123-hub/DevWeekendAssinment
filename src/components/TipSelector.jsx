import { Percent } from 'lucide-react';

export const TipSelector = ({ 
  activeTip, 
  customValue, 
  onPresetSelect, 
  onCustomChange, 
  error 
}) => {
  const presets = [10, 15, 20, 25];

  return (
    <div className="w-full flex flex-col">
      <label 
        className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-2"
      >
        Select Tip %
      </label>
      
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {presets.map((percent) => {
          const isActive = activeTip === percent.toString() && !customValue;
          return (
            <button
              key={percent}
              type="button"
              onClick={() => onPresetSelect(percent)}
              className={`py-3 px-2 rounded-xl font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 ring-2 ring-indigo-500'
                  : 'bg-slate-900/40 border border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:text-white focus:ring-indigo-500/20'
              }`}
            >
              {percent}%
            </button>
          );
        })}
        
        {/* Custom input takes the last column on larger screens or spans 2 on mobile */}
        <div className="relative group col-span-2 sm:col-span-1">
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <Percent 
              className={`h-3.5 w-3.5 transition-colors duration-200 ${
                error ? 'text-rose-400' : 'text-slate-500 group-focus-within:text-indigo-400'
              }`} 
            />
          </div>
          <input
            type="text"
            inputMode="decimal"
            placeholder="Custom"
            value={customValue}
            onChange={(e) => onCustomChange(e.target.value)}
            className={`w-full px-3 pr-8 py-3 bg-slate-900/60 border rounded-xl text-center text-sm font-semibold text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-200 ${
              customValue
                ? error
                  ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/30'
                  : 'border-indigo-500/80 focus:border-indigo-500 focus:ring-indigo-500/20'
                : error
                  ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/30'
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
          className={`text-xs text-rose-400 font-medium transition-all duration-200 ease-in-out ${
            error ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'
          }`}
        >
          {error}
        </p>
      </div>
    </div>
  );
};
