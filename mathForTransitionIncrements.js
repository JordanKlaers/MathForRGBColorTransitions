$(document).ready(function(){
  var a = 182
var b = 97
var c = 0;
var rONE = 0;
var rTWO = 182
// rgb(0, 97, 255)
// rgb(182, 0, 255)
var oneTransition = {}
var increments = 100; //100 is 1 color per second at 10 ms updates




function TransitionBetweenOneColor(firstColor, secondColor, increment, incfunc){                //expects two objects object ColorOne{r: ,g: ,b} and ColorTwo(r: ,g: ,b: )
  // console.log(firstColor, secondColor, increment, incfunc);
  var valDif = {}
  var inc = {}
  valDif['r'] = Math.abs(firstColor.r - secondColor.r)
  valDif['g'] = Math.abs(firstColor.g - secondColor.g)
  valDif['b'] = Math.abs(firstColor.b - secondColor.b)
  console.log(valDif,"valdif");
  inc['r'] = valDif.r/increment
  inc['g'] = valDif.g/increment
  inc['b'] = valDif.b/increment
  console.log(inc, "increment value");
  for (let key in valDif){
    // console.log(key, "KEY IN DIFVAL");
    incfunc(firstColor[key], secondColor[key], inc[key], key)
  }

}


function incfunc(one,two, inc, color){
// console.log(arguments);

  let array = [];
  if(one<two){
    while(one<two){
      one = one+inc;
      if(two-one<inc){
        one=two
      }
      let incrementValue = Math.floor(one)
      array.push(incrementValue)
    }
  }
  else if(two < one){
    while(two < one){
      one = one-inc;
      if(one-two<inc){
        one=two
      }
      let incrementValue = Math.floor(one)
      array.push(incrementValue)
    }
  }
  oneTransition[color] = array;
  console.log("the money", oneTransition);
}

TransitionBetweenOneColor({r:0, g:97, b:255}, {r:182, g:0, b:255}, 50, incfunc)
})


//
//
// var a = 182
// var b = 97
// var c = 0;
// var rONE = 0;
// var rTWO = 182
// // rgb(0, 97, 255)
// // rgb(182, 0, 255)
// var increments = 100;
//
// function outputB(Bvalue, Zincrement){
//   return Bvalue/Zincrement;
// }
//
// function outputA(Avalue, Zincrement){
//   return Avalue/Zincrement;
// }
//
// function outputC(Cvalue, Zincrement){
//   return Cvalue/Zincrement;
// }
//
//
// function compare(Avalue, Bvalue, Cvalue, increments, one, two){
//
//    let  opb = outputB(Bvalue, increments)
//    let opa = outputA(Avalue, increments)
//    let opc = outputC(Cvalue, increments)
//    console.log("at new color every 1/2 second with 10ms update");
//    console.log("outputR- ", opa);
//    console.log("outputG- ", opb);
//    console.log("outputB- ", opc);
//    inc(one,two,opa)
// }
//
//
// function inc(one,two, inc){
//   let array = [];
//   while(one<two){
//     one = Math.floor(one+inc)
//     array.push(one)
//
//   }
//   console.log(array.length);
// }
//
//
// compare(a,b,c,increments, rONE, rTWO);
