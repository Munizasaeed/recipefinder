import { useState } from 'react'
import Hero from './Hero'

const SearchApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const[lastSearchedTerm, setLastSearchedTerm] = useState('');

    const handleSearch = async () => {
        if (!searchTerm.trim()) return;
        setLoading(true);
        setError(null);
        setLastSearchedTerm(searchTerm);
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            if (!response.ok) {
                throw new Error("There is some error");
            }
            const data = await response.json();
            setSearchResults(data.meals || []);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Hero
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
            searchResults={searchResults}
            loading={loading}
            error={error}
            lastSearchedTerm={lastSearchedTerm}
            setLastSearchedTerm={setLastSearchedTerm}
        />
    );
};

export default SearchApi