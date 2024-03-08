import React from 'react'
import './Ticket.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { createTicket, uploadFile } from '../redux/actions/categories/categories'
import { getCategories, getCities } from '../redux/actions/categories/categories'
// import { withFormik } from 'formik'

const Form = (props) => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" })
        dispatch(getCities())
        setCat(props.match.params.category)
        setSubCat(props.match.params.subCategory)
    }, [])


    const dispatch = useDispatch()
    const upload = useSelector(state => state.categories.upload)
    const categories = useSelector(state => state.categories.categories)
    const cities = useSelector(state => state.categories.cities)
    const [cat, setCat] = useState('')
    const [subCat, setSubCat] = useState('')
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [attachments, setAttachments] = useState("")
    const [message, setMessage] = useState("")
    const [categoryId, setCategoryId] = useState('')
    const [search, setSearch] = useState('')
    const [isSelected, setIsSelected] = useState(true)


    const postalValue = cities.map((city, i) => {
        if (search === city.name)
            return city.id
    })


    const allCities = cities.filter((city, index) => {
        if (search.length === 1) {
            if (city.name[0].toLowerCase().includes(search[0].toLowerCase()))
                return city
        }
        else if (search.length > 1) {
            if (city.name.toLowerCase().includes(search.toLowerCase()))
                return city
        }
    }).map(val => {
        return (
            <div
                className={isSelected ? "content-style-postal" : "hide-cities"}
                value={val.postal}
                onClick={() => {
                    setSearch(val.name)
                    setPostalCode(val.postal.toString())
                    setIsSelected(false)
                }}
            >
                {val.name}
            </div>
        )
    })



    function getCategoryId() {
        let catId
        for (let i = 0; i < categories.length; i++) {
            for (let j = 0; j < categories[i].categories.length; j++) {
                if (categories[i].categories[j].url === cat) {
                    for (let k = 0; k < categories[i].categories[j].subCategories.length; k++) {
                        if (categories[i].categories[j].subCategories[k].url === subCat) {
                            catId = categories[i].categories[j].subCategories[k].id
                            return catId
                        }
                    }
                }
            }
        }
    }

    let catId = getCategoryId()

    const handleUpload = (e) => {
        console.log(e.target.files)
        setAttachments(e.target.files)
        dispatch(uploadFile(e.target.files))
    }

    const makeTicket = (e) => {
        e.preventDefault()
        dispatch(createTicket(catId, email, name, phone, postalCode, message, upload))
    }


    return (
        <div className='container-fluid form-bg-color'>

            {/* <div className='successful-submit'>
                <div className='margin'>
                    <p className='successful-submit-p margin-successful'>
                        Uspješno ste zatražili ponude.
                    </p>
                    <p className='successful-submit-p'>
                        Javit ćemo vam se na mail kroz 5 dana.
                    </p>
                </div>
            </div> */}

            <div className='container'>
                <div className='top-marg'>
                    <form className='form-style' onSubmit={makeTicket}>
                        <div className='content-style'>E-mail <span className="">*</span></div>
                        <input
                            aria-required="true"
                            type="text"
                            className='inp-style'
                            required="required"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />

                        <div className='content-style'>Ime i prezime (ili tvrtka) <span className="">*</span></div>
                        <input
                            type="text"
                            className='inp-style'
                            required
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                        <div className='content-style'>Telefon <span className="">*</span></div>
                        <input
                            type="text"
                            className='inp-style'
                            required="required"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value)
                            }}
                        />

                        <div className='content-style'>Mjesto (poštanski broj) <span className="">*</span></div>
                        <input
                            id="postal"
                            type="text"
                            className='inp-style'
                            required="required"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                                setIsSelected(true)
                            }}

                        />

                        {
                            search === "" ? null : allCities
                        }

                        <div className="content-style">Adresa <span className="">*</span></div>
                        <input
                            id="address"
                            type="text"
                            className='inp-style'
                            required="required"
                            value={address}
                            onChange={(e) => {
                                setAddress(e.target.value)
                            }}
                        />

                        <div className='content-style'>Opišite vašu situaciju <span className="">*</span></div>
                        <textarea
                            className='area-style'
                            required="required"
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }}
                        />
                        <div className='content-style'>Privici</div>
                        <input
                            type="file"
                            id="myFile"
                            name='upload'
                            multiple
                            onChange={handleUpload}
                        />
                        {/* <input type='submit'/> */}
                        {/* <label htmlFor="files" className='file-select'>
                            <span><FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon></span>
                            Dodaj privitak
                        </label> */}
                        <div>
                            <button
                                type='submit'
                                className='ask-offer'
                            //onClick={(e) => e.preventDefault()}

                            >
                                Zatraži ponude
                                <FontAwesomeIcon className="ask-arrow-icon" icon={faArrowCircleRight}>
                                </FontAwesomeIcon>
                            </button>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default Form

/* export default withFormik({
    mapPropsToValues: () => ({
        email: "",
        name: "",
        phone: "",
        address: "",
        postalCode: "",
        message: "",
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

})(Form) */
