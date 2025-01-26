import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MoviesContext } from "../context/moviesContext";
import Card from "./CardPage";
import FormComponent from "../components/FormComponent";
import ReviewComponent from "../components/ReviewComponent";

const apiUrl = "http://localhost:3000/movies";

export default function DetailsPage() {
    const { id } = useParams();
    const { item, setItem } = useContext(MoviesContext);
    const [singleMovie, setSingleMovie] = useState(null);

    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id], item);

    function getData() {
        axios.get(apiUrl + "/" + id)
            .then((res) => {
                setSingleMovie(res.data.item);
                setItem((prevMovie) => [...prevMovie, res.data.item]);
            })
    }

    return (
        <>
            <h1>Sono il film con id {id}</h1>
            {singleMovie ? (
                <Card data={singleMovie} />
            ) : (
                <p>Caricamento...</p>
            )}

            <div>
                <ReviewComponent />
            </div>

            <div className="movie-form">
                <h2>Aggiungi una recensione</h2>
                <FormComponent />
            </div>
        </>
    );
}
