var NUMBERS = [];
var CURRENTNUM = "";
var LASTCHARACTER = "";
document.addEventListener("keydown",(K)=>{
    if(K.key == "Enter"){
        CHECK("=");
    }else if(K.key == "Backspace"){
        CHECK("C")
    }else{
        CHECK(K.key);
    }
});
function BUTTON(BUTTON){
    console.log(NUMBERS[NUMBERS.length-1])
    CHECK(BUTTON.innerHTML);
}
function CHECK(B){
    if(CHECKFORNUM(B) == true){
        CURRENTNUM+=B;
        LASTCHARACTER = B;
       }else if(B == "+-"){
        CURRENTNUM*=-1;
        LASTCHARACTER = B;
       }else if(B == "%"){
        CURRENTNUM/=100;
       }else if((B == "+"||B=="-"||B=="/"||B=="*") && LASTCHARACTER != "+" && LASTCHARACTER != "-" && LASTCHARACTER != "*" && LASTCHARACTER != "/"){
        NUMBERS.push(CURRENTNUM);
        CURRENTNUM = "";
        NUMBERS.push(B);
        LASTCHARACTER = B;
       }else if(B=="."){
        CURRENTNUM+=B;
        LASTCHARACTER = B;
       }
       else if(B=="C"){
        NUMBERS = [];
        CURRENTNUM = "";
       }
       UPDATESCREEN();
       if(B=="="){
        if(CURRENTNUM == "" || (NUMBERS[NUMBERS.length] != "+" && NUMBERS[NUMBERS.length] != "-" && NUMBERS[NUMBERS.length] != "*" && NUMBERS[NUMBERS.length] != "/")){
            NUMBERS.push(CURRENTNUM);
            CURRENTNUM = "";
            EQUAL();
            NUMBERS = [];
        }
       }
}
function EQUAL(){
    console.log(NUMBERS)
    if(NUMBERS.length >= 3){
        var R = "";
        for(let i = 0;i<NUMBERS.length;i++){
               R+= NUMBERS[i];
        }
        document.getElementById("RESULT").innerHTML = eval(R);
    }else{
        document.getElementById("RESULT").innerHTML = 0;
    }
}
function UPDATESCREEN(){
    if(NUMBERS.length == 0){
        document.getElementById("RESULT").innerHTML = CURRENTNUM;
    }else{
    var RESULT = "";
  for(let i =0;i<NUMBERS.length;i++){
    RESULT+=NUMBERS[i];
  }
  document.getElementById("RESULT").innerHTML = RESULT  +CURRENTNUM;
}
}
function CHECKFORNUM(N){
    for(let i = 0;i<10;i++){
        if(N.includes(i)){
            return true
        }
    }
    return false;
}