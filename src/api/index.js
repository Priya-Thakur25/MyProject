import axios from 'axios';

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'x-rapidapi-key': '17cb2be6c1msh878c43dd7476fedp1a6abcjsn9616622947aa',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
    }
};

export const getPlacedData = async () => {
    try {
        const {data: {data}} = await axios.request(URL, options);
        return data;
    } catch (error) {
        console.error(error);
    }
}