import axios from 'axios';

const API_KEY = `sk-IhFE65e636f07b1824461`;

let resString = "test"
/**
 * DAVOU
 * @async
 * @function Retrieves results of a user search.
 * @param {string} search - user search
 * @returns results of the axios call as object
 */
export default {
    getPerenualNameResults: async function (search, watering = '', sunlight = '', isIndoors = '') {
        const wateringStr = `&watering=${watering}`;
        const sunlightStr = `&sunlight=${sunlight}`;
        const isIndoorsStr = `&indoor=${isIndoors}`;
        const searchStr = `&q=${search}`;

        

        if (watering === '' && sunlight === '' && isIndoors === '' ) {
            console.log(`results for ${search}`);
            return axios.get(`https://perenual.com/api/species-list?key=${API_KEY}&q=${search}`)
        } else if(search === 'resultsString'){
            return `results for ${search === '' ? 'anything': search}, that need ${watering === '' ? 'any type of' : watering} watering, ${sunlight === '' ? 'any amount of sunlight' : sunlight} and live ${isIndoors === 1 ? 'indoors' : 'indoors and outdoors'}`
        }
        else {
            //console.log(resString)
            return axios.get(`https://perenual.com/api/species-list?key=${API_KEY}${search === '' ? '': searchStr}${watering === ''? '':wateringStr}${sunlight === ''? '':sunlightStr}${isIndoors === ''? '':isIndoorsStr}`)
        }
    },
    

}

//export 