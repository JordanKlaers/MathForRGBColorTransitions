var a = 182
var b = 97
var c = 0;
var rONE = 0;
var rTWO = 182
// rgb(0, 97, 255)
// rgb(182, 0, 255)
var increments = 100;

function colorValueDifference(firstColor, secondColor){                //expects two objects object ColorOne{r: ,g: ,b} and ColorTwo(r: ,g: ,b: )
  var valDif = {}
  valDif[r] = Math.abs(firstColor.r - secondColor.r)
  valDif[g] = Math.abs(firstColor.g - secondColor.g)
  valDif[b] = Math.abs(firstColor.b - secondColor.b)
}


function outputB(Bvalue, Zincrement){
  return Bvalue/Zincrement;
}

function outputA(Avalue, Zincrement){
  return Avalue/Zincrement;
}

function outputC(Cvalue, Zincrement){
  return Cvalue/Zincrement;
}


function compare(Avalue, Bvalue, Cvalue, increments, one, two){

   let  opb = outputB(Bvalue, increments)
   let opa = outputA(Avalue, increments)
   let opc = outputC(Cvalue, increments)
   console.log("at new color every 1/2 second with 10ms update");
   console.log("outputR- ", opa);
   console.log("outputG- ", opb);
   console.log("outputB- ", opc);
   inc(one,two,opa)
}


function inc(one,two, inc){
  let array = [];
  while(one<two){
    one = Math.floor(one+inc)
    array.push(one)

  }
  console.log(array.length);
}


compare(a,b,c,increments, rONE, rTWO);
