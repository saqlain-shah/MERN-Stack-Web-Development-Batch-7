function api()
{
    return new promise((resolve,reject)=>
    {
        setTimeout(() => 
        {
     console.log("weather is fine");
     resolve(200);      
        }, 2000);
    })
}
function weathercondition(){
    api();
}