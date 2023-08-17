import React from 'react'
import HeaderComponent from '../Components/HeaderComponent';
import { useNavigate } from 'react-router-dom';

function FirstGame() {
    const navigate =useNavigate();
  return (
   <>
          <section id="main-bg">
  <div id="challenge-container" className="container mx-0">
    <div className="row">
      <div className="col-12">
        <HeaderComponent/>
          
      </div>
      <div className="col-12 my-3">
      
          <button type="button" className="btn btn-primary d-flex " onClick={()=>navigate('/PlayPage')}><span className="material-symbols-outlined mb-0">arrow_back</span>Back</button>
      
      </div>
      <div className="col-12" id="your-challenge">
        <div className="row">
          <div className="col-12 my-2 ">
            <h5 className="d-flex justify-content-center align-items-center text-yellow">
              <span className="material-symbols-outlined mb-0">emoji_events</span>
              <span>Your Open Challenges</span>
              <span className="material-symbols-outlined">emoji_events</span>
            </h5>
          </div>
          <div className="col-12 card my-1 walletcard pt-2 px-0 mx-auto text-white">
            <div className="d-flex justify-content-between">
              <h6 className="mx-2">Running Challenge With</h6>
              <h6 className="mx-2 text-success"><strong>Rs 50</strong></h6>
            </div>
            <div className="card-body walletbody mt-2">
              <div className="row">
                <div className="col-12 d-flex justify-content-between">
                  <div className="d-flex">
                    <img src="./images/challenge-cup.png" className="mx-2 cup-img" alt />
                    <label className="mt-1" htmlFor><strong>Name</strong></label>
                  </div>
                  <div>
                    <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal1">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4 text-warning" />
      </div>
      <div className="col-12 my-2 ">
        <h5 className="d-flex justify-content-center align-items-center text-yellow">
          <span className="material-symbols-outlined mb-0">emoji_events</span>
          <span>Challenges</span>
          <span className="material-symbols-outlined">emoji_events</span>
        </h5>
      </div>
      <div className="col-12 card my-1 walletcard pt-2 px-0 mx-auto text-white">
        <h6 className="mx-2">Currently Playing:2062</h6>
        <div className="card-body walletbody mt-2">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div className="d-flex">
                <img src="./images/challenge-cup.png" className="mx-2 cup-img" alt />
                <label className="mt-1" htmlFor><strong> Rs 50</strong></label>
              </div>
              <div>
              
                  <button className="btn bg-orange" onClick={()=>navigate('/EnterFirstGame')}>Play</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 card my-1 walletcard pt-2 px-0 mx-auto text-white">
        <h6 className="mx-2">Currently Playing:2063</h6>
        <div className="card-body walletbody mt-2">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div className="d-flex">
                <img src="./images/challenge-cup.png" className="mx-2 cup-img" alt />
                <label className="mt-1" htmlFor><strong> Rs 100</strong></label>
              </div>
              <div>
                
                      <button className="btn bg-orange" onClick={() =>navigate('/EnterFirstGame')}>Play</button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 card my-1 walletcard pt-2 px-0 mx-auto text-white">
        <h6 className="mx-2">Currently Playing:2064</h6>
        <div className="card-body walletbody mt-2">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div className="d-flex">
                <img src="./images/challenge-cup.png" className="mx-2 cup-img" alt />
                <label className="mt-1" htmlFor><strong> Rs 150</strong></label>
              </div>
              <div>
                
                        <button className="btn bg-orange" onClick={() => navigate('/EnterFirstGame')}>Play</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 card my-1 walletcard pt-2 px-0 mx-auto text-white">
        <h6 className="mx-2">Currently Playing:2064</h6>
        <div className="card-body walletbody mt-2">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div className="d-flex">
                <img src="./images/challenge-cup.png" className="mx-2 cup-img" alt />
                <label className="mt-1" htmlFor><strong> Rs 200</strong></label>
              </div>
              <div>
                
                        <button className="btn bg-orange" onClick={() => navigate('/EnterFirstGame')}>Play</button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 card my-1 walletcard pt-2 px-0 mx-auto text-white">
        <h6 className="mx-2">Currently Playing:2064</h6>
        <div className="card-body walletbody mt-2">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div className="d-flex">
                <img src="./images/challenge-cup.png" className="mx-2 cup-img" alt />
                <label className="mt-1" htmlFor><strong> Rs 250</strong></label>
              </div>
              <div>
               
                        <button className="btn bg-orange" onClick={() => navigate('/EnterFirstGame')}>Play</button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 card my-1 walletcard pt-2 px-0 mx-auto text-white">
        <h6 className="mx-2">Currently Playing:2064</h6>
        <div className="card-body walletbody mt-2">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div className="d-flex">
                <img src="./images/challenge-cup.png" className="mx-2 cup-img" alt />
                <label className="mt-1" htmlFor><strong> Rs 300</strong></label>
              </div>
              <div>
                
                        <button className="btn bg-orange" onClick={() => navigate('/EnterFirstGame')}>Play</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 card my-1 walletcard pt-2 px-0 mx-auto text-white">
        <h6 className="mx-2">Currently Playing:2064</h6>
        <div className="card-body walletbody mt-2">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div className="d-flex">
                <img src="./images/challenge-cup.png" className="mx-2 cup-img" alt />
                <label className="mt-1" htmlFor><strong> Rs 350</strong></label>
              </div>
              <div>
                
                        <button className="btn bg-orange" onClick={() => navigate('/EnterFirstGame')}>Play</button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 card my-1 walletcard pt-2 px-0 mx-auto text-white">
        <h6 className="mx-2">Currently Playing:2064</h6>
        <div className="card-body walletbody mt-2">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div className="d-flex">
                <img src="./images/challenge-cup.png" className="mx-2 cup-img" alt />
                <label className="mt-1" htmlFor><strong> Rs 400</strong></label>
              </div>
              <div>
            
                        <button className="btn bg-orange" onClick={() => navigate('/EnterFirstGame')}>Play</button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 card my-1 walletcard pt-2 px-0 mx-auto text-white">
        <h6 className="mx-2">Currently Playing:2064</h6>
        <div className="card-body walletbody mt-2">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div className="d-flex">
                <img src="./images/challenge-cup.png" className="mx-2 cup-img" alt />
                <label className="mt-1" htmlFor><strong> Rs 450</strong></label>
              </div>
              <div>
                
                        <button className="btn bg-orange" onClick={() => navigate('/EnterFirstGame')} >Play</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 card my-1 walletcard pt-2 px-0 mx-auto text-white">
        <h6 className="mx-2">Currently Playing:2064</h6>
        <div className="card-body walletbody mt-2">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div className="d-flex">
                <img src="./images/challenge-cup.png" className="mx-2 cup-img" alt />
                <label className="mt-1" htmlFor><strong> Rs 500</strong></label>
              </div>
              <div>
                        <button className="btn bg-orange" onClick={() => navigate('/EnterFirstGame')}>Play</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Modal */}
    <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title fs-5" id="exampleModalLabel">
              <h5><strong>Room Code:</strong>233455</h5>
              <h5><strong>Your Result:</strong> I Won</h5>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-12   pt-2 px-0 mx-auto text-white d-flex justify-content-center">
                <div className="card-body card  mx-2 walletcard mt-2">
                  <div className="row">
                    <div className="col-4">
                      <img src="./images/img.jpg" className="rounded-circle mx-1 " style={{width: '25%'}} alt />
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                         <img src="./images/versus.png" className="rounded-circle mx-1" style={{width: '25%'}} alt />
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      <img src="./images/img.jpg" className="rounded-circle mx-1" style={{width: '25%'}} alt />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <p className="text-light">Avni</p>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                      <p className="text-success text-end"><strong> Rs 50</strong></p>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      <p className="text-light text-end">Avni</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 my-3 d-flex justify-content-center">
                <img src="./images/ludo 2.png" style={{width: '80%'}} alt />
              </div>
              <div className="col-12">
                <p className="text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet dolores eaque nobis libero molestias. Delectus culpa perspiciatis temporibus atque deleniti, laboriosam ipsum officiis fuga.
                </p>
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

export default FirstGame;