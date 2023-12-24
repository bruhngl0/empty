

document.querySelector("button").addEventListener("click", sendData)







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

    let response = await axios.post("http://localhost:3000/" , userData )
    console.log(response.data)
}
}