//DOM 
var container = document.createElement("div");
container.setAttribute("class","container");
container.innerHTML =`<div class="container">
<h1 id="title">திருக்குறள்</h1>
<div class="row">
    <div class="col-md-12">    
        
        <h2 id="text">குறள்</h2>
        <h4 id="exp"></h4>
    </div>
</div>    
</div>
<button id="button">அடுத்தது</button>`
document.body.append(container);

//javascript
document.getElementById("button").addEventListener("click",kural);
//initial number for api
let count = 0;
//fetch the data 
async function kural(){
        count++;
        if(count<=1330){
                let data = await fetch(`https://api-thirukkural.vercel.app/api?num=${count}`);
                let data1 = await data.json();
                
                document.getElementById("title").innerHTML=`${data1.chap_tam}`;
                document.getElementById("text").innerHTML=`${data1.line1} <br> ${data1.line2}`;
                document.getElementById("exp").innerHTML=`<b>விளக்கம்:</b> ${data1.tam_exp}.`;

        }else{
                document.getElementById("text").innerHTML="நன்றி!";
                document.getElementById("title").innerHTML="திருக்குறள்";
                document.getElementById("exp").innerHTML=""; 
        }
}

//  <img src="https://cdn-fkhia.nitrocdn.com/lKezHaQLKpdMlOeFfMiXWqPiJUhNlbCT/assets/images/optimized/rev-468de7c/wp-content/uploads/2022/06/nadi-leaf-reading-vaitheeswaran-koil.jpg" alt="Thiruvalluvar image">