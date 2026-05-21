import { formatCurrency } from '../utils/formatters';
import { ResetButton } from './ResetButton';

export const ResultsPanel = ({ calculations, onReset, canReset }) => {
  const { totalTip, grandTotal, perPersonShare } = calculations;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-950 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full shadow-2xl relative overflow-hidden backdrop-blur-xl">
      {/* Decorative Glow Effects */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col gap-6 md:gap-8 z-10">
        {/* Total Tip Row */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-300">Total Tip</span>
            <span className="text-xs text-slate-500">overall tip amount</span>
          </div>
          <div className="text-right">
            <span className="text-xl md:text-2xl font-bold text-indigo-400 font-mono tracking-tight transition-all duration-300">
              {formatCurrency(totalTip)}
            </span>
          </div>
        </div>

        {/* Grand Total Row */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-300">Grand Total</span>
            <span className="text-xs text-slate-500">bill + tip</span>
          </div>
          <div className="text-right">
            <span className="text-xl md:text-2xl font-bold text-slate-100 font-mono tracking-tight transition-all duration-300">
              {formatCurrency(grandTotal)}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800/60 my-1"></div>

        {/* Per Person Share Row - Highly Highlighted */}
        <div className="flex justify-between items-center py-4 bg-indigo-950/40 border border-indigo-500/10 rounded-2xl px-5 shadow-inner">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Per Person Share</span>
            <span className="text-xs text-slate-500">amount to pay</span>
          </div>
          <div className="text-right">
            <span className="text-2xl md:text-3xl font-extrabold text-emerald-400 font-mono tracking-tight drop-shadow-[0_0_12px_rgba(52,211,153,0.15)]">
              {formatCurrency(perPersonShare)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-12 z-10">
        <ResetButton onClick={onReset} disabled={!canReset} />
      </div>
    </div>
  );
};
