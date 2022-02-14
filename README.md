## Sujet

1. Ecrire une fonction qui permet de calculer la racine carrée d'un nombre.

exemple:

- pour le nombre est **4**, la fonction retournera **2**
- pour le nombre est **9**, la fonction retournera **3**

---

2. Ecrire une fonction qui permet de calculer le factoriel d'un nombre.

exemple:

- pour le nombre **0**, la fonction retournera **1**
- pour le nombre **3**, la fonction retournera **6**
- pour le nombre **4**, la fonction retournera **24**

---

3. Ecrire une fonction qui permet de savoir si un nombre est pair.

exemple:

- pour le nombre **2**, la fonction retournera **true**(qui veux dire vrai parce que le nombre 2 est pair)
- pour le nombre **3**, la fonction retournera **false**(qui veux dire faux parce que le nombre 3 est impair)

---

4. Ecrire une fonction qui permet de savoir si un nombre est premier.

exemple:

- pour le nombre **2**, la fonction retournera **true**(qui veux dire vrai parce que le nombre 2 premier)
- pour le nombre **3**, la fonction retournera **true**
- pour le nombre **4**, la fonction retournera **false**(qui veux dire faux parce que le nombre 4 n'est pas un nombre premier)

---

5. Ecrire une fonction qui permet d'afficher les éléments d'une liste à l'envers, utiliser la fonction natif `console.log` du javascript pour afficher les éléments.
   Vous pouvez soit utiliser le boucle `while` soit le boucle `for`

exemple:

- on a le liste [0, 1, 2, 3, 4], la fonction affichera 4, puis 3, puis 2, puis 1, puis 0

---

6. Ecrire une fonction qui permet de renverser une chaîne de caractère. **Il est interdit d'utiliser la fonction reverse() de JavaScript**

_astuce: une chaîne de caractère n'est juste qu'un liste de caractère_

exemple:

- pour le chaîne de caractère "akata" , la fonction retournera "ataka"
- pour le chaîne de caractère "goavana" , la fonction retournera anavaog"

---

7. Ecrire une fonction qui reçoit un table de hashage en argument et qui retourne la valeur du clé "pomme"

---

8. Ecrire une fonction qui reçoit un table de hashage en argument, change la valeur du clé "akata" en "goavana".

exemple:

- si on a le hash suivant:

```js
var hash = {
  akata: 1,
  autreCle: 2,
};
```

la fonction retournera

```js
{
  "akata": "goavana", // la valeur du clé "akata" est maintenat goavana
  "autreCle": 2
}
```

---

9. Ecrire une fonction qui permet de trouver le minimum depuis une liste. **Il est interdit d'utiliser la fonction Math.min() de JavaScript**

exemple:

- on a le liste [0, 1, 2, 3, 4], la fonction retournera 0
- on a le liste [88, 9, 2, 3] la fonction retournera 2

---

10. Ecrire une fonction qui permet de trouver le maximum depuis une liste. **Il est interdit d'utiliser la fonction Math.max() de JavaScript**

exemple:

- on a le liste [0, 1, 2, 3, 4], la fonction retournera 4
- on a le liste [88, 9, 2, 3] la fonction retournera 88

---

## Comment soumettre ma réponse?

1. Je clonerais le projet avec git dont le lien est https://github.com/Ialimijoro/formation-akata-algorithme.git
2. Je crée mon branche qui corresponds à mon nom à partir du branche **main**
3. Je change le fichier qui corresponds au numero de question, puis je commite ma réponse.
   exemple: si je réponds au première question, je compléterais le fichier 1.js
