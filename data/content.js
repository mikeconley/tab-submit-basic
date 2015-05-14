const TabSubmit = {
  init() {
    addEventListener("unload", this, false);
    addEventListener("mousedown", this, true);
    addEventListener("click", this, true);
  },

  uninit() {
    removeEventListener("unload", this, false);
    removeEventListener("mousedown", this, true);
    removeEventListener("click", this, true);
  },

  handleEvent(event) {
    switch(event.type) {
      case "unload":
        this.uninit();
        break;
      case "mousedown":
        this.onMousedown(event);
        break;
      case "click":
        this.onClick(event);
        break;
    }
  },

  onMousedown(event) {
    if (event.button == 1 && this.isFormButton(event.originalTarget)) {
      event.preventDefault();
      event.stopPropagation();
    }
  },

  onClick(event) {
    let metas = event.ctrlKey || event.metaKey || event.shiftKey;
    if (event.button == 1 || (event.button == 0 && metas)) {
      let target = event.originalTarget;
      if (this.isFormButton(target)) {
        let form = target.form;
        let oldTarget = form.getAttribute("target");
        let oldFormTarget = form.getAttribute("formtarget");

        form.setAttribute("target", "_blank");
        form.setAttribute("formtarget", "_blank");

        event.preventDefault();
        event.stopPropagation();
        target.click();

        if (oldTarget) {
          form.setAttribute("target", oldTarget);
        } else {
          form.removeAttribute("target");
        }

        if (oldFormTarget) {
          form.setAttribute("formtarget", oldFormTarget);
        } else {
          form.removeAttribute("formtarget");
        }
      }
    }
  },

  isFormButton(node) {
    if (node instanceof HTMLButtonElement) {
      return true;
    }

    if (node instanceof HTMLInputElement) {
      if (node.hasAttribute("type")) {
        let type = node.getAttribute("type").toLowerCase();
        if (["submit", "button", "image"].indexOf(type) != -1) {
          return true;
        }
      }
    }

    return false;
  },

};

TabSubmit.init();
