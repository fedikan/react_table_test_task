import React from "react";
import Point from   './point/point'

export default props=>(
    <tr>
    <th onClick={props.sort.bind(null,'id')}>id
    <Point sortItem={props.sortItem} sortType={props.sortType} realSort={"id"}/>
    </th>
    <th onClick={props.sort.bind(null,'firstName')}>First Name
    <Point sortItem={props.sortItem} sortType={props.sortType} realSort={"firstName"}/>
    
    </th>
    <th onClick={props.sort.bind(null,'lastName')}>Last Name
    <Point sortItem={props.sortItem} sortType={props.sortType} realSort={"lastName"}/>
    
    </th>
    <th onClick={props.sort.bind(null,'email')}>Email
    <Point sortItem={props.sortItem} sortType={props.sortType} realSort={"email"}/>
    
    </th>
    <th onClick={props.sort.bind(null,'phone')}>Phone
    <Point sortItem={props.sortItem} sortType={props.sortType} realSort={"phone"}/>
    
    </th>
</tr>
)