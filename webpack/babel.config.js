module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  return {
    presets: [
      ['@babel/preset-env', {
        modules: true,
      }],
      ['@babel/preset-react', { development: !api.env('production'), runtime: 'automatic' }],
    ],
    ...(!api.env('production') && { plugins: [['react-refresh/babel']] }),
  };
};
