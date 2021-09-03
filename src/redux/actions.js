import { Actions } from "react-native-router-flux";
import Api from "../helper/Api";

export const setContact = () => {
    return (dispatch) => {
        dispatch(setLoading(true));
        Api.get('contact')
            .then(response => {
                dispatch(setLoading(false));
                console.log('response', response.data);
                dispatch({ type: 'UPDATE_CONTACTS', payload: response.data });

            })
            .catch((error) => {
                dispatch(setLoading(false));
                console.log('error call api ', error);
            })
    }
}

export const setLoading = (value) => {
    return (dispatch) => {
        dispatch({ type: 'SET_LOADING', payload: value });
    }
}

export const storeData = (params) => {
    return (dispatch) => {
        dispatch(setLoading(true));
        Api.post('contact', params)
            .then(response => {
                dispatch(setLoading(false));
                console.log('response', response.data);
                Actions.ListContact();
            })
            .catch(error => {
                console.log('error', error);
            })
    }
}

export const destroyData = (id) => {
    return (dispatch) => {
        dispatch(setLoading(true));
        Api.delete(`contact/${id}`)
            .then(response => {
                dispatch(setLoading(false));
                Actions.ListContact();
            })
            .catch(error => {
                console.log('error', error);
                return;
            })
    }
}

export const updateData = (id, param) => {
    return (dispatch) => {
        dispatch(setLoading(true));
        Api.put(`contact/${id}`, param)
            .then(response => {
                dispatch(setLoading(false));
                Actions.ListContact();
            })
            .catch(error => {
                console.log('error', error);
                return;
            })
    }
}

export const filterData = (keywords) => {
    return (dispatch) => {
        dispatch(setLoading(true));
        dispatch({ type: 'FILTER', payload: keywords });
        dispatch(setLoading(false));
    }
}