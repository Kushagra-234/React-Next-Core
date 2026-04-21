// You need to build a reusable data table component.

// Requirements:
// Columns are dynamic (coming from backend config)
// Rows are dynamic
// Some columns need custom rendering (like buttons, badges, etc.)
// Should support:
// loading state
// empty state
// pagination (basic)
// Should be reusable across app



// so component wise HLD 
// TableContainer 
// Table -> table component 
// TableCell  -> indivisual cell 
// config driven rendering 

TableContainer(){

    const resPonse = {
        columns:[{key:"name",fieldName:"name"}],
        data:[{id:3490,name:"kushagra",status:active}]
    }

    <Table columns={resPonse.columns} data={resPonse.data}/>
}




const Table= ({columns,data}) =>{



    <table>
        <thead>
            <tr>
                <th>
                    {columns.map((item)=>{
                        return <thead>{item.key}</thead>
                    })}
                </th>

            </tr>

        </thead>
        <tbody>
            <tr>
                
                    {data.map((row)=>{
                    return <td>{columns.map((col)=>{
                     return row[col.id]
                    })}</td>
                    })}

              

            </tr>

        </tbody>
    </table>

}





const promise = new Promise(()=>{
    
})