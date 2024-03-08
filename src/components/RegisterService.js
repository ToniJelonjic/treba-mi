import React from 'react'
import { useState } from 'react'
import './RegisterService.css'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from '../redux/actions/categories/categories'
//import groups from '../groups'
// import { withFormik } from 'formik'



const RegisterService = () => {
  

  const categories = useSelector(state => state.categories.categories)
  const dispatch = useDispatch()
  //const [isLoading, setLoading] = useState(true);
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [search, setSearch] = useState('')


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    dispatch(getCategories)
    //console.log(categories)
    
  }, [dispatch])


  const subCategoriesArr = categories.map((category, index) => {
    return(
      category.categories.map((cat, i) => {
        return(
          cat.subCategories.filter(val => {
            if (val.name.toLowerCase().includes(search.toLowerCase()))
              return val
          }).map(val => {
            return (
              <ul key={i} className="remove-bullets">
                <li className='company-services'>
                  <input
                    type='checkbox'
                    name={val.name}
                    value={val.name}
                    className="checkbox-margin"
                  />
                  {val.name}
                </li>
              </ul>
            )
          })
        )
      })
    )
  })



  return (
    <div className='containter-fluid register-bg-color'>
      <div className='container'>
        <h5 className='register-title'>Olakšajte si posao.</h5>
        <h5 className='register-title'>Saznajte kako možemo unaprijediti vaše poslovanje!</h5>

        <form className='register-form-style'>

          <div className='row'>
            <div className='col-lg-6 col-sm-12'>
              <p>Vaš e-mail:</p>
              <input
                className='inp-style'
                placeholder='npr. ime.prezime@gmail.com'
                required="required"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className='col-lg-6 col-sm-12'>
              <p>Broj mobitela:</p>
              <input
                className='inp-style'
                placeholder='npr. 063 123 456'
                required="required"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value)
                }}
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12 col-sm-12 testic'>
              <p>Koje usluge nudite?</p>
              <input
                className='inp-style'
                placeholder='npr. Adaptacija stana, Asfaltiranje, Bazeni, Elektroinstalacije...'
                required="required"
                onChange={(e) => {
                  setSearch(e.target.value)
                }}
              />
            </div>

            <div>
              {
                search === "" ? null : subCategoriesArr
              }
            </div>

            {/* <div className='col-lg-6 col-sm-12'>
              <p>Broj mobitela:</p>
              <input
                className='inp-style'
                placeholder='npr. 063 123 456'
                required="required"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value)
                }}
              />
            </div> */}
          </div>

          <div>
            <button className='register-service'>Isprobajte odmah <FontAwesomeIcon className="ask-arrow-icon" icon={faArrowCircleRight}></FontAwesomeIcon></button>
          </div>
          <p className='register-description'>
            Registrirajte se bez ugovorne obveze.
          </p>

        </form>
      </div>
    </div>
  )
}

export default RegisterService

/* export default withFormik({
  mapPropsToValues: () => ({
      email: "",
      phone: "",
  }),
  validate: values => {
      const errors = {}

      Object.keys(values).map(v => {
          if(!values[v]){
              errors[v] = "required"
          }
      })
      return errors
  },
  handleSubmit: (values, {setSubmitting}) => {
      alert("Bravo!")
  }

})(RegisterService) */