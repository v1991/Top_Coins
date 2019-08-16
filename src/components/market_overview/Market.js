import React, { Component } from 'react';
import loading from '../../img/loading.gif';

class Market extends Component {
    constructor(props) {
        super(props)
        this.tableData = ''
        this.state = {
            curencyTableData: "",
        }
    }


    formatMoney = (amount, decimalCount = 0, decimal = ".", thousands = ",") => {
        try {
            decimalCount = Math.abs(decimalCount);
            const negativeSign = amount < 0 ? "-" : "";
            let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
            let j = (i.length > 3) ? i.length % 3 : 0;

            return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        } catch (e) {
            console.log(e)
        }
    }

    constructTable() {
        // console.log(this.props.currencyData)
        if (this.props.currencyData) {
            this.tableData = <table className="table table-hover table-responsive-sm table-responsive-md mb-5">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Price Change (24h)</th>
                        <th>Market Cap</th>
                        <th>Volume (24h)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.currencyData.map(element => {
                        return (
                            <tr key={element.cmc_rank}>
                                <td>{element.cmc_rank}</td>
                                <td>{element.name}</td>
                                <td>${this.formatMoney(element.quote.USD.price, 2)}</td>
                                <td>{this.formatMoney(element.quote.USD.percent_change_24h, 2)}%</td>
                                <td>${this.formatMoney(element.quote.USD.market_cap)}</td>
                                <td>${this.formatMoney(element.quote.USD.volume_24h)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        } else if(this.props.currencyData == ''){
            this.tableData = <img className="mx-auto" src={loading} alt="Loading" />
        }
    }

    render() {
        this.constructTable();
        return (
            <div className="text-center">
                {this.tableData}
            </div>
        )
    }
}


export default Market;