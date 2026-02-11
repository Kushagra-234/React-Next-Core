// bat
// /tab

// intuiton sabse pehle lenth check kro direcrt bahar
function anagram(s, t) {
  let map = {};
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] ? map[s[i]] : 0) + 1;
  }

  for(let i=0;i<t.length;i++){
    if(!map[t[i]])
        return false
    map[t[i]]--
  }

  return true 
}




// ab banega aisa structrue 
// {b:1,a:1,t:1}
// for bat 
