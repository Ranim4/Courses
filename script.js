let panier = [];
let copie = [];

function ajouter() {
    // lecture des champs input 
    let item = document.querySelector('#item').value;
    document.querySelector('#item').value = ''; // on vide les champ input
    let fruit = {}; // je crée un objet
    fruit.item = item;
    fruit.statut = false;
    // je stocke ds le tableau
    panier.push(fruit);
    copie.push(fruit);
    console.log(panier);
    afficherTableau();
}
function afficherTableau() {
    let template = document.querySelector('#template');
    let tbody = document.querySelector('#table');
    tbody.innerHTML = ''; // vider le tableau HTML
    for (let i = 0; i < panier.length; i++) {
        let tr = template.content.cloneNode(true);
        let td = tr.querySelectorAll('td');
        if (panier[i].statut) {
            td[0].innerHTML = panier[i].item.strike();
        }
        else {
            td[0].innerHTML = panier[i].item;
        }
        // je met le selecteur sur le btn effacer
        let btnDelete = tr.querySelector('.btn-danger');
        btnDelete.onclick = function () {
            let i = btnDelete.parentElement.parentElement.rowIndex - 1;
            console.log(i);
            panier.splice(i, 1);
            copie.splice(i, 1);
            this.parentElement.parentElement.remove();
            afficherTableau();
        }
        let btnModif = tr.querySelector('.btn-primary');
        if (panier[i].statut) {
            tr.querySelector('tr').setAttribute('class', 'table-danger');
        }
        else {
            tr.querySelector('tr').setAttribute('class', '')
        }
        btnModif.onclick = function () {
            if (panier[i].statut) {
                panier[i].statut = false;
            }
            else {
                panier[i].statut = true;

            }
            afficherTableau();
        }

        tbody.appendChild(tr);
    }

    console.log(panier);

}
