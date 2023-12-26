

document.querySelector(".submit").addEventListener("click", sendData)
document.querySelector(".getData").addEventListener("click", getData)






async function sendData(){

    let dataOne = document.querySelector(".username").value
    let dataTwo = document.querySelector(".password").value

    if(!dataOne|| !dataTwo){
        alert("enter valid inputs")
    }else{
    const userData = {
        "username": dataOne,
        "password": dataTwo
    }

    let response = await axios.post("http://localhost:3000/signin" , userData )
    localStorage.setItem('token', response.data.token)
    
   
}
}

async function getData(){
    
}


  