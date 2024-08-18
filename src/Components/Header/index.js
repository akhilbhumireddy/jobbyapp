import {Link, withRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"> </span>
            </button>

            <h1 className="heading">IndigoLearn</h1>
          </div>

          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav  m-auto">
              <a className="nav-link headingcontainer" id="navItem1" href="#">
                BUY COURSES
                <span className="sr-only"></span>
              </a>
              <a className="nav-link" href="#" id="navItem2">
                PROGRAMS
              </a>
              <a className="nav-link" href="#" id="navItem3">
                FREE RESOURCES
              </a>
            </div>
          </div>
          <button className="navbartoggler" type="button">
            Login/Sign Up
          </button>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Header)
