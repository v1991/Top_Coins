import React from 'react';
import Market from '../market_overview/Market.js';
import GetCurrency from './GetCurrency';
import { connect } from 'react-redux';

class Index extends React.Component {

    render() {
        return (
            <div className="mt-5">
                <GetCurrency onLimitChange={this.props.onLimitChange} showLoader={this.props.showLoader} limit={this.props.limit} />
                <Market currencyData={this.props.cryptoCurrencyData} onLimitChange={this.props.showLoader} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cryptoCurrencyData: state.cryptoCurrencyData,
        limit: state.limit
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showLoader: (limit) => dispatch({ type: "SHOW_LOADING", limit: limit }),
        onLimitChange: (limit) => dispatch({ type: "LIMIT_CHANGED", limit: limit })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);