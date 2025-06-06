import Component from "@ember/component";
import { classNames } from "@ember-decorators/component";
import { optionalRequire } from "discourse/lib/utilities";

const TwoTopicList = optionalRequire(
  "discourse/plugins/discourse-showcased-categories/discourse/components/two-topic-list"
);
const SearchBanner = optionalRequire(
  "discourse/plugins/discourse-search-banner/discourse/components/search-banner"
);

@classNames("above-main-container-outlet", "mint-component-extensions")
export default class MintComponentExtensions extends Component {
  <template>
    {{#if SearchBanner}}
      <div class="search-banner">
        <SearchBanner />
      </div>
    {{/if}}

    {{#if TwoTopicList}}
      <TwoTopicList />
    {{/if}}
  </template>
}
