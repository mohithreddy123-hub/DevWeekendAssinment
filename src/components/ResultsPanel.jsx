import { formatCurrency } from '../utils/formatters';
import { ResetButton } from './ResetButton';
import { AnimatedNumber } from './AnimatedNumber';

export const ResultsPanel = ({ calculations, onReset, canReset }) => {
  const { totalTip, grandTotal, perPersonShare } = calculations;

  return (
    <div className="bg-gradient-to-br from-indigo-50/50 via-slate-50/20 to-purple-50/50 border border-slate-200/50 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full shadow-[0_10px_30px_rgba(79,70,229,0.03)] relative overflow-hidden backdrop-blur-xl">
      {/* Decorative Glow Effects */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col gap-6 md:gap-8 z-10" aria-live="polite" aria-atomic="true">
        {/* Total Tip Row */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-700">Total Tip</span>
            <span className="text-xs text-slate-400">overall tip amount</span>
          </div>
          <div className="text-right">
            <span className="text-xl md:text-2xl font-bold text-indigo-600 font-mono tracking-tight transition-all duration-300">
              <AnimatedNumber value={totalTip} format={formatCurrency} />
            </span>
          </div>
        </div>

        {/* Grand Total Row */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-700">Grand Total</span>
            <span className="text-xs text-slate-400">bill + tip</span>
          </div>
          <div className="text-right">
            <span className="text-xl md:text-2xl font-bold text-slate-900 font-mono tracking-tight transition-all duration-300">
              <AnimatedNumber value={grandTotal} format={formatCurrency} />
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200/80 my-1"></div>

        {/* Per Person Share Row - Highly Highlighted */}
        <div className="flex justify-between items-center py-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl px-5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)]">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Per Person Share</span>
            <span className="text-xs text-emerald-600/70">amount to pay</span>
          </div>
          <div className="text-right">
            <span className="text-2xl md:text-3xl font-extrabold text-emerald-700 font-mono tracking-tight">
              <AnimatedNumber value={perPersonShare} format={formatCurrency} />
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
