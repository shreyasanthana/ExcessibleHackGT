import React from 'react';



function Map() {    

    return (
        <div>
            <a
                type="button"
                onClick={(e) => {
                e.preventDefault();
                window.location.href='http://127.0.0.1:8887/map.html';
                }}
            >Find Food Banks Near You!</a>
            
        </div>
    )
    
    
}

export default Map

/*
<div>
            <button
                type="button"
                onClick={(e) => {
                e.preventDefault();
                window.location.href='http://127.0.0.1:8887/map.html';
                }}
            >Find Food Banks Near You!</button>
            
        </div>
*/