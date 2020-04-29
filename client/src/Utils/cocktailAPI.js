import axios from "axios";

axios({
    "method":"GET",
    "url":"https://the-cocktail-db.p.rapidapi.com/list.php",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
    "x-rapidapi-key":"c22e73525cmshd4b903fea7d9db9p1297efjsn1aadaafbd701"
    },"params":{
    "i":"list"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })