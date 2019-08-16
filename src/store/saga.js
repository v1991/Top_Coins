

import { put, call, takeLatest } from 'redux-saga/effects';


function* getCurrencyApiData(actionPayload) {
    const limit = actionPayload.limit;
    const currencyData = yield call(async () => {
        try {
            const response = await fetch(`https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${limit}&CMC_PRO_API_KEY=${process.env.REACT_APP_TOP_COIN_KEY}`)
            const data = await response.json();
            return data.data;
        }
        catch (e) {
            console.log(e)
        }
    });

    yield put({ type: 'DATA_CHANGED', data: currencyData, limit: limit })
}

export default function* watchCryptoCurrencyData() {

    yield takeLatest('LIMIT_CHANGED', getCurrencyApiData);
}