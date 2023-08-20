import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './Components/UserPage';
import WalletPage from './Components/WalletPage';
import HistoryPage from './Components/HistoryPage';
import ProfilePage from './Components/ProfilePage';
import ReferandEarn from './Components/ReferandEarn';
import SpinadnWin from './Components/SpinadnWin';
import LanguagesPage from './Components/LanguagesPage';
import SupportPage from './Components/SupportPage';
import LegalPage from './Components/LegalPage';
import AddChipsPage from './Components/AddChipsPage';
import WithDrawPage from './Components/WithDrawPage';
import PalyPage from './Components/PlayPage';
import FirstGame from './GameTypes/FirstGame';
import MainPage from './Components/MainPage';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import SecondPage from './Components/SecondPage';
import EnterFirstGame from './GameTypes/EnterFirstGame';
import OTPPage from './Components/OTPPage';
import SignUpPage from './Components/SignUpPage';

export const AuthContext = createContext()
function App() {

  
 
const[user,setUser]=useState({
  name:'',
  memberType:'',
  userID:''
})
  return (
    <>
<AuthContext.Provider value={{user,setUser}}>

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<MainPage />}></Route>
          <Route exact path='/RegisterPage' element={<RegisterPage />}></Route>
          <Route exact path='/LoginPage' element={<LoginPage />}></Route>
          <Route exact path='/OTPPage' element={<OTPPage />} />
          <Route exact path='/UserPage' element={<UserPage />}></Route>
          <Route exact path='/SignUpPage' element={<SignUpPage />}></Route>
          <Route exact path='/PlayPage' element={<PalyPage />}></Route>
          <Route exact path='/FirstGame' element={<FirstGame />}></Route>
          <Route exact path='/EnterFirstGame' element={<EnterFirstGame />}></Route>
          <Route exact path='/SecondPage' element={<SecondPage />}></Route>
          <Route exact path='/WalletPage' element={<WalletPage />}></Route>
          <Route exact path='/HistoryPage' element={<HistoryPage />}></Route>
          <Route exact path='/ProfilePage' element={<ProfilePage />}></Route>
          <Route exact path='/ReferandEarn' element={<ReferandEarn />}></Route>
          <Route exact path='/SpinandWin' element={<SpinadnWin />}></Route>
          <Route exact path='/LanguagesPage' element={<LanguagesPage />}></Route>
          <Route exact path='/SupportPage' element={<SupportPage />}></Route>
          <Route exact path='/LegalPage' element={<LegalPage />}></Route>
          <Route exact path='/AddChipsPage' element={<AddChipsPage />}></Route>
          <Route exact path='/WithDrawPage' element={<WithDrawPage />}></Route>

         </Routes>
         </BrowserRouter>
      </AuthContext.Provider>
    </>
  )
}

export default App;