const title = document.getElementById('title');
const img = document.getElementById('img');
const btn = document.getElementById('btn');
const imageLists = document.getElementById('img-lists')

let str = "";
let collectionofImages = JSON.parse(localStorage.getItem("images"));
// console.log(collectionofImages);
if(collectionofImages == null){
    imageLists.innerHTML = "";
}
else{
    collectionofImages.forEach((img)=>{
        str += `
        <div class="img-box">
                <h4 id="titles-img">${img.titles}</h4>
                <div id="img-contain">
                    <img src=${img.imgs} alt="">
                </div>
        </div>
       `  
       imageLists.innerHTML = str; 
    })
}



btn.addEventListener('click',()=>{
    str += `
            <div class="img-box">
                    <h4 id="titles-img">${title.value}</h4>
                    <div id="img-contain">
                        <img src=${img.value} alt="">
                    </div>
            </div>
           `  
           imageLists.innerHTML = str; 
           let images = localStorage.getItem("images");
           if(images == null){
            let json = [];
            json.push({titles:title.value,imgs:img.value});
            localStorage.setItem("images",JSON.stringify(json));

           }
           else{
            let json = JSON.parse(localStorage.getItem("images"));
            json.push({titles:title.value,imgs:img.value});
            localStorage.setItem("images",JSON.stringify(json));
           }
           

           
           title.value = "";
           img.value = "";
});

