import plugin from 'tailwindcss/plugin';

import colors from './config/tailwind.colors';
import tailwindUtils from './config/tailwind.utils';

module.exports = {
  theme: {
    colors: colors,
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(tailwindUtils);
    }),
  ],
};
