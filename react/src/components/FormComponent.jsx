import { useState } from "react";

const initialMovie = {
    name: "",
    review: "",
    vote: "",
};

export default function FormComponent() {
    const [movie, setMovie] = useState(initialMovie);
    const [movieList, setMovieList] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setMovieList([...movieList, movie]);
        setMovie(initialMovie);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setMovie({
            ...movie,
            [name]: value,
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={movie.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="review" className="form-label">Review</label>
                    <textarea
                        className="form-control"
                        id="review"
                        name="review"
                        rows="3"
                        placeholder="Enter your review"
                        value={movie.review}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Vote</label>
                    <input
                        type="text"
                        className="form-control"
                        id="vote"
                        name="vote"
                        placeholder="Enter your vote"
                        value={movie.vote}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}
