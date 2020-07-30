import React from 'react';

export default props => ( 
    <div>
        <p> 
           Выбран пользователь <b>{props.contact.firstName+' '+props.contact.lastName} </b>
        </p>
        <p>
            Описание:
        </p>
        <br/>
        <textarea readOnly defaultValue={props.contact.description}/>
        <br/>
        <p>Адрес проживания: {props.contact.address.streetAddress}
        </p>
        <br/>
        <p>
            Город: <b>{props.contact.address.city}
        </b>
        </p>
        <br/>
        <p>
            Провинция/штат: <b>{props.contact.address.state}</b>
        </p>
        <br/>
        <p>
            Индекс: <b>{props.contact.address.zip}
        </b>
        </p>
        <br/>
    </div>
)