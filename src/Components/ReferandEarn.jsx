import React, { useRef } from 'react'
import HeaderComponent from './HeaderComponent';

function ReferandEarn() {
  const referralInputRef = useRef(null);

  const copyToClipboard = () => {
    // Select the input text
    referralInputRef.current.select();
    referralInputRef.current.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand('copy');

    // Deselect the input
    referralInputRef.current.setSelectionRange(0, 0);

    // Show a pop-up alert
    alert('Copied!');
  };
  return (
      <section id="main-bg">
  <div id="refer-container" className="container mx-0">
    <div className="row">
      <div className="col-12">
        <HeaderComponent/>
        </div>
      <div className="col-12 p-2 mt-1 d-flex justify-content-center">
        <div className="card walletcard text-white text-center px-0">
          <p className="mt-2">Your Refferal Earnings</p>
          <div className="card-body profilecard text-center align-items-center justify-content-center">
            <div className="row">
              <div className="col-6 text-center border-end">
                Reffered Players<br />0.00
              </div>
              <div className="col-6 border-left-1">
                Refferal Earning<br />₹0.00
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 p-2 mt-1 d-flex justify-content-center">
        <div className="card walletcard text-white text-center px-0 my-1">
          <p className="mt-2">Refferal Code</p>
          <div className="card-body profilecard text-center align-items-center justify-content-center">
            <div className="row">
              <div className="col-12 object-fit-contain text-center mb-4">
                <img className="mw-100" src="./images/Refer.png" alt />
              </div>
              <div className="col-12 mb-4 d-flex justify-content-center">
                    <input ref={referralInputRef} id="amount-input" className="text-yellow" readOnly type defaultValue={1234567} />
                    <button id="amount-btn" className="text-light" onClick={copyToClipboard}>Copy</button>
              </div>
              <h5 className="my-3">OR</h5>
            </div>
            <a href="#" className="text-center row my-3 mx-auto text-decoration-none">
              <button className="col-12 btn rounded btn-success my-auto"><i className="fa fa-whatsapp" /> Share On Whatsapp</button>
            </a>
            <a href="#" className="text-center row my-3 mx-auto text-decoration-none">
              <button className="col-12 btn rounded btn-secondary my-auto d-flex justify-content-center"><span className="material-symbols-outlined">content_paste</span> Copy To
                Clipboard</button>
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 p-2 mt-1 d-flex justify-content-center ">
        <div className="card info-ludo text-white text-center px-0 m-1">
          <p className="mt-2">How It Works</p>
          <div className="card-body profilecard text-center align-items-center justify-content-center p-3">
            <div className="border rounded-top p-2">
              You can refer and <b>Earn 2%</b> of your referral winning, every time.
            </div>
            <div className="border rounded-bottom p-2">
              Like if your player plays for 10000 and wins, You will get 2200 as referral amount.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default ReferandEarn;