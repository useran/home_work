import axios from 'axios';

const GET_SWAPI = 'GET_SWAPI';

const swapiYear = (id) => (dispath) => {
  axios.get(`https://swapi.dev/api/people/${id}`)
    .then(r => {
      dispath({
        type: GET_SWAPI,
        data: {name: r.data.name, years: r.data.birth_year}
      }); 
    });
};

export default swapiYear;