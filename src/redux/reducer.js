const initialState = {
    contacts: [],
    loading: false,
}


const reducer = (state = initialState, action) => {
    if (action.type == 'UPDATE_NAME') {
        return {
            ...state,
            name: action.payload,
        }
    }
    if (action.type == 'UPDATE_CONTACTS') {
        return {
            ...state,
            contacts: action.payload,
        }
    }
    if (action.type == 'SET_LOADING') {
        return {
            ...state,
            loading: action.payload
        }
    }
    if (action.type == 'DETAIL') {
        console.log('masuk sini');
        return {
            ...state,
            contact: action.payload
        }
    }
    if (action.type == 'CLEANUP_OBJECT') {
        console.log('Clean Up Data');
        return initialState.contact
    }
    return state;
};

export default reducer;

