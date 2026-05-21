import { Users } from 'lucide-react';

export const PeopleInput = ({ value, onChange, onBlur, error }) => {
  return (
    <div className="w-full flex flex-col">
      <label 
        htmlFor="people-input" 
        className="text-xs font-bold text-slate-500/90 tracking-wider uppercase mb-2 flex items-center gap-1.5"
      >
        Number of People
      </label>
      
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Users 
            className={`h-5 w-5 transition-all duration-300 ease-out group-focus-within:scale-105 ${
              error ? 'text-rose-500' : 'text-slate-400 group-focus-within:text-indigo-600'
            }`} 
            aria-hidden="true"
          />
        </div>
        <input
          id="people-input"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="1"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`w-full pl-12 pr-4 py-3.5 bg-slate-50/30 hover:bg-slate-100/40 focus:bg-white border rounded-xl text-slate-900 placeholder:text-slate-400 font-semibold focus:outline-none transition-all duration-300 ease-out ${
            error 
              ? 'border-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 focus:shadow-[0_0_20px_-3px_rgba(244,63,94,0.08)]' 
              : 'border-slate-200/60 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:shadow-[0_0_20px_-3px_rgba(99,102,241,0.08)]'
          }`}
          aria-invalid={!!error}
          aria-describedby={error ? "people-error" : undefined}
        />
      </div>
      
      {/* Error container with fixed height to avoid layout shift */}
      <div className="h-6 mt-1 flex items-center">
        <p 
          id="people-error" 
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
