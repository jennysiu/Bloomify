import axios from 'axios';

const API_KEY = `sk-961q65e9b8c1acc534491`;

export default {
  getPlantDetails: async function (plantId) {
    const plantID = `${plantId}`
    return axios.get(`https://perenual.com/api/species/details/${plantID}?key=${API_KEY}`)
  }

}
