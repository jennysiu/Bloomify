import axios from 'axios';

const API_KEY = `sk-2KiZ65dfa09c6ebac4396`;

export default {
  getPlantDetails: async function (plantId) {
    const plantID = `${plantId}`
    return axios.get(`https://perenual.com/api/species/details/${plantID}?key=${API_KEY}`)
  }

}
