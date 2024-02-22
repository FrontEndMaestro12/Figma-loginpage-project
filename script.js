function scroll() {
  let number = 0;
  setInterval(() => {
    number = number+Math.floor(Math.random()*20);
    if (number<100) {
      document.querySelector("#loader h1").innerHTML = number+"%";
    } else {
      number=100;
      document.querySelector("#loader h1").innerHTML = number+"%";
    }
  }, 100);

}
scroll();


let mytimeline = gsap.timeline();

mytimeline.to("#loader h1",{
  duration:1,
  delay:0.5,
  onStart:scroll(),
});
mytimeline.to("#loader",{
  duration:1,
  bottom:"-100vh",
  delay:0.5,

});


mytimeline.from("#header > *", {
  duration: 0.7,
  opacity: 0,
  y: -30,
  delay: 1,
  stagger: 0.4,
});
mytimeline.from("#card .butons > *, #card .txt > h1", {
  duration: 1,
  opacity: 0,
  delay: 0.4,
  stagger: 0.1,
});

//change bg mode

let btn = document.querySelector("#mybtn"); //step 1

mode = "light";  //step 2

let body = document.querySelector("body"); //step 3

let or = document.getElementById("spang");

let login = document.getElementById("btn2");

let last = document.getElementById("spanlast");


//funtion created                            step 4
let fullfuntion = () => {
    if (mode === "light") {
      body.style.backgroundColor = "black";
      body.style.color = "white";
      or.style.color= "white";
      last.style.color= "white";
      login.style.backgroundColor = "white"
      login.style.color = "black";
      btn.style.backgroundColor ="black";
      btn.style.color ="white"
    /*it mean*/   mode = "dark";
    } else {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      or.style.color= "black";
      btn.style.backgroundColor ="white"
      btn.style.color ="black"
      last.style.color= "black";
      login.style.backgroundColor = "black";
      login.style.color = "white";
     /*it mean*/ mode = "light"; 
    }
}
//evente listner start here:              step 5
btn.addEventListener("click",fullfuntion) ;


document.querySelector("#googlebutton").addEventListener("click",()=>{
  alert("Accessing Login to Google Soon")
});

document.querySelector("#btn2").addEventListener("click",()=>{
  alert("Soon");
})