import React, { useState } from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { MdNotificationsActive } from "react-icons/md";



const BankForm = () => {
  const [formValues, setFormValues] = useState({
    bankName: "",
    realName: "",
    accountNumber: "",
    emailAddress: "",
    contactNumber: "",
    ifsc: "",
    password: ""
  });

  const [isFocused, setIsFocused] = useState({
    bankName: false,
    realName: false,
    accountNumber: false,
    emailAddress: false,
    contactNumber: false,
    ifsc: false,
    password: false
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field) => {
    setIsFocused({ ...isFocused, [field]: false });
  };

  return (
    <div className='flex flex-col items-center bg-white overflow-hidden'>
      <div className='fixed left-0 top-0 w-full h-[55px] bg-[#DB2252] text-white flex justify-between items-center p-4 text-xl'>
        <Link to={'/user'}>
          <SlArrowLeft className='cursor-pointer' />
        </Link>
        <h1 className='text-[17px] font-medium'>RECHARGE RECORD</h1>
        <Link to={'/notify'}>
          <MdNotificationsActive className='cursor-pointer' />
        </Link>
      </div>

      <div className="container w-full bg-white rounded px-8 pt-6 pb-8 mb-4 mt-[60px]">
        <h2 className="text-[16px] font-medium mb-6">YOUR BANK CARD INFORMATION</h2>

        <form className='flex flex-wrap justify-between items-center'>
          <select  className="mb-4 w-[100%] md:w-[48%] relative form-control rounded-3xl">
            
            {/* <input /> */}
                <option value="">Select Bank</option>
                <option value="IDPT0001">Canara Bank</option>
                <option value="IDPT0002">DCB Bank</option>
                <option value="IDPT0003">Federal Bank</option>
                <option value="IDPT0004">HDFC Bank</option>
                <option value="IDPT0005">PN Bank</option>
                <option value="IDPT0006">Bank of India</option>
                <option value="IDPT0007">ICICI Bank</option>
                <option value="IDPT0008">Syndicate Bank</option>
                <option value="IDPT0009">Karur Vysya Bank</option>
                <option value="IDPT0010">Union Bank of India</option>
                <option value="IDPT0011">Kotak M Bank</option>
              
        
            
            
            </select>

            
          {/* </select> */}

          {['realName', 'accountNumber', 'emailAddress', 'contactNumber', 'ifsc', 'password'].map(field => (
            <div className="mb-4 w-[100%] md:w-[48%] relative" key={field}>
              <label
                className={`absolute left-5 transition-all ${
                  isFocused[field] || formValues[field] ? 'top-[-12px] bg-white text-md text-pink-500' : 'top-1/2 transform -translate-y-1/2 text-gray-500'
                }`}
                htmlFor={field}
              >
                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1').trim()}
              </label>
              <input
                id={field}
                type={field === 'password' ? 'password' : 'text'}
                className={`border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                }`}
                value={formValues[field]}
                onChange={handleInputChange}
                onFocus={() => handleFocus(field)}
                onBlur={() => handleBlur(field)}
              />
            </div>
          ))}

          <div className="flex items-center justify-center w-[100%]">
            <button
              className="bg-pink-600 w-[100%] h-[50px] mt-3 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
              type="button"
            >
              CONFIRM MODIFICATION
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-[14px] mt-6">
          Please enter the real information with correct information, otherwise the withdrawal will not arrive.
          If you have any questions, please contact online customer service.
        </p>
      </div>
    </div>
  );
}

export default BankForm;
