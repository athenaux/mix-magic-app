import { getColorBrightness } from '@/utils/colorMixing';
import { cn } from '@/lib/utils';
import { Copy, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ColorResultProps {
  mixedColor: { hex: string; rgb: [number, number, number] };
  closestPigmentName: string;
  onStartOver: () => void;
}

export function ColorResult({ mixedColor, closestPigmentName, onStartOver }: ColorResultProps) {
  const { toast } = useToast();
  const brightness = getColorBrightness(mixedColor.rgb);
  const textColor = brightness > 0.5 ? 'text-gray-900' : 'text-white';

  const handleCopyColor = async () => {
    const colorInfo = `${mixedColor.hex} - ${closestPigmentName}`;
    try {
      await navigator.clipboard.writeText(colorInfo);
      toast({
        title: "Color copied!",
        description: `${colorInfo} copied to clipboard`,
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Could not copy color information",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4">
      <div
        className="w-full h-32 rounded-lg shadow-result border-2 border-white flex items-center justify-center"
        style={{ backgroundColor: mixedColor.hex }}
      >
        <div className="text-center">
          <p className={cn("text-lg font-bold", textColor)}>
            {mixedColor.hex}
          </p>
          <p className={cn("text-sm opacity-90", textColor)}>
            {closestPigmentName}
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <Button onClick={handleCopyColor} variant="outline" className="flex-1">
          <Copy size={16} className="mr-2" />
          Copy Color Info
        </Button>
        <Button onClick={onStartOver} variant="outline">
          <RotateCcw size={16} className="mr-2" />
          Start Over
        </Button>
      </div>
    </div>
  );
}