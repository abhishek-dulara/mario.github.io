

function key(event) {
    if (event.which == 13) {             //Enter

        if (rw == 0) {
            fid = f();
            rw = setInterval(run, 100);
            rs.play();
            sw = setInterval(updateScore, 100);
            fw = setInterval(move, 100);
            bw = setInterval(b, 100);
        }


    }

    if (event.which == 32) {                 //Space
        if (jw == 0) {

            clearInterval(rw);     //eka parak uda pannata pasu duvana eka nathra wei.
            rs.pause();

            rw = -1;


            jw = setInterval(jump, 100);
            js.play();

        }



    }



}







var rs = new Audio("./Assets/run.mp3");
rs.loop = true;
var js = new Audio("./Assets/jump.mp3");
var ds = new Audio("./Assets/dead.mp3");















var fid = 0;
var m = 700;
function f() {
    for (var y = 0; y < 50; y++) {                   //amount of flames

        var i = document.createElement("img");

        i.src = "./Assets/flame.gif";

        i.className = "f";


        i.style.marginLeft = m + "px";

        i.id = "a" + y;

        if (y <= 4) {
            m = m + 600;
        }
        if (y >= 5) {
            m = m + 400;
        }

        document.getElementById("b").appendChild(i);
    }



}




var rw = 0;
var r = 1;

function run() {

    var ring = document.getElementById("boy");
    r = r + 1;
    if (r == 9) {
        r = 1;
    }
    ring.src = "./Assets/Run (" + r + ").png";

}




var bw = 0;
var x = 0;
function b() {

    x = x - 20;

    document.getElementById("b").style.backgroundPositionX = x + "px";


}



var mt = 430;
var jw = 0;
var j = 1;
function jump() {

    var jimpg = document.getElementById("boy");

    if (j <= 6) {         //1-6 images

        mt = mt - 30;
        //uda paniddi usa wenas kirima.
    }
    if (j >= 7) {         //7-12 images

        mt = mt + 30;

    }

    jimpg.style.marginTop = mt + "px";




    j = j + 1;
    if (j == 13) {
        j = 1;

        clearInterval(jw);
        jw = 0;                                      //jump wela ayeth duwanawa.

        rw = setInterval(run, 100);
        rs.play();
        if (fid == 0); {
            fid = f();
        }

        if (fw == 0) {                                                  //(space ebuvahmth game ek vada karayi)
            fw = setInterval(move, 100);
        }

        //if (bw == 0); {
        //  bw = setInterval(b, 100);
        //}

        if (sw == 0) {
            sw = setInterval(updateScore, 100);
        }
    }

    jimpg.src = "./Assets/Jump (" + j + ").png";



}







var sw = 0;
var u = 0;
function updateScore() {
    u = u + 5;

    document.getElementById("score").innerHTML = u;

}





var fw = 0;
function move() {
    for (var y = 0; y < 10; y++) {

        var d = document.getElementById("a" + y);
        var z = getComputedStyle(d);
        var p = parseInt(z.marginLeft);
        p = p - 20;
        d.style.marginLeft = p + "px";



        if (p > 60 & p < 120) {

            if (mt > 350) {
                clearInterval(rw);
                rs.pause();
                clearInterval(jw);
                jw = -1;
                clearInterval(bw);
                clearInterval(fw);
                clearInterval(sw);
                dw = setInterval(dead, 100);
                ds.play();
            }
        }
    }
}




















var dw = 0;
var d = 0;
function dead() {

    var ding = document.getElementById("boy");

    d = d + 1;
    if (d == 11) {
        d = 10;

        ding.style.marginTop = "430px";
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = u;
    }

    ding.src = "./Assets/Dead (" + d + ").png";

}




function re() {
    location.reload();
}




   
