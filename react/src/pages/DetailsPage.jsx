import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MoviesContext } from "../context/moviesContext";  // Assicurati che il percorso sia corretto
import Card from "./CardPage";

const apiUrl = "http://localhost:3000/movies"; // URL API del server

export default function DetailsPage() {
    const { id } = useParams();
    const { item, setItem } = useContext(MoviesContext);  // Uso del contesto
    const [singleMovie, setSingleMovie] = useState(null);

    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id], item);

    function getData() {
        axios.get(apiUrl + "/" + id)
            .then((res) => {
                console.log(res.data.item);
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
                <p>Caricamento...</p>  // Mostra un messaggio di caricamento
            )}
        </>
    );
}
