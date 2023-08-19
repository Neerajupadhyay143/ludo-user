import React from 'react'

function SignUpPage() {
  return (
    <section id="main-bg">
      <div id="register-container" className="container mx-0">
        <div className="row " id="register">
          <div className="card h-100 p-0">
            <h4 className="text-center py-2">Register</h4>
            <div className="card-body">
              <div className="row">
                <div className="col-12 my-2">
                  <input type="text" placeholder="Enter Your Name" />
                </div>
                <p style={{ color: 'red' }}></p>
                <div className="col-12 my-2">
                  <input type="text" placeholder="Phone number" />
                </div>
                <p style={{ color: 'red' }} />
                <div className="col-12 my-2">
                  <input type="text" placeholder="Refer Code( optional )" />
                </div>
                <div className="col-12 my-2">
                  <button className="bg-orange btn" >Get OTP</button>
                </div>
                <div className="col-12 my-2">
                  <p className="lh-lg text-center text-light">By Continuing You agree to out<span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}> Legal Terms</span> and you are 18 years of older.</p>
                </div>
                <div className="col-12 my-2">
                  <p className="lh-lg text-center text-light">Already have an account?  <span style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}> Login</span>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default SignUpPage