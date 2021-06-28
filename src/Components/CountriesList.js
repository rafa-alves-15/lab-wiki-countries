import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    this.setState({
      countries: countries,
    });
  }

  render() {
    return (
      <div className="col-4" style={{ overflowY: 'auto', height: '100vh' }}>
        <ul className="list-group">
          {this.state.countries.map((country, idx) => {
            return (
              <Link
                to={`/${country.cca3}`}
                key={idx}
                className="list-group-item"
                style={{ textAlign: 'left' }}
              >
                {`${country.flag} ${country.name.common}`}
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CountriesList;
