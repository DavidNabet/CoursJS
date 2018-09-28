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
});