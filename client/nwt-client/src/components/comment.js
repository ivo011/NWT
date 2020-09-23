import React from 'react';


const Comment = ({name, text}) => {
    const style = {
        display: "flex",        
        alignItems: "baseline",
        padding: "3px"
    }
    return ( 
        <div style={style} className="comment">
            <h6 className="user"> {name}: </h6>
             <p className="comment-text">{text}</p>
        </div>
     );
}
 
export default Comment;