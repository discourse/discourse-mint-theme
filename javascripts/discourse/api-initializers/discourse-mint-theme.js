import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.11.1", (api) => {
  api.onPageChange(() => {
    const mintHeaderItems = document.querySelector(".mint-header-elements");
    if (mintHeaderItems) {
      return;
    } else {
      // This is done to ensure ordering of search banner followed by showcased topic list

      // Find relevant elements
      const showcasedTopicList = document.querySelector(
        ".above-main-container-outlet.showcased-topic-list"
      );
      const searchBanner = document.querySelector(
        ".above-main-container-outlet.search-banner"
      );
      const mainContainer = document.querySelector("#main-container");

      // Add necessary classes
      showcasedTopicList.classList.add("mint-showcased-topic-list");
      searchBanner.classList.add("mint-search-banner");

      // Create wrapper div and append elements
      const wrapper = document.createElement("div");
      wrapper.classList.add("mint-header-elements");
      wrapper.appendChild(searchBanner);
      wrapper.appendChild(showcasedTopicList);

      // Add new wrapper with re-ordered elements to main container
      mainContainer.before(wrapper, mainContainer);
    }
  });
});
