import { IndianRupee } from 'lucide-react';

export const BillInput = ({ value, onChange, onBlur, error }) => {
  return (
    <div className="w-full flex flex-col">
      <label 
        htmlFor="bill-input" 
        className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-2 flex items-center gap-1.5"
      >
        Bill Amount
      </label>
      
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <IndianRupee 
            className={`h-5 w-5 transition-colors duration-200 ${
              error ? 'text-rose-500' : 'text-slate-500 group-focus-within:text-indigo-400'
            }`} 
            aria-hidden="true"
          />
        </div>
        
        <input
          id="bill-input"
          type="text"
          inputMode="decimal"
          placeholder="0.00"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`w-full pl-12 pr-4 py-3.5 bg-slate-900/60 border rounded-xl text-slate-100 placeholder:text-slate-600 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-200 ${
            error 
              ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' 
              : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
          }`}
          aria-invalid={!!error}
          aria-describedby={error ? "bill-error" : undefined}
        />
      </div>
      
      {/* Error container with fixed height to avoid layout shift */}
      <div className="h-6 mt-1 flex items-center">
        <p 
          id="bill-error" 
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
