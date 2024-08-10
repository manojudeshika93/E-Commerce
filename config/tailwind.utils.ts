const textLevels = [
  { level: 'h1', fontSize: 40, lineHeight: 48 },
  { level: 'h2', fontSize: 30, lineHeight: 40 },
  { level: 'h3', fontSize: 20, lineHeight: 30 },
  { level: 'b1', fontSize: 16, lineHeight: 24 },
  { level: 'b2', fontSize: 14, lineHeight: 22 },
  { level: 'b3', fontSize: 12, lineHeight: 20 },
];

const fontFamilies = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semibold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
};

const styles: Record<string, any> = {};

textLevels.forEach(({ level, fontSize, lineHeight }) => {
  Object.entries(fontFamilies).forEach(([name, fontFamily]) => {
    styles[`.text-${level}-${name}`] = {
      fontSize,
      lineHeight,
      fontFamily,
    };
  });
});

textLevels.forEach(({ level, fontSize, lineHeight }) => {
  styles[`.text-${level}`] = {
    fontSize,
    lineHeight,
    fontFamily: fontFamilies.regular,
  };
});

styles['center-full'] = `justify-center items-center`;

export default styles;
