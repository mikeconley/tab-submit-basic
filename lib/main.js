const { Cu, Ci } = require("chrome");
let pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentScriptFile: "./content.js",
  onAttach: function(worker) {
    worker.port.on("clicked-form-element", function() {
      Cu.reportError("TEST 123");
    });
  }
});
