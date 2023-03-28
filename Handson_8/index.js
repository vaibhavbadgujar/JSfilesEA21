let word = "abcadeecfb" ;
let map = new Map();
for(let i=0;i<word.length;i++){
    if(map.has(word[i])){
        map.set(word[i],Number(map.get(word[i]))+1);
    }
    else{
        map.set(word[i],1);
    }
}
// console.log(map);
for(const [key,value] of map){
    console.log(key + "=" + value);
}