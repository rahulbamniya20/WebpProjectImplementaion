 let loc =document.getElementById("location");
 let tempicon=document.getElementById("temp-icon");
 let tempvalue=document.getElementById("temp-value");
 let climate=document.getElementById("climate");
 let iconfile;
 window.addEventListener("load",()=>{

    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>
        {
        long=position.coords.longitude;
        lat=position.coords.latitude;


        const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e14d9ea18974dbf5beda808b89188c9d`
        fetch(api).then((Response)=>{
            return Response.json();
        })
        .then(data=>{
            const{name}=data;
            const{feels_like}=data.main;
            const{id,main}=data.weather[0];

            loc.textContent=name;
            climate.textContent=main;
            tempvalue.textContent=Math.round(feels_like-273);
            
            if(id<300 &&  id>200){
                tempicon.src="./icon/storm.png"

            }
           
           else if(id<300 &&  id>200){
                tempicon.src="./icon/storm.png"

            }
           else if(id<400 &&  id>300){
                tempicon.src="./icon/clouds.png"

            }
           else if(id<600 &&  id>500){
                tempicon.src="./icon/rain.png"

            }
           else if(id<700 &&  id>600){
                tempicon.src="./icon/snowman.png"

            }
           else if(id<800 &&  id>700){
                tempicon.src="./icon/clouds.png"

            }
           else if(id==800){
                tempicon.src="./icon/clear-sky.png"

            }
            


           
           
             


        })
        
         } ) 

    }
 })




