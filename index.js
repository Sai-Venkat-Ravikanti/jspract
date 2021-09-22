// let firstName="Sai Venkat "
// let lastName="Ravikanti"
// fullName=firstName+lastName
// console.log(fullName)
// let name1="Sai!"
// let greet="Hello dear ,"
//  function greeting(){
//      greetingName=greet+" "+name1
//      console.log(greetingName)
//  }
//  greeting()
// let myPoints=3
// function add3Points(){
//  myPoints +=3
// }
// function remove1Point(){
//  myPoints -=1
// }
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()
// console.log(myPoints)
      //button
// let btnError=document.getElementById("error")
// function purchaseError(){
//     btnError.innerText="Something went wrong,please try again"
// }
let num1=6
let num2=6
let add1=document.getElementById("add")
let subtract1=document.getElementById("subtract")
let multiply1=document.getElementById("multiply")
let divide1=document.getElementById("division")
let sum1=document.getElementById("sum-el")
 document.getElementById("num1-el").innerText = num1
 document.getElementById("num2-el").innerText = num2
function add(){
 let num=num1 + num2
sum1.textContent
 =" Sum :" + num

}
function subtract(){
  let num=num1 - num2
  sum1.textContent = "Sum :" +  num
  
}
function multiply(){
 let num=num1*num2
 sum1.textContent = "Sum :" + num
 
}
function divide(){
 let num=num1/num2
 sum1.textContent = "Sum :" + num
 
}