import { useTipCalculator } from './hooks/useTipCalculator';
import { BillInput } from './components/BillInput';
import { TipSelector } from './components/TipSelector';
import { PeopleInput } from './components/PeopleInput';
import { ResultsPanel } from './components/ResultsPanel';
import { Calculator } from 'lucide-react';

function App() {
  const {
    bill,
    tipPercent,
    customTip,
    people,
    errors,
    calculations,
    canReset,
    handleBillChange,
    handleBillBlur,
    handlePresetTip,
    handleCustomTipChange,
    handleCustomTipBlur,
    handlePeopleChange,
    handlePeopleBlur,
    handleReset,
  } = useTipCalculator();

  return (
    <div className="min-h-screen w-full bg-slate-50 flex flex-col justify-between p-4 sm:p-6 md:p-12 relative overflow-hidden">
      {/* Ambient background glow blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-indigo-200/30 to-purple-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-cyan-200/20 to-emerald-200/20 blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] right-[15%] w-[300px] h-[300px] rounded-full bg-rose-100/30 blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="w-full max-w-4xl mx-auto flex items-center justify-center gap-2 mb-8 md:mb-12 relative z-10">
        <div className="bg-white/80 p-2.5 rounded-xl border border-slate-200/80 text-indigo-600 shadow-[0_8px_16px_-6px_rgba(79,70,229,0.12)] backdrop-blur-md">
          <Calculator className="h-5 w-5 md:h-6 md:w-6" />
        </div>
        <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-wider uppercase">
          SPLIT<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">WISELY</span>
        </h1>
      </header>

      {/* Main Container Card */}
      <main className="w-full max-w-4xl mx-auto bg-white/70 border border-white/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.04)] backdrop-blur-xl flex-grow flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Left Column: Inputs */}
          <section className="flex flex-col justify-between gap-6" aria-label="Calculator Inputs">
            <div className="flex flex-col gap-6">
              <BillInput 
                value={bill} 
                onChange={handleBillChange} 
                onBlur={handleBillBlur}
                error={errors.bill} 
              />
              
              <TipSelector 
                activeTip={tipPercent} 
                customValue={customTip} 
                onPresetSelect={handlePresetTip} 
                onCustomChange={handleCustomTipChange} 
                onCustomBlur={handleCustomTipBlur}
                error={errors.tip} 
              />
              
              <PeopleInput 
                value={people} 
                onChange={handlePeopleChange} 
                onBlur={handlePeopleBlur}
                error={errors.people} 
              />
            </div>
          </section>

          {/* Right Column: Results Panel */}
          <section className="h-full" aria-label="Calculation Results">
            <ResultsPanel 
              calculations={calculations} 
              onReset={handleReset} 
              canReset={canReset} 
            />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-4xl mx-auto text-center mt-8 md:mt-12 relative z-10">
        <p className="text-[10px] sm:text-xs text-slate-400 font-semibold tracking-wider uppercase">
          SplitWisely Tip Calculator &bull; Built By Mohith Reddy
        </p>
      </footer>
    </div>
  );
}

export default App;
