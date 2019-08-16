
const initialState = {
    cryptoCurrencyData: null,
    limit: "",
    loading : false
}

const reducer = (state = initialState, action) => {
    
    let newState = {...state};

    if (action.type === 'DATA_CHANGED') {
        newState.cryptoCurrencyData = action.data;
        newState.loading = false;
        newState.limit = action.limit;
    }

    if (action.type === 'SHOW_LOADING') {
        newState.cryptoCurrencyData = '';
        newState.loading = true;
        newState.limit = action.limit;
    }

    return newState;
}

export default reducer;