import React from "react";

import {
  SORT_BY_OPTIONS,
  TRAITS_OPTIONS,
} from "../../../assets/MockData/dropdownsData";
import {
  BUTTONS_NFT_MAIN,
  NFT_BANNER_OPTIONS,
} from "../../../assets/MockData/mockData";
import NFTBanner from "../../Common/NFTBanner/NFTBanner";
import NFTSection from "../../Common/NFTSection/NFTSection";
import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import { StyledPageContainer } from "../Casino/styles";
import NFTNavigationHeader from "./NFTNavigationHeader";

const SportsAKBots = () => {
  return (
    <StyledPageContainer>
      <NFTBanner bannerOptions={NFT_BANNER_OPTIONS} />

      <NFTNavigationHeader buttons={BUTTONS_NFT_MAIN} />
      <div className="content-container">
        <SearchAndFilters
          hasSwitchToggle={true}
          labelSwitchToggle={"Mine only"}
          sortByOptions={SORT_BY_OPTIONS}
          traitsOptions={TRAITS_OPTIONS}
        />

        <NFTSection isLootbox={false} />
      </div>
    </StyledPageContainer>
  );
};

export default SportsAKBots;