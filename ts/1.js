var abcd;
(function (abcd) {
    abcd[abcd["<b>Amazon Advertising</b><br> Trova, attira e coinvolgi i clienti"] = 0] = "<b>Amazon Advertising</b><br> Trova, attira e coinvolgi i clienti";
    abcd[abcd["<b>Amazon Music</b><br> Streaming di milioni dicanzoni"] = 1] = "<b>Amazon Music</b><br> Streaming di milioni dicanzoni";
    abcd[abcd["<b>AbeBooks</b><br> Libri, arte<br> e articoli da collezione"] = 2] = "<b>AbeBooks</b><br> Libri, arte<br> e articoli da collezione";
    abcd[abcd["<b>Audible</b><br> Download Audiolibri"] = 3] = "<b>Audible</b><br> Download Audiolibri";
    abcd[abcd["<b>Amazon Web Services </b><br> Servizi Cloud <br> Scalabili"] = 4] = "<b>Amazon Web Services </b><br> Servizi Cloud <br> Scalabili";
    abcd[abcd["<b>Amazon Seconda mano </b><br> I nostri prodotti usati e come nuovi"] = 5] = "<b>Amazon Seconda mano </b><br> I nostri prodotti usati e come nuovi";
    abcd[abcd["<b>Kindle Direct Publishing </b><br>Pubblica i tuoi libri in formato elettronico"] = 6] = "<b>Kindle Direct Publishing </b><br>Pubblica i tuoi libri in formato elettronico";
    abcd[abcd["<b>Shopbop </b><br> Designer, Marche, Fashion e stile"] = 7] = "<b>Shopbop </b><br> Designer, Marche, Fashion e stile";
    abcd[abcd["<b>Amazon Business </b><br> Servizio per clienti business"] = 8] = "<b>Amazon Business </b><br> Servizio per clienti business";
})(abcd || (abcd = {}));
var dialog = document.querySelector(".container-4-component-3 dialog");
var container4component3 = document.getElementsByClassName("container-4-component-3")[0];
var component4Dialog = /** @class */ (function () {
    function component4Dialog(dialog, containerelement) {
        this.dialog = dialog;
        this.containerelement = containerelement;
    }
    component4Dialog.prototype.add = function () {
        for (var i = 0; i < 9; i++) {
            var a = abcd[i];
            var b = document.createElement("p");
            b.innerHTML = a;
            this.dialog.appendChild(b);
            this.dialog.classList.add("component4Dialog");
        }
    };
    return component4Dialog;
}());
var create = new component4Dialog(dialog, container4component3);
create.add();
