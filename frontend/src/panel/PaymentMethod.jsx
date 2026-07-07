import { ArrowLeft } from "lucide-react";
import { useState } from "react";
const PaymentMethod = ({ paymentMethodPanel, setPaymentMethodPanel,setRiderSearchingPanel }) => {
  const [cashBtn, setCashBtn] = useState(true);
  const [gpayBtn, setGpayBtn] = useState(false);
  const [phonpeBtn, setPhonepeBtn] = useState(false);
  const [paytmBtn, setPaytmBtn] = useState(false);

  return (
    <div
      className={`h-[75%] w-full max-w-[400px] bg-white z-4 absolute bottom-0 overflow-y-auto py-10 px-5 z-5 absolute ease-in-out duration-500 ${paymentMethodPanel ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="flex items-center justify-start gap-20">
        <ArrowLeft
          size={20}
          strokeWidth={2.75}
          onClick={() => {
            setPaymentMethodPanel(false);
          }}
        />
        <div className="text-xl font-semibold">Payment Methods</div>
      </div>
      <div className="mt-5 ">
        <h2 className="text-lg font-semibold mb-5">Cash</h2>
        <div
          className={`w-full flex items-center justify-between px-4 py-2 ease-in-out duration-300 active:scale-95  rounded-lg mb-5 min-h-[60px] ${cashBtn ? "bg-green-600/30" : "bg-gray-200 "}`}
          onClick={()=>{
            setCashBtn(true)
            setGpayBtn(false)
            setPhonepeBtn(false)
            setPaytmBtn(false)
          }}
        >
          <label  className="flex items-center gap-3 ">
            <div className="size-10 backdrop-blur-[20px] bg-green-400/30 rounded-full p-1 flex items-center  justify-center overflow-hidden">
              <img
                src="/image/cod.png"
                alt="cod-icon"
                className="size-full  "
              />
            </div>

            <h2 className="text-lg font-semibold">cash</h2>
          </label>
        </div>
      </div>
      <div className="mb-3">
        <h1 className="text-lg font-semibold">More Payment Methods</h1>
      </div>
      <div className="flex flex-col gap-4 mb-5">
        <div  className={`w-full flex items-center justify-between px-4 py-2 active:scale-95 ease-in-out duration-300  rounded-lg min-h-[60px]  ${gpayBtn ? "bg-green-600/30" : "bg-gray-200 "}`}
         onClick={()=>{
            setCashBtn(false)
            setGpayBtn(true)
            setPhonepeBtn(false)
            setPaytmBtn(false)
          }}>
          <label  className="flex items-center gap-3 ">
            <img
              src="/image/g-pay-icon.png"
              alt="cod-icon"
              className="size-10  "
            />

            <h2 className="text-lg font-semibold">G-Pay</h2>
          </label>

          
        </div>
        <div className={`w-full flex items-center justify-between px-2 py-2 active:scale-95 ease-in-out duration-300 rounded-lg min-h-[60px]  ${phonpeBtn ? "bg-green-600/30" : "bg-gray-200 "}`}
         onClick={()=>{
            setCashBtn(false)
            setGpayBtn(false)
            setPhonepeBtn(true)
            setPaytmBtn(false)
          }}>
          <label className="flex items-center gap-3 ">
            <img
              src="/image/phonepe-logo.png"
              alt="cod-icon"
              className="h-10 w-11"
            />

            <h2 className="text-lg font-semibold">Phone Pay</h2>
          </label>

         
        </div>
        <div  className={`w-full flex items-center justify-between px-4 py-2 active:scale-95 ease-in-out duration-300 rounded-lg min-h-[60px] ${paytmBtn ? "bg-green-600/30" : "bg-gray-200 "}`}
         onClick={()=>{
            setCashBtn(false)
            setGpayBtn(false)
            setPhonepeBtn(false)
            setPaytmBtn(true)
          }}
        >
          <label  className="flex items-center gap-3 ">
            <img
              src="/image/paytm-logo.png"
              alt="cod-icon"
              className="size-7 rounded-md  "
            />

            <h2 className="text-lg font-semibold">Paytm</h2>
          </label>

          
        </div>
      </div>
      <button className="w-full bg-green-600 text-lg font-semibold py-2 rounded-md"
      onClick={()=>{
        setPaymentMethodPanel(false)
        setRiderSearchingPanel(true)
      }}
      >
        confirm
      </button>
    </div>
  );
};
export default PaymentMethod;
