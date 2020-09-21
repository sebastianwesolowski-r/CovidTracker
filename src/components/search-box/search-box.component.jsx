import React, {useState} from 'react';

import {SearchBoxContainer, SearchBoxInput} from './search-box.styles';

import {ReactComponent as SearchIcon} from '../../assets/search-icon.svg';

const SearchBox = ({initialFetch, searchedCountry, setData, setFetching}) => {

    const [searchActive, setSearchActive] = useState(false);
    const [country, setCountry] = useState('');

    const handleChange = event => {
        setCountry(event.target.value);
    };

    const searchCountry = async () => {
        await setFetching(true);
        fetch(`https://api.covid19api.com/total/country/${country}`)
        .then(response => response.json())
        .then(data => data.pop())
        .then(convertedData => {setData({stats: {country: convertedData.Country, confirmed: convertedData.Confirmed, recovered: convertedData.Recovered, deceased: convertedData.Deaths}, initialFetch: false}); setFetching(false);})
        .catch(() => alert('Country not found'));
    };

    return (
        <SearchBoxContainer searchActive={searchActive}>
            {
                initialFetch ? "WORLD CASES" : `CASES IN`
            }
            <SearchBoxInput name="country" value={country} placeholder={searchedCountry ? searchedCountry.toUpperCase() : null} onChange={handleChange} searchActive={searchActive}/>
            <SearchIcon onClick={() => {searchActive ? searchCountry() : setSearchActive(true)}}/>
        </SearchBoxContainer>
    );
};

export default SearchBox;
