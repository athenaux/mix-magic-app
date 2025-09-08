import { Pigment, PIGMENTS } from '@/data/pigments';

/**
 * Convert RGB to CMYK for subtractive color mixing
 */
function rgbToCmyk(r: number, g: number, b: number): [number, number, number, number] {
  const rPercent = r / 255;
  const gPercent = g / 255;
  const bPercent = b / 255;

  const k = 1 - Math.max(rPercent, Math.max(gPercent, bPercent));
  const c = k === 1 ? 0 : (1 - rPercent - k) / (1 - k);
  const m = k === 1 ? 0 : (1 - gPercent - k) / (1 - k);
  const y = k === 1 ? 0 : (1 - bPercent - k) / (1 - k);

  return [c, m, y, k];
}

/**
 * Convert CMYK back to RGB
 */
function cmykToRgb(c: number, m: number, y: number, k: number): [number, number, number] {
  const r = Math.round(255 * (1 - c) * (1 - k));
  const g = Math.round(255 * (1 - m) * (1 - k));
  const b = Math.round(255 * (1 - y) * (1 - k));

  return [Math.max(0, Math.min(255, r)), Math.max(0, Math.min(255, g)), Math.max(0, Math.min(255, b))];
}

/**
 * Mix colors using subtractive color mixing (like real pigments)
 */
export function mixPigments(pigments: Pigment[]): { hex: string; rgb: [number, number, number] } {
  if (pigments.length === 0) {
    return { hex: "#FFFFFF", rgb: [255, 255, 255] };
  }

  if (pigments.length === 1) {
    return { hex: pigments[0].hex, rgb: pigments[0].rgb };
  }

  // Convert all pigments to CMYK
  const cmykValues = pigments.map(pigment => {
    const [r, g, b] = pigment.rgb;
    return rgbToCmyk(r, g, b);
  });

  // Average the CMYK values (weighted approach for better mixing)
  let totalC = 0, totalM = 0, totalY = 0, totalK = 0;

  cmykValues.forEach(([c, m, y, k]) => {
    totalC += c;
    totalM += m;
    totalY += y;
    totalK += k;
  });

  const count = cmykValues.length;
  const avgC = totalC / count;
  const avgM = totalM / count;
  const avgY = totalY / count;
  const avgK = totalK / count;

  // Add some mixing logic to simulate pigment interaction
  // Darker colors tend to dominate when mixed
  const dominanceFactor = 1.2;
  const mixedC = Math.min(1, avgC * dominanceFactor);
  const mixedM = Math.min(1, avgM * dominanceFactor);
  const mixedY = Math.min(1, avgY * dominanceFactor);
  const mixedK = Math.min(1, avgK * dominanceFactor);

  // Convert back to RGB
  const [r, g, b] = cmykToRgb(mixedC, mixedM, mixedY, mixedK);

  // Convert to hex
  const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();

  return { hex, rgb: [r, g, b] };
}

/**
 * Find the closest matching pigment name for a given RGB color
 */
export function findClosestPigment(targetRgb: [number, number, number]): string {
  let closestPigment = PIGMENTS[0];
  let smallestDistance = Infinity;

  const [targetR, targetG, targetB] = targetRgb;

  PIGMENTS.forEach(pigment => {
    const [r, g, b] = pigment.rgb;
    // Calculate Euclidean distance in RGB space
    const distance = Math.sqrt(
      Math.pow(targetR - r, 2) +
      Math.pow(targetG - g, 2) +
      Math.pow(targetB - b, 2)
    );

    if (distance < smallestDistance) {
      smallestDistance = distance;
      closestPigment = pigment;
    }
  });

  return closestPigment.name;
}

/**
 * Calculate color brightness (for determining text color)
 */
export function getColorBrightness(rgb: [number, number, number]): number {
  const [r, g, b] = rgb;
  // Using the luminance formula
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}