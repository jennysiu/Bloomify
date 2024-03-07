import axios from 'axios';

const API_KEY = `sk-IhFE65e636f07b1824461`;

export default {
  getPlantDetails: async function (plantId) {
    const plantID = `${plantId}`
    return axios.get(`https://perenual.com/api/species/details/${plantID}?key=${API_KEY}`)
  }

}
