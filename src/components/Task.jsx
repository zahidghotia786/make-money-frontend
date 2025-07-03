import React, { useState, useEffect } from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import { MdNotificationsActive } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const Task = () => {
  const navigate = useNavigate();
  const [investAmount, setInvestAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState('');
  const [customBonus, setCustomBonus] = useState(0);
  const [investmentStarted, setInvestmentStarted] = useState(false);

  useEffect(() => {
    if (investAmount > 0) {
      const element = document.getElementById('investment-details');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [investAmount]);

  const handleInvestment = (amount, bonus) => {
    setInvestAmount(amount);
    setCustomAmount('');
    setCustomBonus(bonus);
    setInvestmentStarted(true);
    saveInvestmentPlan(amount, bonus);
  };

  const handleCustomInvestment = () => {
    const amount = parseFloat(customAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid investment amount.');
      return;
    }
    const bonus = amount * 0.02; // 2% daily bonus calculation
    setInvestAmount(amount);
    setCustomBonus(bonus.toFixed(2)); // Round bonus to 2 decimal places
    setInvestmentStarted(true);
    saveInvestmentPlan(amount, bonus);
  };

  const handleChangeCustomAmount = (event) => {
    setCustomAmount(event.target.value);
  };

  const handleSubmitInvestment = () => {
    if (investAmount > 0) {
      saveInvestmentPlan(investAmount, customBonus > 0 ? customBonus : (investAmount * 0.02).toFixed(2));
      alert(`Investment of $${investAmount} submitted successfully!`);
    } else {
      alert('Please select an investment plan first.');
    }
  };

  const saveInvestmentPlan = (amount, bonus) => {
    const plan = { amount, bonus };
    localStorage.setItem('investplan', JSON.stringify(plan));
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="fixed left-0 top-0 w-full h-[55px] bg-[#DB2252] text-white flex justify-between items-center p-4 text-xl">
        <div onClick={() => navigate(-1)}>
          <SlArrowLeft className="cursor-pointer" />
        </div>
        <h1 className="text-lg">TASK</h1>
        <Link to="/notify">
          <MdNotificationsActive className="cursor-pointer" />
        </Link>
      </div>

      <h2 className="text-3xl font-bold text-center my-6 mt-[90px]">Investment Plans</h2>
      <p className="text-lg text-center text-gray-700 mb-8 p-5 pt-0">
        Ready to grow your wealth? Our investment plans offer a range of options tailored to your financial goals. Whether you're starting small or aiming high, each plan is designed to maximize your returns with daily bonuses that compound over time. Take advantage of our Starter Plan for a gentle introduction, or dive into our Premium Plan for the highest daily returns. With transparent benefits and a commitment to your financial success, investing with us is a smart choice. Begin your journey today and watch your investments flourish.
      </p>

      <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-2">Starter Plan</h3>
          <p className="text-gray-600 mb-4 text-center">
            Begin your investment journey with a modest amount. This plan is perfect for those new to investing or for those looking to test the waters. With a low entry threshold, you can start investing with just $100, making it accessible to everyone. The Starter Plan offers a daily bonus of $2, allowing you to see gradual growth. 
          </p>
          <p className="text-xl font-semibold mb-4">Invest: $100</p>
          <p className="text-xl font-semibold mb-4">Daily Bonus: $2</p>
          <button
            className="bg-[#DB2252] hover:bg-[#FF3366] text-white py-2 px-4 rounded-md transition duration-300"
            onClick={() => handleInvestment(100, 2)}
          >
            Choose Plan
          </button>
        </div>

        <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-2">Growth Plan</h3>
          <p className="text-gray-600 mb-4 text-center">
            Accelerate your returns with a higher initial investment. This plan is designed for those who are looking to significantly grow their wealth over a shorter period. With an investment of $300, you will receive a daily bonus of $6, compounding your returns faster.
          </p>
          <p className="text-xl font-semibold mb-4">Invest: $300</p>
          <p className="text-xl font-semibold mb-4">Daily Bonus: $6</p>
          <button
            className="bg-[#DB2252] hover:bg-[#FF3366] text-white py-2 px-4 rounded-md transition duration-300"
            onClick={() => handleInvestment(300, 6)}
          >
            Choose Plan
          </button>
        </div>

        <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-2">Premium Plan</h3>
          <p className="text-gray-600 mb-4 text-center">
            Maximize your earnings potential with our highest returns. Ideal for serious investors, the Premium Plan offers the best daily returns on your investment. By investing $500, you will receive a daily bonus of $10, ensuring substantial growth of your portfolio.
          </p>
          <p className="text-xl font-semibold mb-4">Invest: $500</p>
          <p className="text-xl font-semibold mb-4">Daily Bonus: $10</p>
          <button
            className="bg-[#DB2252] hover:bg-[#FF3366] text-white py-2 px-4 rounded-md transition duration-300"
            onClick={() => handleInvestment(500, 10)}
          >
            Choose Plan
          </button>
        </div>

        <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-2">Custom Plan</h3>
          <p className="text-gray-600 mb-4 text-center">
            Define your investment amount for a personalized plan. Our Custom Plan allows you to choose your investment amount, tailored to your financial capabilities and goals. Enjoy a 2% daily bonus on your custom amount, compounding daily to enhance your returns.
          </p>
          <input
            type="number"
            placeholder="Enter Amount"
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 text-xl text-center w-full"
            value={customAmount}
            onChange={handleChangeCustomAmount}
          />
          <button
            className="bg-[#DB2252] hover:bg-[#FF3366] text-white py-2 px-4 rounded-md transition duration-300"
            onClick={handleCustomInvestment}
          >
            Customize Plan
          </button>
        </div>
      </div>

      <div id="investment-details" className="container mx-auto mt-6 p-6 bg-white rounded-lg shadow flex flex-col items-center justify-center">
        {investmentStarted && (
          <>
            <h3 className="text-xl font-semibold mb-2">Investment Details</h3>
            <p>Investment Amount: ${investAmount}</p>
            <p>
              Daily Bonus: $
              {customBonus > 0 ? customBonus : (investAmount * 0.02).toFixed(2)}
            </p>
            <button
              className="bg-[#4CAF50] hover:bg-[#45A049] text-white py-2 px-4 rounded-md mt-4 transition duration-300"
              onClick={handleSubmitInvestment}
            >
              Submit Investment
            </button>
          </>
        )}
      </div>

      <footer className="w-full bg-[#DB2252] text-white py-4 mt-12">
        <div className="container mx-auto">
          <p className="text-xl font-semibold text-center">Investment Guidance</p>
          <p className="text-sm mb-2 mt-10">
            Our goal is to help you make informed investment decisions. Here are a few tips to get you started:
          </p>
          <ul className="text-sm mb-4 list-disc list-inside">
            <li>Start with an amount you are comfortable investing.</li>
            <li>Diversify your investments to spread risk.</li>
            <li>Reinvest your earnings to maximize growth.</li>
            <li>Keep an eye on market trends and adjust your strategy accordingly.</li>
            <li>Consult with a financial advisor for personalized advice.</li>
          </ul>
          <p className="text-sm">
            At our company, we strive to provide you with the tools and knowledge to make smart investment choices.
          </p>
          <p className="text-sm">
               For more information and resources, visit our Help Center or contact our support team.
          </p>
          <p className="text-sm">
             Stay informed, stay proactive, and watch your investments grow.
          </p> 
          
            <div className='flex flex-col sm:flex-row justify-between items-center text-center'>
            <p className="text-sm mt-4">&copy; 2024 Investment Company. All rights reserved.</p>
            <p className="text-sm mt-4">
              Developed by 
            <a href="https://api.whatsapp.com/send/?phone=923082769473"> Ghotia Developers</a>
            </p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Task;
