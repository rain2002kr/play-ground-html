
const print =  () => { alert('안녕하세요')} ;


function test(){
    var x = prompt("x 값 입력 ",0);
    var y = prompt("y 값 입력 ",0);
    x = parseInt(x);
    y = parseInt(y);
    //alert(x+y);
    btnprint.value = x+y;
    //span1.value = x+y; //스팬은 value라는 속성이 없다. 
    span1.innerText = x+y; //스팬은 다음과 같이 보면 됩니다. 
    result.innerText = x+y;
    


}
const del = () =>{
    result.innerText = "";
    span1.innerText = "";

    btnprint.value = "값 테스트";
}
