const BASE_URL = "http://localhost:3000";

function getData(){
    fetch(`${BASE_URL}/products`)
    .then((response)=> response.json())
    .then((data)=> {
        console.log(data);
        
    })

    .catch((err)=>{
        console.log(err);
        
    })
}

getData();

function deleteData(endpoint, id){
    fetch(`${BASE_URL}/${endpoint}/${id}`,{
        method: "DELETE"
    })
    .then((res) => {
        console.log(res);
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
    
}

deleteData("products", 7)