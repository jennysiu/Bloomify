import axios from 'axios';

const API_KEY = `sk-2KiZ65dfa09c6ebac4396`;


/**
 * DAVOU
 * @async
 * @function Retrieves results of a user search.
 * @param {string} search - user search
 * @returns results of the axios call as object
 */
export default {
    getPerenualNameResults: async function (search, watering = '', sunlight = '', isIndoors = '') {
        const wateringStr = `&watering=${this.watering}`;
        const sunlightStr = `&sunlight=${this.sunlight}`;
        const isIndoorsStr = `&indoor=${this.indoors}`;
        const searchStr = `&q=${this.search}`;

        if (watering === '' && sunlight === '' && isIndoors === '' ) {
            console.log(`results for ${search}`);
            return axios.get(`https://perenual.com/api/species-list?key=${API_KEY}&q=${search}`)
        } else {

            console.log(`results for ${search === '' ? 'anything': search}, that need ${watering === '' ? 'any type of' : watering} watering, ${sunlight === '' ? 'any amount of sunlight' : sunlight} and live ${isIndoors === 1 ? 'indoors' : 'indoors and outdoors'}`);
            console.log(`https://perenual.com/api/species-list?key=${API_KEY}${searchStr}${wateringStr}${sunlightStr}${isIndoorsStr}`)

            return axios.get(`https://perenual.com/api/species-list?key=${API_KEY}${searchStr}${wateringStr}${sunlightStr}${isIndoorsStr}`)
        }
    }
}