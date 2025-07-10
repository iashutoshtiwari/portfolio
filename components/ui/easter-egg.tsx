// ConfettiEasterEgg.tsx
'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';
import { toast } from 'sonner';

export function ConfettiEasterEgg({ children }: { children: React.ReactNode }) {
  const [clicks, setClicks] = useState(0);

  const handleTap = () => {
    const newCount = clicks + 1;

    if (newCount < 5) {
      toast(`${5 - newCount} ${5 - newCount === 1 ? 'more tap to go' : 'taps to go'}`);
      setClicks(newCount);
    } else {
      toast.success('Yay!');
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
      setClicks(0);
    }
  };

  return (
    <div onClick={handleTap} className="cursor-pointer select-none">
      {children}
    </div>
  );
}
