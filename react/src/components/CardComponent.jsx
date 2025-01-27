import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CardComponent() {
    const [data, setData] = useState([]);

    const getData = () => {
        axios.get("http://localhost:3000/movies").then((res) => {
            setData(res.data.data);
            console.log(res.data.data);
        });
    };

    useEffect(getData, []);

    return (
        <div className="row">
            {data.map((element) => {
                const imgPath = "http://localhost:3000/img/movies/" + element.image;
                return (
                    <div className="card-movies" key={element.id}>
                        <img src={imgPath} className="card-img-top" alt={element.title} />
                        <div className="card-body">
                            <h3 className="card-title">{element.title}</h3>
                            <h4>{element.director}</h4>
                            <h5>{element.genre}</h5>
                            <p className="card-text">{element.abstract}</p>
                            <Link to={`/movies/${element.id}`} className="btn btn-primary">See more</Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
