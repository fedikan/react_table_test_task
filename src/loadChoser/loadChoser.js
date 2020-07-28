import React from "react";

export default props=>{
    let smallAmount='http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
        bigAmount="http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"

        return(
            <div className="loadchoser">
                <button onClick={props.setAmount.bind(null,smallAmount)} className="btn btn-secondary">
                    Small Amount
                    </button>    
                    <button onClick={props.setAmount.bind(null,bigAmount)} className="btn btn-info">
                    Big Amount 
                    </button>
                            </div>
        )

    }