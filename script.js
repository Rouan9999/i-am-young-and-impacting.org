const toggleb = document.getElementsByClassName('toggleb')[0]
const links = document.getElementsByClassName('links')[0]

toggleb.addEventListener('click', () => {
    links.classList.toggle('active')
})

document.addEventListener("DOMContentLoaded", function() {

    var fadeComplete = function(e) { stage.appendChild(arr[0]); };

    var stage = document.getElementById("npcimg1");
    var arr = stage.getElementsByTagName("a");
    for(var i=0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", fadeComplete, false);

    }

}, false);

 