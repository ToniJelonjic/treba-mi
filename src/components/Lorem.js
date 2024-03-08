import React from 'react'
import slika1 from '../images/slika1.png'

const Lorem = () => {
  return (
    <div className="container-fluid bg-color1">
        <div className="container">
          <div className="row justify-content">

            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <img className="img-fluid img-responsive" src={slika1} alt=""></img>
              {/*<img className="img-fluid img-responsive slika2pos" src={slika2} alt=""></img>*/}
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 bottom-padd top-padd">
              <h3 className="build-title">The Standard Lorem</h3>
              <h3 className="build-title general-color">Ipsum Passage.</h3>
              <p className="build-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="build-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="general-btn read-see-btn">
                Read more
              </button>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Lorem