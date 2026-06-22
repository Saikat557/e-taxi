const CaptainSignup =(props)=>{
    
    return (
      <main className={`border-1 h-auto absolute top-0  border-yellow-400 rounded-md px-2  w-full py-10 bg-yellow-50 flex flex-col items-center justify-center gap-10 ease-in-out duration-500  ${props.loginPanel?"translate-x-100":"translate-x-0"}`}>
       <h1 className=" text-2xl font-semibold border-b-2 pb-2 w-full text-center">Create Your New Rider Account</h1>
        <div className="flex flex-col gap-5 w-full px-2">
            <div className="flex flex-col  w-full">
                <label className="font-semibold">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full  outline-none border-1 rounded-sm px-2 py-1 border-gray-400 bg-gray-200" />
            </div>
            <div className="flex flex-col  w-full">
                <label className="font-semibold">Email Adress</label>
                <input type="text" placeholder="example@gmail.com" className="w-full  outline-none border-1 rounded-sm px-2 py-1 border-gray-400 bg-gray-200" />
            </div>
            <div className="flex flex-col  w-full">
                <label className="font-semibold">Password</label>
                <input type="text" placeholder="••••••" className="w-full  outline-none border-1 rounded-sm px-2 py-1 border-gray-400 bg-gray-200" />
            </div>
            <div>
                <p className="mb-2 text-gray-400">Vehicle Details</p>
                <div className="grid grid-cols-2 gap-5">
                     <div className="flex flex-col  w-full">
                <label className="font-semibold" for="vehicle-type">Vehicle Type</label>
               <select id="vehicle-type" className="outline-none border-2 rounded-sm px-2 py-1 bg-gray-200 border-gray-400" >
                <option value="" selected disabled>select your vehicle</option>
                <option value="taxi">Taxi</option>
                <option value="bike">Bike</option>
                <option value="car">Car</option>
               </select>
                            </div>
             <div className="flex flex-col  w-full">
                <label className="font-semibold">Regd. No.</label>
                <input type="text" placeholder="WB 30A 1234" className="w-full  outline-none border-1 rounded-sm px-2 py-1 border-gray-400 bg-gray-200" />
            </div>
             <div className="flex flex-col  w-full">
                <label className="font-semibold">Capacity</label>
                <input type="text" placeholder="Enter how many person can sit " className="w-full  outline-none border-1 rounded-sm px-2 py-1 border-gray-400 bg-gray-200" />
            </div>
             <div className="flex flex-col  w-full">
                <label className="font-semibold">Vehicle Color</label>
                <input type="text" placeholder="Mention your vehicle color" className="w-full  outline-none border-1 rounded-sm px-2 py-1 border-gray-400 bg-gray-200" />
            </div>
                </div>
            </div>
            <button className="bg-[#f9af1a] shadow-lg shadow-yellow-400/50 active:scale-95 ease-in-out duration-300 rounded-md text-xl font-medium py-2">Sign Up</button>
        </div>
      </main>
    )
}
export default CaptainSignup