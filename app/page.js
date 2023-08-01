
"use client"
import React, { useState } from "react";
import Header from "./header.js"
import MoviesRow from "./movie_row.js"
import FormAddMovies from "./form.js"
import Footer from "./footer.js"
import { moviesdata } from './data.js';

function Page() {
    const [data, setData] = useState(moviesdata);
    const [like, setLike] = useState({});

    const HandlerDelete = (id) => {
        const updatedItems = data.filter((item) => item.id !== id);
        setData(updatedItems);
    };

    const handleLike = (id) => {
        const likeupdate = { ...like };
        if (likeupdate[id] !== undefined) {
            likeupdate[id] += 1;
        }
        else {
            likeupdate[id] = 1;
        }
        setLike(likeupdate);
    };

    const handleDislike = (id) => {
        const likeupdate = { ...like };
        if (likeupdate[id] !== undefined) {
            likeupdate[id] -= 1;
        }
        else {
            likeupdate[id] = 1;
        }
        setLike(likeupdate);

    };

    const sortArray = data.sort((a, b) => {
        var total_likeA = 0;
        var total_LikeB = 0;

        if (like[a.id] !== undefined) {
            total_likeA = like[a.id];
        }
        if (like[b.id] !== undefined) {
            total_LikeB = like[b.id];
        }
        return total_LikeB - total_likeA;
    });
    
    // Add the new movie to the existing data array
    const handleAddMovie = (newMovie) => {
        setData((prevData) => [...prevData, newMovie]);
    };

    
    return (
        <>
        <div>
            <Header />
            <div>
                {data.map((item) => (
                    <MoviesRow
                        key={item.id}
                        movie={item}
                        onDelete={() => HandlerDelete(item.id)}
                        onLike={() => handleLike(item.id)}
                        onDislike={() => handleDislike(item.id)}
                        like={like[item.id]}
                    />
                ))}
            </div>
            
            <div className="footerdiv">
                <FormAddMovies onAddMovie={handleAddMovie}/>
            </div>
            
        </div>
         <Footer/>
        </>
        
    )
}
export default Page;
