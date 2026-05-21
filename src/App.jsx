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
    <div className="min-h-screen w-full bg-[#030712] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.15),rgba(255,255,255,0))] flex flex-col justify-between p-4 sm:p-6 md:p-12">
      {/* Header */}
      <header className="w-full max-w-4xl mx-auto flex items-center justify-center gap-2 mb-8 md:mb-12">
        <div className="bg-indigo-600/10 p-2.5 rounded-xl border border-indigo-500/20 text-indigo-400">
          <Calculator className="h-6 w-6" />
        </div>
        <h1 className="text-xl md:text-2xl font-black text-slate-100 tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-indigo-200 to-indigo-400">
          SPLIT<span className="text-indigo-500">WISELY</span>
        </h1>
      </header>

      {/* Main Container Card */}
      <main className="w-full max-w-4xl mx-auto bg-slate-950/40 border border-slate-900 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md flex-grow flex flex-col justify-center">
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
      <footer className="w-full max-w-4xl mx-auto text-center mt-8 md:mt-12">
        <p className="text-[10px] sm:text-xs text-slate-600 font-semibold tracking-wider uppercase">
          SplitWisely Tip Calculator &bull; Built By Mohith Reddy
        </p>
      </footer>
    </div>
  );
}

export default App;
