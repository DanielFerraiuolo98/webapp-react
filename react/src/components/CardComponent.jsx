import axios from 'axios';
import { useState, useEffect } from 'react';

export default function CardComponent() {
    const [data, setData] = useState([]);

    const getData = () => {
        axios.get("http://localhost:3000/movies").then((res) => {
            setData(res.data.data);  // Assicurati che la struttura della risposta sia corretta
            console.log(res.data.data);
        });
    };

    useEffect(getData, []);

    return (
        <div className="row">
            {Array.isArray(data) && data.length > 0 ? (
                data.map((element) => (
                    <div className="card col-2" key={element.id}>
                        <img src="https://placehold.co/200x200" className="card-img-top" alt={element.title} />
                        <div className="card-body">
                            <h5 className="card-title">{element.title}</h5>
                            <p className="card-text"></p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
