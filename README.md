# metamob-select-all
Utile lors de la création du compte, ce script permet d'ajouter automatiquement toutes les captures en tant que recherchées sur le site MetaMob.fr pour Dofus.

## Comment le faire fonctionner ?
- Accéder au site MetaMob.fr et allez dans la partie "Quête".
- Choisir l'étape "Toutes les étapes". 
Lien direct : https://metamob.fr/quete?monstre=&etape=0&possede=0&cherche=osef&propose=osef&type=osef&tri=etape&zone=osef
- Ouvrir la console développeur sur votre navigateur (F12, onglet "Console")
- Coller le code suivant, validez et laissez la magie faire.

```javascript
const dofus = document.querySelectorAll('.col-md-4.col-sm-6.col-xs-6');

for (const div of dofus) {
    const checkbox = div.querySelector('.label-rechprop.recherche');
    const monsterName = div.querySelector('.monstre-nom');
    checkbox.click();
    console.log("J'ai ajouté " + monsterName.textContent + " dans la liste des captures recherchées.");
    await new Promise(resolve => setTimeout(resolve, 500));
}
```

Un sleep de 0.5 secondes a été ajouté entre chaque clique afin de ne pas surcharger le site Metamob. Vous pouvez faire autre chose en attendant. ;)

*Script créé par FloriaanLry - 18/01/2023 - www.florianleroy.fr*
