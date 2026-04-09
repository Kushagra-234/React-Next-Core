import React from 'react'

const CartNew = () => {
  return (
    <div>
      
    </div>
  )
}

export default CartNew







// map  polyfill 

Array.prototype.myMap= function(cb){
    let result=[]

    for(let i=0;i<this.length;i++){
        result.push((cb(this[i],i,this)))
    }

}

Array.map((item,index,this)=>{

})

Array.prototype.myMap= function (cb){
    let result=[]

    for(let i=0;i<this.length;i++){
        result.push(cb(this[i],i,this))
    }
}



Array.prototype.myFilter = function(cb){
    let reuslt=[]

    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            reuslt.push(this[i])
        }
    }
}



Array.prototype.myReduce = function (cb,initialVal){
    let acc= initialVal !== undefined ? initialVal : this[0]
    let start =initialVal !== undefined ? 0 :1

    for(let i=0;i<this.length;i++){
        acc= cb(acc,this[i],i,this)
    }

    return acc

}