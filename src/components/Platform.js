import React from 'react'
import platform from '../images/platform.png'

const Platform = () => {
  return (
    <div className="container-fluid bg-color2">
        <div className="container">
          <div className="row ">

            <div className="col-lg-6 col-md-12 col-sm-12 bottom-marg">
              <h2 className="platform-title">Kako platforma funkcionira?</h2>
              <div className="row top-padd">
                <div className="col-2">
                  <div className="num-style">
                    1.
                  </div>
                </div>
                <div className="col-10">
                  <div className="platform-little-title">
                    Unesi traženu uslugu.
                  </div>
                  <div className="platform-paragraph">
                    U našu tražilicu unesi uslugu koju tražiš te odaberi odgovarajuću kategoriju.
                  </div>
                </div>
              </div>
              <div className="row top-padd">
                <div className="col-2">
                  <div className="num-style">
                    2.
                  </div>
                </div>
                <div className="col-10">
                  <div className="platform-little-title">
                    Unesi tražene detalje.
                  </div>
                  <div className="platform-paragraph">
                    Unesite detalje Vaše pretrage koji će potencijalnim ponuditeljima omogućiti što bolje shvaćanje Vašeg upita.
                  </div>
                </div>
              </div>
              <div className="row top-padd">
                <div className="col-2">
                  <div className="num-style">
                    3.
                  </div>
                </div>
                <div className="col-10">
                  <div className="platform-little-title">
                    Očekuj ponude.
                  </div>
                  <div className="platform-paragraph">
                    Unutar 24 sata šaljemo ti ponude i kontakte ponuditelja koji su zainteresirani za Vaš upit.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img className="platform-img img-fluid img-responsive" src={platform} alt=""></img>
              {/*<img className="recimg img-fluid img-responsive" src={rectangle} alt=""></img>*/}
            </div>

          </div>
        </div>
      </div>
  )
}

export default Platform