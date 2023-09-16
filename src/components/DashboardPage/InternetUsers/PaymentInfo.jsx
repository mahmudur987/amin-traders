/* eslint-disable react/prop-types */
const PaymentInfo = ({ paymentData }) => {
  return (
    <div className={` rounded-lg shadow-lg p-4`}>
      <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {paymentData?.PaymentInfo?.map((monthData, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between  border border-gray-300 p-2  ${
              monthData?.status ? "bg-green-200" : "bg-red-200"
            }`}
          >
            <span className="font-bold text-xl">{monthData.MonthName}</span>
            <span>Status: {monthData.status ? "Paid" : "Pending"}</span>
            <span>Bill Amount: {monthData.billAmount}</span>
            <span>Date of Bill: {monthData.DateOfBill.slice(3, 16)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentInfo;
