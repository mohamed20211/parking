
function foo() {
  let myImage = document.getElementById("myImg");
  if (myImage.hasAttribute("src")) {
    myImage.src = "moto.jpg";
  } else {
    myImage.src = "moto.jpg";
  }
  
}

function bar() {
  let myImage = document.getElementById("myImg");
  if (myImage.hasAttribute("src")) {
    myImage.src = "car.jpg";
  } else {
    myImage.src = "car.jpg";
  }
}

function baz() {
  let myImage = document.getElementById("myImg");
  if (myImage.hasAttribute("src")) {
    myImage.src = "Truck.jpg";
  } else {
    myImage.src = "Truck.jpg";
  }
}


window.addEventListener('load', () => {
  var carCont = document.getElementById('carContainer')
  carCont.style.display = "none"

  var TruckCont = document.getElementById('truckContainer')
  TruckCont.style.display = "none"

  var myDiv1 = document.getElementById('d')
  myDiv1.style.display = "none"

  var myDiv2 = document.getElementById('f')
  myDiv2.style.display = "none"


});




function info() {
var motoCont = document.getElementById('motoContainer')

var carCont = document.getElementById('carContainer')

var TruckCont = document.getElementById('truckContainer')

var motoBtn = document.getElementById('ab')

var carBtn = document.getElementById('ac')

var truckBtn = document.getElementById('ad')

var myDiv = document.getElementById('c')
var myDiv1 = document.getElementById('d')
var myDiv2 = document.getElementById('f')

var divv = document.getElementById('div')

motoBtn.addEventListener('click',()=>{
  if(motoBtn.hasAttribute('id')){
    
var motoCont = document.getElementById('motoContainer')
motoCont.style.display = "block"
carCont.style.display = "none"
TruckCont.style.display = "none"
myDiv.style.display = "block"
div.innerHTML = 'Motorcycles parking Area'
myDiv1.style.display = "none"
myDiv2.style.display = "none"


  }
})

carBtn.addEventListener('click',()=>{
  if(carBtn.hasAttribute('id')){
    motoCont.style.display = "none"
    TruckCont.style.display = "none"
    carCont.style.display = "block"
    divv.innerHTML = 'Cars parking Area'
    myDiv.style.display = "none"
    myDiv1.style.display = "block"
    myDiv2.style.display = "none"
    checkDiv.style.display = "none"
  }
})

truckBtn.addEventListener('click',()=>{
  if(truckBtn.hasAttribute('id')){
    motoCont.style.display = "none"
    carCont.style.display = "none"
    TruckCont.style.display = "block"
    divv.innerHTML = 'Trucks parking Area'
    myDiv.style.display = "none"
    myDiv1.style.display = "none"
    myDiv2.style.display = "block"
    checkDiv.style.display = "none"



  }
})
}

info()



var myRecordInput3 = document.getElementById("myThirdInput")
var myRecordInput4 = document.getElementById("myFourthInput")
var myRecordInput5 = document.getElementById("myFifthInput")
var myRecordInput6 = document.getElementById("mySixthInput")
var myRecordInput7 = document.getElementById("mySeventInput")
var myRecordInput8 = document.getElementById("myEighthInput")
var myRecordInput9 = document.getElementById("myNinethInput")
var myRecordInput10 = document.getElementById("myTenthInput")




// my array of object
var arr = [{
  place:"Not available",
  price : 5 
} 
]

var myLeaveBtn = document.getElementById('leav')
var myLeaveBtn1 = document.getElementById('leav1')
var myLeaveBtn2 = document.getElementById('leav2')
var myLeaveBtn3 = document.getElementById('leav3')
var myLeaveBtn4 = document.getElementById('leav4')
var myLeaveBtn5 = document.getElementById('leav5')
var myLeaveBtn6 = document.getElementById('leav6')
var myLeaveBtn7 = document.getElementById('leav7')
var myLeaveBtn8 = document.getElementById('leav8')
var myLeaveBtn9 = document.getElementById('leav9')
var checkDiv = document.getElementById('checkDiv')
var checkBtn = document.getElementById('checkBtn')




  myLeaveBtn.style.display = "none"
  myLeaveBtn1.style.display = "none"
  myLeaveBtn2.style.display = "none"
  myLeaveBtn3.style.display = "none"
  myLeaveBtn4.style.display = "none"
  myLeaveBtn5.style.display = "none"
  myLeaveBtn6.style.display = "none"
  myLeaveBtn7.style.display = "none"
  myLeaveBtn8.style.display = "none"
  myLeaveBtn9.style.display = "none"
  checkDiv.style.display = "none"
 
  
function myCardFunction(sNum,myDate) {
  let myRecordInput1 = document.getElementById("myFirstInput")
  let  myCardBtn = document.getElementById("myFirstBtn")
  
  if(myRecordInput1.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
    let leaveBtn = document.getElementById("leav")
   leaveBtn.style.display = "none"
  
}else{

  let mySpace1 =  document.getElementById("myP1")
    mySpace1.innerHTML =  arr[0].place
    mySpace1.style.backgroundColor = "white"
    mySpace1.style.borderRadius = "5px"

    let myClient1 = document.getElementById("myP2") 
    myClient1.innerHTML = "Client name : " + myFirstInput.value
    myClient1.style.backgroundColor = "white"
    myClient1.style.borderRadius = "20px"
  
   
    myCardBtn.style.display = "none"
    myRecordInput1.style.display = "none"
    myLeaveBtn.style.display = "block"


    myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toTimeString()}`

     myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

    sNum.innerHTML = sNum.innerHTML - 1

    if(sNum.innerHTML == 0) {
      checkDiv.style.display = "block"
      alert('this is the last slot here Click Check in cars or truck button above ')
      checkDiv.scrollIntoView()
    }
 }
}

function leaveFunc(sNum,myDate) {
  let myRecordInput1 = document.getElementById("myFirstInput")
   let mySaveBtn1 = document.getElementById("myFirstBtn")
 
   let wel1 = document.getElementById("wel")
   wel1.innerHTML = "hello : " + myRecordInput1.value
   let myCost1 = document.getElementById('cost')
   myCost1.innerHTML = "price : " + arr[0].price

  
   sNum.innerHTML =  + sNum.innerHTML + 1
  //#############
 
  myCardBtn = document.getElementById("leav")
  myCardBtn.style.display = "none"
 
  myRecordInput1.style.display = "block"
  myRecordInput1.value = ""
  mySaveBtn1.style.display = "block"
   let mySpace1 =  document.getElementById("myP1")
   mySpace1.innerHTML =  "free space: "
   mySpace1.style.backgroundColor = ""
   let myClient1 = document.getElementById("myP2") 
     myClient1.innerHTML = "client name: "
     myClient1.style.backgroundColor = ""
     
 var myTime = document.getElementById('timee')
 myDate.style.background = ""

  myDate.style.backgroundColor = "white"
 
 let start  = new Date(myDate.innerHTML)
let finish =  new Date()
let last = Math.abs(finish - start)
total_Seconds = parseInt(Math.floor(last / 1000)) 
total_minutes = parseInt(Math.floor(total_Seconds / 60));
total_hours = parseInt(Math.floor(total_minutes / 3600))

myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"

var dur = document.getElementById('timee')
dur.scrollIntoView(myDate.innerText = "start date :"
)

 }


function myCardFunction1(sNum,myDate) {
  let myRecordInput2 = document.getElementById("mySecondInput")
  let  myCardBtn1 = document.getElementById("mySecondBtn")
  
  if(myRecordInput2.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
    let leaveBtn1 = document.getElementById("leav1")
   leaveBtn1.style.display = "none"
  
}else{

  let mySpace2 =  document.getElementById("m1")
    mySpace2.innerHTML =  arr[0].place
    mySpace2.style.backgroundColor = "white"
    mySpace2.style.borderRadius = "5px"

    let myClient2 = document.getElementById("m2") 
    myClient2.innerHTML = "Client name : " + myRecordInput2.value
    myClient2.style.backgroundColor = "white"
    myClient2.style.borderRadius = "20px"
  
    
    myCardBtn1.style.display = "none"
    myRecordInput2.style.display = "none"
    myLeaveBtn1.style.display = "block"

    myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

     myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

    sNum.innerHTML = sNum.innerHTML - 1

    if(sNum.innerHTML == 0) {
      checkDiv.style.display = "block"
      alert('this is the last slot here Click Check in cars or truck button above ')
      checkDiv.scrollIntoView()


    }
}
}

function leaveFunc1(sNum,myDate) {
    
  let myRecordInput2 = document.getElementById("mySecondInput")
  let mySaveBtn2 = document.getElementById("mySecondBtn")

  let wel2 = document.getElementById("wel")
  wel2.innerHTML = "hello : " + myRecordInput2.value

  let myCost2 = document.getElementById('cost')
  myCost2.innerHTML = "price : " + arr[0].price

  sNum.innerHTML =  + sNum.innerHTML + 1


 myCardBtn2 = document.getElementById("leav1")
 myCardBtn2.style.display = "none"

 myRecordInput2.style.display = "block"
 myRecordInput2.value = ""
 mySaveBtn2.style.display = "block"
  let mySpace2 =  document.getElementById("m1")
  mySpace2.innerHTML =  "free space: "
  mySpace2.style.backgroundColor = ""
  let myClient2 = document.getElementById("m2") 
    myClient2.innerHTML = "client name: "
    myClient2.style.backgroundColor = ""
  
  
  var myTime = document.getElementById('timee')
  myDate.style.background = ""

let start  = new Date(myDate.innerHTML)
let finish = new Date()
let last = Math.abs(finish - start)
total_Seconds = parseInt(Math.floor(last / 1000))
total_minutes = parseInt(Math.floor(total_Seconds / 60));
total_hours = parseInt(Math.floor(total_Seconds / 3600))

myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
 
var dur = document.getElementById('timee')
dur.scrollIntoView(myDate.innerText = "start date :"
)
 

}


function myCardFunction2(sNum,myDate) {
  let myRecordInput3 = document.getElementById("myThirdInput")
  let  myCardBtn2 = document.getElementById("myThirdtBtn")
  
  if(myRecordInput3.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
    let leaveBtn2 = document.getElementById("leav2")
   leaveBtn2.style.display = "none"
  
}else{

  let mySpace3 =  document.getElementById("p1")
    mySpace3.innerHTML =  arr[0].place
    mySpace3.style.backgroundColor = "white"
    mySpace3.style.borderRadius = "5px"

    let myClient3 = document.getElementById("p2") 
    myClient3.innerHTML = "Client name : " + myRecordInput3.value
    myClient3.style.backgroundColor = "white"
    myClient3.style.borderRadius = "20px"
  
  

    myCardBtn2.style.display = "none"
    myRecordInput3.style.display = "none"
    myLeaveBtn2.style.display = "block"
    
    sNum.innerHTML = sNum.innerHTML - 1
    myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

     myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"


    if(sNum.innerHTML == 0) {
      checkDiv.style.display = "block"
      alert('this is the last slot here Click Check in cars or truck button above ')
      checkDiv.scrollIntoView()

    }

    
}
}

function leaveFunc2(sNum,myDate) {
    
  let myRecordInput3 = document.getElementById("myThirdInput")
  let mySaveBtn3 = document.getElementById("myThirdtBtn")

  let wel34 = document.getElementById("wel")
  wel34.innerHTML = "hello : " + myRecordInput3.value
  let myCost34 = document.getElementById('cost')
  myCost34.innerHTML = "price : " + arr[0].price

  sNum.innerHTML =  + sNum.innerHTML + 1


 myCardBtn2 = document.getElementById("leav2")
 myCardBtn2.style.display = "none"

 myRecordInput3.style.display = "block"
 myRecordInput3.value = ""
 mySaveBtn3.style.display = "block"
  let mySpace3 =  document.getElementById("p1")
  mySpace3.innerHTML =  "free space: "
  mySpace3.style.backgroundColor = ""
  let myClient3 = document.getElementById("p2") 
    myClient3.innerHTML = "client name: "
    myClient3.style.backgroundColor = ""
  
  var myTime = document.getElementById('timee')
  myDate.style.background = ""

   let start  = new Date(myDate.innerHTML)
  let finish = new Date()
  let last = Math.abs(finish - start)
  total_Seconds = parseInt(Math.floor(last / 1000))
  total_minutes = parseInt(Math.floor(total_Seconds / 60));
  total_hours = parseInt(Math.floor(total_Seconds / 3600))
  
  myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
   
  
  var dur = document.getElementById('timee')
dur.scrollIntoView(myDate.innerText = "start date :"
)
}

function myCardFunction3(sNum,myDate) {
  let myRecordInput4 = document.getElementById("myFourthInput")
  let  myCardBtn3 = document.getElementById("myFourthtBtn")
  
  if(myRecordInput4.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
    let leaveBtn3 = document.getElementById("leav3")
   leaveBtn3.style.display = "none"
  
}else{

  let mySpace4 =  document.getElementById("q1")
    mySpace4.innerHTML =  arr[0].place
    mySpace4.style.backgroundColor = "white"
    mySpace4.style.borderRadius = "5px"

    let myClient4 = document.getElementById("q2") 
    myClient4.innerHTML = "Client name : " + myRecordInput4.value
    myClient4.style.backgroundColor = "white"
    myClient4.style.borderRadius = "20px"
  
   
    myCardBtn3.style.display = "none"
    myRecordInput4.style.display = "none"
    myLeaveBtn3.style.display = "block"

    sNum.innerHTML = sNum.innerHTML - 1
    myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

     myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

    if(sNum.innerHTML == 0) {
      checkDiv.style.display = "block"
      alert('this is the last slot here Click Check in cars or truck button above ')
      checkDiv.scrollIntoView()

    }
    
}
}

function leaveFunc3(sNum,myDate) {
    
  let myRecordInput4 = document.getElementById("myFourthInput")
  let mySaveBtn4 = document.getElementById("myFourthtBtn")

  let wel4 = document.getElementById("wel")
  wel4.innerHTML = "hello : " + myRecordInput4.value
  let myCost4 = document.getElementById('cost')
  myCost4.innerHTML = "price : " + arr[0].price
  
  sNum.innerHTML =  + sNum.innerHTML + 1


 myCardBtn3 = document.getElementById("leav3")
 myCardBtn3.style.display = "none"

 myRecordInput4.style.display = "block"
 myRecordInput4.value = ""
 mySaveBtn4.style.display = "block"
  let mySpace4 =  document.getElementById("q1")
  mySpace4.innerHTML =  "free space: "
  mySpace4.style.backgroundColor = ""
  let myClient4 = document.getElementById("q2") 
    myClient4.innerHTML = "client name: "
    myClient4.style.backgroundColor = ""
 
  var myTime = document.getElementById('timee')
  myDate.style.background = ""

   let start  = new Date(myDate.innerHTML)
  let finish = new Date()
  let last = Math.abs(finish - start)
  total_Seconds = parseInt(Math.floor(last / 1000))
  total_minutes = parseInt(Math.floor(total_Seconds / 60));
  total_hours = parseInt(Math.floor(total_Seconds / 3600))
  
  myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
   
 
  var dur = document.getElementById('timee')
  dur.scrollIntoView(myDate.innerText = "start date :"
  )
}
function myCardFunction4(sNum,myDate) {
  let myRecordInput5 = document.getElementById("myFifthInput")
  let  myCardBtn4 = document.getElementById("myFifthBtn")
  
  if(myRecordInput5.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
    let leaveBtn4 = document.getElementById("leav4")
   leaveBtn4.style.display = "none"
  
}else{

  let mySpace5 =  document.getElementById("r1")
    mySpace5.innerHTML =  arr[0].place
    mySpace5.style.backgroundColor = "white"
    mySpace5.style.borderRadius = "5px"

    let myClient5 = document.getElementById("r2") 
    myClient5.innerHTML = "Client name : " + myRecordInput5.value
    myClient5.style.backgroundColor = "white"
    myClient5.style.borderRadius = "20px"
  
  

    myCardBtn4.style.display = "none"
    myRecordInput5.style.display = "none"
    myLeaveBtn4.style.display = "block"

    sNum.innerHTML = sNum.innerHTML - 1
    myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

     myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

    if(sNum.innerHTML == 0) {
      checkDiv.style.display = "block"
      alert('this is the last slot here Click Check in cars or truck button above ')
      checkDiv.scrollIntoView()

    }
   
}
}
function leaveFunc4(sNum,myDate) {
    
  let myRecordInput5 = document.getElementById("myFifthInput")
  let mySaveBtn5 = document.getElementById("myFifthBtn")

  let wel5 = document.getElementById("wel")
  wel5.innerHTML = "hello : " + myRecordInput5.value
  let myCost5 = document.getElementById('cost')
  myCost5.innerHTML = "price : " + arr[0].price
  sNum.innerHTML =  + sNum.innerHTML + 1


 myCardBtn4 = document.getElementById("leav4")
 myCardBtn4.style.display = "none"

 myRecordInput5.style.display = "block"
 myRecordInput5.value = ""
 mySaveBtn5.style.display = "block"
  let mySpace5 =  document.getElementById("r1")
  mySpace5.innerHTML =  "free space: "
  mySpace5.style.backgroundColor = ""
  let myClient5 = document.getElementById("r2") 
    myClient5.innerHTML = "client name: "
    myClient5.style.backgroundColor = ""
    var myTime = document.getElementById('timee')
  myDate.style.background = ""

   let start  = new Date(myDate.innerHTML)
  let finish = new Date()
  let last = Math.abs(finish - start)
  total_Seconds = parseInt(Math.floor(last / 1000))
  total_minutes = parseInt(Math.floor(total_Seconds / 60));
  total_hours = parseInt(Math.floor(total_Seconds / 3600))
  
  myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
   
 
  var dur = document.getElementById('timee')
  dur.scrollIntoView(myDate.innerText = "start date :"
  )
}

function myCardFunction5(sNum,myDate) {
  let myRecordInput6 = document.getElementById("mySixthInput")
  let  myCardBtn5 = document.getElementById("mySixthBtn")
  
  if(myRecordInput6.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
    let leaveBtn5 = document.getElementById("leav5")
   leaveBtn5.style.display = "none"
  
}else{

  let mySpace6 =  document.getElementById("s1")
    mySpace6.innerHTML =  arr[0].place
    mySpace6.style.backgroundColor = "white"
    mySpace6.style.borderRadius = "5px"

    let myClient6 = document.getElementById("s2") 
    myClient6.innerHTML = "Client name : " + myRecordInput6.value
    myClient6.style.backgroundColor = "white"
    myClient6.style.borderRadius = "20px"
  
    myCardBtn5.style.display = "none"
    myRecordInput6.style.display = "none"
    myLeaveBtn5.style.display = "block"

    sNum.innerHTML = sNum.innerHTML - 1
    myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

     myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

    if(sNum.innerHTML == 0) {
      checkDiv.style.display = "block"
      alert('this is the last slot here Click Check in cars or truck button above ')
      checkDiv.scrollIntoView()

    }

    //####### start#########

        
// end of timer
}
}

function leaveFunc5(sNum,myDate) {
  let myRecordInput6 = document.getElementById("mySixthInput")
  let mySaveBtn6 = document.getElementById("mySixthBtn")

  let wel6 = document.getElementById("wel")
  wel6.innerHTML = "hello : " + myRecordInput6.value
  let myCost6 = document.getElementById('cost')
  myCost6.innerHTML = "price : " + arr[0].price
  sNum.innerHTML =  + sNum.innerHTML + 1


 myCardBtn5 = document.getElementById("leav5")
 myCardBtn5.style.display = "none"

 myRecordInput6.style.display = "block"
 myRecordInput6.value = ""
 mySaveBtn6.style.display = "block"
  let mySpace6 =  document.getElementById("s1")
  mySpace6.innerHTML =  "free space: "
  mySpace6.style.backgroundColor = ""
  let myClient6 = document.getElementById("s2") 
    myClient6.innerHTML = "client name: "
    myClient6.style.backgroundColor = ""
 
  var myTime = document.getElementById('timee')
  myTime.style.background = ""
  let start  = new Date(myDate.innerHTML)
  let finish = new Date()
  let last = Math.abs(finish - start)
  total_Seconds = parseInt(Math.floor(last / 1000))
  total_minutes = parseInt(Math.floor(total_Seconds / 60));
  total_hours = parseInt(Math.floor(total_Seconds / 3600))
  
  myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
   
   
  var dur = document.getElementById('timee')
  dur.scrollIntoView(myDate.innerText = "start date :"
  )

}

function myCardFunction6(sNum,myDate) {
  let myRecordInput7 = document.getElementById("mySeventhInput")
  let  myCardBtn6 = document.getElementById("mySeventhBtn")
  
  if(myRecordInput7.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
    let leaveBtn6 = document.getElementById("leav6")
   leaveBtn6.style.display = "none"
  
}else{

  let mySpace7 =  document.getElementById("t1")
    mySpace7.innerHTML =  arr[0].place
    mySpace7.style.backgroundColor = "white"
    mySpace7.style.borderRadius = "5px"

    let myClient7 = document.getElementById("t2") 
    myClient7.innerHTML = "Client name : " + myRecordInput7.value
    myClient7.style.backgroundColor = "white"
    myClient7.style.borderRadius = "20px"
  
   

    myCardBtn6.style.display = "none"
    myRecordInput7.style.display = "none"
    myLeaveBtn6.style.display = "block"

    sNum.innerHTML = sNum.innerHTML - 1
    myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

     myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

    if(sNum.innerHTML == 0) {
      checkDiv.style.display = "block"
      alert('this is the last slot here Click Check in cars or truck button above ')
      checkDiv.scrollIntoView()

    }

}
}
function leaveFunc6(sNum,myDate) {
    
  let myRecordInput7 = document.getElementById("mySeventhInput")
  let mySaveBtn7 = document.getElementById("mySeventhBtn")

  let wel7 = document.getElementById("wel")
  wel7.innerHTML = "hello : " + myRecordInput7.value
  let myCost7 = document.getElementById('cost')
  myCost7.innerHTML = "price : " + arr[0].price
  sNum.innerHTML =  + sNum.innerHTML + 1


 myCardBtn6 = document.getElementById("leav6")
 myCardBtn6.style.display = "none"

 myRecordInput7.style.display = "block"
 myRecordInput7.value = ""
 mySaveBtn7.style.display = "block"
  let mySpace7 =  document.getElementById("t1")
  mySpace7.innerHTML =  "free space: "
  mySpace7.style.backgroundColor = ""
  let myClient7 = document.getElementById("t2") 
    myClient7.innerHTML = "client name: "
    myClient7.style.backgroundColor = ""
    var myTime = document.getElementById('timee')
  myDate.style.background = ""

     let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
     
 
    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )

}


function myCardFunction7(sNum,myDate) {
  let myRecordInput8 = document.getElementById("myEighthInput")
  let  myCardBtn7 = document.getElementById("myEighthBtn")
  
  if(myRecordInput8.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
    let leaveBtn7 = document.getElementById("leav7")
   leaveBtn7.style.display = "none"
  
}else{

  let mySpace8 =  document.getElementById("u1")
    mySpace8.innerHTML =  arr[0].place
    mySpace8.style.backgroundColor = "white"
    mySpace8.style.borderRadius = "5px"

    let myClient8 = document.getElementById("u2") 
    myClient8.innerHTML = "Client name : " + myRecordInput8.value
    myClient8.style.backgroundColor = "white"
    myClient8.style.borderRadius = "20px"
  
   
    myCardBtn7.style.display = "none"
    myRecordInput8.style.display = "none"
    myLeaveBtn7.style.display = "block"

    sNum.innerHTML = sNum.innerHTML - 1
    myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

     myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

    if(sNum.innerHTML == 0) {
      checkDiv.style.display = "block"
      alert('this is the last slot here Click Check in cars or truck button above ')
      checkDiv.scrollIntoView()

    }
   
}
}
function leaveFunc7(sNum,myDate) {
    
  let myRecordInput8 = document.getElementById("myEighthInput")
  let mySaveBtn8 = document.getElementById("myEighthBtn")

  let wel8 = document.getElementById("wel")
  wel8.innerHTML = "hello : " + myRecordInput8.value
  let myCost8 = document.getElementById('cost')
  myCost8.innerHTML = "price : " + arr[0].price
  sNum.innerHTML =  + sNum.innerHTML + 1

 myCardBtn7 = document.getElementById("leav7")
 myCardBtn7.style.display = "none"

 myRecordInput8.style.display = "block"
 myRecordInput8.value = ""
 mySaveBtn8.style.display = "block"
 
  let myClient8 = document.getElementById("u2") 
    myClient8.innerHTML = "client name: "
    myClient8.style.backgroundColor = ""
    var myTime = document.getElementById('timee')
  myDate.style.background = ""

     let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
     
    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )

}

function myCardFunction8(sNum,myDate) {
  let myRecordInput9 = document.getElementById("myNinethInput")
  let  myCardBtn8 = document.getElementById("myNinethBtn")
  
  if(myRecordInput9.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
    let leaveBtn8 = document.getElementById("leav8")
   leaveBtn8.style.display = "none"
  
}else{

  let mySpace9 =  document.getElementById("v1")
    mySpace9.innerHTML =  arr[0].place
    mySpace9.style.backgroundColor = "white"
    mySpace9.style.borderRadius = "5px"

    let myClient9 = document.getElementById("v2") 
    myClient9.innerHTML = "Client name : " + myRecordInput9.value
    myClient9.style.backgroundColor = "white"
    myClient9.style.borderRadius = "20px"
  
    
    myCardBtn8.style.display = "none"
    myRecordInput9.style.display = "none"
    myLeaveBtn8.style.display = "block"
    myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

     myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

    sNum.innerHTML = sNum.innerHTML - 1
    if(sNum.innerHTML == 0) {
      checkDiv.style.display = "block"
      alert('this is the last slot here Click Check in cars or truck button above ')
      checkDiv.scrollIntoView()

    }

}
}

function leaveFunc8(sNum,myDate) {
  let myRecordInput9 = document.getElementById("myNinethInput")
  let mySaveBtn9 = document.getElementById("myNinethBtn")

  let wel9 = document.getElementById("wel")
  wel9.innerHTML = "hello : " + myRecordInput9.value
  let myCost9 = document.getElementById('cost')
  myCost9.innerHTML = "price : " + arr[0].price
  sNum.innerHTML =  + sNum.innerHTML + 1


 myCardBtn8 = document.getElementById("leav8")
 myCardBtn8.style.display = "none"

 myRecordInput9.style.display = "block"
 myRecordInput9.value = ""
 mySaveBtn9.style.display = "block"
  let mySpace9 =  document.getElementById("v1")
  mySpace9.innerHTML =  "free space: "
  mySpace9.style.backgroundColor = ""
  let myClient9 = document.getElementById("v2") 
    myClient9.innerHTML = "client name: "
    myClient9.style.backgroundColor = ""
    var myTime = document.getElementById('timee')
  myDate.style.background = ""

     let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
     
  
   

    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )
}

function myCardFunction9(sNum,myDate) {
  let myRecordInput10 = document.getElementById("myTenthInput")
  let  myCardBtn9 = document.getElementById("myTenthBtn")
  
  if(myRecordInput10.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
    let leaveBtn10 = document.getElementById("leav9")
   leaveBtn10.style.display = "none"
  
}else{

  let mySpace10 =  document.getElementById("w1")
    mySpace10.innerHTML =  arr[0].place
    mySpace10.style.backgroundColor = "white"
    mySpace10.style.borderRadius = "5px"

    let myClient10 = document.getElementById("w2") 
    myClient10.innerHTML = "Client name : " + myRecordInput10.value
    myClient10.style.backgroundColor = "white"
    myClient10.style.borderRadius = "20px"
  
    myCardBtn9.style.display = "none"
    myRecordInput10.style.display = "none"
    myLeaveBtn9.style.display = "block"
    myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

     myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

    sNum.innerHTML = sNum.innerHTML - 1

    if(sNum.innerHTML == 0) {
      checkDiv.style.display = "block"
      alert('this is the last slot here Click Check in cars or truck button above ')
      checkDiv.scrollIntoView()

    }


}
}

function leaveFunc9(sNum,myDate) {
  let myRecordInput10 = document.getElementById("myTenthInput")
  let mySaveBtn10 = document.getElementById("myTenthBtn")

  let wel10 = document.getElementById("wel")
  wel10.innerHTML = "hello : " + myRecordInput10.value
  let myCost10 = document.getElementById('cost')
  myCost10.innerHTML = "price : " + arr[0].price
  
  sNum.innerHTML =  + sNum.innerHTML + 1

 myCardBtn9 = document.getElementById("leav9")
 myCardBtn9.style.display = "none"

 myRecordInput10.style.display = "block"
 myRecordInput10.value = ""
 mySaveBtn10.style.display = "block"
  let mySpace10 =  document.getElementById("w1")
  mySpace10.innerHTML =  "free space: "
  mySpace10.style.backgroundColor = ""
  let myClient10 = document.getElementById("w2") 
    myClient10.innerHTML = "client name: "
    myClient10.style.backgroundColor = ""


    var myTime = document.getElementById('timee')
  myDate.style.background = ""

     let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
     

   
    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )
}













//######################### carsssssssss#####################

var cars1 = document.getElementById('carLeaves1')
var cars2 = document.getElementById('carLeaves2')
var cars3 = document.getElementById('carLeaves3')
var cars4 = document.getElementById('carLeaves4')
var cars5 = document.getElementById('carLeaves5')
var cars6 = document.getElementById('carLeaves6')
var cars7 = document.getElementById('carLeaves7')
var cars8 = document.getElementById('carLeaves8')
var cars9 = document.getElementById('carLeaves9')
var cars10 = document.getElementById('carLeaves10')



  cars1.style.display = "none"
  cars2.style.display = "none"
  cars3.style.display = "none"
  cars4.style.display = "none"
  cars5.style.display = "none"
  cars6.style.display = "none"
  cars7.style.display = "none"
  cars8.style.display = "none"
  cars9.style.display = "none"
  cars10.style.display = "none"
  




  

function carLeave1(sNumm,myDate) {
  let carsIn1 = document.getElementById("carInput1")
  let carsSave1 = document.getElementById("carBtnSave1")

  let wel = document.getElementById("wel")
  wel.innerHTML = "hello : " + carsIn1.value
  let myCost = document.getElementById('cost')
  myCost.innerHTML = "price : " + arr[0].price
 //##########
 let cars1 = document.getElementById("carLeaves1")
 cars1.style.display = "none"

 carsIn1.style.display = "block"
 carsIn1.value = ""
 carsSave1.style.display = "block"
  let carSpace1 =  document.getElementById("bb1")
  carSpace1.innerHTML =  "free space: "
  carSpace1.style.backgroundColor = ""
  let carClient1 = document.getElementById("bb2") 
    carClient1.innerHTML = "client name: "
    carClient1.style.backgroundColor = ""
  myDate.style.backgroundColor = ""
  sNumm.innerHTML =  + sNumm.innerHTML + 1

  var myTime = document.getElementById('timee')
  myTime.style.background = ""

    let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
    
    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )
  
}

function carLeave2(sNumm,myDate) {
    let carsIn2 = document.getElementById("carInput2")
    let carsSave2 = document.getElementById("carBtnSave2")
  
    let wel = document.getElementById("wel")
    wel.innerHTML = "hello : " + carsIn2.value
    let myCost = document.getElementById('cost')
    myCost.innerHTML = "price : " + arr[0].price
  
   //##########
  let cars2 = document.getElementById("carLeaves2")
   cars2.style.display = "none"
  
   carsIn2.style.display = "block"
   carsIn2.value = ""
   carsSave2.style.display = "block"
    let carSpace2 =  document.getElementById("bb4")
    carSpace2.innerHTML =  "free space: "
    carSpace2.style.backgroundColor = ""
    let carClient2 = document.getElementById("bb5") 
      carClient2.innerHTML = "client name: "
      carClient2.style.backgroundColor = ""
      var myTime = document.getElementById('timee')
    myDate.style.background = ""

   
      myDate.style.backgroundColor = ""
    sNumm.innerHTML =  + sNumm.innerHTML + 1

    let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
  
    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )
    
  }


function carLeave3(sNumm,myDate) {
  let carsIn3= document.getElementById("carInput3")
  let carsSave3= document.getElementById("carBtnSave3")

  let wel = document.getElementById("wel")
  wel.innerHTML = "hello : " + carsIn3.value
  let myCost = document.getElementById('cost')
  myCost.innerHTML = "price : " + arr[0].price
  
 //##########
 let cars3 = document.getElementById("carLeaves3")
 cars3.style.display = "none"

 carsIn3.style.display = "block"
 carsIn3.value = ""
 carsSave3.style.display = "block"
  let carSpace3 =  document.getElementById("bb7")
  carSpace3.innerHTML =  "free space: "
  carSpace3.style.backgroundColor = ""
  let carClient3 = document.getElementById("bb8") 
    carClient3.innerHTML = "client name: "
    carClient3.style.backgroundColor = ""
    var myTime = document.getElementById('timee')
  myDate.style.background = ""

 
    myDate.style.backgroundColor = ""
  sNumm.innerHTML =  + sNumm.innerHTML + 1

  let start  = new Date(myDate.innerHTML)
  let finish = new Date()
  let last = Math.abs(finish - start)
  total_Seconds = parseInt(Math.floor(last / 1000))
  total_minutes = parseInt(Math.floor(total_Seconds / 60));
  total_hours = parseInt(Math.floor(total_Seconds / 3600))
  
  myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
 
  var dur = document.getElementById('timee')
  dur.scrollIntoView(myDate.innerText = "start date :"
  )
  
}


function carLeave4(sNumm,myDate) {
    let carsIn4 = document.getElementById("carInput4")
    let carsSave4 = document.getElementById("carBtnSave4")
  
    let wel = document.getElementById("wel")
    wel.innerHTML = "hello : " + carsIn4.value
    let myCost = document.getElementById('cost')
    myCost.innerHTML = "price : " + arr[0].price
  
   //##########
  let cars4 = document.getElementById("carLeaves4")
   cars4.style.display = "none"
  
   carsIn4.style.display = "block"
   carsIn4.value = ""
   carsSave4.style.display = "block"
    let carsSpace4=  document.getElementById("bb10")
    carsSpace4.innerHTML =  "free space: "
    carsSpace4.style.backgroundColor = ""
    let carClient4 = document.getElementById("bb11") 
      carClient4.innerHTML = "client name: "
      carClient4.style.backgroundColor = ""
      var myTime = document.getElementById('timee')
    myDate.style.background = ""

   
      myDate.style.backgroundColor = ""
    sNumm.innerHTML =  + sNumm.innerHTML + 1


    let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
         
  
    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )
    
  }






function carLeave5(sNumm,myDate) {
    let carsIn5 = document.getElementById("carInput5")
    let carsSave5 = document.getElementById("carBtnSave5")
  
    let wel = document.getElementById("wel")
    wel.innerHTML = "hello : " + carsIn5.value
    let myCost = document.getElementById('cost')
    myCost.innerHTML = "price : " + arr[0].price
   
   //##########
  let cars5 = document.getElementById("carLeaves5")
   cars5.style.display = "none"
  
   carsIn5.style.display = "block"
   carsIn5.value = ""
   carsSave5.style.display = "block"
    let carSpace5 =  document.getElementById("bb13")
    carSpace5.innerHTML =  "free space: "
    carSpace5.style.backgroundColor = ""
    let carClient5 = document.getElementById("bb14") 
      carClient5.innerHTML = "client name: "
      carClient5.style.backgroundColor = ""
      var myTime = document.getElementById('timee')
    myDate.style.background = ""

   
      myDate.style.backgroundColor = ""
    sNumm.innerHTML =  + sNumm.innerHTML + 1

         
    let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
 
    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )
    
  }

  function carLeave6(sNumm,myDate) {
    let carsIn6 = document.getElementById("carInput6")
    let carsSave6 = document.getElementById("carBtnSave6")
  
    let wel = document.getElementById("wel")
    wel.innerHTML = "hello : " + carsIn6.value
    let myCost = document.getElementById('cost')
      myCost.innerHTML = "price : " + arr[0].price

   //##########
  
  
  let cars6 = document.getElementById("carLeaves6")
   cars6.style.display = "none"

   carsIn6.style.display = "block"
   carsIn6.value = ""

   carsSave6.style.display = "block"

    let carSpace6 =  document.getElementById("bb16")
    carSpace6.innerHTML =  "free space: "
    carSpace6.style.backgroundColor = ""
    let carClient6 = document.getElementById("bb17") 
      carClient6.innerHTML = "client name: "
      carClient6.style.backgroundColor = ""
      var myTime = document.getElementById('timee')
    myDate.style.background = ""

   
      myDate.style.backgroundColor = ""
    sNumm.innerHTML =  + sNumm.innerHTML + 1


    let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"

    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )
    
  }


function carLeave7(sNumm,myDate) {
  let carsIn7 = document.getElementById("carInput7")
  let carsSave7 = document.getElementById("carBtnSave7")

  let wel = document.getElementById("wel")
  wel.innerHTML = "hello : " + carsIn7.value
  let myCost = document.getElementById('cost')
  myCost.innerHTML = "price : " + arr[0].price
 
 //##########
 let cars7 = document.getElementById("carLeaves7")
 cars7.style.display = "none"

 carsIn7.style.display = "block"
 carsIn7.value = ""
 carsSave7.style.display = "block"
  let carSpace7 =  document.getElementById("bb19")
  carSpace7.innerHTML =  "free space: "
  carSpace7.style.backgroundColor = ""
  let carClient7 = document.getElementById("bb20") 
    carClient7.innerHTML = "client name: "
    carClient7.style.backgroundColor = ""
    var myTime = document.getElementById('timee')
  myDate.style.background = ""

 
    myDate.style.backgroundColor = ""
  sNumm.innerHTML =  + sNumm.innerHTML + 1

  let start  = new Date(myDate.innerHTML)
  let finish = new Date()
  let last = Math.abs(finish - start)
  total_Seconds = parseInt(Math.floor(last / 1000))
  total_minutes = parseInt(Math.floor(total_Seconds / 60));
  total_hours = parseInt(Math.floor(total_Seconds / 3600))
  
  myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"

 
  var dur = document.getElementById('timee')
  dur.scrollIntoView(myDate.innerText = "start date :"
  )
}


function carLeave8(sNumm,myDate) {
    let carsIn8 = document.getElementById("carInput8")
    let carsSave8 = document.getElementById("carBtnSave8")
  
    let wel = document.getElementById("wel")
    wel.innerHTML = "hello : " + carsIn8.value
    let myCost = document.getElementById('cost')
    myCost.innerHTML = "price : " + arr[0].price
   
   //##########
  let cars8 = document.getElementById("carLeaves8")
   cars8.style.display = "none"
  
   carsIn8.style.display = "block"
   carsIn8.value = ""
   carsSave8.style.display = "block"
    let carSpace8 =  document.getElementById("bb22")
    carSpace8.innerHTML =  "free space: "
    carSpace8.style.backgroundColor = ""
    let carClient8 = document.getElementById("bb23") 
      carClient8.innerHTML = "client name: "
      carClient8.style.backgroundColor = ""
      var myTime = document.getElementById('timee')
    myDate.style.background = ""

   
      myDate.style.backgroundColor = ""
    sNumm.innerHTML =  + sNumm.innerHTML + 1

    let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"

     
    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )
    
  }


function carLeave9(sNumm,myDate) {
  let carsIn9 = document.getElementById("carInput9")
  let carsSave9 = document.getElementById("carBtnSave9")

  let wel = document.getElementById("wel")
  wel.innerHTML = "hello : " + carsIn9.value
  let myCost = document.getElementById('cost')
  myCost.innerHTML = "price : " + arr[0].price
  
 //##########
 let cars9 = document.getElementById("carLeaves9")
 cars9.style.display = "none"

 carsIn9.style.display = "block"
 carsIn9.value = ""
 carsSave9.style.display = "block"
  let carSpace9 =  document.getElementById("bb25")
  carSpace9.innerHTML =  "free space: "
  carSpace9.style.backgroundColor = ""
  let carClient9 = document.getElementById("bb26") 
    carClient9.innerHTML = "client name: "
    carClient9.style.backgroundColor = ""
    var myTime = document.getElementById('timee')
  myDate.style.background = ""

 
    myDate.style.backgroundColor = ""
  sNumm.innerHTML =  + sNumm.innerHTML + 1


  let start  = new Date(myDate.innerHTML)
  let finish = new Date()
  let last = Math.abs(finish - start)
  total_Seconds = parseInt(Math.floor(last / 1000))
  total_minutes = parseInt(Math.floor(total_Seconds / 60));
  total_hours = parseInt(Math.floor(total_Seconds / 3600))
  
  myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
 
  var dur = document.getElementById('timee')
  dur.scrollIntoView(myDate.innerText = "start date :"
  )
  
}


function carLeave10(sNumm,myDate) {
    let carsIn10 = document.getElementById("carInput10")
    let carsSave10 = document.getElementById("carBtnSave10")
  
    let wel = document.getElementById("wel")
    wel.innerHTML = "hello : " + carsIn10.value
    let myCost = document.getElementById('cost')
    myCost.innerHTML = "price : " + arr[0].price
    
   //##########
  let cars10 = document.getElementById("carLeaves10")
   cars10.style.display = "none"
  
   carsIn10.style.display = "block"
   carsIn10.value = ""
   carsSave10.style.display = "block"
    let carSpace10 =  document.getElementById("bb28")
    carSpace10.innerHTML =  "free space: "
    carSpace10.style.backgroundColor = ""
    let carClient10 = document.getElementById("bb29") 
      carClient10.innerHTML = "client name: "
      carClient10.style.backgroundColor = ""
      var myTime = document.getElementById('timee')
    myDate.style.background = ""

   
      myDate.style.backgroundColor = ""
    sNumm.innerHTML =  + sNumm.innerHTML + 1


    let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
   
    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )
  }

  
//########### cards func #############

var ckeckParagraph = document.getElementById('ckeckP')

function carFunc1(sNumm,myDate) {
    let carsIn1 = document.getElementById("carInput1")
  let  carsBtn1 = document.getElementById("carBtnSave1")
  
  if(carsIn1.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  let cars1 = document.getElementById("carLeaves1")
  cars1.style.display = "none"
  
}else{

  let carSpace1 =  document.getElementById("bb1")
    carSpace1.innerHTML =  arr[0].place
    carSpace1.style.backgroundColor = "white"
    carSpace1.style.borderRadius = "5px"

    let carClient1 = document.getElementById("bb2") 
    carClient1.innerHTML = "Client name : " + carsIn1.value
    carClient1.style.backgroundColor = "white"
    carClient1.style.borderRadius = "20px"
  
   
 
        myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

         myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

  
    carsBtn1.style.display = "none"
    carsIn1.style.display = "none"
    cars1.style.display = "block"

    sNumm.innerHTML = sNumm.innerHTML - 1

    if(sNumm.innerHTML == 0) {
      checkDiv.style.display = "block"
      ckeckParagraph.innerHTML = "result : "
      checkBtn.innerHTML = "check in Truck Area"
      alert('this is the last slot here Click Check in truck button above ')
      checkDiv.scrollIntoView()

    }


}
}



function carFunc2(sNumm,myDate) {
    let carsIn2 = document.getElementById("carInput2")
  let  carsBtn2 = document.getElementById("carBtnSave2")
  
  if(carsIn2.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  let cars2 = document.getElementById("carLeaves2")
  cars2.style.display = "none"
  
}else{

  let carSpace2 =  document.getElementById("bb4")
    carSpace2.innerHTML =  arr[0].place
    carSpace2.style.backgroundColor = "white"
    carSpace2.style.borderRadius = "5px"

    let carClient2 = document.getElementById("bb5") 
    carClient2.innerHTML = "Client name : " + carsIn2.value
    carClient2.style.backgroundColor = "white"
    carClient2.style.borderRadius = "20px"
  
    
 
    myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

     myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

    
    carsBtn2.style.display = "none"
    carsIn2.style.display = "none"
    cars2.style.display = "block"

    sNumm.innerHTML = sNumm.innerHTML - 1

    if(sNumm.innerHTML == 0) {
      checkDiv.style.display = "block"
      ckeckParagraph.innerHTML = "result : "
      checkBtn.innerHTML = "check in Truck Area"

      alert('this is the last slot here Click Check in truck button above ')
      checkDiv.scrollIntoView()

    }

    

}
}

function carFunc3(sNumm,myDate) {
    let carsIn3 = document.getElementById("carInput3")
  let  carsBtn3 = document.getElementById("carBtnSave3")
  
  if(carsIn3.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  let cars3 = document.getElementById("carLeaves3")
  cars3.style.display = "none"
  
}else{

  let carSpace3 =  document.getElementById("bb7")
    carSpace3.innerHTML =  arr[0].place
    carSpace3.style.backgroundColor = "white"
    carSpace3.style.borderRadius = "5px"

    let carClient3 = document.getElementById("bb8") 
    carClient3.innerHTML = "Client name : " + carsIn3.value
    carClient3.style.backgroundColor = "white"
    carClient3.style.borderRadius = "20px"
  
    
 
    myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

     myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"


    carsBtn3.style.display = "none"
    carsIn3.style.display = "none"
    cars3.style.display = "block"

    sNumm.innerHTML = sNumm.innerHTML - 1

    if(sNumm.innerHTML == 0) {
      checkDiv.style.display = "block"
      ckeckParagraph.innerHTML = "result : "
      checkBtn.innerHTML = "check in Truck Area"

      alert('this is the last slot here Click Check in truck button above ')
      checkDiv.scrollIntoView()


    }



}
}


function carFunc4(sNumm,myDate) {
    let carsIn4 = document.getElementById("carInput4")
  let  carsBtn4 = document.getElementById("carBtnSave4")
  
  if(carsIn4.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  let cars4 = document.getElementById("carLeaves4")
  cars4.style.display = "none"
  
}else{

  let carSpace4 =  document.getElementById("bb10")
    carSpace4.innerHTML =  arr[0].place
    carSpace4.style.backgroundColor = "white"
    carSpace4.style.borderRadius = "5px"

    let carClient4 = document.getElementById("bb11") 
    carClient4.innerHTML = "Client name : " + carsIn4.value
    carClient4.style.backgroundColor = "white"
    carClient4.style.borderRadius = "20px"
  
    
 
    myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

     myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

    carsBtn4.style.display = "none"
    carsIn4.style.display = "none"
    cars4.style.display = "block"

    sNumm.innerHTML = sNumm.innerHTML - 1

    if(sNumm.innerHTML == 0) {
      checkDiv.style.display = "block"
      ckeckParagraph.innerHTML = "result : "
      checkBtn.innerHTML = "check in Truck Area"

      alert('this is the last slot here Click Check in truck button above ')
      checkDiv.scrollIntoView()

    }


}
}


function carFunc5(sNumm,myDate) {
    let carsIn5 = document.getElementById("carInput5")
  let  carsBtn5 = document.getElementById("carBtnSave5")
  
  if(carsIn5.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  let cars5 = document.getElementById("carLeaves5")
  cars5.style.display = "none"
  
}else{

  let carSpace5 =  document.getElementById("bb13")
    carSpace5.innerHTML =  arr[0].place
    carSpace5.style.backgroundColor = "white"
    carSpace5.style.borderRadius = "5px"

    let carClient5 = document.getElementById("bb14") 
    carClient5.innerHTML = "Client name : " + carsIn5.value
    carClient5.style.backgroundColor = "white"
    carClient5.style.borderRadius = "20px"
  
   
     myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

      myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

   
    carsBtn5.style.display = "none"
    carsIn5.style.display = "none"
    cars5.style.display = "block"

    sNumm.innerHTML = sNumm.innerHTML - 1

    if(sNumm.innerHTML == 0) {
      checkDiv.style.display = "block"
      ckeckParagraph.innerHTML = "result : "
      checkBtn.innerHTML = "check in Truck Area"

      alert('this is the last slot here Click Check in truck button above ')
      checkDiv.scrollIntoView()

    }

   

}
}


function carFunc6(sNumm,myDate) {
    let carsIn6 = document.getElementById("carInput6")
  let  carsBtn6 = document.getElementById("carBtnSave6")
  
  if(carsIn6.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  let cars6 = document.getElementById("carLeaves1")
  cars6.style.display = "none"
  
}else{

  let carSpace6 =  document.getElementById("bb16")
    carSpace6.innerHTML =  arr[0].place
    carSpace6.style.backgroundColor = "white"
    carSpace6.style.borderRadius = "5px"

    let carClient6 = document.getElementById("bb17") 
    carClient6.innerHTML = "Client name : " + carsIn6.value
    carClient6.style.backgroundColor = "white"
    carClient6.style.borderRadius = "20px"
  
    
     myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

      myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

   
    carsBtn6.style.display = "none"
    carsIn6.style.display = "none"
    cars6.style.display = "block"

    sNumm.innerHTML = sNumm.innerHTML - 1

    if(sNumm.innerHTML == 0) {
      checkDiv.style.display = "block"
      ckeckParagraph.innerHTML = "result : "
      checkBtn.innerHTML = "check in Truck Area"

      alert('this is the last slot here Click Check in truck button above ')
      checkDiv.scrollIntoView()

    }

   

}
}

function carFunc7(sNumm,myDate) {
    let carsIn7 = document.getElementById("carInput7")
    let  carsBtn7 = document.getElementById("carBtnSave7")
  
  if(carsIn7.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  let cars7 = document.getElementById("carLeaves7")
  cars7.style.display = "none"
  
}else{

  let carSpace7 =  document.getElementById("bb19")
    carSpace7.innerHTML =  arr[0].place
    carSpace7.style.backgroundColor = "white"
    carSpace7.style.borderRadius = "5px"

    let carClient7 = document.getElementById("bb20") 
    carClient7.innerHTML = "Client name : " + carsIn7.value
    carClient7.style.backgroundColor = "white"
    carClient7.style.borderRadius = "20px"
  
    
     myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

      myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

   
    carsBtn7.style.display = "none"
    carsIn7.style.display = "none"
    cars7.style.display = "block"

    sNumm.innerHTML = sNumm.innerHTML - 1

    if(sNumm.innerHTML == 0) {
      checkDiv.style.display = "block"
      ckeckParagraph.innerHTML = "result : "
      checkBtn.innerHTML = "check in Truck Area"

      alert('this is the last slot here Click Check in truck button above ')
      checkDiv.scrollIntoView()

    }


}
}

function carFunc8(sNumm,myDate) {
    let carsIn8 = document.getElementById("carInput8")
  let  carsBtn8 = document.getElementById("carBtnSave8")
  
  if(carsIn8.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  let cars8 = document.getElementById("carLeaves8")
  cars8.style.display = "none"
  
}else{

  let carSpace8 =  document.getElementById("bb22")
    carSpace8.innerHTML =  arr[0].place
    carSpace8.style.backgroundColor = "white"
    carSpace8.style.borderRadius = "5px"

    let carClient8 = document.getElementById("bb23") 
    carClient8.innerHTML = "Client name : " + carsIn8.value
    carClient8.style.backgroundColor = "white"
    carClient8.style.borderRadius = "20px"
  
   
     myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

      myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

    
    carsBtn8.style.display = "none"
    carsIn8.style.display = "none"
    cars8.style.display = "block"

    sNumm.innerHTML = sNumm.innerHTML - 1

    if(sNumm.innerHTML == 0) {
      checkDiv.style.display = "block"
      ckeckParagraph.innerHTML = "result : "
      checkBtn.innerHTML = "check in Truck Area"

      alert('this is the last slot here Click Check in truck button above ')
      checkDiv.scrollIntoView()

    }



}
}

function carFunc9(sNumm,myDate) {
    let carsIn9 = document.getElementById("carInput9")
  let  carsBtn9 = document.getElementById("carBtnSave9")
  
  if(carsIn9.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  let cars9 = document.getElementById("carLeaves1")
  cars9.style.display = "none"
  
}else{

  let carSpace9 =  document.getElementById("bb25")
    carSpace9.innerHTML =  arr[0].place
    carSpace9.style.backgroundColor = "white"
    carSpace9.style.borderRadius = "5px"

    let carClient9 = document.getElementById("bb26") 
    carClient9.innerHTML = "Client name : " + carsIn9.value
    carClient9.style.backgroundColor = "white"
    carClient9.style.borderRadius = "20px"
  
   
 
    myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

     myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

    carsBtn9.style.display = "none"
    carsIn9.style.display = "none"
    cars9.style.display = "block"

    sNumm.innerHTML = sNumm.innerHTML - 1

    if(sNumm.innerHTML == 0) {
      checkDiv.style.display = "block"
      ckeckParagraph.innerHTML = "result : "
      checkBtn.innerHTML = "check in Truck Area"

      alert('this is the last slot here Click Check in truck button above ')
      checkDiv.scrollIntoView()

    }


}
}


function carFunc10(sNumm,myDate) {
    let carsIn10 = document.getElementById("carInput10")
  let  carsBtn10 = document.getElementById("carBtnSave10")
  
  if(carsIn10.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  let cars10 = document.getElementById("carLeaves10")
  cars10.style.display = "none"
  
}else{

  let carSpace10 =  document.getElementById("bb28")
    carSpace10.innerHTML =  arr[0].place
    carSpace10.style.backgroundColor = "white"
    carSpace10.style.borderRadius = "5px"

    let carClient10 = document.getElementById("bb29") 
    carClient10.innerHTML = "Client name : " + carsIn10.value
    carClient10.style.backgroundColor = "white"
    carClient10.style.borderRadius = "20px"
  
    
     myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

      myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

    
    carsBtn10.style.display = "none"
    carsIn10.style.display = "none"
    cars10.style.display = "block"

    sNumm.innerHTML = sNumm.innerHTML - 1

    if(sNumm.innerHTML == 0) {
      checkDiv.style.display = "block"
      ckeckParagraph.innerHTML = "result : "
      checkBtn.innerHTML = "check in Truck Area"

      alert('this is the last slot here Click Check in truck button above ')
      checkDiv.scrollIntoView()

    }

   

}
}



//#######################truck###########################

var myTrucks1 = document.getElementById('truckLeaves1')
var myTrucks2 = document.getElementById('truckLeaves2')
var myTrucks3 = document.getElementById('truckLeaves3')
var myTrucks4 = document.getElementById('truckLeaves4')
var myTrucks5 = document.getElementById('truckLeaves5')
var myTrucks6 = document.getElementById('truckLeaves6')
var myTrucks7 = document.getElementById('truckLeaves7')
var myTrucks8= document.getElementById('truckLeaves8')
var myTrucks9 = document.getElementById('truckLeaves9')
var myTrucks10 = document.getElementById('truckLeaves10')



myTrucks1.style.display = "none"
myTrucks2.style.display = "none"
myTrucks3.style.display = "none"
myTrucks4.style.display = "none"
myTrucks5.style.display = "none"
myTrucks6.style.display = "none"
myTrucks7.style.display = "none"
myTrucks8.style.display = "none"
myTrucks9.style.display = "none"
myTrucks10.style.display = "none"
  

//################### truck leave#################




function truckLeave1(sNummm,myDate) {
  let truckIn1 = document.getElementById("truckInput1")
  let truckSave1 = document.getElementById("truckButton1")

  let wel = document.getElementById("wel")
  wel.innerHTML = "hello : " + truckIn1.value
  let myCost = document.getElementById('cost')
  myCost.innerHTML = "price : " + arr[0].price
 
 //##########
 let myTruck1 = document.getElementById("truckLeaves1")
 myTruck1.style.display = "none"

 truckIn1.style.display = "block"
 truckIn1.value = ""
 truckSave1.style.display = "block"

  let truckSpace1 =  document.getElementById("z1")
  truckSpace1.innerHTML =  "free space: "
  truckSpace1.style.backgroundColor = ""
  truckSpace1.style.backgroundColor = ""

  let truckClient1 = document.getElementById("z2") 
    truckClient1.innerHTML = "client name: "
    truckClient1.style.backgroundColor = ""
    var myTime = document.getElementById('timee')
  myDate.style.background = ""

 
  myTime.innerHTML = "date: "
  myTime.style.backgroundColor = ""
  let start  = new Date(myDate.innerHTML)
  let finish = new Date()
  let last = Math.abs(finish - start)
  total_Seconds = parseInt(Math.floor(last / 1000))
  total_minutes = parseInt(Math.floor(total_Seconds / 60));
  total_hours = parseInt(Math.floor(total_Seconds / 3600))
  
  myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"

  sNummm.innerHTML =  + sNummm.innerHTML + 1

   

  var dur = document.getElementById('timee')
  dur.scrollIntoView(myDate.innerText = "start date :"
  )
}

function truckLeave2(sNummm,myDate) {
    let truckIn2 = document.getElementById("truckInput2")
    let truckSave2 = document.getElementById("truckButton2")
  
    let wel = document.getElementById("wel")
    wel.innerHTML = "hello : " + truckIn2.value
    let myCost = document.getElementById('cost')
    myCost.innerHTML = "price : " + arr[0].price
   
   //##########
   let myTruck2 = document.getElementById("truckLeaves2")
   myTruck2.style.display = "none"
  
   truckIn2.style.display = "block"
   truckIn2.value = ""
   truckSave2.style.display = "block"
  
    let truckSpace2 =  document.getElementById("z4")
    truckSpace2.innerHTML =  "free space: "
    truckSpace2.style.backgroundColor = ""

    let truckClient2 = document.getElementById("z5") 
      truckClient2.innerHTML = "client name: "
      truckClient2.style.backgroundColor = ""
      var myTime = document.getElementById('timee')
    myDate.style.background = ""

   
    myTime.innerHTML = "date: "
    myTime.style.backgroundColor = ""
    let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
  
    sNummm.innerHTML =  + sNummm.innerHTML + 1

     
    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )
}


  function truckLeave3(sNummm,myDate) {
    let truckIn3 = document.getElementById("truckInput3")
    let truckSave3 = document.getElementById("truckButton3")
  
    let wel = document.getElementById("wel")
    wel.innerHTML = "hello : " + truckIn3.value
    let myCost = document.getElementById('cost')
    myCost.innerHTML = "price : " + arr[0].price
   
   //##########
   let myTruck3 = document.getElementById("truckLeaves3")
   myTruck3.style.display = "none"
  
   truckIn3.style.display = "block"
   truckIn3.value = ""
   truckSave3.style.display = "block"
  
    let truckSpace3 =  document.getElementById("z7")
    truckSpace3.innerHTML =  "free space: "
    truckSpace3.style.backgroundColor = ""

    let truckClient3 = document.getElementById("z8") 
      truckClient3.innerHTML = "client name: "
      truckClient3.style.backgroundColor = ""
      var myTime = document.getElementById('timee')
    myDate.style.background = ""

   
    myTime.innerHTML = "date: "
    myTime.style.backgroundColor = ""
    let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
      sNummm.innerHTML =  + sNummm.innerHTML + 1

     
   
      var dur = document.getElementById('timee')
      dur.scrollIntoView(myDate.innerText = "start date :"
      )
    
  }


  function truckLeave4(sNummm,myDate) {
    let truckIn4 = document.getElementById("truckInput4")
    let truckSave4 = document.getElementById("truckButton4")
  
    let wel = document.getElementById("wel")
    wel.innerHTML = "hello : " + truckIn4.value
    let myCost = document.getElementById('cost')
    myCost.innerHTML = "price : " + arr[0].price
   
   //##########
   let myTruck4 = document.getElementById("truckLeaves4")
   myTruck4.style.display = "none"
  
   truckIn4.style.display = "block"
   truckIn4.value = ""
   truckSave4.style.display = "block"
  
    let truckSpace4 =  document.getElementById("z10")
    truckSpace4.innerHTML =  "free space: "
    truckSpace4.style.backgroundColor = ""
    let truckClient4 = document.getElementById("z11") 
      truckClient4.innerHTML = "client name: "
      truckClient4.style.backgroundColor = ""
      var myTime = document.getElementById('timee')
    myDate.style.background = ""

   
    myTime.innerHTML = "date: "
    myTime.style.backgroundColor = ""

    let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
    sNummm.innerHTML =  + sNummm.innerHTML + 1

    
    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )
  }






  function truckLeave5(sNummm,myDate) {
    let truckIn5 = document.getElementById("truckInput5")
    let truckSave5 = document.getElementById("truckButton5")
  
    let wel = document.getElementById("wel")
    wel.innerHTML = "hello : " + truckIn5.value
    let myCost = document.getElementById('cost')
    myCost.innerHTML = "price : " + arr[0].price
    
   //##########
   let myTruck5 = document.getElementById("truckLeaves5")
   myTruck5.style.display = "none"
  
   truckIn5.style.display = "block"
   truckIn5.value = ""
   truckSave5.style.display = "block"
  
    let truckSpace5 =  document.getElementById("z13")
    truckSpace5.innerHTML =  "free space: "
    truckSpace5.style.backgroundColor = ""
    let truckClient5 = document.getElementById("z14") 
      truckClient5.innerHTML = "client name: "
      truckClient5.style.backgroundColor = ""
      var myTime = document.getElementById('timee')
    myDate.style.background = ""

   
    myTime.innerHTML = "date: "
    myTime.style.backgroundColor = ""
    let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
      sNummm.innerHTML =  + sNummm.innerHTML + 1

     
      var dur = document.getElementById('timee')
      dur.scrollIntoView(myDate.innerText = "start date :"
      )
  }

  function truckLeave6(sNummm,myDate) {
    let truckIn6 = document.getElementById("truckInput6")
    let truckSave6 = document.getElementById("truckButton6")
  
    let wel = document.getElementById("wel")
    wel.innerHTML = "hello : " + truckIn6.value
    let myCost = document.getElementById('cost')
    myCost.innerHTML = "price : " + arr[0].price
    
   //##########
   let myTruck6 = document.getElementById("truckLeaves6")
   myTruck6.style.display = "none"
  
   truckIn6.style.display = "block"
   truckIn6.value = ""
   truckSave6.style.display = "block"
  
    let truckSpace6 =  document.getElementById("z16")
    truckSpace6.innerHTML =  "free space: "
    truckSpace6.style.backgroundColor = ""
    let truckClient6 = document.getElementById("z17") 
      truckClient6.innerHTML = "client name: "
      truckClient6.style.backgroundColor = ""
      var myTime = document.getElementById('timee')
    myDate.style.background = ""

       myTime.innerHTML = "date: "
    myTime.style.backgroundColor = ""
    let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
  
    sNummm.innerHTML =  + sNummm.innerHTML + 1

     
   
    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )
  }


  function truckLeave7(sNummm,myDate) {
    let truckIn7 = document.getElementById("truckInput7")
    let truckSave7 = document.getElementById("truckButton7")
  
    let wel = document.getElementById("wel")
    wel.innerHTML = "hello : " + truckIn7.value
    let myCost = document.getElementById('cost')
    myCost.innerHTML = "price : " + arr[0].price
  
   //##########
   let myTruck7 = document.getElementById("truckLeaves7")
   myTruck7.style.display = "none"
  
   truckIn7.style.display = "block"
   truckIn7.value = ""
   truckSave7.style.display = "block"
  
    let truckSpace7 =  document.getElementById("z19")
    truckSpace7.innerHTML =  "free space: "
    truckSpace7.style.backgroundColor = ""

    let truckClient7 = document.getElementById("z20") 
      truckClient7.innerHTML = "client name: "
      truckClient7.style.backgroundColor = ""
      var myTime = document.getElementById('timee')
    myDate.style.background = ""

   

    myTime.innerHTML = "date: "
    myTime.style.backgroundColor = ""

    let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"       
    sNummm.innerHTML =  + sNummm.innerHTML + 1

     
    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )
  }

  function truckLeave8(sNummm,myDate) {
    let truckIn8 = document.getElementById("truckInput8")
    let truckSave8 = document.getElementById("truckButton8")
  
    let wel = document.getElementById("wel")
    wel.innerHTML = "hello : " + truckIn8.value
    let myCost = document.getElementById('cost')
    myCost.innerHTML = "price : " + arr[0].price
   
   //##########
   let myTruck8 = document.getElementById("truckLeaves8")
   myTruck8.style.display = "none"
  
   truckIn8.style.display = "block"
   truckIn8.value = ""
   truckSave8.style.display = "block"
  
    let truckSpace8 =  document.getElementById("z22")
    truckSpace8.innerHTML =  "free space: "
    truckSpace8.style.backgroundColor = ""

    let truckClient8 = document.getElementById("z23") 
      truckClient8.innerHTML = "client name: "
      truckClient8.style.backgroundColor = ""
      var myTime = document.getElementById('timee')
    myDate.style.background = ""

   
      
    myTime.innerHTML = "date: "
    myTime.style.backgroundColor = ""

    let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"
    sNummm.innerHTML =  + sNummm.innerHTML + 1

     
   
    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )
  }


  function truckLeave9(sNummm,myDate) {
    let truckIn9 = document.getElementById("truckInput9")
    let truckSave9 = document.getElementById("truckButton9")
  
    let wel = document.getElementById("wel")
    wel.innerHTML = "hello : " + truckIn9.value
    let myCost = document.getElementById('cost')
    myCost.innerHTML = "price : " + arr[0].price
   
   //##########
   let myTruck9 = document.getElementById("truckLeaves9")
   myTruck9.style.display = "none"
  
   truckIn9.style.display = "block"
   truckIn9.value = ""
   truckSave9.style.display = "block"
  
    let truckSpace9 =  document.getElementById("z25")
    truckSpace9.innerHTML =  "free space: "
    truckSpace9.style.backgroundColor = ""
    let truckClient9 = document.getElementById("z26") 
      truckClient9.innerHTML = "client name: "
      truckClient9.style.backgroundColor = ""
      var myTime = document.getElementById('timee')
    myDate.style.background = ""

   
    myTime.innerHTML = "date: "
    myTime.style.backgroundColor = ""

    let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"  
    sNummm.innerHTML =  + sNummm.innerHTML + 1

     
    
    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )
    
  }

  function truckLeave10(sNummm,myDate) {
    let truckIn10 = document.getElementById("truckInput10")
    let truckSave10 = document.getElementById("truckButton10")
  
    let wel = document.getElementById("wel")
    wel.innerHTML = "hello : " + truckIn10.value
    let myCost = document.getElementById('cost')
    myCost.innerHTML = "price : " + arr[0].price
   
   //##########
   let myTruck10 = document.getElementById("truckLeaves10")
   myTruck10.style.display = "none"
  
   truckIn10.style.display = "block"
   truckIn10.value = ""
   truckSave10.style.display = "block"
  
    let truckSpace10 =  document.getElementById("z28")
    truckSpace10.innerHTML =  "free space: "
    truckSpace10.style.backgroundColor = ""
    let truckClient10 = document.getElementById("z29") 
      truckClient10.innerHTML = "client name: "
      truckClient10.style.backgroundColor = ""
      var myTime = document.getElementById('timee')
    myDate.style.background = ""

   
    myTime.innerHTML = "date: "
    myTime.style.backgroundColor = ""

    let start  = new Date(myDate.innerHTML)
    let finish = new Date()
    let last = Math.abs(finish - start)
    total_Seconds = parseInt(Math.floor(last / 1000))
    total_minutes = parseInt(Math.floor(total_Seconds / 60));
    total_hours = parseInt(Math.floor(total_Seconds / 3600))
    
    myTime.innerHTML = "you stayed here : " + total_hours + " hours " + "and " + total_minutes + " minutes " + "and " + total_Seconds % 60 + " seconds"  
    sNummm.innerHTML =  + sNummm.innerHTML + 1

     
 
    var dur = document.getElementById('timee')
    dur.scrollIntoView(myDate.innerText = "start date :"
    )
    
  }


  //################### trucks func#############


  function truckFunc1(sNummm,myDate) {
    var truckIn1 = document.getElementById("truckInput1")
  var  truckBtn1 = document.getElementById("truckButton1")
  
  if(truckIn1.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
    var myTrucks1 = document.getElementById('truckLeaves1')
    myTrucks1.style.display = "none"
  
}else{
  var myTrucks1 = document.getElementById('truckLeaves1')
  let truckSpace1 =  document.getElementById("z1")
    truckSpace1.innerHTML =  arr[0].place
    truckSpace1.style.backgroundColor = "white"
    truckSpace1.style.borderRadius = "5px"

    let truckClient1 = document.getElementById("z2") 
    truckClient1.innerHTML = "Client name : " + truckIn1.value
    truckClient1.style.backgroundColor = "white"
    truckClient1.style.borderRadius = "20px"
  
    
     myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

      myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

  
    truckBtn1.style.display = "none"
    truckIn1.style.display = "none"
    myTrucks1.style.display = "block"

    sNummm.innerHTML = sNummm.innerHTML - 1

    if(sNummm.innerHTML == 0) {
      alert('this is the last slot here in Trucks Area')    
      checkDiv.scrollIntoView()
  
    }


}
}

function truckFunc2(sNummm,myDate) {
    var truckIn2 = document.getElementById("truckInput2")
  var  truckBtn2 = document.getElementById("truckButton2")
  
  if(truckIn2.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  var trucks2 = document.getElementById("truckLeaves2")
  trucks2.style.display = "none"
  
}else{
  var trucks2 = document.getElementById("truckLeaves2")

  var truckSpace2 =  document.getElementById("z4")
    truckSpace2.innerHTML =  arr[0].place
    truckSpace2.style.backgroundColor = "white"
    truckSpace2.style.borderRadius = "5px"

    var truckClient2 = document.getElementById("z5") 
    truckClient2.innerHTML = "Client name : " + truckIn2.value
    truckClient2.style.backgroundColor = "white"
    truckClient2.style.borderRadius = "20px"
  
    
     myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

      myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

   
    truckBtn2.style.display = "none"
    truckIn2.style.display = "none"
    trucks2.style.display = "block"

    sNummm.innerHTML = sNummm.innerHTML - 1

    if(sNummm.innerHTML == 0) {
      alert('this is the last slot here in Trucks Area')  
      checkDiv.scrollIntoView()
    
    }


}
}

function truckFunc3(sNummm,myDate) {
    var truckIn3 = document.getElementById("truckInput3")
  var  truckBtn3 = document.getElementById("truckButton3")
  
  if(truckIn3.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  var trucks3 = document.getElementById("truckLeaves3")
  trucks3.style.display = "none"
  
}else{
  var trucks3 = document.getElementById("truckLeaves3")

  var truckSpace3 =  document.getElementById("z7")
    truckSpace3.innerHTML =  arr[0].place
    truckSpace3.style.backgroundColor = "white"
    truckSpace3.style.borderRadius = "5px"

    var truckClient3 = document.getElementById("z8") 
    truckClient3.innerHTML = "Client name : " + truckIn3.value
    truckClient3.style.backgroundColor = "white"
    truckClient3.style.borderRadius = "20px"
  
    
     myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

      myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

    
    truckBtn3.style.display = "none"
    truckIn3.style.display = "none"
    trucks3.style.display = "block"

    sNummm.innerHTML = sNummm.innerHTML - 1

    if(sNummm.innerHTML == 0) {
      alert('this is the last slot here in Trucks Area')      
      checkDiv.scrollIntoView()

    }

  
}
}


function truckFunc4(sNummm,myDate) {
    var truckIn4 = document.getElementById("truckInput4")
  var  truckBtn4 = document.getElementById("truckButton4")
  
  if(truckIn4.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  var myTruckss = document.getElementById("truckLeaves4")
  myTruckss.style.display = "none"
  
}else{
  var myTruckss = document.getElementById("truckLeaves4")

  var truckSpace4 =  document.getElementById("z10")
    truckSpace4.innerHTML =  arr[0].place
    truckSpace4.style.backgroundColor = "white"
    truckSpace4.style.borderRadius = "5px"

    var truckClient4 = document.getElementById("z11") 
    truckClient4.innerHTML = "Client name : " + truckIn4.value
    truckClient4.style.backgroundColor = "white"
    truckClient4.style.borderRadius = "20px"
  
   
     myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

      myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

   
    truckBtn4.style.display = "none"
    truckIn4.style.display = "none"
    myTruckss.style.display = "block"

    sNummm.innerHTML = sNummm.innerHTML - 1

    if(sNummm.innerHTML == 0) {
      alert('this is the last slot here in Trucks Area')    
      checkDiv.scrollIntoView()
  
    }

    
}
}



function truckFunc5(sNummm,myDate) {
    var truckIn5 = document.getElementById("truckInput5")
  var  truckBtn5 = document.getElementById("truckButton5")
  
  if(truckIn5.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  var trucks5 = document.getElementById("truckLeaves5")
  trucks5.style.display = "none"
  
}else{

  var trucks5 = document.getElementById("truckLeaves5")

  var truckSpace5 =  document.getElementById("z13")
    truckSpace5.innerHTML =  arr[0].place
    truckSpace5.style.backgroundColor = "white"
    truckSpace5.style.borderRadius = "5px"

    var truckClient5 = document.getElementById("z14") 
    truckClient5.innerHTML = "Client name : " + truckIn5.value
    truckClient5.style.backgroundColor = "white"
    truckClient5.style.borderRadius = "20px"
  
    
     myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

      myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

    
    truckBtn5.style.display = "none"
    truckIn5.style.display = "none"
    trucks5.style.display = "block"
    sNummm.innerHTML = sNummm.innerHTML - 1

    if(sNummm.innerHTML == 0) {
      alert('this is the last slot here in Trucks Area')      
      checkDiv.scrollIntoView()

    }


}
}

function truckFunc6(sNummm,myDate) {
    var truckIn6 = document.getElementById("truckInput6")
  var  truckBtn6= document.getElementById("truckButton6")
  
  if(truckIn6.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  var trucks6 = document.getElementById("truckLeaves6")
  trucks6.style.display = "none"
  
}else{
  var trucks6 = document.getElementById("truckLeaves6")

  var truckSpace6 =  document.getElementById("z16")
    truckSpace6.innerHTML =  arr[0].place
    truckSpace6.style.backgroundColor = "white"
    truckSpace6.style.borderRadius = "5px"

    var truckClient6 = document.getElementById("z17") 
    truckClient6.innerHTML = "Client name : " + truckIn6.value
    truckClient6.style.backgroundColor = "white"
    truckClient6.style.borderRadius = "20px"
  
    
     myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

      myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

   
    truckBtn6.style.display = "none"
    truckIn6.style.display = "none"
    trucks6.style.display = "block"

    sNummm.innerHTML = sNummm.innerHTML - 1

    if(sNummm.innerHTML == 0) {
      alert('this is the last slot here in Trucks Area')   
      checkDiv.scrollIntoView()

     }

   
}
}



function truckFunc7(sNummm,myDate) {
    var truckIn7 = document.getElementById("truckInput7")
  var  truckBtn7 = document.getElementById("truckButton7")
  
  if(truckIn7.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  var trucks7 = document.getElementById("truckLeaves7")
  trucks7.style.display = "none"
  
}else{
  var trucks7 = document.getElementById("truckLeaves7")

  var truckSpace7 =  document.getElementById("z19")
    truckSpace7.innerHTML =  arr[0].place
    truckSpace7.style.backgroundColor = "white"
    truckSpace7.style.borderRadius = "5px"

    var truckClient7 = document.getElementById("z20") 
    truckClient7.innerHTML = "Client name : " + truckIn7.value
    truckClient7.style.backgroundColor = "white"
    truckClient7.style.borderRadius = "20px"
  
     myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

      myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

   
    truckBtn7.style.display = "none"
    truckIn7.style.display = "none"
    trucks7.style.display = "block"

    sNummm.innerHTML = sNummm.innerHTML - 1

    if(sNummm.innerHTML == 0) {
      alert('this is the last slot here in Trucks Area')
      checkDiv.scrollIntoView()

    }


}
}

function truckFunc8(sNummm,myDate) {
    var truckIn8 = document.getElementById("truckInput8")
  var  truckBtn8 = document.getElementById("truckButton8")
  
  if(truckIn8.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  var trucks8 = document.getElementById("truckLeaves8")
  trucks8.style.display = "none"
  
}else{
  var trucks8 = document.getElementById("truckLeaves8")

  var truckSpace8 =  document.getElementById("z22")
    truckSpace8.innerHTML =  arr[0].place
    truckSpace8.style.backgroundColor = "white"
    truckSpace8.style.borderRadius = "5px"

    var truckClient8 = document.getElementById("z23") 
    truckClient8.innerHTML = "Client name : " + truckIn8.value
    truckClient8.style.backgroundColor = "white"
    truckClient8.style.borderRadius = "20px"
  
     myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

      myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

   
    truckBtn8.style.display = "none"
    truckIn8.style.display = "none"
    trucks8.style.display = "block"

    sNummm.innerHTML = sNummm.innerHTML - 1

    if(sNummm.innerHTML == 0) {
      alert('this is the last slot here in Trucks Area')
      checkDiv.scrollIntoView()

    }

   

}
}

function truckFunc9(sNummm,myDate) {
    var truckIn9 = document.getElementById("truckInput9")
  var  truckBtn9 = document.getElementById("truckButton9")
  
  if(truckIn9.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  var trucks9 = document.getElementById("truckLeaves9")
  trucks9.style.display = "none"
  
}else{
  var trucks9 = document.getElementById("truckLeaves9")

  var truckSpace9 =  document.getElementById("z25")
    truckSpace9.innerHTML =  arr[0].place
    truckSpace9.style.backgroundColor = "white"
    truckSpace9.style.borderRadius = "5px"

    var truckClient9 = document.getElementById("z26") 
    truckClient9.innerHTML = "Client name : " + truckIn9.value
    truckClient9.style.backgroundColor = "white"
    truckClient9.style.borderRadius = "20px"
  
     myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

      myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

   
    truckBtn9.style.display = "none"
    truckIn9.style.display = "none"
    trucks9.style.display = "block"
    sNummm.innerHTML = sNummm.innerHTML - 1

    if(sNummm.innerHTML == 0) {
      alert('this is the last slot here in Trucks Area')
      checkDiv.scrollIntoView()

    }

}
}

function truckFunc10(sNummm,myDate) {
    var truckIn10 = document.getElementById("truckInput10")
  var  truckBtn10 = document.getElementById("truckButton10")
  
  if(truckIn10.value == "" ) {
    alert("Sorry You Don't Enter Any Data")
  var trucks10 = document.getElementById("truckLeaves10")
  trucks10.style.display = "none"
  
}else{
  var trucks10 = document.getElementById("truckLeaves10")

  var truckSpace10 =  document.getElementById("z28")
    truckSpace10.innerHTML =  arr[0].place
    truckSpace10.style.backgroundColor = "white"
    truckSpace10.style.borderRadius = "5px"

    var truckClient10 = document.getElementById("z29") 
    truckClient10.innerHTML = "Client name : " + truckIn10.value
    truckClient10.style.backgroundColor = "white"
    truckClient10.style.borderRadius = "20px"
  
     myDate.innerHTML =` ${new Date().toDateString()}  ${new Date().toLocaleTimeString()}`

      myDate.style.backgroundColor = "white"
     myDate.style.borderRadius = "20px"

   
    truckBtn10.style.display = "none"
    truckIn10.style.display = "none"
    trucks10.style.display = "block"

    sNummm.innerHTML = sNummm.innerHTML - 1

    if(sNummm.innerHTML == 0) {
      alert('this is the last slot here in Trucks Area')
      checkDiv.scrollIntoView()

    }

}
}

function btnFunc() {
  var btn = document.getElementById('searchBtn')
  var searchIn = document.getElementById('ae')
  btn.addEventListener('click',()=>{
    if(searchIn.value == "") {
     alert("Sorry You Don't Inter Any Data")
    }     
  })
}
btnFunc()

function searchFunc1() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('myFirstInput') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('leav')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc1()

  function searchFunc2() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('mySecondInput') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('leav1')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc2()

  function searchFunc3() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('myThirdInput') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('leav2')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc3()

  function searchFunc4() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('myFourthInput') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('leav3')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc4()

  function searchFunc5() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('myFifthInput') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('leav4')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc5()

  function searchFunc6() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('mySixthInput') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('leav5')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc6()

  function searchFunc7() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('mySeventhInput') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('leav6')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc7()

  function searchFunc8() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('myEighthInput') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('leav7')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc8()

  function searchFunc9() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('myNinethInput') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('leav8')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc9()

  function searchFunc10() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('myTenthInput') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('leav9')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc10()



  function searchFunc11() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('carInput1') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('carLeaves1')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc11()

  function searchFunc12() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('carInput2') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('carLeaves2')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc12()

  function searchFunc13() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('carInput3') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('carLeaves3')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc13()

  function searchFunc14() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('carInput4') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('carLeaves4')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc14()

  function searchFunc15() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('carInput5') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('carLeaves2')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc15()

  function searchFunc16() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('carInput6') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('carLeaves2')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc16()

  function searchFunc17() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('carInput7') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('carLeaves7')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc17()

  function searchFunc18() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('carInput8') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('carLeaves8')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc18()

  function searchFunc19() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('carInput9') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('carLeaves9')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc19()

  function searchFunc20() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('carInput10') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('carLeaves10')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc20()



  function searchFunc21() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('truckInput1') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('truckLeaves1')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc21()

  function searchFunc22() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('truckInput2') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('truckLeaves2')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc22()

  function searchFunc23() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('truckInput3') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('truckLeaves3')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc23()

  function searchFunc24() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('truckInput4') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('truckLeaves4')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc24()
  
  function searchFunc25() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('truckInput5') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('truckLeaves5')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc25()

  function searchFunc26() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('truckInput6') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('truckLeaves6')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc26()

  function searchFunc27() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('truckInput7') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('truckLeaves7')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc27()

  function searchFunc28() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('truckInput8') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('truckLeaves8')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc28()

  function searchFunc29() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('truckInput9') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('truckLeaves9')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc29()

  function searchFunc30() {
    var myBtn = document.getElementById('searchBtn')
    var targetIn = document.getElementById('truckInput10') 
    var searchIn = document.getElementById('ae')
    var leaveBtnnn = document.getElementById('truckLeaves9')
  
    myBtn.addEventListener('click',()=>{
      if(searchIn.value == targetIn.value) {
        leaveBtnnn.scrollIntoView()
      }else {
      alert("THERE IS NO NAME LIKE THAT")
    }
    })
  }
  searchFunc30()

  
 function checkFunc(ckeckP){
 
  if(sNumm.innerHTML != 0 ) {
    ckeckP.innerHTML = `Result :
    Congratulations we found ${sNumm.innerHTML} free places for you in Cars parking Area`
   } else if (sNummm.innerHTML != 0){
    ckeckP.innerHTML = `Result :
    Congratulations we found ${sNummm.innerHTML} free places for you in Trucks parking Area`
   }else{
    ckeckP.innerHTML = "Sorry there are no free places here"
   }
 }


 
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}