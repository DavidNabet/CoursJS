/** 
 * 
 * 
 * 
 * **/

$(".carousel").carousel({
    interval: 5000
})

$("#services a").click(function(e) {
    e.preventDefault();
    if ($(this).html() == "Read More »") {
        jQuery.data(
            $(this).parent().parent().children("p"),
            "text",
            $(this).parent().parent().children("p").text()
        )
        $(this).parent().parent().children("p").append("jgtifjfgjokokgfrjgotkoktrgokk gktolkothrkokgoregf jthyopopljojojirjo tqkfok;o'rjjdfifjoj'trojhokfnkn'foijvio,kokrfokdkkajf okpoktff")
        $(this).html("Read Less &raquo;");
    } else {
        $(this).parent().parent().children("p").text($(this).parent().parent().children("p").data("text"));
        $(this).html("Read More »");
    }
})


$("#intro img").on("mouseenter", function() {
    $(this).attr("src", "https://placehold.it/450X250/ffcc33/444");
})
$("#intro img").on("mouseout", function() {
    $(this).attr("src", "images/demo/450x250.gif");
})



// $(".one_quarter a").on("click", function(e) {
//     e.preventDefault();
//     $(this).hide();
// })

// $(".one_quarter h2").on("click", function(e) {
//     e.stopPropagation();
//     $(".one_quarter").find("a").show();

// })

$("#footer li").click(function(e) {
    e.preventDefault();
    $(this).hide();
})

$("#footer .title").click(function() {
    $(this).next().find("li").show();
})


// let annee = new Date().toLocaleDateString("fr-FR")
// $("#copyright .fl_left").html("Copyright &copy; ").append(annee)

let options = { weekend: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today = new Date();


let todayFr = today.toLocaleDateString("fr-FR", options) + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let todayEn = today.toLocaleDateString("en-GB", options) + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

$("#copyright .fl_left").html("Copyright &copy; " + todayFr + "- All Rights Reserved -")


let isFrench = true;
$("#copyright .fl_left").click(function() {
    /*if (isFrench == true) {
        $("#copyright .fl_left").text("Copyright © " + todayEn + " - All Rights Reserved - Domain Name")
        isFrench = false;
    } else {
        $("#copyright .fl_left").text("Copyright © " + todayFr + " - All Rights Reserved - Domain Name")
        isFrench = true
    } */

    /* Ternaire */

    //meme chose que (isFrench == true)
    (isFrench) ? $("#copyright .fl_left").text("Copyright © " + todayEn + " - All Rights Reserved - Domain Name"): $("#copyright .fl_left").text("Copyright © " + todayFr + " - All Rights Reserved - Domain Name");

    isFrench = (isFrench) ? false : true;

});

/************** EXO 6********************/


$("form").on("submit", function(e) {
    e.preventDefault();
    $("#textinput, textarea").val("Une valeur");
    $("select option:last-child").attr("selected", "selected");
    //$("#radios-1, #checkboxes-1").attr("checked", "checked"); ou
    $("input[name=radios]").attr("checked", false);
    $("input[name=radios]").eq(1).attr("checked", true);
    //décocher les checkboxes par défaut
    $("input[name=checkboxes]").prop("checked", false);
    $("input[name=checkboxes]").eq(1).prop("checked", true);
});

/************ FIN EXO 6 ****************/

//$("#services .one_third img").prop("src", imageBas[0]);
//$("#services .one_third img").prop("src", imageBas[1]);
//$("#services .one_third img").prop("src", imageBas[2]);

/*     $("#services img:nth-child(1)").on("click", function() {
        $("#services img:nth-child(2)").attr("src", "https://s17404.pcdn.co/studio/wp-content/uploads/2018/08/changelog-BlogImageTemplate_1400x400-july-290x180.png");
    });

    $("#services img:nth-child(2)").on("click", function() {
        $("#services img:nth-child(3)").attr("src", "https://s17404.pcdn.co/studio/wp-content/uploads/2018/05/header_1200x600-b-8d5f80-290x180.png");
    });

    $("#services img:nth-child(3)").on("click", function() {
        $("#services img:nth-child(1)").attr("src", "http://static.wixstatic.com/media/ce7ec0_6502fba5645049b6b867df63d0e7e8c4.png");
    }); */

$("#services img").eq(0).attr("src", "https://s17404.pcdn.co/studio/wp-content/uploads/2018/08/changelog-BlogImageTemplate_1400x400-july-290x180.png");
$("#services img").eq(1).attr("src", "https://s17404.pcdn.co/studio/wp-content/uploads/2018/05/header_1200x600-b-8d5f80-290x180.png")
$("#services img").eq(2).attr("src", "http://static.wixstatic.com/media/ce7ec0_6502fba5645049b6b867df63d0e7e8c4.png")

$("#services img").on("click", function() {
    let stockage = $("#services img").eq(0).attr("src");
    $("#services img").eq(0).attr("src", $("#services img").eq(2).attr("src"));
    $("#services img").eq(2).attr("src", $("#services img").eq(1).attr("src"));
    $("#services img").eq(1).attr("src", stockage);
})

/****** EXO7 *******/

/*     let imageBas = [
        "https://www.digitalthing.com.au/wp-content/uploads/DisplayAdvertising-290x180.jpg",
        "https://www.appdevelopmentcheltenham.co.uk/wp-content/uploads/2017/06/Logo-Artboard-5.jpg",
        "https://static.skillshare.com/assets/images/partnerships/partners/quirky.png"
    ];

    let imagesHaut = [
        "https://s17404.pcdn.co/studio/wp-content/uploads/2018/08/changelog-BlogImageTemplate_1400x400-july-290x180.png",
        "https://s17404.pcdn.co/studio/wp-content/uploads/2018/05/header_1200x600-b-8d5f80-290x180.png",
        "http://static.wixstatic.com/media/ce7ec0_6502fba5645049b6b867df63d0e7e8c4.png"
    ]

    let stock = $("#services img").eq(0).attr("src");
    $("#services a").mouseenter(function() {
        $("#services img").eq(0).attr("src", imageBas[0]);
        $("#services img").eq(1).attr("src", imageBas[1]);
        $("#services img").eq(2).attr("src", imageBas[2]);
    }) */

/**** CORRECTION ****/

let isOriginal = true;
let arrayOrigin = [];
$(".more").mouseenter(function() {
    //sauvegarde de l'état actuel
    if (isOriginal) {
        //marque la position des images

        arrayOrigin.push($("#services img").eq(0).attr("src")) //arrayOrigin[0]
        arrayOrigin.push($("#services img").eq(1).attr("src")) //arrayOrigin[1]
        arrayOrigin.push($("#services img").eq(2).attr("src")) //arrayOrigin[2]

        //change les anciennes par les nouvelles images
        $("#services img").eq(0).attr("src", "https://www.digitalthing.com.au/wp-content/uploads/DisplayAdvertising-290x180.jpg");
        $("#services img").eq(1).attr("src", "https://www.appdevelopmentcheltenham.co.uk/wp-content/uploads/2017/06/Logo-Artboard-5.jpg");
        $("#services img").eq(2).attr("src", "https://static.skillshare.com/assets/images/partnerships/partners/quirky.png");

    } else {

        //Fait revenir les images originelles
        $("#services img").eq(0).attr("src", arrayOrigin[0])
        $("#services img").eq(1).attr("src", arrayOrigin[1])
        $("#services img").eq(2).attr("src", arrayOrigin[2])

        arrayOrigin = [] //On vide le tableau et on recommence
        console.log("Vide");
    }

    isOriginal = (isOriginal) ? false : true;
    //false = nouvelles images
    //true = images originales
})
console.log(arrayOrigin);

/*************** EXO 8 **********************/

/* let isOpen = true;
$("form").on("submit", function(e) {
    e.preventDefault();
    let val = $("#textinput, #selectbasic, #selectmultiple, #textarea");
    if (isOpen && val.val().trim()) {
        val.val("")
        val.css("border-color", "green")
        console.log("ok")
    } else {
        val.val()
        val.css("border-color", "red")
        console.log("un des champs n\'a pas été saisi")
    }
    console.log(val);
    isOpen = (isOpen) ? false : true;

}) */
$("form").submit(function(e) {
    e.preventDefault();
    let isGood = true;
    let textinput = $("#textinput").val().trim();
    console.log(textinput);
    if (textinput.length < 1) {
        isGood = false;
        $("#textinput").css("border-color", "red");
        $("#textinputError").show();
    } else {
        $("#textinput").css("border-color", "green");
        $("#textinputError").hide();
    }

    let textarea = $("#textarea").val().trim();
    console.log(textarea);
    if (textarea.length < 1) {
        isGood = false;
        $("#textarea").css("border-color", "red");
    } else {
        $("#textarea").css("border-color", "green");
    }

    let selectbasic = $("#selectbasic").val();
    console.log(selectbasic);
    if (selectbasic.length < 1) {
        isGood = false;
        $("#selectbasic").css("border-color", "red");
    } else {
        $("#selectbasic").css("border-color", "green");
    }

    let selectmultiple = $("#selectmultiple").val();
    console.log(selectmultiple);
    if (selectmultiple.length < 1) {
        isGood = false;
        $("#selectmultiple").css("border-color", "red");
    } else {
        $("#selectmultiple").css("border-color", "green");
    }

    /*     if ($(isGood)) {
            let form = $("form").serialize();
            localStorage.setItem("data-form", 'form');
        } */

    if (isGood == true) {
        //localstorage / sessionstorage permet de sauvegarder des données dans le navigateur - les local sont conservés meme après la fermeture du navigateur - les sessions sont supprimer en cas de fermeture

        //Le serialize permet de récupérer toutes les données D'UN FORMULAIRE et les convertis en chaîne de caractère
        localStorage.setItem("data-zoubida", $("form").serialize());

        $(this).css("display", "none");
    }

    //let formValidation = textinput && textarea && selectbasic && selectmultiple;
    //formValidation = (formValidation) ? $("form").hide() : console.log("renseignez tous les champs");
})


$("#header > nav li").mouseenter(function() {
    /*     $(this).eq(0).addClass("animated ");
        console.log($(this).eq(1).addClass("animated pulse"));
        $(this).eq(2).addClass("animated fadeIn infinite");
        $(this).eq(3).addClass("animated zoomIn");
        $(this).eq(4).addClass("animated hinge"); */

    //comparer la balise li avec le tableau d'objet de li
    //console.log($(this)[0] === $("#header li").eq(0)[0])

    /*
     *$(this) renvoie un objet Jquery avec une taille (length) qui peut etre       considérer comme un array
     * $(this)[0] renvoie la balise click (ex : <li>...</li>)
     */
    switch ($(this)[0]) {
        case $("#header li").eq(0)[0]:
            console.log("Li 1");
            $(this).addClass("animated bounceOutLeft");
            break;

        case $("#header li").eq(1)[0]:
            console.log("Li 2");
            $(this).addClass("animated rotateIn slow infinite");
            break;

        case $("#header li").eq(2)[0]:
            console.log("Li 3");
            $(this).addClass("animated rotateInDownLeft slower infinite");
            break;

        case $("#header li").eq(3)[0]:
            console.log("Li 4");
            $(this).addClass("animated fadeIn slow infinite");
            break;

        case $("#header li").eq(4)[0]:
            console.log("Li 5");
            $(this).addClass("animated fadeOut infinite");
            break;

        default:
            console.log("Sorry");
    }
    /*
        if($(this)[0] === $("#header li").eq(0)[0]){
            $(this).addClass("animated bounceOutLeft");
        }else if($(this)[0] === $("#header li").eq(1)[0]){
            $(this).addClass("animated rotateIn slow infinite");
        }etc...
    
    
    */

})

$("#services h2").on("click", function() {
    /* let option = { opacity: 1, marginLeft: "0%", wordSpacing: "-=22px" }
    $(this).animate(option, 2500)  Autre façon d'écrire */

    /*
     * animate() permet d'effectuer des animations en Jquery
     * animate( JSON des options de l'animation, durée de l'animation, fonction anonyme une l'animation terminée)
     *  */

    $(this).animate({
        opacity: 0.5,
        marginLeft: "65%",
        wordSpacing: "+=22px"
    }, 2500, function() {
        $(this).animate({
            opacity: 1,
            marginLeft: "0%",
            wordSpacing: "-=22px"
        }, 2500)
    })
})


$("h1").click(function() {
    $(this).html('<a href="">Basic <span>88</span></a>');

    $("h1 span").animate({
        marginLeft: "+=314px"
    }, 2500, function() {
        $(this).animate({
            marginLeft: "-=314px"
        }, 2500)
    })

    /****** OU ******/

    /*     let animNumb = { wordSpacing: "+=314px" }
        $(this).animate(animNumb, 2500, function() {
            let animOrigin = { wordSpacing: "-=314px" }
            $(this).animate(animOrigin, 2500)
        }) */
})

$("#header h2").click(function() {
    /*
    *   A voir la correction
    *     let anim = [];
        console.log(anim = $(this).text().split(" "));

        let animP = anim[0] + " " + anim[1];
        let animS = anim[2] + " " + anim[3];
        console.log(animP)
        $(animP).animate({
            marginLeft: "+=100px"
        }, 2500)

        $(animS).animate({
            marginRight: "+=100px"
        }, 2500)
        console.log(animS) 
    *
    *   Vrai correction
    */

    $(this).html('<span class="first">FREE HTML5</span><span class="second" style="position:absolute;">Website Template</span>');

    $("#header h2 .first").animate({
        marginLeft: "+=310px"
    }, 2500, function() {
        $(this).animate({
            marginLeft: "-=310px"
        }, 2500)
    })

    $("#header h2 .second").animate({
        right: "+=310px"
    }, 2500, function() {
        $(this).animate({
            right: "-=310px"
        }, 2500)
    })




})