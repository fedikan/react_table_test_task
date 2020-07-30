import React from 'react';

export default props =>(
    <div>
    {props.sortItem===props.realSort ? <small>{props.sortType==='asc'? "👆" : " 👇 "}</small> : null}
    </div>
)