export const BrandLogo = ({ className = "h-5 w-5 md:h-6 md:w-6" }) => {
  return (
    <div className={`relative group/logo transition-all duration-300 ease-spring ${className}`}>
      {/* Glow Backing Effect */}
      <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-md opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform transition-transform duration-500 ease-spring group-hover/logo:scale-110 group-hover/logo:rotate-6"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="splitwise-grad-indigo" x1="6" y1="4" x2="26" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
          <linearGradient id="splitwise-grad-emerald" x1="26" y1="28" x2="6" y2="12" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
        
        {/* Upper S-Hook */}
        <path
          d="M 18,14.5 L 22,10.5 C 24.5,8 24.5,4.5 20,4.5 L 12,4.5 C 7.5,4.5 5.5,8 5.5,11.5 L 5.5,13"
          stroke="url(#splitwise-grad-indigo)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-500"
        />
        
        {/* Lower S-Hook */}
        <path
          d="M 14,17.5 L 10,21.5 C 7.5,24 7.5,27.5 12,27.5 L 20,27.5 C 24.5,27.5 26.5,24 26.5,20.5 L 26.5,19"
          stroke="url(#splitwise-grad-emerald)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-500"
        />
        
        {/* Split Nodes */}
        <circle cx="18" cy="14.5" r="1.5" fill="#ffffff" className="shadow-sm" />
        <circle cx="14" cy="17.5" r="1.5" fill="#ffffff" className="shadow-sm" />
      </svg>
    </div>
  );
};
