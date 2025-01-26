import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ReviewComponent() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    function getData() {
        axios.get("http://localhost:3000/movies" + "/" + id)
            .then((res) => {
                setItem(res.data.item);
                console.log(res.data.item);
            })
            .catch((err) => {
                console.error("Errore nel recupero dei film:", err);
            });
    }

    // Funzione per trasformare il voto numerico in stelle
    function renderStars(vote) {
        const fullStars = Math.floor(vote); // Stelle piene
        const emptyStars = 5 - fullStars; // Stelle vuote

        return (
            <>
                {Array(fullStars).fill('⭐')} {/* Stelle piene */}
                {Array(emptyStars).fill('☆')} {/* Stelle vuote */}
            </>
        );
    }

    if (!item) return <p>Loading...</p>;

    return (
        <div className="row">
            <div className="card" key={item.id}>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p>Average: {renderStars(item.media_voti)}</p>
                    <div>
                        {item.reviews && item.reviews.length > 0 ? (
                            item.reviews.map((review, idx) => (
                                <div key={idx}>
                                    <p><strong>{review.name}</strong></p>
                                    <p>{review.text}</p>
                                    <div>
                                        {renderStars(review.vote)} {/* Renderizza le stelle */}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No reviews available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
