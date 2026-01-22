// promise.all ka polyfill

// promise.all me  sab resolve to resolve ek bhi reject to reject

Promise.myPromise = function (promises) {
  return new Promise((resolve, reject) => {
    let result: any[] = [];
    let completed = 0;

    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((p, index: any) => {
      Promise.resolve(p)
        .then((res) => {
          result[index] = res;
          completed++;

          if (completed === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let result: any[] = [];
    let completed = 0;

    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((p, index: any) => {
      Promise.resolve(p).then((res) => {
        result[index] = res;
        completed++;

        if (completed === promises.length) {
          return resolve(result);
        }
      }).catch((err)=>{
        reject(err)
      });
    });
  });
};


// okay useEffect cleanup works only when component unmounts or it is called again 
// React batches state updates and processes them asynchronously for better performance.
// Garbage collection kaise hota hai JS me? automatic using sweep algo 
// function composition me multiple functions ko combine krke ham ek function banate hai 
// recursivew call last statement to avoid call stack growing 
// useMemo memoizes values, React.memo memoizes components.
// also used to cache values and react.memo used to avoid re-renders
// concurrent rendering ek aisi tarekke ki rendering hai jisme react pause,prevent aur resume kr skta hai rendering in basis of priority 
// suspense allows react to wait for data or lazy loading components
// useTransition allows marking updates as non-urgent so React can keep UI responsive.
// usetranstition se ham updates ko non-priotiztable bana skte hai jisse UI pause na ho 
// render phase me react dekhta hai kya changes hai vdom and real dom me and commit phase me batch krta hai wo changes 
// getserversideprops SSR getStaticprops SSG and getgetstaticpath dynamic toutes konse build krne ye batta hai 
// streaming allows to send html in chunks so that user view isnt blocked aisa nhi hai pura html aaega tb dikhega user ko pehle header,fir navbar aise bhi dikh skta hai 
// edgr fucntion basically used in authtokens authentication ye sabse pass wale user site of server execute hote hai 
// okay so streaming vs prerendering kuch dekha maine to in streaming data chunk me aata hai isse rendering roti in partial prerendering 
// sttaic + dynamic data aata to static data pehle aajata fikh jaata 

// frontend secutiyy issue 
// caused by 
// xss  -cross site scripting attackers inject js in your code generally using tokens from localstorage use hhtp only cookies
// csrf-cross site request forgery - attacker user ke browser se fake reuqest bhej deta hai 
// exposing secrets 
// memory leaks  unsues listenre
// dependency vulnerablity fix this by auduting npm packages always 
// okay cors mtlb cross origin request to isme maan lo backend url www.x.com and frontend www.y.com to browser khud se hi reuqest nhi maarne deta frontend ko for security reasons ki ek website dusre ki api na use krle
// for fixing this backend se set krna pdega allowed origin frontend url ko 
