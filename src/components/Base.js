import React from 'react'
import { useScrollTo } from 'react-use-window-scroll'
import { Link } from 'react-router-dom';

const Platform = (props) => {

  const scrollTo = useScrollTo();


  return (
    <div className="container-fluid bg-color1">
      <div className="container">
        <div className="row justify-content">

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <img className="img-fluid img-responsive base-img" src={props.image} alt=""></img>
            {/*<img className="img-fluid img-responsive slika2pos" src={slika2} alt=""></img>*/}
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 bottom-padd top-padd">
            <h3 className="build-title">{props.title}</h3>
            <h3 className="build-title general-color">{props.title2}</h3>
            <p className="build-paragraph">
              {props.description}
            </p>
            <p className="build-paragraph">
              {props.description2}
            </p>
            <div className="btn-flex">
              {props.buttonTrue &&
                <button
                  className="user-btn"
                  onClick={() => {
                    props.isHomePage &&
                      window.innerWidth < 560 ? scrollTo({ top: 520, left: 0, behavior: "auto" }) : scrollTo({ top: 650, left: 0, behavior: "auto" })
                  }}
                >
                  {props.buttonText}
                </button>
              }

              {props.buttonText2 === "Registriraj uslugu"
                ?
                <Link className="remove-underline" to={`/registriraj-uslugu`}>
                  <button
                    className="general-btn read-see-btn"
                  >
                    {props.buttonText2}
                  </button>
                </Link>
                :
                <button
                  className="general-btn read-see-btn"
                >
                  {props.buttonText2}
                </button>
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Platform