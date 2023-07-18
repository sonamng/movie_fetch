import React,{useState} from "react"
function Rating({like,onLike ,onDislike}){
    return(
        <>         
           <div className="box">
                <img className="likebutton" src="Vector2.png" alt="no" onClick={onLike}></img>

                <span>
                    <div className="showdatabutton">
                        <span className="sss">{like}</span>
                    </div>
                </span>
                <img className="dislikebutton" src="Vector1.png" alt="no" onClick={onDislike}></img>
            </div>
        </>
    );
};

export default Rating;


