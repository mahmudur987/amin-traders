import InternetServiceBanner from "../../components/InternetServicePage/Banner/InternetServiceBanner";
import ConnectionSupport from "../../components/InternetServicePage/ConnectionAndSupport/ConnectionSupport";
import HotOffer from "../../components/InternetServicePage/HotOffer/HotOffer";
import HowToConnect from "../../components/InternetServicePage/HowtoConnect/HowToConnect";
import InternetPackages from "../../components/InternetServicePage/InternetPackages/InternetPackages";

const InternetService = () => {
  return (
    <div className="flex flex-col gap-20">
      <InternetServiceBanner />
      <HowToConnect />
      <InternetPackages />
      <HotOffer />
      <ConnectionSupport />
    </div>
  );
};

export default InternetService;
