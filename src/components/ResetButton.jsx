import { RotateCcw } from 'lucide-react';

export const ResetButton = ({ onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-4 px-6 rounded-xl font-extrabold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all duration-300 ease-spring focus:outline-none cursor-pointer group ${
        disabled
          ? 'bg-slate-200/40 text-slate-400/80 border border-slate-200/20 cursor-not-allowed'
          : 'bg-indigo-950 hover:bg-indigo-900 text-white shadow-[0_12px_24px_-10px_rgba(79,70,229,0.35)] hover:shadow-[0_18px_30px_-10px_rgba(79,70,229,0.45)] hover:-translate-y-0.5 active:scale-[0.97] focus-visible:ring-4 focus-visible:ring-indigo-950/20'
      }`}
    >
      <RotateCcw className={`h-4 w-4 transition-transform duration-500 ease-spring ${disabled ? '' : 'group-hover:-rotate-45'}`} />
      Reset Calculator
    </button>
  );
};

