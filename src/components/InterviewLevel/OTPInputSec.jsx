import React, { useRef, useState } from "react";

const OTPInputSec = ({ inputBox }) => {
  const [otpBox, setOtpBox] = useState(Array(inputBox).fill(""));
  // const [value, setValue] = useState();
  const inputRef = useRef([]);

  const handleChange = (e, index) => {
    const nayaarr = [...otpBox];
    const valueainp = e.target.value;
    const digit = valueainp[valueainp.length - 1];
    nayaarr[index] = digit;
    setOtpBox(nayaarr);

    if (digit && index < otpBox.length - 1) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpBox[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  const handleSUbmit = ()=>{
    console.log(otpBox)
  }
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h3>OTP Input</h3>
      <div className="flex gap-3">
        {otpBox.map((val, index) => {
          return (
            <input
              onKeyDown={(e) => handleKeyDown(e, index)}
              value={val}
              ref={(el) => (inputRef.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              className="border-2 w-20"
            />
          );
        })}
      </div>
      <button onClick={handleSUbmit}>Submit OTP</button>
    </div>
  );
};

export default OTPInputSec;



ref= {(el)=>inputRef.current[index]=el}

const inputRef=useRef([])













const flattenArray = (arr) =>{
   let results=[]

   for(let item of arr){
    if(Array.isArray(item)){
      results=results.concat(flattenArray(item))
    }else{
      results.push(item)
    }
   }


   return results;
}



for(let item of arr){
  if(Array.isArray(item)){
    results=results.concat(flattenArray(item))
  }else{
    results.push(item)
  }
}



Array.prototype.myMap = function (cb){
  let results=[]

  for(let i=0;i<this.length;i++){
    results.push(cb(this[i],i,this ))
  }
}


Array.prototype.myFilter= function(cb){
  let results=[]


  for(let i=0;i<this.length;i++){
    if(cb(this[i],i,this)){
      results.push(this[i])
    }
  }
}



Array.prototype.myReduce = function(cb,initialVal){

  let acc= initialVal !== undefined ? initialVal : this[0]
  let start =initialVal !== undefined ? 0:1

  for(let i=start;i<this.length;i++){
    acc= cb(acc,this[i],i,this)
  }

  return acc;

}





Array.prototype.myMpa= function(cb){
  let result=[]

  for(let i=0;i<this.length;i++){
    result.push(cb(this[i],i,this))
  }

  return result 
}



Array.prototype.myfilter= function(cb){
  let result=[]

  for(let i=0;i<this.length;i++){
    if(cb(this[i],i,this))
    result.push(this[i])
  }

  return result 
}


Array.prototype.myreduce = function(cb,initialVal){
  let acc= initialVal !== undefined ? initialVal : this[0]
  let start =initialVal !== undefined ? 0 : 1


  for(let i=start;i<this.length;i++){
    acc= cb(acc,this[i],i,this)
  }
  return acc
}



function debounce (fn,delay){
  let timerId;
  return function(...args){
    clearTimeout(timerId)

    timerId = setTimeout(()=>{
    

      fn.apply(this,args)
    },delay)

  }
}





function throttle(fn,delay){
 let isThrottled= false

 return function(...args){
  if(isThrottled)return

  fn.apply(this,args)

  isThrottled=true

  setTimeout(()=>{
    isThrottled = false

  },delay)
 }
}


[]

function myPromiseAll(promises){
  return new Promise((resolve,reject)=>{

    let results=[]
    let completed=0

    if(promises.length === 0){
      resolve([])
    }


    promises.forEach((promise,index)=>{
      Promise.resolve(promise).then((val)=>{
        results[index]=val
        completed ++ 


        if(completed.length === promises.length){
          resolve(results)
        }

      }).catch((e)=>{
        console.log(e)

      })

    })

  })
}