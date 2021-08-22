var tag = document.createElement("BUTTON");
var text = document.createTextNode("COW");
tag.appendChild(text);
tag.innerHTML = '<img src="stuff/cow-dance-animal.gif" />';
var element = document.getElementById("new");

var h = 90;
var w = 110;

var moo = new Audio('stuff/moo.mp3');
var loudmoo = new Audio('stuff/loudmoo.mp3');

function resetPos(e) {
    var x = Math.random() * (window.innerWidth - w)
    var y = Math.random() * (window.innerHeight - h)

    e.style.left = `${x}px`
    e.style.top = `${y}px`
}

// set button to white 
tag.style.borderColor = "white"
tag.style.background = "white"
tag.style.border = "none"

tag.style.cursor = "pointer"

tag.style.width = `${w}px`
tag.style.height = `${h}px`

tag.style.position = "absolute"

resetPos(tag)

tag.onclick = () => {
    loudmoo.play();
    var rando = Math.random();
    if (rando > 0.55) {
        window.open("https://www.youtube.com/watch?v=9hhMUT2U2L4&ab_channel=Memes")
    } else if (rando > 0.2) {
        window.open("https://www.youtube.com/watch?v=rRPQs_kM_nw&ab_channel=10HoursMovies")
    } else {
        window.open("https://www.youtube.com/watch?v=mXnJqYwebF8")
    }
    tag.style.display = "none"
    clearInterval(interval)
}

tag.onmouseover = () => {
    moo.play();
    setTimeout(() => {
        resetPos(tag)
    }, 250)
    // moo.play();
    // resetPos(tag)
}

var currentxpos;
var currentypos;
document.addEventListener('mousemove', (e) => {
    currentxpos = e.pageX;
    currentypos = e.pageY;
})
element.appendChild(tag);


