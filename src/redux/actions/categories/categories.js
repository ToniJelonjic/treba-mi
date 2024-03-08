import * as actionsTypes from '../../actionsTypes'
import axios from 'axios'
import * as FormData from 'form-data'

const api_base = "http://admin.trebami.ba/api/public"


//GET ALL CATEGORIES

export const getCategoriesStart = () => {
    return {
        type: actionsTypes.GET_CATEGORIES_START
    }
}

export const getCategoriesSuccess = (categories) => {
    return {
        type: actionsTypes.GET_CATEGORIES_SUCCESS,
        categories
    }
}

export const getCategoriesFail = () => {
    return {
        type: actionsTypes.GET_CATEGORIES_FAIL
    }
}

export const getCategories = () => {
    return async (dispatch) => {
        dispatch(getCategoriesStart())
        axios.get(`${api_base}/categories`)
            .then(res => {
                dispatch(getCategoriesSuccess(res.data.categories))
            })
            .catch((e) => {
                console.error(e)
                dispatch(getCategoriesFail())
            })
    }
}

//GET CITIES


export const getCitiesStart = () => {
    return {
        type: actionsTypes.GET_CITIES_START
    }
}

export const getCitiesSuccess = (cities) => {
    return {
        type: actionsTypes.GET_CITIES_SUCCESS,
        cities
    }
}

export const getCitiesFail = () => {
    return {
        type: actionsTypes.GET_CITIES_FAIL
    }
}

export const getCities = () => {
    return async (dispatch) => {
        dispatch(getCitiesStart())
        axios.get(`${api_base}/cities`)
            .then(res => {
                //console.log("res data", res.data.cities)
                dispatch(getCitiesSuccess(res.data.cities))
            })
            .catch((e) => {
                console.error(e)
                dispatch(getCitiesFail())
            })
    }
}

//GET CATEGORY DETAILS


export const getCategoryDetailsStart = () => {
    return {
        type: actionsTypes.GET_CATEGORY_DETAILS_START
    }
}

export const getCategoryDetailsSuccess = () => {
    return {
        type: actionsTypes.GET_CATEGORY_DETAILS_SUCCESS,
    }
}

export const getCategoryDetailsFail = () => {
    return {
        type: actionsTypes.GET_CATEGORY_DETAILS_FAIL
    }
}


export const getCategoryDetails = (id) => {
    return async (dispatch) => {
        dispatch(getCategoryDetailsStart())
        axios.get(`${api_base}/categories/${id}`)
            .then(res => {
                dispatch(getCategoryDetailsSuccess())
            })
            .catch((e) => {
                console.error(e)
                dispatch(getCategoryDetailsFail())
            })
    }
}

//POST TICKET


export const createTicketStart = () => {
    return {
        type: actionsTypes.CREATE_TICKET_START
    }
}

export const createTicketSuccess = () => {
    return {
        type: actionsTypes.CREATE_TICKET_SUCCESS,
    }
}

export const createTicketFail = () => {
    return {
        type: actionsTypes.CREATE_TICKET_FAIL
    }
}


export const createTicket = (categoryId, email, fullName, phone, postalCode, message, uploads) => {

    return async (dispatch) => {
        dispatch(createTicketStart())

        let tempUploads = []
        for (let i = 0; i < uploads.length; i++) {
            tempUploads.push({
                "id": uploads[i].id,
                "name": uploads[i].name
            })
        }
        console.log({
            categoryId,
            email,
            fullName,
            phone,
            postalCode,
            message,
            "uploads": tempUploads
        })
        axios.post(`${api_base}/tickets`, {
            "categoryId": categoryId,
            "email": email,
            "fullName": fullName,
            "phone": phone,
            "postalCode": postalCode,
            "message": message,
            "uploads": tempUploads
        })
            .then(res => {
                console.log("create ticket", res)
                console.log(res.status)
                dispatch(createTicketSuccess())
            })
            .catch((e) => {
                console.error(e)
                dispatch(createTicketFail())
            })
    }
}


//UPLOAD FILE

export const uploadFileStart = () => {
    return {
        type: actionsTypes.UPLOAD_FILE_START
    }
}

export const uploadFileSuccess = (upload) => {
    return {
        type: actionsTypes.UPLOAD_FILE_SUCCESS,
        upload
    }
}

export const uploadFileFail = () => {
    return {
        type: actionsTypes.UPLOAD_FILE_FAIL
    }
}


export const uploadFile = (uploads) => {

    console.log("aaaaaaaaaaaa", uploads)

    return async (dispatch) => {
        dispatch(uploadFileStart())
        let axiosRequests = []


        for (let i = 0; i < uploads.length; i++) {
            let formData = new FormData()
            formData.append('upload', uploads[i])
            const req = axios.post(`${api_base}/tickets/upload`, formData)
            axiosRequests.push(req)
        }
        axios.all(axiosRequests).then(axios.spread((...responses) => {
            let uploadsResponse = []
            for (let i = 0; i < responses.length; i++) {
                uploadsResponse.push(responses[i].data.data);

            }
            console.log(uploadsResponse)
            dispatch(uploadFileSuccess(uploadsResponse))
        })).catch((e) => {
            console.error(e)
            dispatch(uploadFileFail())
        })


    }
}