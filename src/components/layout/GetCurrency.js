import React from 'react';


export default class GetCurrency extends React.Component {
    constructor(props) {
        super(props);
    }

    limitOnChangeHandler = (e) => {
        this.count = e.target.value;
        this.props.onLimitChange(this.count);
        this.props.showLoader(this.count);
    }

    render() {
        return (
            <div className="card card-body col-lg-6 col-md-8 col-sm-12 mt-4 mb-4 p-4 mx-auto">
                <h1 className="display-5 text-center">
                    Cryptocurrency
                </h1>
                <p className="text-center">Analysis top cryptocurrencies </p>
                <form>
                    <div className="form-group">
                        <select
                            value={this.props.limit}
                            className="form-control"
                            name="crypto"
                            onChange={this.limitOnChangeHandler}
                        >
                            <option disabled defaultValue='' value="">Select a value</option>
                            <option value="10">10</option>
                            <option value="50">50</option>
                            <option value="100">All</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}
