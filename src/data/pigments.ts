export interface Pigment {
  name: string;
  hex: string;
  rgb: [number, number, number];
}

export const PIGMENTS: Pigment[] = [
  // Reds
  { name: "Cadmium Red", hex: "#E30613", rgb: [227, 6, 19] },
  { name: "Alizarin Crimson", hex: "#E32636", rgb: [227, 38, 54] },
  { name: "Vermillion", hex: "#E34234", rgb: [227, 66, 52] },
  { name: "Rose Madder", hex: "#E3256B", rgb: [227, 37, 107] },
  { name: "Burnt Sienna", hex: "#8B4513", rgb: [139, 69, 19] },
  
  // Oranges
  { name: "Cadmium Orange", hex: "#FF6103", rgb: [255, 97, 3] },
  { name: "Raw Sienna", hex: "#D68910", rgb: [214, 137, 16] },
  { name: "Burnt Umber", hex: "#8B4513", rgb: [139, 69, 19] },
  { name: "Yellow Ochre", hex: "#CC7722", rgb: [204, 119, 34] },
  
  // Yellows
  { name: "Cadmium Yellow", hex: "#FFF600", rgb: [255, 246, 0] },
  { name: "Lemon Yellow", hex: "#FFF44F", rgb: [255, 244, 79] },
  { name: "Naples Yellow", hex: "#FADA5E", rgb: [250, 218, 94] },
  { name: "Raw Umber", hex: "#826644", rgb: [130, 102, 68] },
  { name: "Chrome Yellow", hex: "#FFA700", rgb: [255, 167, 0] },
  
  // Greens
  { name: "Viridian", hex: "#40826D", rgb: [64, 130, 109] },
  { name: "Sap Green", hex: "#507D2A", rgb: [80, 125, 42] },
  { name: "Chrome Green", hex: "#00FF7F", rgb: [0, 255, 127] },
  { name: "Hookers Green", hex: "#355E3B", rgb: [53, 94, 59] },
  { name: "Terre Verte", hex: "#56A0AE", rgb: [86, 160, 174] },
  { name: "Olive Green", hex: "#808000", rgb: [128, 128, 0] },
  
  // Blues
  { name: "Ultramarine Blue", hex: "#120A8F", rgb: [18, 10, 143] },
  { name: "Prussian Blue", hex: "#003153", rgb: [0, 49, 83] },
  { name: "Cerulean Blue", hex: "#007BA7", rgb: [0, 123, 167] },
  { name: "Cobalt Blue", hex: "#0047AB", rgb: [0, 71, 171] },
  { name: "Phthalo Blue", hex: "#000F89", rgb: [0, 15, 137] },
  { name: "Azure Blue", hex: "#007FFF", rgb: [0, 127, 255] },
  
  // Purples
  { name: "Dioxazine Purple", hex: "#5218FA", rgb: [82, 24, 250] },
  { name: "Quinacridone Violet", hex: "#8B00FF", rgb: [139, 0, 255] },
  { name: "Ultramarine Violet", hex: "#5D4E75", rgb: [93, 78, 117] },
  { name: "Permanent Violet", hex: "#C5007F", rgb: [197, 0, 127] },
  
  // Earth Tones
  { name: "Van Dyke Brown", hex: "#664228", rgb: [102, 66, 40] },
  { name: "Sepia", hex: "#704214", rgb: [112, 66, 20] },
  { name: "Payne's Gray", hex: "#536878", rgb: [83, 104, 120] },
  { name: "Mars Black", hex: "#1C1C1C", rgb: [28, 28, 28] },
  
  // Whites and Grays
  { name: "Titanium White", hex: "#FFFFFF", rgb: [255, 255, 255] },
  { name: "Zinc White", hex: "#FEFEFE", rgb: [254, 254, 254] },
  { name: "Ivory Black", hex: "#292421", rgb: [41, 36, 33] },
  { name: "Lamp Black", hex: "#2E2E2E", rgb: [46, 46, 46] },
  
  // Additional Colors
  { name: "Indian Red", hex: "#CD5C5C", rgb: [205, 92, 92] },
  { name: "Venetian Red", hex: "#C80815", rgb: [200, 8, 21] },
  { name: "Manganese Violet", hex: "#9C4A90", rgb: [156, 74, 144] },
  { name: "Cadmium Green", hex: "#006A4E", rgb: [0, 106, 78] },
  { name: "Prussian Green", hex: "#355E3B", rgb: [53, 94, 59] },
  { name: "Permanent Green", hex: "#00A693", rgb: [0, 166, 147] },
];