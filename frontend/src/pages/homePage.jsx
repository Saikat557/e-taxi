import {Link} from "react-router-dom"
const homePage = () => {
  return (
    <div className="px-4 py-8 h-screen flex flex-col justify-between items-center overflow-hidden ">
      <section className="w-full px-4">
        <div className="bg-gradient-to-b from-gray-100 to-gray-300 w-full  flex flex-col justify-center items-center custom-shape gap-20 py-4">
          <div className="flex flex-col items-center justify-center  gap-2">
            <img src="/image/loc icon.png" alt="" className="size-10" />
            <img src="/image/taxi.png" alt="loading" className="h-40 w-70" />
          </div>

          <div className="mb-10 text-center">
            <h1 className="text-3xl font-medium ">Book Your Ride</h1>
            <h3 className="text-xl ">Simply</h3>
          </div>
        </div>
      </section>

      <section>
        <button className="bg-[#ffbe30] px-7 text-lg rounded-xl text-black py-2 shadow-lg shadow-yellow-400/50 cursor-pointer"><Link to="/user/account">start</Link></button>
      </section>
    </div>
  );
};
export default homePage;
