import { getOwner } from "discourse-common/lib/get-owner";

export default {
  setupComponent(attrs, component) {
    // getOwner(this).lookup("component:two-topic-list");
    if (getOwner(this).registry.resolve("component:two-topic-list")) {
      // component.set("showcasedCategoriesInstalled");
      this.set("showcasedCategoriesInstalled");
    }
  },
};
