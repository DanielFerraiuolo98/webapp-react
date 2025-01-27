import { Link } from "react-router-dom";

export default function Card({
    data
}) {
    return (
        <>
            <div className="contenitore">
                <img className="immagine" src={`/${data.image}`} alt={data.title} />
                <div className="dettagli">
                    <h3>{data.title}</h3>
                    <h4>{data.director}</h4>
                    <p>{data.abstract}</p>
                    <Link to={`/movies/${data.id}`}></Link>
                </div>
            </div>
        </>
    )
}