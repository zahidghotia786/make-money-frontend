import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Notify from './components/Notify';
import User from './userComponent/User';
import Withdraw from './userComponent/Linkcomponents/Withdraw';
import RechargeRecord from './userComponent/Linkcomponents/RechargeRecord';
import WithdrawRecord from './userComponent/Linkcomponents/WithdrawRecord';
import AccountDetal from './userComponent/Linkcomponents/AcountDetail';
import Address from './userComponent/Linkcomponents/Address';
import BankForm from './userComponent/Linkcomponents/Bankform';
import PasswordChange from './userComponent/Linkcomponents/PasswordChange';
import PasswordWithdraw from './userComponent/Linkcomponents/PasswordWithdraw';
import Recharge from './components/homeComponent/Recharge';
import InviteLink from './components/homeComponent/InviteLink';
import About from './components/homeComponent/About';
import HelpCenter from './components/homeComponent/Helpcenter';
import MerchantCenter from './components/Marchant';
import InviteReward from './components/homeComponent/InviteReward';
import Task from './components/Task';
import GrabLevel from './components/homeComponent/Grab';
import Login from './components/Login';



export default function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>

          <Route path='/' element={<Login />}></Route>
          <Route path="/home" element={<Home/>} > </ Route>
          <Route path='/task' element={<Task />}></Route>
          <Route path="/grab" element={<GrabLevel />}></Route>
          <Route path="/notify" element={<Notify/>}> </ Route>
          <Route path='/user' element={<User />}></Route>
          <Route path='/withdraw' element={<Withdraw />}></Route>
          <Route path='/recharge' element={<Recharge />}></Route>
          <Route path='/invite' element={<InviteLink />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/help' element={<HelpCenter />}></Route>
          <Route path='/merchant' element={<MerchantCenter />}></Route>
          <Route path='/invitereward' element={<InviteReward />}></Route>
          <Route path='/rechargerecord' element={<RechargeRecord />}></Route>
          <Route path='/withdrawrecord' element={<WithdrawRecord />}></Route>
          <Route path='/accountdetail' element={<AccountDetal />}></Route>
          <Route path='/address' element={<Address />}></Route>
          <Route path='/bankform' element={<BankForm />}></Route>
          <Route path='/changepassword' element={<PasswordChange />}></Route>
          <Route path='/passwordwithdraw' element={<PasswordWithdraw />}></Route>

       </Routes>
      </BrowserRouter>
    </div>
  )
}
