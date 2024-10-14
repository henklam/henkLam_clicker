let title = document.createElement("title");
title.innerHTML = "Clicker";
document.head.appendChild(title);

let count = 0;
function increment() {
    document.getElementById("error").innerHTML = "";
    count++;
    document.getElementById("count-el").innerHTML = count;
    console.log(count);
}

function decrement() {
    if(count == 0) {
        document.getElementById("error").innerHTML = "error: can't decrement";
    } else {
        count--;
        document.getElementById("count-el").innerHTML = count;
    }
}

function reset() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("previous").innerHTML = "Previous entries:";
    count = 0;
    document.getElementById("count-el").innerHTML = count;
}

function save() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("previous").innerHTML+= " " + count + " -";
    count = 0;
    document.getElementById("count-el").innerHTML = count;
}