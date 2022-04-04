import axios from "axios";

export async function fetchPictures(query, page) {
    const BASE_URL = 'https://pixabay.com/api';
    const MY_KEY = '25855503-642d54a3def199b0e1f44cf4e';
    const defaultSettings = 'image_type=photo&orientation=horizontal&safesearch=true&per_page=40';

    try {
        const response = await axios.get(`${BASE_URL}/?key=${MY_KEY}&q=${query}&${defaultSettings}&page=${page}`);    
        return response.data;
    } catch (error) {
        console.log(error);
    }
}