function boom(key){
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    if(key==0){
        second.style.transition = ".7s"
        first.style.display = "none"
        second.style.display = "block"
    }
    if(key==1){
        first.style.display = "block"
        second.style.display = "none"
    }
}