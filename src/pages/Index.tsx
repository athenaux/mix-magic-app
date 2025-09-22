import { useState } from 'react';
import { PIGMENTS, Pigment } from '@/data/pigments';
import { mixPigments, findClosestPigment } from '@/utils/colorMixing';
import { PigmentSwatch } from '@/components/PigmentSwatch';
import { MixTray } from '@/components/MixTray';
import { ColorResult } from '@/components/ColorResult';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';

const Index = () => {
  const [selectedPigments, setSelectedPigments] = useState<Pigment[]>([]);
  const [mixedColor, setMixedColor] = useState<{ hex: string; rgb: [number, number, number] } | null>(null);
  const [closestPigmentName, setClosestPigmentName] = useState<string>('');

  const handlePigmentSelect = (pigment: Pigment) => {
    setSelectedPigments(prev => {
      const isSelected = prev.some(p => p.name === pigment.name);
      
      if (isSelected) {
        // Remove pigment
        return prev.filter(p => p.name !== pigment.name);
      } else if (prev.length < 5) {
        // Add pigment (max 5)
        return [...prev, pigment];
      }
      
      return prev;
    });
  };

  const handleRemovePigment = (index: number) => {
    setSelectedPigments(prev => prev.filter((_, i) => i !== index));
  };

  const handleMixColors = () => {
    if (selectedPigments.length >= 2) {
      const result = mixPigments(selectedPigments);
      const closest = findClosestPigment(result.rgb);
      setMixedColor(result);
      setClosestPigmentName(closest);
    }
  };

  const handleStartOver = () => {
    setSelectedPigments([]);
    setMixedColor(null);
    setClosestPigmentName('');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Palette className="w-8 h-8 text-accent" />
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Color Mixer
            </h1>
          </div>
          <p className="text-muted-foreground">
            Mix up to 5 pigments to create unique colors
          </p>
        </div>

        {/* Mix Tray */}
        <div className="mb-6">
          <MixTray 
            selectedPigments={selectedPigments}
            onRemovePigment={handleRemovePigment}
          />
        </div>

        {/* Mix Button */}
        {selectedPigments.length >= 2 && (
          <div className="text-center mb-6">
            <Button 
              onClick={handleMixColors}
              size="circular-lg"
              className="bg-gradient-accent hover:opacity-90 transition-opacity hover:scale-105 active:scale-95"
            >
              <Palette className="w-6 h-6" />
            </Button>
          </div>
        )}

        {/* Color Result */}
        {mixedColor && (
          <div className="mb-8">
            <ColorResult
              mixedColor={mixedColor}
              closestPigmentName={closestPigmentName}
              onStartOver={handleStartOver}
            />
          </div>
        )}

        {/* Pigment Grid */}
        <div className="bg-palette border border-palette-border rounded-lg p-6 shadow-palette">
          <h2 className="text-lg font-semibold mb-4">
            Artist Pigments
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {PIGMENTS.map((pigment) => (
              <PigmentSwatch
                key={pigment.name}
                pigment={pigment}
                isSelected={selectedPigments.some(p => p.name === pigment.name)}
                onClick={() => handlePigmentSelect(pigment)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
