import React, { useState } from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import { MdNotificationsActive } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

export default function Recharge() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('');

  const Amount = [
    { id: 1, rupee: '200' },
    { id: 2, rupee: '500' },
    { id: 3, rupee: '1000' },
    { id: 4, rupee: '2000' },
    { id: 5, rupee: '3000' },
    { id: 6, rupee: '5000' },
    { id: 7, rupee: '8000' },
    { id: 8, rupee: '20000' },
    { id: 9, rupee: '50000' },
  ];

  const handleAmountClick = (rupee) => {
    setInputValue(rupee);
  };

  return (
    <div className="flex flex-col items-center bg-white overflow-hidden">
      <div className="fixed left-0 top-0 w-full h-[55px] bg-[#DB2252] text-white flex justify-between items-center p-4 text-xl">
        <div onClick={() => navigate(-1)}>
          <SlArrowLeft className="cursor-pointer" />
        </div>
        <h1 className="text-[17px] font-medium">RECHARGE</h1>
        <Link to="/notify">
          <MdNotificationsActive className="cursor-pointer" />
        </Link>
      </div>

      <div className="mt-16">
        <h1 className="mt-2">Recharge Amount</h1>
      </div>

      <div className="container h-auto">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="00.00"
          className="text-center placeholder-gray-300 placeholder:font-medium placeholder:text-lg focus:outline-none border p-2 rounded-3xl border-gray-300 w-full mt-3"
        />
        <div className="mt-3 flex justify-between items-center flex-wrap">
          {Amount.map((item) => (
            <div
              key={item.id}
              onClick={() => handleAmountClick(item.rupee)}
              className="flex justify-center cursor-pointer items-center w-[30%] h-[40px] border mt-2 hover:bg-pink-200"
            >
              {item.rupee}
            </div>
          ))}
        </div>

        {/* radio input  */}
        <div className="flex items-center justify-between w-max mt-3">
          <input
            type="radio"
            id="radio1"
            name="recharge"
            value="903"
            checked={selectedRadio === '903'}
            onChange={() => setSelectedRadio('903')}
            className="form-radio"
          />
          <label htmlFor="radio1" className="ml-2">903</label>
        </div>

        <div className="flex items-center justify-between w-max mt-3">
          <input
            type="radio"
            id="radio2"
            name="recharge"
            value="155"
            checked={selectedRadio === '155'}
            onChange={() => setSelectedRadio('155')}
            className="form-radio"
          />
          <label htmlFor="radio2" className="ml-2">155</label>
        </div>

        <div className="w-full shadow h-auto mt-4 p-4 mb-3 rounded-lg">
          <p>1 : If the recharge fails due to busy conditions, please choose another recharge channel to recharge your account.</p>
          <p>2 : everytime you recharge, you need to start from this page. Do not save UPI direct debit.</p>
          <p>3 : it is recommended to use Paytm or Google Pay first to avoid being unable to pay due to congestion.</p>
        </div>
      </div>

      <button className='w-[90%] h-[45px] bg-[#E91E63] mt-3 rounded-3xl text-white font-medium'>RECHARGE</button>
    </div>
  );
}
