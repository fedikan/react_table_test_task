import React,{useState} from 'react';


export default props => {


    const[value,setValue]=useState('');
    const inputHandler = event =>{
        setValue(event.target.value);
        }

    return (
        <div className="input-group mb-3 mt-3">
            <input className="form-control" placeholder="Search field" onChange={inputHandler} value={value} />
            <div className="input-group-append">
                <button className="input-group-text" onClick={()=>props.onSearch(value)} id="basic-addon2">Search</button>
            </div>
        </div>
    )
}