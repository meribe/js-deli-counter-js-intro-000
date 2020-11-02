var katzDeliLine= [];
function takeANumber(katzDeliLine, name){
   katzDeliLine.push(name)
  var i=0
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
  var i=0
  if (katzDeliLine.length===parseInt(0)){
   return "There is nobody waiting to be served!"
 }
  else{
    let current=katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${current}.`
  }
}

function currentLine(){
  if (katzDeliLine=== 0){
    return "The line is currently empty."
  }
  else {
    for (var i=0; katzDeliLine.length;i++) {
      return `The line is currently: 1. ${katzDeliLine} , ${katzDeliLine}`
    }
  }






}
