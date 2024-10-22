let title = document.createElement("title");
title.innerHTML = "Clicker";
document.head.appendChild(title);

function printPrev() {
    document.getElementById("previous").innerHTML = "Previous entries: ";
    for(let i = 0; i < previous.length; i++) {
        document.getElementById("previous").innerHTML+= " " + previous[i] + " -";
    }
}


if(localStorage.getItem("previous") == null) {
    var previous = [];
} else {
    var previous = JSON.parse(localStorage.getItem("previous"));
    printPrev();
}

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
    previous = [];
    localStorage.setItem("previous", JSON.stringify(previous));
}

function save() {
    document.getElementById("error").innerHTML = "";
    // document.getElementById("previous").innerHTML+= " " + count + " -";
    previous.push(count);
    localStorage.setItem("previous", JSON.stringify(previous));
    printPrev();
    count = 0;
    document.getElementById("count-el").innerHTML = count;
}
