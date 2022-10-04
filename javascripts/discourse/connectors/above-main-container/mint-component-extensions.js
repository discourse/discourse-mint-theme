import { getOwner } from "discourse-common/lib/get-owner";

export default {
  setupComponent(attrs, component) {
    if (getOwner(this).lookup("component:two-topic-list")) {
      component.set("showcasedCategoriesInstalled", true);
    }

    if (getOwner(this).lookup("component:search-banner")) {
      component.set("searchBannerInstalled", true);
    }
  },
};
