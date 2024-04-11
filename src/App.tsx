import React, { useEffect, useState } from 'react';
import API_KEY from './request/apiKey'
import './App.css';

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }, [])
    
    return <div className="App">Test</div>
}

export default App;
