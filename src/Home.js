import React from 'react';
import { useState } from 'react'
//import ReactDOM from 'react-dom'
import './Home.css'
//import slika1 from './images/slika1.png'
//import slika2 from './images/slika2.png'
//import trebami from './images/trebami-bg.png'
//import rectangle from './images/rectangle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
//import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
//import { useHistory } from "react-router-dom";
import Base from './components/Base'
import Platform from './components/Platform'
import { useEffect } from 'react'
//import history from './history'
import { useScrollTo } from 'react-use-window-scroll'
import baza from '../src/images/baza.png'
//import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from './redux/actions/categories/categories';
import LoadingSpinner from './components/LoadingSpinner';

function App() {

    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories.categories)
    const getCategoriesLoading = useSelector(state => state.categories.getCategoriesLoading)
    const scrollTo = useScrollTo();
    //const history = useHistory()
    //const [search, setSearch] = useState('')
    /* const [isBlur, setIsBlur] = useState(true)
    const handleInputBlur = () => {
        setIsBlur(false)
    } */

    useEffect(() => {

        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        dispatch(getCategories())
        //console.log(categories)

    }, [dispatch])



    const categoriesArr = categories.map((category, index) => {
        return (
            <div key={index}>
                <h5 className="group-name">{category.name}</h5>
                <div className="category-groups">
                    {
                        category.categories.map((cat, i) => {
                            return (
                                <div className="category" key={i}>
                                    <Link className="remove-underline" to={`/${cat.url}`}>
                                        <p className="category-style">
                                            {cat.name}
                                            <FontAwesomeIcon className="arrow-icon" icon={faArrowCircleRight}></FontAwesomeIcon>
                                        </p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    })

    //console.log(categoriesArr[0])


    return (

        <div>
            
            <div className="container-fluid transparent-bg">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 className="title">Treba mi...</h1>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h6 className="little-title">
                                Majstor ti je otišao u Njemačku? Drugi se ne javlja na telefon? Mi te spajamo s najboljima. Besplatno.
                            </h6>
                        </div>

                        <div className='homepage-buttons-style'>
                            <Link className="remove-underline" to={`/registriraj-uslugu`}>
                                <button className='user-btn'>
                                    Nudiš uslugu?
                                </button>
                            </Link>
                            <button
                                className='general-btn'
                                onClick={() => {
                                    window.innerWidth < 560 ? scrollTo({ top: 520, left: 0, behavior: "auto" }) : scrollTo({ top: 650, left: 0, behavior: "auto" })
                                }}
                            >
                                Tražim uslugu
                            </button>
                        </div>


                        {/* <div className="bottom-marg-main col-lg-12 p-2 col-md-12">
                            <div className="search-style">
                                <span className="offer col-lg-4 col-md-3">
                                    <select
                                        className='categories-dropdown'
                                        onChange={handleCategoryChange}
                                    >
                                        <option
                                            value=""
                                            className='default-option'>
                                            Kategorije
                                        </option >
                                        {
                                            categoriesArr
                                        }
                                    </select>
                                </span>

                                <span className="search-input col-lg-4 col-md-4">
                                    <input
                                        className="input-style"
                                        placeholder="Što tražite?"
                                        onChange={(e) => setSearch(e.target.value)}
                                        onBlur={handleInputBlur}
                                        onFocus={() => {
                                            document.getElementById("sr")?.classList?.remove("hide-results")
                                        }}
                                    />
                                </span>

                                <span className="btn-align col-lg-4 col-md-4 col-xs-12">
                                    <button className="search-btn">
                                        Pretraži
                                    </button>
                                    <button className="magnifier-btn">
                                        <FontAwesomeIcon className="" icon={faSearch}></FontAwesomeIcon>
                                    </button>
                                </span>
                            </div>
                            <div
                                id="sr"
                                className={isBlur ? 'search-results' : 'hide-results'}>
                                {
                                    subCategoriesArr
                                }
                            </div>

                        </div> */}
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <h2 className='categories-title'>Kategorije</h2>

                    {
                         getCategoriesLoading ? <LoadingSpinner/> : categoriesArr
                    }

                </div>
            </div>

            <Base
                image={baza}
                title="Najveća baza "
                title2="nuditelja usluga u BiH."
                description="Trebami.ba je najveća platforma nuditelja usluga u BiH. Unutar 24 sata spajamo one koji traže i one koji nude usluge. Brzo pronađi svog majstora, vodoinstalatera, električara, računovođu, dizajnera... Tu smo za sve usluge!"
                description2="Platforma je u potpunosti besplatna za one koji pretražuju usluge, dok za nuditelje usluga nudimo posebne pogodnosti u našoj prvoj godini poslovanja."
                buttonTrue={true}
                buttonText="Pretraži usluge"
                buttonText2="Registriraj uslugu"
                isHomePage={true}
            />

            <Platform />

            <Base
                image={baza}
                title="The Standard Lorem "
                title2="Ipsum Passage."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
                description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                buttonTrue={false}
                buttonText2="Read more"
            />

        </div>

    )
}

export default App;