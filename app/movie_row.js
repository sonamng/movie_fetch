import Rating from "./rating.js"
import DeletButton from "./delete.js"

function MoviesRow({ movie, onDelete, like, onLike, onDislike }) {
    return (
        <>
            <div className="moviesrow">
                <div className="col21">
                    <img className="img" src="image 1.png" alt="no img" />
                </div>
                <div className="col22">
                    <div className="col23">
                        <h1>{movie.name}</h1>
                        <p>{movie.release_date}</p>
                        <p>{movie.Description}</p>
                    </div>
                    <div className="col24">
                        <Rating
                            like={like}
                            onLike={onLike}
                            onDislike={onDislike}
                        />
                        <div className="deletebutton">
                            <DeletButton onDelete={onDelete} />
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </>
    );
}
export default MoviesRow;
