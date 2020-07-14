import React, {useState} from 'react';

import {SearchBoxContainer, SearchBoxInput} from './search-box.styles';

import {ReactComponent as SearchIcon} from '../../assets/search-icon.svg';

const SearchBox = ({setData, setFetching}) => {

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
    };

    return (
        <SearchBoxContainer>
            <SearchBoxInput name="country" value={country} placeholder="SEARCH COUNTRY" onChange={handleChange}/>
            <SearchIcon onClick={() => searchCountry()}/>
        </SearchBoxContainer>
    );
};

export default SearchBox;
