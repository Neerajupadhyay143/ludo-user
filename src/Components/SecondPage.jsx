import React, { useState } from 'react'
import HeaderComponent from './HeaderComponent';
import { useNavigate } from 'react-router-dom';
import "./bootstrap.css"


function SecondPage() {
  const [sliderValue, setSliderValue] = useState(50); // Initial slider value

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value);
    setSliderValue(newValue);
  };
  const openBattles = [
    {
      challenger: 'khushi',
      entryFee: 23,
      prize: 60,
    },
    {
      challenger: 'neeraj',
      entryFee: 50,
      prize: 50,
    },
    {
      challenger: 'neeraj',
      entryFee: 50,
      prize: 50,
    },
    // Add more open battles as needed
  ];

  const runningBattles = [
    {
      players: ['Avni', 'Opponent'],
      playingFor: 50,
      prize: 50,
    },
    {
      players: ['Avni', 'Opponent'],
      playingFor: 50,
      prize: 50,
    },
    // Add more running battles as needed
  ];

  const navigate = useNavigate();

  return (
    <>
      <section id="main-bg">
        <div id="challengeset-container" className="container mx-0">
          <div className="row">
            <div className="col-12">
              <HeaderComponent />

            </div>
            <div className="col-12 my-3">

              <button type="button" className="btn btn-primary d-flex " onClick={() => navigate('/PlayPage')}><span className="material-symbols-outlined mb-0" >arrow_back</span>Back</button>

            </div>
            <div className="col-12 ">
              <label htmlFor className="text-left text-yellow">Enter Amount</label>
            </div>
            <div className="col-12 mb-4 d-flex justify-content-center">
              <input id="amount-input" className="text-yellow" type="text" defaultValue={500} />
              <button id="amount-btn" className="text-light">Set</button>
            </div>
            <div className="col-12">
              <div className="slidecontainer">
                <input type="range" min={500} max={20000} defaultValue={500} className="slider" id="myRange" onChange={handleSliderChange} />
                <p className="text-light"><span id="demo">{sliderValue}</span></p>
              </div>
            </div>
            <div className="col-12 my-2 bg-purple2 py-3">
              <div className="row">
                <div className="col-12  mb-3 d-flex justify-content-between text-light">
                  <div className="d-flex">
                    <h6 className="mb-0"><i className="bi bi-x-circle-fill text-danger" /> Open Battles</h6>
                  </div>
                  <div className="d-flex">
                    <h6 className="mb-0">Rules <i className="bi bi-info-circle" /></h6>
                  </div>
                </div>
                {openBattles.map((battle, index) => (
                  <div className="col-12 card my-1 walletcard pt-2 px-0 mx-auto text-white" key={index}>
                    <div className="row">
                      <div className="col">
                        <h6 className="mx-2">CHALLENGE FROM <span className="text-danger">{battle.challenger}</span></h6>
                      </div>
                    </div>
                    <div className="card-body walletbody mt-2">
                      <div className="row">
                        <div className="col-12 d-flex justify-content-between">
                          <div className="d-flex">
                            <div className="me-2">
                              <p className="mb-0" id="win-time">Entry Fee</p>
                              <h6 className="mb-0 d-flex"><span className="material-symbols-outlined text-success">payments</span> {battle.entryFee}</h6>
                            </div>
                            <div className="ms-2">
                              <p className="mb-0" id="win-time">Prize</p>
                              <h6 className="mb-0 d-flex"><span className="material-symbols-outlined text-success">payments</span> {battle.prize}</h6>
                            </div>
                          </div>
                          <div>
                            <button className="btn bg-orange">Play</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 my-2 bg-purple2 py-3">
              <div className="row">
                <div className="col-12 mb-3 d-flex justify-content-be tween text-light">
                  <div className="d-flex">
                    <h6 className="mb-0"><i className="bi bi-x-circle-fill text-danger" /> Running Battles</h6>
                  </div>
                </div>
                {runningBattles.map((battle, index) => (
                  <div className="col-12 card my-1 walletcard pt-2 px-0 mx-auto text-white" key={index}>
                    <div className="row">
                      <div className="col">
                        <h6 className="mx-2 mb-0 d-flex">PLAYING FOR&nbsp;<span className="material-symbols-outlined text-success">payments</span> {battle.playingFor}</h6>
                      </div>
                      <div className="col d-flex justify-content-end me-2">
                        <p className="mb-0">Prize&nbsp;</p>
                        <h6 className="mb-0 d-flex"><span className="material-symbols-outlined text-success">payments</span> {battle.prize}</h6>
                      </div>
                    </div>
                    <div className="card-body walletbody mt-2">
                      <div className="row">
                        <div className="col-4">
                          <p className="text-light mb-0">{battle.players[0]}</p>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                          <img src="./images/versus.png" className="rounded-circle mx-1" style={{ width: '25%', height: 25 }} alt="" />
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                          <p className="text-light text-end mb-0">{battle.players[1]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                

              </div>


            </div>
            <div className="col-12 my-2 bg-purple2 py-3">
              <div className="row">
                <div className="col-12 mb-3 d-flex justify-content-be tween text-light">
                  <div className="d-flex">
                    <h6 className="mb-0"><i className="bi bi-x-circle-fill text-danger" /> Create Battles</h6>
                  </div>
                </div>
                
                  <div className="col-12 card my-1 walletcard pt-2 px-0 mx-auto text-white" >
                    <div className="row">
                      <div className="col">
                        <h6 className="mx-2 mb-0 d-flex">PLAYING FOR </h6>
                      </div>
                      
                    </div>
                    <div className="card-body walletbody mt-2">
                      <div className="row">
                      <div className="col-12 my-2">
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          // onChange={(e) => setName(e.target.value)}
                          // disabled={isOtpFieldsShown} // Disable the input field if OTP fields are shown
                        />
                      </div>
                      </div>
                    </div>
                  </div>
                



              </div>


            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default SecondPage;