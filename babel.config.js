module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./", // Esto hace que `@/` apunte a la raíz del proyecto
          },
        },
      ],
    ],
  };
};
