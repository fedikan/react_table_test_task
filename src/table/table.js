import React from 'react';
import Point from './point/point'
import Search from './search/search'
export default props => (
    <div>
        <Search onSearch={props.onSearch}/>
        {props.data?<table className="table">
            <thead>
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
            </thead>

            <tbody>
                {props.data.map((item) =>
                    <tr onClick={props.showInfo.bind(null,item)} key={item.id+item.firstName+item.lastName}>
                        <td >{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>

                )}
            </tbody>

        </table>:<span>nothing here</span>}
        
    </div>
)








