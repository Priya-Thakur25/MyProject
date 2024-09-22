import axios from 'axios';

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacedData = async (sw,ne) => {
    try {
        const {data: {data}} = await axios.request(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-key': '17cb2be6c1msh878c43dd7476fedp1a6abcjsn9616622947aa',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    } catch (error) {
        console.error(error);
    }
}