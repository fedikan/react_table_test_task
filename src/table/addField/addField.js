import React, { useState } from 'react'


export default props => {
const [firstName, setName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [fullInfo,setFullInfo]=useState({firstName:'',lastName:'',email:'',phone:''})

const nameHandler = event => {
    setName(event.target.value);
    setInfo()

}
const lastNameHandler = event => {
    setLastName(event.target.value);
    setInfo()

}
const emailHandler = event => {
    setEmail(event.target.value);
    setInfo()

}
const phoneHandler = event => {
    setPhone(event.target.value);
    setInfo()
}

const setInfo=()=>{
    let id=Math.round(Math.random()*100);
    setFullInfo({
        firstName,lastName,email,phone,id
    })
}
return(
    <div>
            <button onClick={() => props.onAdd()}>New contact</button>
            <div className={props.addContact ? null : 'hide_inputs'} >
    
                <input className="form-control" onChange={nameHandler} placeholder="First name" />
                <input className="form-control" onChange={lastNameHandler} placeholder="Last name" />
                <input className="form-control" onChange={emailHandler} placeholder="Email" />
                <input className="form-control" onChange={phoneHandler} placeholder="Phone" />
                <button onClick={()=>{
    props.onSubmit(fullInfo)
                    
                    }}>Add contact</button>
    
            </div>
        </div>
    )
}


    


