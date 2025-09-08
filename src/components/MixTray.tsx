import { Pigment } from '@/data/pigments';
import { getColorBrightness } from '@/utils/colorMixing';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface MixTrayProps {
  selectedPigments: Pigment[];
  onRemovePigment: (index: number) => void;
}

export function MixTray({ selectedPigments, onRemovePigment }: MixTrayProps) {
  if (selectedPigments.length === 0) {
    return (
      <div className="bg-mix-tray border border-palette-border rounded-lg p-6">
        <p className="text-muted-foreground text-center">
          Select up to 5 pigments to start mixing
        </p>
      </div>
    );
  }

  return (
    <div className="bg-mix-tray border border-palette-border rounded-lg p-4">
      <h3 className="text-sm font-medium text-foreground mb-3">
        Mix Tray ({selectedPigments.length}/5)
      </h3>
      <div className="flex flex-wrap gap-3">
        {selectedPigments.map((pigment, index) => {
          const brightness = getColorBrightness(pigment.rgb);
          const textColor = brightness > 0.5 ? 'text-gray-900' : 'text-white';
          
          return (
            <div
              key={`${pigment.name}-${index}`}
              className="relative group"
            >
              <div
                className="w-16 h-16 rounded-lg border-2 border-white shadow-palette flex items-center justify-center"
                style={{ backgroundColor: pigment.hex }}
              >
                <button
                  onClick={() => onRemovePigment(index)}
                  className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110"
                  aria-label={`Remove ${pigment.name}`}
                >
                  <X size={12} />
                </button>
              </div>
              <p className="text-xs text-center text-muted-foreground mt-1 truncate max-w-16">
                {pigment.name.split(' ')[0]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}