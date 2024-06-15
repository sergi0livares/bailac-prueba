import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [userId, setUserId] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');

    const handleChange = (event) => {
        setUserId(event.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://reqres.in/api/users/${userId}`);
            setAvatarUrl(response.data.data.avatar);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return (
        <div id="app">
            <b>Buscador de personas</b><br></br>
            Ingrese un número para buscar
            <input type="text" value={userId} onChange={handleChange} placeholder="ID" />
            <button onClick={handleSearch}>Buscar usuario</button>
            {avatarUrl && <img src={avatarUrl} alt="User Avatar" />}
        </div>
    );
}

export default App;

/* import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [userId, setUserId] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setUserId(event.target.value);
    };

    const handleSearch = async () => {
      setLoading(true);
      setAvatarUrl(''); // Reset avatar URL to trigger re-render
        try {
            const response = await axios.get(`https://reqres.in/api/users/${userId}`);
            setAvatarUrl(response.data.data.avatar);
        } catch (error) {
            console.error("Error en la busqueda de usuarios:", error);
        }
    };

    return (
        <div id="app">
            <b>Buscador de personas</b><br></br>
            Ingrese un número para buscar
            <input type="text" value={userId} onChange={handleChange} placeholder="ID" />
            <button onClick={handleSearch}>Buscar usuario</button>
            {avatarUrl && (
                <img
                    src={avatarUrl}
                    alt="User Avatar"
                    className="carga"
                    onLoad={() => setLoading(false)}
                />
            )}
        </div>
    );
}

export default App; */