import React from "react";
import Banner from "../../../components/Banner";
import PromotionalCampaign from "../../../components/Promotional__Campaign/promotional";
import DealsToday from "../../../components/Deals_Today/DealsToday";
import FeaturedCPU from "../../../components/Featured_CPU/FeaturedCPU";

function Home() {
  return (
    <>
      <Banner />
      <PromotionalCampaign />
      <DealsToday />
      <FeaturedCPU />
    </>
  );
}

export default Home;
