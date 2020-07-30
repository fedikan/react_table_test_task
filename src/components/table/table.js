import React from 'react';
import Search from './search/search'
import TableRow from './table_row/table_row'
import TableHead from './table_head/table_head'
import AddField from './addField/addField';
export default props => (
    <div>
        <AddField onAdd={props.onAdd} addContact={props.addContact} onSubmit={props.onSubmit}></AddField>
        <Search onSearch={props.onSearch}/>
        {props.data?<table className="table">
            <thead>
                <TableHead 
               sortItem={props.sortItem}
               sortType={props.sortType}
               sort={props.sort}
               />
               
            </thead>
            <tbody>
                {props.data.map((item) =>
                    <tr onClick={props.showInfo.bind(null,item)} key={Math.random()}>
                    <TableRow item={item}/>
                    </tr>                
                )}
          
            </tbody>

        </table>:<span>nothing here</span>}
        
    </div>
)








