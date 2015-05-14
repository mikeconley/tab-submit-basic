let pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentScriptFile: "./content.js",
});
