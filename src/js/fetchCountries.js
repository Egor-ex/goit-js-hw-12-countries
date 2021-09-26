function fetchCountries(searchQuery) {
    const BASE_URL = 'https://restcountries.com/v3/name/';
    const SEARCH_PARAMS = 'name;capital;area;flag;languages';
    return fetch(`${BASE_URL}${searchQuery}?${SEARCH_PARAMS}`).then(res =>
        res.json(),
    );
}

export default fetchCountries;
