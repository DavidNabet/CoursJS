$(document).ready(function() {

    let personne = {
        nom: "Black",
        prenom: "Jack",
        date_naiss: "28 april 1996",
        children: [{
                nom: "Black",
                prenom: "Jack Jr.",
                date_naiss: "22 match 1995",
                children: []
            },
            {
                nom: "Black",
                prenom: "Sam",
                date_naiss: "22 june 1998"
            }
        ],
        age: function() {
            //Générer une date à partir d'une date ultérieur (date_naiss)
            let anniversaire = new Date(this.date_naiss);
            //getTime() -> millisecondes depuis le 1er janvier 1970 (heure unix)
            return new Number((new Date().getTime() - anniversaire.getTime()) / 31536000000).toFixed(0) //arrondis en entier
                //retournez un nombre ( (la date d'aujourd'hui en millisecondes - date_naiss en millisecondes)/ une année en millisecondes )
                //sa marche aussi avec des minutes, des heures, ou bien des ANNEES
        }
    }
    console.log(personne);
    console.log(personne.age());


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


});