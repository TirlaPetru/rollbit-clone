import React, { useState } from "react";

import {
  PROVIDER_OPTIONS,
  SORT_BY_OPTIONS,
} from "../../../assets/MockData/dropdownsData";
import { DATA_CONTENT } from "../../../assets/MockData/mockData";
import ImagesSection from "../../Common/ImagesSection/ImagesSection";
import NavigationHeader from "../../Common/NavigationHeader/NavigationHeader";
import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import LiveWinsSection from "../../Common/WinnerCard/LiveWinsSection";
import BonusBattlesWelcome from "../../Modals/BonusBattlesWelcome";
import { StyledPageContainer } from "./styles";

const BonusBattle = () => {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true);

  const closeWelcomeModal = () => {
    setIsWelcomeModalOpen(false);
  };

  const category = "Casino";
  const subcategory = "BONUS_BATTLE";

  return (
    <StyledPageContainer>
      <LiveWinsSection title="Live wins" hasFilters={true} />

      <NavigationHeader isNftPage={false} />
      <div className="content-container">
        <SearchAndFilters
          sortByOptions={SORT_BY_OPTIONS}
          providerOptions={PROVIDER_OPTIONS}
        />

        <ImagesSection
          category={category}
          subcategory={subcategory}
          images={DATA_CONTENT}
        />
      </div>

      <BonusBattlesWelcome
        isOpen={isWelcomeModalOpen}
        onClose={closeWelcomeModal}
      />
    </StyledPageContainer>
  );
};

export default BonusBattle;
