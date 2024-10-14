let title = document.createElement("title");
title.innerHTML = "Clicker";
document.head.appendChild(title);

let count = 0;
function increment() {
    count++;
    document.getElementById("count-el").innerHTML = count;
    console.log(count);
}