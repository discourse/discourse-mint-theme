// discourse/themes/mint/javascripts/discourse/initializers/custom_login_button.js.es6

import { attach } from "discourse/widgets/widget";
import { iconNode } from "discourse-common/lib/icon-library";

export default {
  name: "custom-login-button",
  initialize() {
    attach("button", {
      label: "log_in",
      className: "btn-primary btn-small login-button",
      action: "showLogin",
      icon: iconNode("user"),
    });
  },
};
