 window.addEventListener ("load",function()
{
    const list = document.getElementById("list");
    const item = document.querySelector(".item");
    //Fetch the items from the JSON file 

    function loadItems(){
        return fetch('data/data.json')
        .then(response =>response.json() ) //
        .then(json=> json.item);
    }
    
    loadItems()
    .then(items => {
        console.log(items);

    })
    .catch(console.log());



}); 


/* 
window.addEventListener ("load",function()
{
    //var section = document.getElementById("section");
    var section = document.querySelector(".section");

     var txtX = section.getElementsByClassName("input")[0]; 
    var txtY = section.getElementsByClassName("input")[1];  
    var INPUT = section.getElementsByTagName("input"); 
    //var txtY = section.getElementsByClassName("input")[1]; 
    
     var btnAdd = section.querySelector(".btn-add");
    var btnDel = section.querySelector(".btn-del");
    var result = section.querySelector(".result");

    //익명함수.
 /*    btnAdd.onclick = function() {
      var x = parseInt(INPUT[0].value);
      var y = parseInt(INPUT[1].value);
      result.innerText  = x +y;
        
    };
    btnDel.onclick =()=>{
        result.innerText  = "";
    } 
    
});
*/
 


// 이렇게 하면 하나만 실행 되기 때문에 사용하면 안됨.
/* window.onload = function(){
    
} */

