//Falsy :
    // 0
    //undefined
    //"" , ''
    //NaN
    //null
    //flase
//Truty:
    //'0'
    //' ', " "
    //'false'
    //[]
let name =0;
if(name || name == 0){
    console.log("The value is truety");
}
else{
    console.log("the value is falsy");
}