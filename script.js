let capsLock = false;

function caps() {
    capsLock = !capsLock;
    if(capsLock){
        document.getElementById("on-active").style.color='green';
    }
    else{
        document.getElementById("on-active").style.color='white';
    }
}

function display(char) {
    if (char === "space") {
        document.querySelector(".ouput-text").textContent += " ";
    } else {
        if(capsLock){
           char= char.toUpperCase();
        }
        document.querySelector(".ouput-text").textContent += char;
    }
}

function backSpace() {
    let inputText = document.querySelector(".ouput-text");
    inputText.textContent = inputText.textContent.slice(0, -1);
}
