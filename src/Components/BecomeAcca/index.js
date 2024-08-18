import Component from 'react'
import Popup from 'reactjs-popup'
import Header from '../Header'

import 'reactjs-popup/dist/index.css'

const BecomeAcca = () => (
  <div className="container">
    <div className="containerOne">
      <h1>Become ACCA in 18 months</h1>
      <p>
        Acquire globally recognized accountancy qualification, ACCA (also called
        as Global CA), and get placed in top MNCs & Big4s.
      </p>
      <div>
        <button>Download Broucher</button>
        <button>Silver Learning Partner</button>
      </div>
    </div>
    <div className="containerTwo">
      <h1>Aspiring to be an ACCA?</h1>
      <form>
        <input type="text" placeholder="Name*" />
        <input type="text" placeholder="Email*" />
        <input type="password" placeholder="Password*" />
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
              Request a Callback
            </button>
          }
        >
          {close => (
            <>
              <div>
                <p>You will get a call from our team[success message]</p>
              </div>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                Close
              </button>
            </>
          )}
        </Popup>
      </form>
    </div>
  </div>
)
export default BecomeAcca
