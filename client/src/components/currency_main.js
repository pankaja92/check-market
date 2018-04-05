import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import { BrowserRouter as Router, Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

const Style = {
  ListFont: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "500",
    fontSize: "16px"
  },
  HourlyChangeDown: {
    color: "red"
  },
  HourlyChangeUp: {
    color: "green"
  }
};

class CryptoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyList: [],
      showCheckboxes: false,
      selected: [],
      adjustForCheckbox: false
    };
  }

  fetchCurrencyList = async () => {
    const res = await fetch("/api/getcurrencylist", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "get",
      dataType: "json"
    });
    const data = await res.json();
    var currencyList = [];
    data.map(onedata => {
      var currency = onedata;
      currencyList.push(currency);
    });
    this.setState({ currencyList });
  };
  componentWillMount() {
    this.fetchCurrencyList();
  }

  render() {
    return (
      <Router>
        <div>
          <Table>
            <TableHeader
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={this.state.showCheckboxes}
            >
              <TableRow>
                <TableHeaderColumn>Rank</TableHeaderColumn>
                <TableHeaderColumn>Coin</TableHeaderColumn>
                <TableHeaderColumn>Price</TableHeaderColumn>
                <TableHeaderColumn>Change</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={this.state.showCheckboxes}>
              {this.state.currencyList.map(currency => (
                <TableRow key={currency.rank}>
                  <TableRowColumn style={Style.ListFont}>
                    {currency.rank}
                  </TableRowColumn>
                  <TableRowColumn style={Style.ListFont}>
                    <Link to="/currency">{currency.name}</Link>
                  </TableRowColumn>
                  <TableRowColumn style={Style.ListFont}>
                    {currency.price_btc}
                  </TableRowColumn>
                  <TableRowColumn style={Style.ListFont}>
                    {currency.percent_change_1h > 0 ? (
                      <span style={Style.HourlyChangeUp}>
                        {currency.percent_change_1h}{" "}
                        <FontAwesome name="far fa-thumbs-up" />
                      </span>
                    ) : (
                      <span style={Style.HourlyChangeDown}>
                        {currency.percent_change_1h}{" "}
                        <FontAwesome name="far fa-thumbs-down" />
                      </span>
                    )}
                  </TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Router>
    );
  }
}

export default CryptoList;
