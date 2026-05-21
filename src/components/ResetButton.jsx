import { RotateCcw } from 'lucide-react';

export const ResetButton = ({ onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer ${
        disabled
          ? 'bg-slate-800/40 text-slate-600 border border-slate-800/30 cursor-not-allowed'
          : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 active:scale-[0.98] focus:ring-emerald-500'
      }`}
    >
      <RotateCcw className="h-4 w-4" />
      Reset Calculator
    </button>
  );
};
