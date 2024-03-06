import axios from 'axios';

const API_KEY = `sk-0TuC65e08d8f166774406`;

export default {
  getPlantDetails: async function (plantId) {
    const plantID = `${plantId}`
    return axios.get(`https://perenual.com/api/species/details/${plantID}?key=${API_KEY}`)
  }

}
