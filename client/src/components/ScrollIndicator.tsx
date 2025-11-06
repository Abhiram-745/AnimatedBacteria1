import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  const handleClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      data-testid="button-scroll-down"
      className="group flex flex-col items-center gap-2 text-primary animate-bounce-slow hover-elevate active-elevate-2 p-4 rounded-md transition-all"
    >
      <span className="text-sm font-medium tracking-wide animate-glow-pulse">Scroll to Begin</span>
      <ChevronDown className="w-6 h-6 animate-bounce-slow" />
    </button>
  );
}
