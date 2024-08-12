module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          safe: true, // Optional: ensures all environment variables are defined
          allowUndefined: true, // Optional: allows undefined variables
        },
      ],
    ]
  };
};
