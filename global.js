const URL="https://api.openweathermap.org/data/2.5/weather?q="
const apikey="&appid=9049190123ff0e909e7f92a059ac2c2e"


const form=document.getElementById("form")
const place=document.getElementById("delhi-parent")
const temp=document.getElementById("c")
const press=document.getElementById("hpa")
const AQI=document.getElementById("div")
const wind=document.getElementById("kmph")



function removeElement(parent){
    while(parent.firstChild){
        parent.firstChild.remove()
    }
}

function getweather(searchtext){
    axios.get(`${URL}${searchtext}${apikey}`).then((res)=>{
        const weather=res.data
        console.log(weather)
        const t1=document.createElement('h4')
        const t2=document.createElement('h4')
        const t3=document.createElement('h4')
        const t4=document.createElement('h4')

        t4.append(weather.name)
        place.append(t4)
        t1.append(weather.main.temp);
        t1.append(" K")
        temp.append(t1)
        t3.append(weather.weather[0].description)
        wind.append(t3)
        t2.append(weather.main.pressure);
        t2.append(" Pa")
        press.append(t2)

        if(weather.name==="Pune" || weather.name==="Chandigarh" || weather.name==="Mysore" || weather.name==="Trivandrum"){
            const t6=document.createElement('h4')
            t6.append("0-50")

            AQI.append(t6)

        }
        else if(weather.name==="Hyderabad"|| weather.name==="Jaipur" || weather.name==="Lucknow" || weather.name==="Kolkata" ){

            const t6=document.createElement('h4')

            t6.append("51-100")

            AQI.append(t6)

        }
        else if(weather.name==="Delhi"|| weather.name==="kanpur" || weather.name==="Ludhiana" || weather.name==="Varanasi" || weather.name==="Ghaziabad" || weather.name==="Noida" || weather.name==="Patna"){

            const t6=document.createElement('h4')

            t6.append("201-300")

            AQI.append(t6)

        }
        else if(weather.name==="Kharagpur"|| weather.name==="Durgapur"){

            const t6=document.createElement('h4')

            t6.append("301-400")

            AQI.append(t6)

        }
        else{

            const t6=document.createElement('h4')

            t6.append("250-280")

            AQI.append(t6)

        }


    })
}












form.addEventListener("submit",(e)=>{

    e.preventDefault()

    //console.log(form.children)
    const searchtext=form.children[3].value;
    getweather(searchtext);
    removeElement(temp)
    removeElement(AQI)
    removeElement(press)
    removeElement(wind)
    removeElement(place)
    form.children[3].value="";

})