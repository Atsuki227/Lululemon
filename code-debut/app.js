// 1. Modélisation des données
var tailles = [0, 2, 4, 6];

var pantalonA = {
    couleur: "darkLavande",
    imageSrc: "images/pantalon-lavande.png",
    imageAlt: "Pantalon Lululemon Femme Dark Lavande",
    taillesDispo: [4, 6]
};

var pantalonB = {
    couleur: "trueNavy",
    imageSrc: "images/pantalon-truenavy.png",
    imageAlt: "Pantalon Lululemon Femme True Navy",
    taillesDispo: [0]
};

var pantalonC = {
    couleur: "rhinoGrey",
    imageSrc: "images/pantalon-rhinogrey.png",
    imageAlt: "Pantalon Lululemon Femme Rhino Grey",
    taillesDispo: [0, 2, 4, 6]
};

var pantalonD = {
    couleur: "carbonDust",
    imageSrc: "images/pantalon-carbondust.png",
    imageAlt: "Pantalon Lululemon Femme Carbon Dust",
    taillesDispo: [2, 6]
};

var pantalons = [
    pantalonA,
    pantalonB,
    pantalonC,
    pantalonD,
];

var couleurs = ["darkLavande", "trueNavy", "rhinoGrey", "carbonDust"];

// 2. Génération dynamique de l'état initial

// 2.1 État initial : afficher l'image pantalon Dark Lavande
$("#image-produit").html("");
var contenuImage = '<img src="' + pantalons[0]["imageSrc"] + '"';
contenuImage = contenuImage + 'alt="' + pantalons[0]["imageAlt"] + '"';
contenuImage = contenuImage + 'class="img-fluid">';
$("#image-produit").append(contenuImage);

// 2.2.1 État initial : afficher la sélection de la couleur Dark Lavande
for (var i = 0; i < couleurs.length; i = i + 1) {
    $("#boutonsCouleur").append(('<button type="button" class="btn btn-filtre-couleur btn-' + couleurs[i] + '" data-couleur="' + i + '"></button>'));
}

// Générer les boutons de taille pour la couleur initiale (Dark Lavande)
$("#boutonsTaille").html("");

    for (var i = 0; i < tailles.length; i++) {
        var isTailleDispo = pantalons[0]["taillesDispo"].includes(tailles[i]);
        var classeBouton = isTailleDispo ? 'btn-outline-dark' : 'btn-outline-secondary unavailable'; // Ajout de la classe "unavailable" si la taille n'est pas disponible

        var contenuBoutonTaille = '<button type="button" class="btn ' + classeBouton + ' btn-filtre-taille btn-taille-' + tailles[i] + '" data-taille="' + tailles[i] + '">' + tailles[i] + '</button>';
        $("#boutonsTaille").append(contenuBoutonTaille);
    }

    var nomCouleur = '';

    var couleurSelectionnee = pantalons[0]["couleur"];

    if (couleurSelectionnee === 'darkLavande') {
        nomCouleur = 'Dark Lavande';
    } else if (couleurSelectionnee === 'rhinoGrey') {
        nomCouleur = 'Rhino Grey';
    } else if (couleurSelectionnee === 'carbonDust') {
        nomCouleur = 'Carbon Dust';
    } else if (couleurSelectionnee === 'trueNavy') {
        nomCouleur = 'True Navy';
    } else {
        nomCouleur = '';
    }

    $(".optionCouleurSelectionee").html(nomCouleur);

    $(document).on('click', '.btn-filtre-taille', function () {
        tailleId = $(this).data("taille");
        $(".optionTailleSelectionee").html(tailleId);
        for (var i = 0; i < couleurs.length; i++) {
            var isCouleurDispo = false;
    
            for (var j = 0; j < pantalons.length; j++) {
                if (pantalons[j]["couleur"] === couleurs[i] && pantalons[j]["taillesDispo"].includes(parseInt(tailleId))) {
                    isCouleurDispo = true;
                    break;
                }
            }
    
            var classeBouton = isCouleurDispo ? 'btn-border-select' : 'btn-border-none';
    
            $('.btn-filtre-couleur.btn-' + couleurs[i]).removeClass("btn-border-select btn-border-none");
            $('.btn-filtre-couleur.btn-' + couleurs[i]).addClass(classeBouton);
        }
    });
$("#boutonsTaille").html("");

for (var i = 0; i < tailles.length; i++) {
    var isTailleDispo = pantalons[0]["taillesDispo"].includes(tailles[i]);
    var classeBouton = isTailleDispo ? 'btn-outline-dark' : 'btn-outline-secondary';

    var contenuBoutonTaille = '<button type="button" class="btn ' + classeBouton + ' btn-filtre-taille btn-taille-' + tailles[i] + '" data-taille="' + tailles[i] + '">' + tailles[i] + '</button>';
    $("#boutonsTaille").append(contenuBoutonTaille);
}

var nomCouleur = '';

var couleurSelectionnee = pantalons[0]["couleur"];

if (couleurSelectionnee === 'darkLavande') {
    nomCouleur = 'Dark Lavande';
} else if (couleurSelectionnee === 'rhinoGrey') {
    nomCouleur = 'Rhino Grey';
} else if (couleurSelectionnee === 'carbonDust') {
    nomCouleur = 'Carbon Dust';
} else if (couleurSelectionnee === 'trueNavy') {
    nomCouleur = 'True Navy';
} else {
    nomCouleur = '';
}

$(".optionCouleurSelectionee").html(nomCouleur);

$(document).on('click', '.btn-filtre-taille', function () {
    tailleId = $(this).data("taille");
    $(".optionTailleSelectionee").html(tailleId);
    for (var i = 0; i < couleurs.length; i++) {
        var isCouleurDispo = false;

        for (var j = 0; j < pantalons.length; j++) {
            if (pantalons[j]["couleur"] === couleurs[i] && pantalons[j]["taillesDispo"].includes(parseInt(tailleId))) {
                isCouleurDispo = true;
                break;
            }
        }

        var classeBouton = isCouleurDispo ? 'btn-border-select' : 'btn-border-none';

        $('.btn-filtre-couleur.btn-' + couleurs[i]).removeClass("btn-border-select btn-border-none");
        $('.btn-filtre-couleur.btn-' + couleurs[i]).addClass(classeBouton);
    }
});

// 2.2.2 État initial : afficher la couleur sélectionnée Dark Lavande
$('.btn-' + couleurs[0]).removeClass("btn-border-none");
$('.btn-' + couleurs[0]).addClass("btn-border-select");

$('.btn-darkLavande').addClass('active');

// 2.2.3 État initial : afficher la couleur sélectionnée Dark Lavande
var couleurInitiale = pantalons[0]["couleur"];
var nomCouleurInitiale = '';

if (couleurInitiale === 'darkLavande') {
    nomCouleurInitiale = 'Dark Lavande';
}

$(".optionCouleurSelectionee").html(nomCouleurInitiale);

// 3. Algorithmes dynamiques pour donner de l’interactivité à la page
var tailleId = '';
var couleurId = 0;


var panier = []; // Tableau pour stocker les articles ajoutés au panier

// Fonction pour ajouter un article au panier
function ajouterAuPanier(couleur, taille) {
    panier.push({ couleur: couleur, taille: taille });
    console.log("Article ajouté au panier : Couleur - " + couleur + ", Taille - " + taille);
    console.log("Contenu du panier :", panier);
}


// 3.1 Événement clique sur un bouton couleur
$('.btn-filtre-couleur').on('click', function () {
    couleurId = $(this).data("couleur");

    // Afficher la couleur du pantalon dans la console
    console.log("Couleur du pantalon : " + pantalons[couleurId]["couleur"]);

    // Mettre à jour l'image
    $("#image-produit").html("");
    var contenuImage = '<img src="' + pantalons[couleurId]["imageSrc"] + '"';
    contenuImage = contenuImage + 'alt="' + pantalons[couleurId]["imageAlt"] + '"';
    contenuImage = contenuImage + 'class="img-fluid">';
    $("#image-produit").append(contenuImage);

    // Mettre à jour la couleur sélectionnée
    $(".optionCouleurSelectionee").html(pantalons[couleurId]["couleur"]);

    // Réinitialiser les bordures des boutons couleur
    $('.btn-filtre-couleur').removeClass("btn-border-select btn-border-none");
    $('.btn-filtre-couleur').addClass("btn-border-none");

    // Appliquer la bordure à la couleur sélectionnée
    $(this).addClass("btn-border-select");

    // Mettre à jour les boutons de taille en fonction de la nouvelle couleur sélectionnée
    $("#boutonsTaille").html("");

    for (var i = 0; i < tailles.length; i++) {
        var isTailleDispo = pantalons[couleurId]["taillesDispo"].includes(tailles[i]);
        var classeBouton = isTailleDispo ? 'btn-outline-dark' : 'btn-outline-secondary unavailable'; // Ajout de la classe "unavailable" si la taille n'est pas disponible

        var contenuBoutonTaille = '<button type="button" class="btn ' + classeBouton + ' btn-filtre-taille btn-taille-' + tailles[i] + '" data-taille="' + tailles[i] + '">' + tailles[i] + '</button>';
        $("#boutonsTaille").append(contenuBoutonTaille);
    }

    var nomCouleur = '';

    var couleurSelectionnee = pantalons[couleurId]["couleur"];

    if (couleurSelectionnee === 'darkLavande') {
        nomCouleur = 'Dark Lavande';
    } else if (couleurSelectionnee === 'rhinoGrey') {
        nomCouleur = 'Rhino Grey';
    } else if (couleurSelectionnee === 'carbonDust') {
        nomCouleur = 'Carbon Dust';
    } else if (couleurSelectionnee === 'trueNavy') {
        nomCouleur = 'True Navy';
    } else {
        nomCouleur = '';
    }

    $(".optionCouleurSelectionee").html(nomCouleur);

    $(document).on('click', '.btn-filtre-taille', function () {
        tailleId = $(this).data("taille");
        $(".optionTailleSelectionee").html(tailleId);
        for (var i = 0; i < couleurs.length; i++) {
            var isCouleurDispo = false;
    
            for (var j = 0; j < pantalons.length; j++) {
                if (pantalons[j]["couleur"] === couleurs[i] && pantalons[j]["taillesDispo"].includes(parseInt(tailleId))) {
                    isCouleurDispo = true;
                    break;
                }
            }
    
            var classeBouton = isCouleurDispo ? 'btn-border-select' : 'btn-border-none';
    
            $('.btn-filtre-couleur.btn-' + couleurs[i]).removeClass("btn-border-select btn-border-none");
            $('.btn-filtre-couleur.btn-' + couleurs[i]).addClass(classeBouton);
        }
    });

    // 3.1 Événement clique sur un bouton couleur
$('.btn-filtre-couleur').on('click', function () {
    // ...

    // Réinitialiser les bordures des boutons couleur
    $('.btn-filtre-couleur').removeClass("btn-border-select btn-border-none active"); // Ajout de la classe "active"
    $('.btn-filtre-couleur').addClass("btn-border-none");

    // Appliquer la bordure à la couleur sélectionnée
    $(this).addClass("btn-border-select active");

    // Mettre à jour les boutons de taille en fonction de la nouvelle couleur sélectionnée
    $("#boutonsTaille").html("");

    for (var i = 0; i < tailles.length; i++) {
        var isTailleDispo = pantalons[couleurId]["taillesDispo"].includes(tailles[i]);
        var classeBouton = isTailleDispo ? 'btn-outline-dark' : 'btn-outline-secondary unavailable'; // Ajout de la classe "unavailable" si la taille n'est pas disponible

        var contenuBoutonTaille = '<button type="button" class="btn ' + classeBouton + ' btn-filtre-taille btn-taille-' + tailles[i] + '" data-taille="' + tailles[i] + '">' + tailles[i] + '</button>';
        $("#boutonsTaille").append(contenuBoutonTaille);
    }

    var nomCouleur = '';

    var couleurSelectionnee = pantalons[couleurId]["couleur"];

    if (couleurSelectionnee === 'darkLavande') {
        nomCouleur = 'Dark Lavande';
    } else if (couleurSelectionnee === 'rhinoGrey') {
        nomCouleur = 'Rhino Grey';
    } else if (couleurSelectionnee === 'carbonDust') {
        nomCouleur = 'Carbon Dust';
    } else if (couleurSelectionnee === 'trueNavy') {
        nomCouleur = 'True Navy';
    } else {
        nomCouleur = '';
    }

    $(".optionCouleurSelectionee").html(nomCouleur);

    $(document).on('click', '.btn-filtre-taille', function () {
        tailleId = $(this).data("taille");
        $(".optionTailleSelectionee").html(tailleId);
        for (var i = 0; i < couleurs.length; i++) {
            var isCouleurDispo = false;
    
            for (var j = 0; j < pantalons.length; j++) {
                if (pantalons[j]["couleur"] === couleurs[i] && pantalons[j]["taillesDispo"].includes(parseInt(tailleId))) {
                    isCouleurDispo = true;
                    break;
                }
            }
    
            var classeBouton = isCouleurDispo ? 'btn-border-select' : 'btn-border-none';
    
            $('.btn-filtre-couleur.btn-' + couleurs[i]).removeClass("btn-border-select btn-border-none");
            $('.btn-filtre-couleur.btn-' + couleurs[i]).addClass(classeBouton);
        }
    });
});

});

// 3.2 Événement clique sur un bouton taille
$(document).on('click', '.btn-filtre-taille', function () {
    tailleId = $(this).data("taille");

    // Afficher la taille du pantalon dans la console
    console.log("Taille du pantalon : " + tailleId);

    $(".optionTailleSelectionee").html(tailleId);
    for (var i = 0; i < couleurs.length; i++) {
        var isCouleurDispo = false;

        for (var j = 0; j < pantalons.length; j++) {
            if (pantalons[j]["couleur"] === couleurs[i] && pantalons[j]["taillesDispo"].includes(parseInt(tailleId))) {
                isCouleurDispo = true;
                break;
            }
        }

        var classeBouton = isCouleurDispo ? 'btn-border-select' : 'btn-border-none';

        $('.btn-filtre-couleur.btn-' + couleurs[i]).removeClass("btn-border-select btn-border-none");
        $('.btn-filtre-couleur.btn-' + couleurs[i]).addClass(classeBouton);
    }
});

//3.3 Actions lorsqu'il y a un click sur le bouton ajout au panier
// Gestionnaire d'événements pour le clic sur le bouton "Ajouter au panier"
    $('#bouton-ajout').on('click', function () {
    // / Message d'avertissement si une taille n'est pas sélectionné
    if (tailleId === '') {
        $(".optionTailleSelectionee").html('<div class="alert alert-warning" role="alert"> Veuillez sélectionner une taille.</div>');
    }
    // Taille sélectionnée, ajouter au panier
    else {
        console.log("Produit ajouté au panier : Couleur - " + couleurs[couleurId] + ", Taille - " + tailleId);
       }
});