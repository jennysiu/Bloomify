const axios = require('axios');
const fs = require("fs")
const API_KEY = `sk-2KiZ65dfa09c6ebac4396`

getPerenualResults('rose')

function getPerenualResults(search) {
    const url = `https://perenual.com/api/species-list?key=${API_KEY}&q=${search}`;

    axios.get(url)
        .then((response) => {

            fs.writeFile('searchResults.JSON', JSON.stringify(response.data, null, "\t"), err => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(response.data)
                }
            });
        })

        .catch((error) => {
            //console.log(error);
        });
}
