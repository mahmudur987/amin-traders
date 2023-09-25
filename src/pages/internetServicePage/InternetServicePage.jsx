import InternetserviceBanner from "../../components/InternetServicePage/Banner/InternetServiceBanner";
import ConnectionSupport from "../../components/InternetServicePage/ConnectionAndSupport/ConnectionSupport";
import HotOffer from "../../components/InternetServicePage/HotOffer/HotOffer";
import HowToConnect from "../../components/InternetServicePage/HowtoConnect/HowToConnect";
import InternetPackages from "../../components/InternetServicePage/InternetPackages/InternetPackages";

const InternetService = () => {
  return (
    <div className="flex flex-col gap-20">
      <InternetserviceBanner />
      <HowToConnect />
      <InternetPackages />
      {/* <HotOffer /> */}
      <ConnectionSupport />
    </div>
  );
};

export default InternetService;
