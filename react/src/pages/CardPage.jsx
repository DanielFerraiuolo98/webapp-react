import { Link } from "react-router-dom";

export default function Card({
    data
}) {
    return (
        <>
            <img src={`/${data.image}`} alt={data.title} />
            <h3>{data.title}</h3>
            <h4>{data.director}</h4>
            <p>{data.abstract}</p>
            <Link to={`/movies/${data.id}`}></Link>
        </>
    )
}