module.exports = {
  publicPath: process.env.VUE_APP_PATH,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Vue.js + TypeScript + Tailwind Boilerplate";
      return args;
    });
  },
};
