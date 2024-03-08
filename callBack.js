// callBack function :when a pass function as argument or paramater on another function is called call back function in js

function getData(data1,data2){
    setTimeout(()=>{ console.log(data1);
    if(data2){
    data2();
    }

},2000);
 
}
getData("ali",()=>{
    getData(205,()=>{
        getData(2);
    });
});
console.log("hellow i cant wait")