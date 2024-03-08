import React, { useEffect, useState } from 'react'
import './CategoryDetails.css'
import { Link } from 'react-router-dom'
//import Form from './Form'
import Base from './Base'
import Platform from './Platform'
//import Lorem from './Lorem'
import baza from '../images/baza.png'
//import slika1 from '../images/slika1.png'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../redux/actions/categories/categories'
//import { computeHeadingLevel } from '@testing-library/react'





export const CategoryDetails = (props) => {

    const dispatch = useDispatch()
    const [slag, setSlag] = useState('')
    const categories = useSelector(state => state.categories.categories)
    const [selectedSubCategory, setSelectedSubCategory] = useState('') 
    const [categoryIndex, setCategoryIndex] = useState()

    //console.log(categories)
    const selectSubCategory = categories.map((category, i) => {
        return(
            category.categories.map((cat, j) => {
                if(cat.url === slag)
                //console.log("cattttttt", cat)
                return (
                    cat.subCategories.map((sub, k) => {
                        return(
                            <option key={k} value={sub.url}>{sub.name}</option>
                        )
                    })
                )
            })
        )
    })


    function defaultSubcategory() {
        let subCat
        for(let i = 0; i < categories.length; i++) {
            for(let j = 0; j < categories[i].categories.length; j++){
                if(categories[i].categories[j].url === slag){
                    subCat = categories[i].categories[j].subCategories[0].url
                    return subCat
                }
            }
        }
    }
    //console.log(defaultSubcategory())


    function categoryLabel() {
        let catLabel
        for(let i = 0; i < categories.length; i++) {
            for(let j = 0; j < categories[i].categories.length; j++){
                if(categories[i].categories[j].url === slag){
                    catLabel = categories[i].categories[j].label
                    return catLabel
                }
            }
        }
    }


    useEffect(() => {

        setSlag(props.match.params.slag)
        window.scrollTo({ top: 0, left: 0 })
        dispatch(getCategories())

    }, [dispatch])

    //console.log(selectedSubCategory)
    //console.log(selectSubCategory)
    //console.log(defaultSubcategory)
    //console.log(selectedSubCategory)
    //console.log(categories[0].categories[0].url)



    return (
        <div>
            <div className="container-fluid category-bg background-color1">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 className="category-title">Najbolje ponude, potreban je jedan upit. </h1>
                        </div>
                        <div className='row'>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <h6 className="little-category-title col-lg-4">
                                    {categoryLabel()}
                                </h6>
                                <select 
                                    className="select-sub-category col-lg-4" 
                                    onChange={(e) => {setSelectedSubCategory(e.target.value)}} 
                                    value={selectedSubCategory === "" ? defaultSubcategory() : selectedSubCategory}>

                                    {
                                        selectSubCategory
                                    }

                                </select>
                                <div>
                                    <Link to={`/${slag}/${selectedSubCategory === "" ? defaultSubcategory() : selectedSubCategory}`}>
                                        <button className="category-submit col-lg-4">
                                            Odaberi
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
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