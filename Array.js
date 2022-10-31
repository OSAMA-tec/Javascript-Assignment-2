const array=[19,3,5,2,12,56,8,7,4];
const arr=array.sort((a,b)=>a-b);
console.log(arr)
const Checkarr=(arr)=>{
    let k=0;
    for(let i=arr[0];i<=arr[arr.length-1];i++){
        if(arr[k]!=i){
         console.log(i);
        }
        else{
            k++;
        }
    }
}

Checkarr(arr);