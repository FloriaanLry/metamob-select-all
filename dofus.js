const dofus = document.querySelectorAll('.col-md-4.col-sm-6.col-xs-6');

for (const div of dofus) {
    const checkbox = div.querySelector('.label-rechprop.recherche');
    const monsterName = div.querySelector('.monstre-nom');
    checkbox.click();
    console.log("J'ai ajouté " + monsterName.textContent + " dans la liste des captures recherchées.");
    await new Promise(resolve => setTimeout(resolve, 500));
}
