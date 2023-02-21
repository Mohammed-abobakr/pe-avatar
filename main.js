














var input = document.getElementById("tumbnail-form"),
    contentContainer = document.getElementById("content-container");
    bgStyles = document.getElementById("bg-styles");
    
let picPro = document.getElementById("profile-socials");
    picPro.onchange = function () {
        let meas = picPro[picPro.selectedIndex].innerHTML;
        console.log(meas);
    }
    
document.getElementById("upload").onchange = function(e){ 
    var t=document.getElementById("output-image");
    t.style='background:url("'+URL.createObjectURL(e.target.files[0])+'")',
    t.onload=function(){URL.revokeObjectURL(t.style)}},


    document.getElementById("convert-image").onclick=function() {html2canvas(document.querySelector(".content-container")).then(e=> {
        document.getElementById("canvas").appendChild(e)
    }),
    document.querySelector(".tombol-download").style.display = "block",
    document.querySelector("#sucessImage").style.display = "block"},
    document.getElementById("reset-image").onclick=function(){document.getElementById("canvas").innerHTML="",
    document.querySelector(".tombol-download").style.display="none",document.querySelector("#sucessImage").style.display="none"},
    

    // download pic
    document.getElementById("download-image").onclick = function() {

        var e = "Expert Profile Picture";
        console.log(e);
        var t = document.createElement("a");
            t.download = e +".png",
            t.href=document.querySelector("canvas").toDataURL(),
            console.log(t)
            t.click()
        };

    // change lavels
        $("#bg-styles").data("oldVal", $("#bg-styles").val());
        $("#bg-styles").change(function() {
            var a = $(this),
                b = a.val(),
                c = a.data("oldVal");
            a.data("oldVal", b);
            $("#content-container").removeClass(c).addClass(b);
        });

    //change socials
        $("#profile-socials").data("oldVal", $("#profile-socials").val());
        $("#profile-socials").change(function() {
            var a = $(this),
                b = a.val(),
                c = a.data("oldVal");
            a.data("oldVal", b);
            $("#background").removeClass(c).addClass(b);
        });

    //change shapes
        $("#shapes").data("oldVal", $("#shapes").val());
        $("#shapes").change(function() {
            var a = $(this),
                b = a.val(),
                c = a.data("oldVal");
            a.data("oldVal", b);
            $("#content-container").removeClass(c).addClass(b);
            $("#background").removeClass(c).addClass(b);
        });
        

        theShape = document.getElementById("shapes");
        theShape.onchange = function() {

            if (theShape[theShape.selectedIndex].value === "shape1"){
                console.log("d");
                var rade = "50%"
                document.querySelector("#content-container::after").style.borderRadius=rad;
            }
        }

// let meta = document.getElementById("profile-socials");
// meta.onchange = function () {
//     var b = meta[meta.selectedIndex].value;
//     // console.log(b);


//     if (b === "sty1"){
//         console.log("this is facbooks")
//     }

// }














// sec2




