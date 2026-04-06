const API_KEY = 'ab6a1f6e-c49b-47e4-ba5b-adf52539d761';

const getCats = (page = 1, limit = 15) => {

    const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=Rand`;

    return fetch(url, {
        headers: {
            'x-api-key': API_KEY,
        }
    })
        .then(res => res.json());
}

export default getCats;