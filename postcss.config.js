const purgecssConfig = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./src/**/*.js'],
    whitelist: ['html', 'body'],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

const purgeCSS = process.env.NODE_ENV === 'production' ? [purgecssConfig] : [];

module.exports = {
  plugins: ['tailwindcss', ...purgeCSS],
};
