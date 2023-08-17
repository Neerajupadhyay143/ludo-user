import React from 'react'
import HeaderComponent from './HeaderComponent';
import { Navigate, useNavigate } from 'react-router-dom';

function AddChipsPage() {
    const navigate = useNavigate();
    return (
        <>
            <section id="main-bg">
                <div id="wallet-container" className="container mx-0">
                    <div className="row">
                        <div className="col-12">
                            <HeaderComponent />

                        </div>
                        <div className="col-12 my-3">
                            <div className="row align-items-center my-2">
                                <div className="my-auto col-6 text-white" onClick={() => navigate('/WalletPage')}>

                                    <button type="button" className="btn btn-primary d-flex "><span className="material-symbols-outlined mb-0">arrow_back</span>Back</button>

                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2" id="guide-btn" className="btn btn-outline-primary bg-light">Guide</button>
                                    {/* Modal */}
                                    <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Guide Vedio</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div className="modal-body">
                                                    <iframe width="100%" height="350px" src="https://www.youtube.com/embed/38y_1EWIE9I" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 card mt-3 walletcard pt-2 px-0 mx-auto text-white">
                            <div className="text-center">Buy Chips</div>
                            <div className="card-body walletbody mt-2">
                                <div className="col-12 my-3">
                                    <label htmlFor="username" className="text-left text-yellow">Enter Amount</label>
                                </div>
                                <div className="col-12 mb-4 d-flex justify-content-center">
                                    <button id="buy-chips-btn" className="text-light"><i className="bi bi-currency-rupee" /></button>
                                    <input id="buy-chips-input" className="text-yellow" type="text" defaultValue={500} />
                                </div>
                                <div className="col-12">
                                    <a href="#">
                                        <button className="bg-orange btn">Pay</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 my-3">
                            <p className="text-center text-light">Payments Secured By</p>
                            <div className="d-flex justify-content-center">
                                <img src="./images/phonepe.png" className="mx-2" style={{ width: '20%', marginTop: '-2px', height: 17 }} alt />
                                <img src="./images/google-pay.png" className="mx-2" style={{ width: '11%', height: 15 }} alt />
                                <img src="./images/paytm.png" className="mx-2" style={{ width: '14%', height: 14 }} alt />
                                <img src="./images/upi.png" className="mx-2" style={{ width: '14%', height: 22 }} alt />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AddChipsPage;