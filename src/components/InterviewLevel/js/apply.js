const obj={
    name:"mary"
}

function getName(city){
    console.log(`name is ${this.name} and city is ${city}`)
}


getName.apply(obj,["blr"])



Function.prototype.myApply= function(context={},[...args]){
    if(typeof this !== "function"){
        throw new Error("not callable over function")
    }
    if(Array.isArray(args)){
        throw new Error("not a array")
    }
    
    context.fn=this
  const result=  context.fn([...args])
  delete context.fn
  return result 
}
