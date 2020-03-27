# PF & POO

**1.    Décrivez ce qu'est la programmation fonctionelle**

C'est un paradigme de la programmation de type **déclaratif**. Ce type de programmation est constitué de **fonctions**. Dans ce type de programmation, les fonctions sont reines. Le code est **organisé** et donc plus facile à débugger. Il existe des bibliotheques de fonctions que nous pouvons réutiliser, et ça nous évite de devoir coder des choses déjà existantes, que quelqu'un d'autre ou nous-même dans un autre projet avons fait. La fonction prend ce qu'on lui met en entrée pour changer ce qu'elle va rendre en sortie. Rien ne change en dehors de la fonction, elle est **pure** et ça nous évite les effets secondaires, s'il y a une erreur c'est dans la fonction, plus besoin de chercher ailleurs. Il y a également moins de code à changer lors d'une modif et tout se trouve au même endroit

- **Déclaratif** :
    On déclare ce que nous voulons voir via des fonctions
- **Pas de mutation** :
    Les valeurs ne changent pas en dehors de la fonction, si une valeur doit changer, ça se fait dans la fonction
- **Pure** :
     Elle retourne toujours la même chose avec les mêmes arguments. Ceci est lié au fait de ne pas muter les valeurs en dehors de la fonction. L'intérêt est d'avoir plus de contrôle sur notre programme. Quand nous utilisons une fonction, nous savons exactement ce qui va se passer puisqu'elle retourne toujours la même chose si on lui donne les mêmes arguments.


**2.    Décrivez ce qu'est la programmation orientée objets**

C'est un paradigme de programmation constitué d'objets. Il y a un programme principale qui communique entre les différents objets (`class`).

Chaque objet détermine un concept. On retranscrit le réel sous forme virtuelle par ces objets. Chaque objet contient:
    - un **constructeur**, avec l'état interne, les paramêtre qui constituent l'objet
    - différentes **méthodes** qui permettent de modifier cet état interne (paramêtres du constructeur).

Le programme principale qui sert de communication entre les différents objets et de type impératif.
Les méthodes ne sont **pas pure**, elles dépendent de l'état interne de l'objet, qui peut varier d'une fois à l'autre.