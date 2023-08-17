import React from 'react';
// import "./bootstrap.css";
// import "./style.css";
import HeaderComponent from './HeaderComponent';
import { useNavigate } from 'react-router-dom';

function WalletPage() {

  const navigate =useNavigate();
  return (
     <section id="main-bg">
  <div id="wallet-container" className="container mx-0">
    <div className="row">
      <div className="col-12">
        <HeaderComponent/>
      </div>
      <div className="col-12">
        <div className="card container border border-danger mt-3 kycbox text-danger">
          <div className="row align-items-center my-2">
            <div className="d-flex my-auto col-6">
              <h6>KYC Pending </h6><span className="material-symbols-outlined">error</span>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <a href="completekyc.html">
                <button type="button" className="btn btn-danger float-right">Complete here</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12" style={{display: 'inline'}}>
        <div className="card container border border-success mt-2 kycbox text-success">
          <div className="row align-items-center my-2">
            <div className=" my-auto col-6">
              <p className="mb-0">KYC status </p>
              <div className="d-flex">
                <h6><strong>Verified</strong></h6>
                <span className="material-symbols-outlined">check_circle</span>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-success float-right">View Kyc Details</button>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">KYC Details</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-6">
                    <h6><strong>Name</strong></h6>
                  </div>
                  <div className="col-6">
                    <h6 className="text-end">Dheeraj Meena</h6>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-6">
                    <h6><strong>Dob</strong></h6>
                  </div>
                  <div className="col-6">
                    <h6 className="text-end">30-07-0222</h6>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-6">
                    <h6><strong>Gender</strong></h6>
                  </div>
                  <div className="col-6">
                    <h6 className="text-end">M</h6>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-3">
                    <h6><strong>Address</strong></h6>
                  </div>
                  <div className="col-9">
                    <h6 className="text-end">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, laboriosam.</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 card mt-3 walletcard pt-2 px-0 mx-auto text-white">
        <div className="text-center">Deposit Chips</div>
        <div className="card-body walletbody mt-2">
          <div className="card info-ludo col-12 text-center text-white p-3 mb-3">
            Deposit Chips Info
          </div>
          <div className="my-auto">
            <div className="text-center">
              <h4>Chips</h4>
            </div>
            <div className="text-center">
              <h4>0.00</h4>
            </div>
          </div>
          <div className="col-12" onClick={()=>navigate('/AddChipsPage')} >
            
              <button className="bg-orange btn">Add Chips</button>
          
          </div>
        </div>
      </div>
      <div className="col-12 card my-2 walletcard pt-2 px-0 mx-auto text-white">
        <div className="text-center">Winning Chips</div>
        <div className="card-body walletbody mt-2">
          <div className="card info-ludo col-12 text-center text-white p-3 mb-3">
            Winning Chips Info
          </div>
          <div className="my-auto">
            <div className="text-center">
              <h4>Chips</h4>
            </div>
            <div className="text-center">
              <h4>0.00</h4>
            </div>
          </div>
          <div className="col-12" onClick={()=>navigate('/WithdrawPage')}>
           
              <button className="bg-orange btn">Withdraw</button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default WalletPage;