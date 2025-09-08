import { Pigment } from '@/data/pigments';
import { getColorBrightness } from '@/utils/colorMixing';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface PigmentSwatchProps {
  pigment: Pigment;
  isSelected: boolean;
  onClick: () => void;
}

export function PigmentSwatch({ pigment, isSelected, onClick }: PigmentSwatchProps) {
  const brightness = getColorBrightness(pigment.rgb);
  const textColor = brightness > 0.5 ? 'text-gray-900' : 'text-white';

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-full aspect-square rounded-lg border-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent/50 active:scale-95",
        isSelected 
          ? "border-accent shadow-palette transform scale-105" 
          : "border-palette-border hover:border-accent/50"
      )}
      style={{ backgroundColor: pigment.hex }}
      aria-label={`Select ${pigment.name}`}
    >
      {isSelected && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-1">
            <Check size={16} className="text-accent" />
          </div>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 backdrop-blur-sm rounded-b-lg">
        <p className={cn("text-xs font-medium text-white truncate")}>
          {pigment.name}
        </p>
      </div>
    </button>
  );
}