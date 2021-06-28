import countries from '../countries.json';
import { Link } from 'react-router-dom';

function CountryDetail(props) {
  function getCountry(cca3) {
    return countries.find((country) => country.cca3 === cca3);
  }
  const countryCca3 = props.match.params.cca3;
  const selectedCountry = getCountry(countryCca3);
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            <h1>{selectedCountry.name.common}</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Capital</th>
          <td>{selectedCountry.capital[0]}</td>
        </tr>
        <tr>
          <th scope="row">Area</th>
          <td>{`${selectedCountry.area} Km2`}</td>
        </tr>
        <tr>
          <th scope="row">Borders</th>
          <td>
            <ul style={{ textAlign: 'left' }}>
              {selectedCountry.borders.map((countryCca3, idx) => {
                return (
                  <li>
                    <Link to={`/${countryCca3}`} key={idx}>
                      {getCountry(countryCca3).name.common}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CountryDetail;
