// object ... spread operartor
// same key overwrite

import { useState } from "react";

// for array
// ...spread operator
// appenr krta hai

// for eg
const arr1 = [{ name: "kushagra" }];

const [curArr, setCurArr] = useState(arr1);

setCurArr([...curArr, { name: "manu" }]);

 curArr=[{name:"kushagra"},{name:"manu"}]


 const AddNode = () =>{
    const newNode ={
        id:as,
        text,
        type,
        ...(type === "folder" ?  {children:[]} : {})
    }

    return StyleSheet(prev=>insertNode(prev,id,newNode))
 }


 const insertNode(tree,id,newNode){
    if(tree.id === id && newNode.type ==="folder"){
        return {...tree,children:[...tree.children,newNode]}
    }

    if(!tree.children)
        return tree

    return {
        ...tree,
        children:tree.children.map((e)=>{
            return insertNode(e,id,newNode)
        })
    }
 }