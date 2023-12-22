function bg1(){
    document.getElementById("navbar").style.backgroundColor="rgb(255, 61, 61)";
    document.getElementById("navbar").style.transition =".8s";

}
function red(){
    var q = document.getElementById("about-main");
    q.style.transition =".5s";
    q.style.borderBottom="2.5px solid red";
    q.style.height="400px";
    var i; 
    var si = document.getElementsByClassName("slider");
    for(i=0; i<si.length;i++){
        document.getElementById("g").innerHTML="Lorem ipsum dolor sit amet, consecteturarchitecto qui quam ad incidunt odio error asperiores minus ea iure quasi libero sapiente cupiditate dolorum. Vitae."
    }
}
function done(){
    document.getElementById("g").style.transition=".8s";
    document.getElementById("about-main").style.height="280px";
    document.getElementById("g").innerHTML=" ";
    document.getElementById("about-main").style.borderBottom="none";
}