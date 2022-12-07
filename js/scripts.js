
var colors = ["#d3f8e2", "#e4c1f9", "#f694c1", "#ede7b1", "#a9def9"]

var figure = false;

document.getElementById("track1").loop = true;
document.getElementById("track2").loop = true;
document.getElementById("track3").loop = true;
document.getElementById("track4").loop = true;



function backgroundColors() {

    var randomNum = Math.floor((Math.random() * colors.length));

    $("body").css("background-color", colors[randomNum])
}

function animation() {
    const element = document.querySelector('.my-element');
    element.classList.add('animate__animated', 'animate__bounceOutLeft');

    animateCSS('.my-element', 'bounce');


}

function figureOne() {


    figure = !figure;


    $("#figureOne").toggle()

    if (figure) {
        $(".figureOptions").show()
        var audio1 = document.getElementById("track1")
        audio1.play()

    } else {
        $(".figureOptions").hide()
        var audio1 = document.getElementById("track1")
        audio1.pause()

    }

}

function figureTwo() {
    figure = !figure

    $("#figureTwo").toggle()

    if (figure) {
        $(".figureOptionsTwo").show()
        var audio2 = document.getElementById("track2")
        audio2.play()
    } else {
        $(".figureOptionsTwo").hide()
        var audio2 = document.getElementById("track2")
        audio2.pause()
    }

}

function figureThree() {
    figure = !figure

    $("#figureThree").toggle()

    if (figure) {
        $(".figureOptionsThree").show()
        var audio3 = document.getElementById("track3")
        audio3.play()
    } else {
        $(".figureOptionsThree").hide()
        var audio3 = document.getElementById("track3")
        audio3.pause()
    }

}

function figureFour() {
    figure = !figure

    $("#figureFour").toggle()

    if (figure) {
        $(".figureOptionsFour").show()
        var audio4 = document.getElementById("track4")
        audio4.play()
    } else {
        $(".figureOptionsFour").hide()
        var audio4 = document.getElementById("track4")
        audio4.pause()
    }

}

function allFiures() {

    figure = !figure;


    $("#figureOne").toggle()

    if (figure) {
        $(".figureOptions").show()
        var audio1 = document.getElementById("track1")
        audio1.play()
    } else {
        $(".figureOptions").hide()
        var audio1 = document.getElementById("track1")
        audio1.pause()

    }

    $("#figureTwo").toggle()

    if (figure) {
        $(".figureOptionsTwo").show()
        var audio2 = document.getElementById("track2")
        audio2.play()
    } else {
        $(".figureOptionsTwo").hide()
        var audio2 = document.getElementById("track2")
        audio2.pause()
    }

    $("#figureThree").toggle()

    if (figure) {
        $(".figureOptionsThree").show()
        var audio3 = document.getElementById("track3")
        audio3.play()
    } else {
        $(".figureOptionsThree").hide()
        var audio3 = document.getElementById("track3")
        audio3.pause()
    }

    $("#figureFour").toggle()

    if (figure) {
        $(".figureOptionsFour").show()
        var audio4 = document.getElementById("track4")
        audio4.play()
    } else {
        $(".figureOptionsFour").hide()
        var audio4 = document.getElementById("track4")
        audio4.pause()
    }

}


$(document).on("keypress", function (e) {
    console.log(e)
    if (e.key == 'Enter') {
        backgroundColors();
    } if (e.key == 's') {
        figureOne();
    } if (e.key == 'a') {
        figureTwo();
    } if (e.key == 'd') {
        figureThree();
    } if (e.key == 'w') {
        figureFour();
    } if (e.key == 'z') {
        allFiures();
    }

})












