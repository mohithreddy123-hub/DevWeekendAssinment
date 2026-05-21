import { RotateCcw } from 'lucide-react';

export const ResetButton = ({ onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-4 px-6 rounded-xl font-extrabold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 cursor-pointer ${
        disabled
          ? 'bg-slate-800/40 text-slate-600 border border-slate-800/20 cursor-not-allowed'
          : 'bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-400/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:ring-emerald-400'
      }`}
    >
      <RotateCcw className="h-4 w-4" />
      Reset Calculator
    </button>
  );
};
