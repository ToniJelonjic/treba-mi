import * as actionsTypes from '../../actionsTypes'


const initialState = {
    categories: [],
    getCategoriesLoading: false,
    upload: [],
    cities: []
}


const getCategoriesStart = (state, action) => ({
    ...state,
    getCategoriesLoading: true
})

const getCategoriesSuccess = (state, action) => ({
    ...state,
    categories: [...action.categories],
    getCategoriesLoading: false
})

const getCategoriesFail = (state, action) => ({
    ...state,
    getCategoriesLoading: false
})


const getCategoryDetailsStart = (state, action) => ({
    ...state,
})

const getCategoryDetailsSuccess = (state, action) => ({
    ...state,
})

const getCategoryDetailsFail = (state, action) => ({
    ...state,
})


const uploadFileStart = (state, action) => ({
    ...state,
})

const uploadFileSuccess = (state, action) => ({
    ...state,
    upload: [...action.upload]
})

const uploadFileFail = (state, action) => ({
    ...state,
})

const getCitiesStart = (state, action) => ({
    ...state,
})

const getCitiesSuccess = (state, action) => ({
    ...state,
    cities: [...action.cities]
})

const getCitiesFail = (state, action) => ({
    ...state,
})


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.GET_CATEGORIES_START:
            return getCategoriesStart(state, action)
        case actionsTypes.GET_CATEGORIES_SUCCESS:
            return getCategoriesSuccess(state, action)
        case actionsTypes.GET_CATEGORIES_FAIL:
            return getCategoriesFail(state, action)
        case actionsTypes.GET_CATEGORY_DETAILS_START:
            return getCategoryDetailsStart(state, action)
        case actionsTypes.GET_CATEGORY_DETAILS_SUCCESS:
            return getCategoryDetailsSuccess(state, action)
        case actionsTypes.GET_CATEGORY_DETAILS_FAIL:
            return getCategoryDetailsFail(state, action)
        case actionsTypes.UPLOAD_FILE_START:
            return uploadFileStart(state, action)
        case actionsTypes.UPLOAD_FILE_SUCCESS:
            return uploadFileSuccess(state, action)
        case actionsTypes.UPLOAD_FILE_FAIL:
            return uploadFileFail(state, action)
        case actionsTypes.GET_CITIES_START:
            return getCitiesStart(state, action)
        case actionsTypes.GET_CITIES_SUCCESS:
            return getCitiesSuccess(state, action)
        case actionsTypes.GET_CITIES_FAIL:
            return getCitiesFail(state, action)
        default:
            return state
    }
}

export default reducer;