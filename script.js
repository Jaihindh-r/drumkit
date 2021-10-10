var button = document.querySelectorAll("button")
button.forEach(element=>{
  element.addEventListener("click",()=>{
    drums(element.innerText);
  })
})
document.addEventListener("keypress",(key)=>{
  drums(key.key);
})


function drums(key){
  switch (key.toLowerCase()){
    case "k":
    var aw = new Audio("crash.mp3");
    aw.play();
    break

    case "l":
    var aa = new Audio("kick-bass.mp3");
    aa.play();
    break

    case "j":
    var aa = new Audio("snare.mp3");
    aa.play();
    break


    case "w":
    var aa = new Audio("tom-1.mp3");
    aa.play();
    break

    case "a":
    var aa = new Audio("tom-2.mp3");
    aa.play();
    break

    case "s":
    var aa = new Audio("tom-3.mp3");
    aa.play();
    break

    case "d":
    var aa = new Audio("tom-4.mp3");
    aa.play();
    break

    default:
    alert("click the correct key ,You Idiot!!! \n keys are shown in the image" );


  }
}
