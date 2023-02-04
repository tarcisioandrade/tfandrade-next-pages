const path = require("path");

/** @type import("next").I18NConfig */
const i18n = {
  locales: ["en", "pt"],
  defaultLocale: "en",
  localeDetection: false,
};

/** @type import("next").I18NConfig */
const next18nextConfig = {
  i18n,
  keySeparator: ".",
  nsSeparator: ":",
  localePath: path.resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === "development",
};

module.exports = next18nextConfig;
