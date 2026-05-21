import { RotateCcw } from 'lucide-react';

export const ResetButton = ({ onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-4 px-6 rounded-xl font-extrabold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none cursor-pointer ${
        disabled
          ? 'bg-slate-200/40 text-slate-400 border border-slate-200/20 cursor-not-allowed'
          : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:ring-4 focus-visible:ring-indigo-600/20'
      }`}
    >
      <RotateCcw className="h-4 w-4" />
      Reset Calculator
    </button>
  );
};
