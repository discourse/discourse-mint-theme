import Component from "@ember/component";
import { classNames } from "@ember-decorators/component";
import { optionalRequire } from "discourse/lib/utilities";

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
  </template>
}
