import { SlArrowLeft } from "react-icons/sl";
import { MdNotificationsActive } from "react-icons/md";
import Menu from '../Menu';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Tire from './assest/cockade.png'

export default function Grab() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [add, setAdd] = useState(false);
  const [visible, setVisible] = useState(add);

  const alertHandle = () => {
    setAlert(false);
    setAdd(true);
  };

  useEffect(() => {
    if (add) {
      const timer = setTimeout(() => {
        setVisible(false);
        setAdd(false); // Hide the add animation after 5 seconds
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [add]);

  useEffect(() => {
    setVisible(add);
  }, [add]);

  return (
    <div className="mb-[100px]">
      <div className="fixed left-0 top-0 w-full h-[55px] bg-[#DB2252] text-white flex justify-between items-center p-4 text-xl">
        <div onClick={() => navigate(-1)}>
          <SlArrowLeft className="cursor-pointer" />
        </div>

        <Link to="/notify">
          <MdNotificationsActive className="cursor-pointer" />
        </Link>
      </div>

      <div className="container mt-[80px] flex flex-col items-center px-4 md:px-0">
        <div className="w-full max-w-[1100px] flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-6 md:mb-0">
            <h1 className="font-medium text-3xl">$120.00</h1>
            <p className="mt-1 text-gray-400 font-medium">account funds</p>
          </div>
          <Link to={'/recharge'} className="bg-[#DB2252] rounded-full w-[55px] h-[55px] cursor-pointer flex justify-center items-center text-white font-bold text-2xl">
            +
          </Link>
        </div>

        <div className="bg-[#DB2252] rounded-lg w-full max-w-[1100px] mt-10 p-3">
          <h1 className="text-white text-3xl font-medium">VIP<span>0</span></h1>
          <div className="w-full flex flex-col md:flex-row justify-between items-center text-center mt-4">
            <div className="w-full md:w-[33%] text-white text-xl font-normal mb-4 md:mb-0">
              <h1 className="text-3xl font-medium">1</h1>
              <p>Completed</p>
            </div>
            <div className="w-full md:w-[33%] text-white text-xl font-normal mb-4 md:mb-0">
              <h1 className="text-3xl font-medium">1</h1>
              <p>All Order</p>
            </div>
            <div className="w-full md:w-[33%] text-white text-xl font-normal">
              <h1 className="text-3xl font-medium">0</h1>
              <p>Uncompleted</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-3 w-full max-w-[1100px] flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="font-medium text-lg">$40</h1>
            <p className="text-gray-400">get a commission</p>
          </div>
          <div className="text-center md:text-right">
            <h1 className="font-medium text-lg">$0.00</h1>
            <p className="text-gray-400">frozen amount</p>
          </div>
        </div>

        <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-3 w-full max-w-[1100px] flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="font-medium text-lg">$0</h1>
            <p className="text-gray-400">uncompleted</p>
          </div>
          <div className="text-center md:text-right">
            <h1 className="font-medium text-lg">$120.00</h1>
            <p className="text-gray-400">available balance</p>
          </div>
        </div>

        <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-3 w-full max-w-[1100px] flex justify-center items-center">
          <button onClick={() => setAlert(true)} className="bg-[#DB2252] text-white w-[95%] rounded-3xl h-[45px]">START GRABBING ORDERS</button>
        </div>

        {/* Alert Message */}
        <div className={`${alert ? 'visible' : 'hidden'} fixed left-0 top-0 w-full h-[100vh] flex justify-center items-center`}>
          <div className="bg-white shadow-lg border border-gray-300 rounded-lg w-[95%] max-w-[700px] flex flex-col justify-center items-center">
            <h1 className="text-lg text-center p-3 pb-2">Congratulations, mission accomplished. Please contact your instructor to unlock additional tasks. Mission places are limited, please hurry up</h1>
            <button onClick={alertHandle} className="cursor-pointer mt-3 border-t border-t-gray-300 w-full p-2.5 text-[#DB2252] font-medium text-xl transition-all hover:bg-gray-200">ok</button>
          </div>
        </div>

        {/* Add Animation */}
        <div className={`${visible ? 'visible' : 'hidden'} fixed left-0 top-0 w-full h-[100vh] flex justify-center items-center bg-gray-900 bg-opacity-70`}>
          <div className="w-[250px] h-[250px]">
            <img src={Tire} alt="loading" className="w-full h-full rotate" />
          </div>
        </div>
      </div>

      <Menu />
    </div>
  );
}
