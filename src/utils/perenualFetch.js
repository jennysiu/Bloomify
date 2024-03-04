import axios from 'axios';

const API_KEY = `sk-2KiZ65dfa09c6ebac4396`;


/**
 * DAVOU
 * @async
 * @function Retrieves results of a user search.
 * @param {string} search - user search
 * @returns results of the axios call as object
 */

// export default {
//     getPerenualNameResults: async function (search, watering = '', sunlight = '', isIndoors = '') {
//         const wateringStr = `&watering=${this.watering}`;
//         const sunlightStr = `&sunlight=${this.sunlight}`;
//         const isIndoorsStr = `&indoor=${this.indoors}`;
//         const searchStr = `&q=${this.search}`;

//         if (watering === '' && sunlight === '' && isIndoors === '') {
//             console.log(`results for ${search}`);
//             return data
//             //axios.get(`https://perenual.com/api/species-list?key=${API_KEY}&q=${search}`)
//         } else {

//             console.log(`results for ${search ? search : 'anything'}, that need ${watering === '' ? 'any type of' : watering} watering, ${sunlight === '' ? 'any amount of sunlight' : sunlight} and live ${isIndoors === 1 ? 'indoors' : 'indoors and outdoors'}`);
//             return data
//             //axios.get(`https://perenual.com/api/species-list?key=${API_KEY}${searchStr}${wateringStr}${sunlightStr}${isIndoorsStr}`)
//         }
//     }
// }

export default {
    getPerenualNameResults: async function (search, watering = '', sunlight = '', isIndoors = '') {
      const wateringStr = `&watering=${this.watering}`;
      const sunlightStr = `&sunlight=${this.sunlight}`;
      const isIndoorsStr = `&indoor=${this.isIndoors}`;
      const searchStr = `&q=${this.search}`;
  
      try {
        if (watering === '' && sunlight === '' && isIndoors === '') {
          console.log(`Results for ${search}`);
          const response = await fetch(`https://perenual.com/api/species-list?key=${API_KEY}&q=${search}`);

          const data = await response.json();
          console.log(data);
          return data;

        } else {
          console.log(`Results for ${search ? search : 'anything'}, that need ${watering === '' ? 'any type of' : watering} watering, ${sunlight === '' ? 'any amount of sunlight' : sunlight} and live ${isIndoors === 1 ? 'indoors' : 'indoors and outdoors'}`);
          const response = await fetch(`https://perenual.com/api/species-list?key=${API_KEY}${searchStr}${wateringStr}${sunlightStr}${isIndoorsStr}`);

          const data = await response.json();
          console.log(data);
          return data;
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  };





/**
 * example calls so you don't have to use your key
 * 1st is 'plant details' call
 * 2nd is 'plant list' call
 * 
 */

// testData2: [{
//     id: 1530,
//     common_name: 'camellia',
//     scientific_name: ["Camellia japonica 'April Rose'"],
//     other_name: [],
//     family: 'Theaceae',
//     origin: ['Japan'],
//     type: 'Broadleaf evergreen',
//     dimension: '5.00 to 8.00 feet',
//     dimensions: { type: null, min_value: 5, max_value: 8, unit: 'feet' },
//     cycle: 'Perennial',
//     attracts: [],
//     propagation: [
//         'Layering Propagation',
//         'Grafting Propagation',
//         'Cutting',
//         'Division',
//         'Seed Propagation'
//     ],
//     hardiness: { min: '6', max: '9' },
//     hardiness_location: {
//         full_url: 'https://perenual.com/api/hardiness-map?species_id=1530&size=og&key=sk-0TuC65e08d8f166774406',
//         full_iframe: "<iframe frameborder=0 scrolling=yes seamless=seamless width=1000 height=550 style='margin:auto;' src='https://perenual.com/api/hardiness-map?species_id=1530&size=og&key=sk-0TuC65e08d8f166774406'></iframe>"
//     },
//     watering: 'Average',
//     depth_water_requirement: [],
//     volume_water_requirement: { unit: 'gallon', value: '4' },
//     watering_period: null,
//     watering_general_benchmark: { value: '7-10', unit: 'days' },
//     plant_anatomy: [
//         { part: 'flower', color: [Array] },
//         { part: 'petals', color: [Array] },
//         { part: 'stamens', color: [Array] },
//         { part: 'leaves', color: [Array] },
//         { part: 'branch', color: [Array] },
//         { part: 'trunk', color: [Array] }
//     ],
//     sunlight: ['Part shade'],
//     pruning_month: ['April', 'February', 'March', 'April'],
//     pruning_count: [],
//     seeds: 0,
//     maintenance: 'Moderate',
//     'care-guides': 'http://perenual.com/api/species-care-guide-list?species_id=1530&key=sk-0TuC65e08d8f166774406',
//     soil: [],
//     growth_rate: 'High',
//     drought_tolerant: false,
//     salt_tolerant: false,
//     thorny: false,
//     invasive: false,
//     tropical: false,
//     indoor: false,
//     care_level: 'Medium',
//     pest_susceptibility: [],
//     pest_susceptibility_api: 'Coming Soon',
//     flowers: true,
//     flowering_season: 'Spring',
//     flower_color: 'Rose red',
//     cones: false,
//     fruits: false,
//     edible_fruit: false,
//     edible_fruit_taste_profile: 'Coming Soon',
//     fruit_nutritional_value: 'Coming Soon',
//     fruit_color: [],
//     harvest_season: null,
//     leaf: true,
//     leaf_color: ['green'],
//     edible_leaf: false,
//     cuisine: false,
//     medicinal: false,
//     poisonous_to_humans: 0,
//     poisonous_to_pets: 0,
//     description: "Camellia japonica 'April Rose' is an amazing plant species for many reasons. This gorgeous shrub has large, full, slightly-fragrant, white flowers with a pink blush that blossom in early spring, making a stunning addition to any garden. It is evergreen, making it a great choice for many climates and is a low maintenance plant. Not only that, but it is also known for its medicinal properties. Its leaves are used in tea and can be used to promote healthy skin, hair, and nails. Its flowers are also said to have detoxifying and mood-lifting qualities.",
//     default_image: {
//         license: 5,
//         license_name: 'Attribution-ShareAlike License',
//         license_url: 'https://creativecommons.org/licenses/by-sa/2.0/',
//         original_url: 'https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/og/52456500562_32f0b718f8_b.jpg',
//         regular_url: 'https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/regular/52456500562_32f0b718f8_b.jpg',
//         medium_url: 'https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/medium/52456500562_32f0b718f8_b.jpg',
//         small_url: 'https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/small/52456500562_32f0b718f8_b.jpg',
//         thumbnail: 'https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/thumbnail/52456500562_32f0b718f8_b.jpg'
//     },
//     other_images: 'Upgrade Plan To Supreme For Access https://perenual.com/subscription-api-pricing. Im sorry'
// }
// ]

// const data = {
//     "data": [
//         {
//             "id": 24,
//             "common_name": "Mocha Rose Big Leaf Maple",
//             "scientific_name": [
//                 "Acer macrophyllum 'Mocha Rose'"
//             ],
//             "other_name": [
//                 "Oregon Maple"
//             ],
//             "cycle": "Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "full sun",
//                 "part shade"
//             ],
//             "default_image": {
//                 "license": 5,
//                 "license_name": "Attribution-ShareAlike License",
//                 "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/24_acer_macrophyllum_mocha_rose/og/4715169892_220a9d39f6_b.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/24_acer_macrophyllum_mocha_rose/regular/4715169892_220a9d39f6_b.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/24_acer_macrophyllum_mocha_rose/medium/4715169892_220a9d39f6_b.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/24_acer_macrophyllum_mocha_rose/small/4715169892_220a9d39f6_b.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/24_acer_macrophyllum_mocha_rose/thumbnail/4715169892_220a9d39f6_b.jpg"
//             }
//         },
//         {
//             "id": 58,
//             "common_name": "Shirazz Japanese Maple",
//             "scientific_name": [
//                 "Acer palmatum 'Gwen's Rose Delight'"
//             ],
//             "other_name": [],
//             "cycle": "Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "full sun",
//                 "part shade"
//             ],
//             "default_image": null
//         },
//         {
//             "id": 334,
//             "common_name": "Rose Marie Magnolia",
//             "scientific_name": [
//                 "Magnolia 'Rose Marie'"
//             ],
//             "other_name": [
//                 "Rosemarie Magnolia"
//             ],
//             "cycle": "Perennial",
//             "watering": "Minimum",
//             "sunlight": [
//                 "full sun",
//                 "part shade"
//             ],
//             "default_image": {
//                 "license": 45,
//                 "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
//                 "license_url": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
//                 "original_url": "https://perenual.com/storage/species_image/334_magnolia_rose_marie/og/Magnolia_C397_soulangeana_BW_1.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/334_magnolia_rose_marie/regular/Magnolia_C397_soulangeana_BW_1.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/334_magnolia_rose_marie/medium/Magnolia_C397_soulangeana_BW_1.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/334_magnolia_rose_marie/small/Magnolia_C397_soulangeana_BW_1.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/334_magnolia_rose_marie/thumbnail/Magnolia_C397_soulangeana_BW_1.jpg"
//             }
//         },
//         {
//             "id": 355,
//             "common_name": "Candied Apple Flowering Crab",
//             "scientific_name": [
//                 "Malus 'Candied Apple'"
//             ],
//             "other_name": [
//                 "Roseybloom",
//                 "Crabapple"
//             ],
//             "cycle": "Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "full sun",
//                 "part shade"
//             ],
//             "default_image": {
//                 "license": 45,
//                 "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
//                 "license_url": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
//                 "original_url": "https://perenual.com/storage/species_image/355_malus_candied_apple/og/663px-Apples_on_tree_2021_G1.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/355_malus_candied_apple/regular/663px-Apples_on_tree_2021_G1.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/355_malus_candied_apple/medium/663px-Apples_on_tree_2021_G1.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/355_malus_candied_apple/small/663px-Apples_on_tree_2021_G1.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/355_malus_candied_apple/thumbnail/663px-Apples_on_tree_2021_G1.jpg"
//             }
//         },
//         {
//             "id": 359,
//             "common_name": "Dolgo Apple",
//             "scientific_name": [
//                 "Malus 'Dolgo'"
//             ],
//             "other_name": [
//                 "Roseybloom",
//                 "Crabapple"
//             ],
//             "cycle": "Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "full sun"
//             ],
//             "default_image": {
//                 "license": 451,
//                 "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
//                 "license_url": "https://creativecommons.org/publicdomain/zero/1.0/",
//                 "original_url": "https://perenual.com/storage/species_image/359_malus_dolgo/og/apple-zieraepfel-wild-apple-tree-branch.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/359_malus_dolgo/regular/apple-zieraepfel-wild-apple-tree-branch.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/359_malus_dolgo/medium/apple-zieraepfel-wild-apple-tree-branch.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/359_malus_dolgo/small/apple-zieraepfel-wild-apple-tree-branch.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/359_malus_dolgo/thumbnail/apple-zieraepfel-wild-apple-tree-branch.jpg"
//             }
//         },
//         {
//             "id": 360,
//             "common_name": "Donald Wyman Flowering Crab",
//             "scientific_name": [
//                 "Malus 'Donald Wyman'"
//             ],
//             "other_name": [
//                 "Roseybloom",
//                 "Crabapple"
//             ],
//             "cycle": "Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "full sun"
//             ],
//             "default_image": {
//                 "license": 451,
//                 "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
//                 "license_url": "https://creativecommons.org/publicdomain/zero/1.0/",
//                 "original_url": "https://perenual.com/storage/species_image/360_malus_donald_wyman/og/frembellishment_apple_small_694055-image-kybdt6db.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/360_malus_donald_wyman/regular/frembellishment_apple_small_694055-image-kybdt6db.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/360_malus_donald_wyman/medium/frembellishment_apple_small_694055-image-kybdt6db.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/360_malus_donald_wyman/small/frembellishment_apple_small_694055-image-kybdt6db.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/360_malus_donald_wyman/thumbnail/frembellishment_apple_small_694055-image-kybdt6db.jpg"
//             }
//         },
//         {
//             "id": 372,
//             "common_name": "Louisa Flowering Crab",
//             "scientific_name": [
//                 "Malus 'Louisa'"
//             ],
//             "other_name": [
//                 "Roseybloom",
//                 "Crabapple"
//             ],
//             "cycle": "Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "full sun"
//             ],
//             "default_image": {
//                 "license": 4,
//                 "license_name": "Attribution License",
//                 "license_url": "https://creativecommons.org/licenses/by/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/372_malus_louisa/og/10362143644_d44b00de9e_b.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/372_malus_louisa/regular/10362143644_d44b00de9e_b.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/372_malus_louisa/medium/10362143644_d44b00de9e_b.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/372_malus_louisa/small/10362143644_d44b00de9e_b.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/372_malus_louisa/thumbnail/10362143644_d44b00de9e_b.jpg"
//             }
//         },
//         {
//             "id": 374,
//             "common_name": "Melrose Apple",
//             "scientific_name": [
//                 "Malus 'Melrose'"
//             ],
//             "other_name": [],
//             "cycle": "Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "full sun"
//             ],
//             "default_image": {
//                 "license": 4,
//                 "license_name": "Attribution License",
//                 "license_url": "https://creativecommons.org/licenses/by/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/374_malus_melrose/og/50860213661_1b84b33396_b.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/374_malus_melrose/regular/50860213661_1b84b33396_b.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/374_malus_melrose/medium/50860213661_1b84b33396_b.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/374_malus_melrose/small/50860213661_1b84b33396_b.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/374_malus_melrose/thumbnail/50860213661_1b84b33396_b.jpg"
//             }
//         },
//         {
//             "id": 379,
//             "common_name": "Red Jewel Flowering Crab",
//             "scientific_name": [
//                 "Malus 'Red Jewel'"
//             ],
//             "other_name": [
//                 "Roseybloom",
//                 "Crabapple"
//             ],
//             "cycle": "Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "full sun",
//                 "part shade"
//             ],
//             "default_image": {
//                 "license": 451,
//                 "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
//                 "license_url": "https://creativecommons.org/publicdomain/zero/1.0/",
//                 "original_url": "https://perenual.com/storage/species_image/379_malus_red_jewel/og/embellishment_apple_small_ornamental_tree_ornamental_fruit_malus_rose_greenhouse_fruits-745555.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/379_malus_red_jewel/regular/embellishment_apple_small_ornamental_tree_ornamental_fruit_malus_rose_greenhouse_fruits-745555.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/379_malus_red_jewel/medium/embellishment_apple_small_ornamental_tree_ornamental_fruit_malus_rose_greenhouse_fruits-745555.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/379_malus_red_jewel/small/embellishment_apple_small_ornamental_tree_ornamental_fruit_malus_rose_greenhouse_fruits-745555.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/379_malus_red_jewel/thumbnail/embellishment_apple_small_ornamental_tree_ornamental_fruit_malus_rose_greenhouse_fruits-745555.jpg"
//             }
//         },
//         {
//             "id": 381,
//             "common_name": "Sentinel Flowering Crab",
//             "scientific_name": [
//                 "Malus 'Sentinel'"
//             ],
//             "other_name": [
//                 "Roseybloom",
//                 "Crabapple"
//             ],
//             "cycle": "Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "full sun"
//             ],
//             "default_image": {
//                 "license": 5,
//                 "license_name": "Attribution-ShareAlike License",
//                 "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/381_malus_sentinel/og/49409253573_b0a8bd2496_b.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/381_malus_sentinel/regular/49409253573_b0a8bd2496_b.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/381_malus_sentinel/medium/49409253573_b0a8bd2496_b.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/381_malus_sentinel/small/49409253573_b0a8bd2496_b.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/381_malus_sentinel/thumbnail/49409253573_b0a8bd2496_b.jpg"
//             }
//         },
//         {
//             "id": 382,
//             "common_name": "Snowdrift Flowering Crab",
//             "scientific_name": [
//                 "Malus 'Snowdrift'"
//             ],
//             "other_name": [
//                 "Roseybloom",
//                 "Crabapple"
//             ],
//             "cycle": "Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "full sun"
//             ],
//             "default_image": {
//                 "license": 6,
//                 "license_name": "Attribution-NoDerivs License",
//                 "license_url": "https://creativecommons.org/licenses/by-nd/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/382_malus_snowdrift/og/47982893248_8ef3d25b9a_b.jpg"
//             }
//         },
//         {
//             "id": 408,
//             "common_name": "abelia",
//             "scientific_name": [
//                 "Abelia 'Rose Creek'"
//             ],
//             "other_name": [],
//             "cycle": "Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "full sun",
//                 "part shade"
//             ],
//             "default_image": {
//                 "license": 4,
//                 "license_name": "Attribution License",
//                 "license_url": "https://creativecommons.org/licenses/by/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/408_abelia_rose_creek/og/21931595768_e94f9b5c49_b.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/408_abelia_rose_creek/regular/21931595768_e94f9b5c49_b.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/408_abelia_rose_creek/medium/21931595768_e94f9b5c49_b.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/408_abelia_rose_creek/small/21931595768_e94f9b5c49_b.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/408_abelia_rose_creek/thumbnail/21931595768_e94f9b5c49_b.jpg"
//             }
//         },
//         {
//             "id": 482,
//             "common_name": "yarrow",
//             "scientific_name": [
//                 "Achillea millefolium f. rosea"
//             ],
//             "other_name": [],
//             "cycle": "Herbaceous Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "full sun"
//             ],
//             "default_image": {
//                 "license": 45,
//                 "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
//                 "license_url": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
//                 "original_url": "https://perenual.com/storage/species_image/482_achillea_millefolium_f_rosea/og/2560px-Achillea_27Rosea27_01.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/482_achillea_millefolium_f_rosea/regular/2560px-Achillea_27Rosea27_01.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/482_achillea_millefolium_f_rosea/medium/2560px-Achillea_27Rosea27_01.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/482_achillea_millefolium_f_rosea/small/2560px-Achillea_27Rosea27_01.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/482_achillea_millefolium_f_rosea/thumbnail/2560px-Achillea_27Rosea27_01.jpg"
//             }
//         },
//         {
//             "id": 483,
//             "common_name": "yarrow",
//             "scientific_name": [
//                 "Achillea millefolium 'Montrose Rose'"
//             ],
//             "other_name": [],
//             "cycle": "Herbaceous Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "full sun"
//             ],
//             "default_image": null
//         },
//         {
//             "id": 540,
//             "common_name": "desert rose",
//             "scientific_name": [
//                 "Adenium obesum"
//             ],
//             "other_name": [],
//             "cycle": "Perennial",
//             "watering": "Minimum",
//             "sunlight": [
//                 "full sun"
//             ],
//             "default_image": {
//                 "license": 5,
//                 "license_name": "Attribution-ShareAlike License",
//                 "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/540_adenium_obesum/og/9244335137_6d662ed77c_b.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/540_adenium_obesum/regular/9244335137_6d662ed77c_b.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/540_adenium_obesum/medium/9244335137_6d662ed77c_b.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/540_adenium_obesum/small/9244335137_6d662ed77c_b.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/540_adenium_obesum/thumbnail/9244335137_6d662ed77c_b.jpg"
//             }
//         },
//         {
//             "id": 653,
//             "common_name": "hollyhock",
//             "scientific_name": [
//                 "Alcea rosea"
//             ],
//             "other_name": [],
//             "cycle": "Herbaceous Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "full sun",
//                 "part shade"
//             ],
//             "default_image": {
//                 "license": 5,
//                 "license_name": "Attribution-ShareAlike License",
//                 "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/653_alcea_rosea/og/52177324906_3e75a503f7_b.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/653_alcea_rosea/regular/52177324906_3e75a503f7_b.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/653_alcea_rosea/medium/52177324906_3e75a503f7_b.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/653_alcea_rosea/small/52177324906_3e75a503f7_b.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/653_alcea_rosea/thumbnail/52177324906_3e75a503f7_b.jpg"
//             }
//         },
//         {
//             "id": 654,
//             "common_name": "hollyhock",
//             "scientific_name": [
//                 "Alcea rosea 'Nigra'"
//             ],
//             "other_name": [],
//             "cycle": "Herbaceous Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "full sun",
//                 "part shade"
//             ],
//             "default_image": {
//                 "license": 5,
//                 "license_name": "Attribution-ShareAlike License",
//                 "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/654_alcea_rosea_nigra/og/7972146336_7430b09f99_b.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/654_alcea_rosea_nigra/regular/7972146336_7430b09f99_b.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/654_alcea_rosea_nigra/medium/7972146336_7430b09f99_b.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/654_alcea_rosea_nigra/small/7972146336_7430b09f99_b.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/654_alcea_rosea_nigra/thumbnail/7972146336_7430b09f99_b.jpg"
//             }
//         },
//         {
//             "id": 655,
//             "common_name": "hollyhock",
//             "scientific_name": [
//                 "Alcea rosea (single)"
//             ],
//             "other_name": [],
//             "cycle": "Herbaceous Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "full sun",
//                 "part shade"
//             ],
//             "default_image": {
//                 "license": 5,
//                 "license_name": "Attribution-ShareAlike License",
//                 "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/655_alcea_rosea_single/og/51265082640_c6f378dbd5_b.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/655_alcea_rosea_single/regular/51265082640_c6f378dbd5_b.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/655_alcea_rosea_single/medium/51265082640_c6f378dbd5_b.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/655_alcea_rosea_single/small/51265082640_c6f378dbd5_b.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/655_alcea_rosea_single/thumbnail/51265082640_c6f378dbd5_b.jpg"
//             }
//         },
//         {
//             "id": 881,
//             "common_name": "columbine",
//             "scientific_name": [
//                 "Aquilegia flabellata var. pumila 'Rosea'"
//             ],
//             "other_name": [],
//             "cycle": "Herbaceous Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "Full sun",
//                 "part shade"
//             ],
//             "default_image": null
//         },
//         {
//             "id": 1009,
//             "common_name": "swamp milkweed",
//             "scientific_name": [
//                 "Asclepias incarnata"
//             ],
//             "other_name": [
//                 "Rose Milkweed",
//                 "Pink Milkweed",
//                 "Pink Milkweed"
//             ],
//             "cycle": "Herbaceous Perennial",
//             "watering": "Frequent",
//             "sunlight": [
//                 "Sun"
//             ],
//             "default_image": {
//                 "license": 4,
//                 "license_name": "Attribution License",
//                 "license_url": "https://creativecommons.org/licenses/by/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/1009_asclepias_incarnata/og/51803934774_8983de9bea_b.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/1009_asclepias_incarnata/regular/51803934774_8983de9bea_b.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/1009_asclepias_incarnata/medium/51803934774_8983de9bea_b.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/1009_asclepias_incarnata/small/51803934774_8983de9bea_b.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/1009_asclepias_incarnata/thumbnail/51803934774_8983de9bea_b.jpg"
//             }
//         },
//         {
//             "id": 1010,
//             "common_name": "swamp milkweed",
//             "scientific_name": [
//                 "Asclepias incarnata 'Cinderella'"
//             ],
//             "other_name": [
//                 "Rose Milkweed",
//                 "Pink Milkweed",
//                 "Pink Milkweed"
//             ],
//             "cycle": "Herbaceous Perennial",
//             "watering": "Frequent",
//             "sunlight": [
//                 "Sun"
//             ],
//             "default_image": {
//                 "license": 5,
//                 "license_name": "Attribution-ShareAlike License",
//                 "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/1010_asclepias_incarnata_cinderella/og/7634473196_8f5a237db9_b.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/1010_asclepias_incarnata_cinderella/regular/7634473196_8f5a237db9_b.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/1010_asclepias_incarnata_cinderella/medium/7634473196_8f5a237db9_b.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/1010_asclepias_incarnata_cinderella/small/7634473196_8f5a237db9_b.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/1010_asclepias_incarnata_cinderella/thumbnail/7634473196_8f5a237db9_b.jpg"
//             }
//         },
//         {
//             "id": 1011,
//             "common_name": "swamp milkweed",
//             "scientific_name": [
//                 "Asclepias incarnata 'Ice Ballet'"
//             ],
//             "other_name": [
//                 "Rose Milkweed",
//                 "Pink Milkweed",
//                 "Pink Milkweed"
//             ],
//             "cycle": "Herbaceous Perennial",
//             "watering": "Frequent",
//             "sunlight": [
//                 "Sun"
//             ],
//             "default_image": {
//                 "license": 4,
//                 "license_name": "Attribution License",
//                 "license_url": "https://creativecommons.org/licenses/by/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/1011_asclepias_incarnata_ice_ballet/og/50075697802_cdd4df63b9_b.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/1011_asclepias_incarnata_ice_ballet/regular/50075697802_cdd4df63b9_b.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/1011_asclepias_incarnata_ice_ballet/medium/50075697802_cdd4df63b9_b.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/1011_asclepias_incarnata_ice_ballet/small/50075697802_cdd4df63b9_b.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/1011_asclepias_incarnata_ice_ballet/thumbnail/50075697802_cdd4df63b9_b.jpg"
//             }
//         },
//         {
//             "id": 1012,
//             "common_name": "swamp milkweed",
//             "scientific_name": [
//                 "Asclepias incarnata 'Soulmate'"
//             ],
//             "other_name": [
//                 "Rose Milkweed",
//                 "Pink Milkweed",
//                 "Pink Milkweed"
//             ],
//             "cycle": "Herbaceous Perennial",
//             "watering": "Frequent",
//             "sunlight": [
//                 "Sun"
//             ],
//             "default_image": {
//                 "license": 4,
//                 "license_name": "Attribution License",
//                 "license_url": "https://creativecommons.org/licenses/by/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/1012_asclepias_incarnata_soulmate/og/51803934774_8983de9bea_b.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/1012_asclepias_incarnata_soulmate/regular/51803934774_8983de9bea_b.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/1012_asclepias_incarnata_soulmate/medium/51803934774_8983de9bea_b.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/1012_asclepias_incarnata_soulmate/small/51803934774_8983de9bea_b.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/1012_asclepias_incarnata_soulmate/thumbnail/51803934774_8983de9bea_b.jpg"
//             }
//         },
//         {
//             "id": 1089,
//             "common_name": "astilbe",
//             "scientific_name": [
//                 "Astilbe rosea 'Peach Blossom'"
//             ],
//             "other_name": [],
//             "cycle": "Herbaceous Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "Part shade",
//                 "full shade"
//             ],
//             "default_image": {
//                 "license": 45,
//                 "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
//                 "license_url": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
//                 "original_url": "https://perenual.com/storage/species_image/1089_astilbe_rosea_peach_blossom/og/2560px-Astilbe_japonica_Peach_Blossom_0zz.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/1089_astilbe_rosea_peach_blossom/regular/2560px-Astilbe_japonica_Peach_Blossom_0zz.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/1089_astilbe_rosea_peach_blossom/medium/2560px-Astilbe_japonica_Peach_Blossom_0zz.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/1089_astilbe_rosea_peach_blossom/small/2560px-Astilbe_japonica_Peach_Blossom_0zz.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/1089_astilbe_rosea_peach_blossom/thumbnail/2560px-Astilbe_japonica_Peach_Blossom_0zz.jpg"
//             }
//         },
//         {
//             "id": 1218,
//             "common_name": "begonia",
//             "scientific_name": [
//                 "Begonia semperflorens 'Senator Deep Rose'"
//             ],
//             "other_name": [],
//             "cycle": "Herbaceous Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "part shade",
//                 "part sun/part shade"
//             ],
//             "default_image": {
//                 "license": 4,
//                 "license_name": "Attribution License",
//                 "license_url": "https://creativecommons.org/licenses/by/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/1218_begonia_semperflorens_senator_deep_rose/og/8884235929_8f2eaa2082_b.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/1218_begonia_semperflorens_senator_deep_rose/regular/8884235929_8f2eaa2082_b.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/1218_begonia_semperflorens_senator_deep_rose/medium/8884235929_8f2eaa2082_b.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/1218_begonia_semperflorens_senator_deep_rose/small/8884235929_8f2eaa2082_b.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/1218_begonia_semperflorens_senator_deep_rose/thumbnail/8884235929_8f2eaa2082_b.jpg"
//             }
//         },
//         {
//             "id": 1234,
//             "common_name": "barberry",
//             "scientific_name": [
//                 "Berberis 'Cally Rose'"
//             ],
//             "other_name": [],
//             "cycle": "Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "Full sun",
//                 "part shade"
//             ],
//             "default_image": {
//                 "license": 4,
//                 "license_name": "Attribution License",
//                 "license_url": "https://creativecommons.org/licenses/by/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/1234_berberis_cally_rose/og/28742921498_35f288d6e2_b.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/1234_berberis_cally_rose/regular/28742921498_35f288d6e2_b.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/1234_berberis_cally_rose/medium/28742921498_35f288d6e2_b.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/1234_berberis_cally_rose/small/28742921498_35f288d6e2_b.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/1234_berberis_cally_rose/thumbnail/28742921498_35f288d6e2_b.jpg"
//             }
//         },
//         {
//             "id": 1250,
//             "common_name": "Japanese barberry",
//             "scientific_name": [
//                 "Berberis thunbergii f. atropurpurea 'Rose Glow'"
//             ],
//             "other_name": [],
//             "cycle": "Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "full sun",
//                 "part shade"
//             ],
//             "default_image": {
//                 "license": 5,
//                 "license_name": "Attribution-ShareAlike License",
//                 "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/1250_berberis_thunbergii_f_atropurpurea_rose_glow/og/27304940200_4c499f2841_b.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/1250_berberis_thunbergii_f_atropurpurea_rose_glow/regular/27304940200_4c499f2841_b.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/1250_berberis_thunbergii_f_atropurpurea_rose_glow/medium/27304940200_4c499f2841_b.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/1250_berberis_thunbergii_f_atropurpurea_rose_glow/small/27304940200_4c499f2841_b.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/1250_berberis_thunbergii_f_atropurpurea_rose_glow/thumbnail/27304940200_4c499f2841_b.jpg"
//             }
//         },
//         {
//             "id": 1465,
//             "common_name": "calamint",
//             "scientific_name": [
//                 "Calamintha nepeta 'Montrose White'"
//             ],
//             "other_name": [],
//             "cycle": "Herbaceous Perennial",
//             "watering": "Minimum",
//             "sunlight": [
//                 "Full sun"
//             ],
//             "default_image": {
//                 "license": 45,
//                 "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
//                 "license_url": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
//                 "original_url": "https://perenual.com/storage/species_image/1465_calamintha_nepeta_montrose_white/og/1456px-Calamintha_nepeta_kz4.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/1465_calamintha_nepeta_montrose_white/regular/1456px-Calamintha_nepeta_kz4.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/1465_calamintha_nepeta_montrose_white/medium/1456px-Calamintha_nepeta_kz4.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/1465_calamintha_nepeta_montrose_white/small/1456px-Calamintha_nepeta_kz4.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/1465_calamintha_nepeta_montrose_white/thumbnail/1456px-Calamintha_nepeta_kz4.jpg"
//             }
//         },
//         {
//             "id": 1519,
//             "common_name": "shrubby evening primrose",
//             "scientific_name": [
//                 "Calylophus serrulatus"
//             ],
//             "other_name": [],
//             "cycle": "Herbaceous Perennial",
//             "watering": "Minimum",
//             "sunlight": [
//                 "Full sun"
//             ],
//             "default_image": {
//                 "license": 45,
//                 "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
//                 "license_url": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
//                 "original_url": "https://perenual.com/storage/species_image/1519_calylophus_serrulatus/og/D096D0BED0B2D182D0B5D186D18C_D196D0BBD196D180D196D0B9D181D18CD0BAD0B8D0B9_D0BDD0B0_D181D182D0B5D0BFD0BED0B2D0BED0BCD183_D181D185D0B8D0BBD196_D0B4D0BED0BBD0B8D0BDD0B8_D180D196D187D0BAD0B8_D0AFD182D180D0B0D0BDD18C.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/1519_calylophus_serrulatus/regular/D096D0BED0B2D182D0B5D186D18C_D196D0BBD196D180D196D0B9D181D18CD0BAD0B8D0B9_D0BDD0B0_D181D182D0B5D0BFD0BED0B2D0BED0BCD183_D181D185D0B8D0BBD196_D0B4D0BED0BBD0B8D0BDD0B8_D180D196D187D0BAD0B8_D0AFD182D180D0B0D0BDD18C.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/1519_calylophus_serrulatus/medium/D096D0BED0B2D182D0B5D186D18C_D196D0BBD196D180D196D0B9D181D18CD0BAD0B8D0B9_D0BDD0B0_D181D182D0B5D0BFD0BED0B2D0BED0BCD183_D181D185D0B8D0BBD196_D0B4D0BED0BBD0B8D0BDD0B8_D180D196D187D0BAD0B8_D0AFD182D180D0B0D0BDD18C.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/1519_calylophus_serrulatus/small/D096D0BED0B2D182D0B5D186D18C_D196D0BBD196D180D196D0B9D181D18CD0BAD0B8D0B9_D0BDD0B0_D181D182D0B5D0BFD0BED0B2D0BED0BCD183_D181D185D0B8D0BBD196_D0B4D0BED0BBD0B8D0BDD0B8_D180D196D187D0BAD0B8_D0AFD182D180D0B0D0BDD18C.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/1519_calylophus_serrulatus/thumbnail/D096D0BED0B2D182D0B5D186D18C_D196D0BBD196D180D196D0B9D181D18CD0BAD0B8D0B9_D0BDD0B0_D181D182D0B5D0BFD0BED0B2D0BED0BCD183_D181D185D0B8D0BBD196_D0B4D0BED0BBD0B8D0BDD0B8_D180D196D187D0BAD0B8_D0AFD182D180D0B0D0BDD18C.jpg"
//             }
//         },
//         {
//             "id": 1530,
//             "common_name": "camellia",
//             "scientific_name": [
//                 "Camellia japonica 'April Rose'"
//             ],
//             "other_name": [],
//             "cycle": "Perennial",
//             "watering": "Average",
//             "sunlight": [
//                 "Part shade"
//             ],
//             "default_image": {
//                 "license": 5,
//                 "license_name": "Attribution-ShareAlike License",
//                 "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
//                 "original_url": "https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/og/52456500562_32f0b718f8_b.jpg",
//                 "regular_url": "https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/regular/52456500562_32f0b718f8_b.jpg",
//                 "medium_url": "https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/medium/52456500562_32f0b718f8_b.jpg",
//                 "small_url": "https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/small/52456500562_32f0b718f8_b.jpg",
//                 "thumbnail": "https://perenual.com/storage/species_image/1530_camellia_japonica_april_rose/thumbnail/52456500562_32f0b718f8_b.jpg"
//             }
//         }
//     ],
//     "to": 30,
//     "per_page": 30,
//     "current_page": 1,
//     "from": 1,
//     "last_page": 13,
//     "total": 374
    

// }