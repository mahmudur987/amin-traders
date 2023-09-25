import React from "react";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import AxiosBaseURL from "../../axios/AxiosConfig";
import { useQuery } from "@tanstack/react-query";
const WhatsAppWidgetPoupup = () => {
  const { data: AddressDetails } = useQuery({
    queryKey: ["extrah"],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/extrah");
      return data.data.data[0];
    },
  });

  const { phoneNumber } = AddressDetails || {};
  return (
    <div>
      <WhatsAppWidget
        phoneNumber={`${phoneNumber}`}
        message="Hello, how can I help you? "
        companyName="AMIN-TRADERS"
        replyTimeText="whithin this day"
        backgroundColor="#25D366"
        open
      />
    </div>
  );
};

export default WhatsAppWidgetPoupup;
