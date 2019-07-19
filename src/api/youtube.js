import axios from 'axios';

const KEY = 'AIzaSyC9I_anq35QH9jzelPKeOnlvuHzLqJsMxY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet',
        maxResults:10,
        key: KEY
    }
});

