import { useState } from 'react'
//import Logo from '../images/Logo.jpg'
import trebami from '../images/Trebami.png'
import Search from '../images/Search.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useScrollTo } from 'react-use-window-scroll'
//import { useHistory } from "react-router-dom";
//import About from './About'
//import RegisterService from './RegisterService'



function Navbar() {

    const [isOpen, setisOpen] = useState(false)
    const [toggled, setToggled] = useState(false)
    const handleHamburger = () => {
        setisOpen(!isOpen)
        setToggled(!toggled)
        //console.log(isOpen)
    }
    const scrollTo = useScrollTo();



    return (
        <div className="containter-fluid">

            <div className="container">
                <nav>
                    <div>
                        <Link to="/" >
                            <img className="logo" src={trebami} alt=""></img>
                        </Link>
                    </div>

                    <ul
                        className={isOpen ? "nav-links centered-mobile" : "nav-links centered"}
                        onClick={() => {
                            setisOpen(false)
                            setToggled(false)
                        }}
                    >
                        <li>
                            <Link to="/">
                                Početna
                            </Link>
                        </li>
                        <li>
                            <Link to={`/o-nama`}>
                                O nama
                            </Link>
                        </li>
                        <li>
                            <Link to={`/registriraj-uslugu`}>
                                Nudiš uslugu?
                            </Link>
                        </li>
                        <li>
                            <Link to="/" onClick={() => {
                                window.innerWidth < 560 ? scrollTo({ top: 520, left: 0, behavior: "auto" }) : scrollTo({ top: 650, left: 0, behavior: "auto" })
                            }}
                            >
                                Tražim uslugu
                            </Link>
                        </li>
                    </ul>

                    <ul className="nav-links right-align">

                        <li>
                            <Link to="/">
                                <img className="search-icon" src={Search} alt=""></img>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="login">
                                Prijava
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <button className="signup-btn">
                                    Registriraj se
                                </button>
                            </Link>
                        </li>
                    </ul>
                    <div
                        className={toggled ? "burger toggle" : "burger"}
                        id="burger"
                        onClick={() => {
                            handleHamburger()
                            console.log(toggled)
                        }
                        }>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>

                    {/* <div className='menu-btn'>
                        <div className='menu-btn-burger'>

                        </div>
                    </div> */}

                </nav>
            </div>
        </div>
    )
}

export default Navbar