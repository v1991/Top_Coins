import React, { Component } from 'react';

import GetCurrency from '../layout/GetCurrency';
import loading from '../../img/loading.gif';
import { connect } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Graph extends Component {
    constructor(props) {
        super(props)
        this.graphData = {}
    }

    calculateDataGraphPoint = () => {
        console.log(this.props.cryptoCurrencyData)
        if (this.props.cryptoCurrencyData) {
            return this.props.cryptoCurrencyData.map(element => {
                return ({
                    name: element.name,
                    marker: {
                        symbol: 'round'
                    },
                    data: [{
                        x: element.quote.USD.market_cap,
                        y: element.quote.USD.volume_24h + ((element.quote.USD.volume_24h * element.quote.USD.percent_change_24h) / element.quote.USD.volume_24h),
                        change_24: element.quote.USD.percent_change_24h,
                        volume_24h: element.quote.USD.volume_24h
                    }]
                })
            })
        } else {
            return [];
        }

    }


    render() {

        const options = {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Cryptocurrency - Top ' + this.props.limit
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Market Cap'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Volume'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b> Name : ' + this.series.name + '</b>' +
                        '<br /><b>Market Cap :</b> $ ' + Highcharts.numberFormat(this.x, 2, '.', ',') + '<br/>' +
                        '<b>Volume :</b> $ ' + Highcharts.numberFormat(this.point.volume_24h, 2, '.', ',') + '<br>' +
                        '<b>Price change (24h) : </b> ' + Highcharts.numberFormat(this.point.change_24, 2) + '%</br>';
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                }
            },
            series: this.calculateDataGraphPoint()
        };

        return (
            <div className="mt-5 text-center">
                
                <GetCurrency onLimitChange={this.props.onLimitChange} showLoader={this.props.showLoader} limit={this.props.limit} />
                {options.series.length > 0 ? <HighchartsReact highcharts={Highcharts} options={options} /> : ''}
                {this.props.loading ? <img className="mx-auto" src={loading} alt="Loading" /> :""}
            
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        cryptoCurrencyData: state.cryptoCurrencyData,
        limit: state.limit,
        loading: state.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showLoader: (limit) => dispatch({ type: "SHOW_LOADING", limit: limit }),
        onLimitChange: (limit) => dispatch({ type: "LIMIT_CHANGED", limit: limit })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
