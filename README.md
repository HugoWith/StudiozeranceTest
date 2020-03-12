# studiozerancetest

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# StudiozeranceTest

___________________________________________________________________________

Hello, 
Voici donc le ReadMe qui fait suite au test front. 😊

# LANCER L’APP
J’ai pris le partie de faire une App avec une base de VueJS. Ce choix est à la fois un bon choix pour moi, mais il s’est avéré qu’il avait aussi des inconvénients que je détaillerai par la suite. 

-Installer Npm
-npm i > pour installer les dépendances
-npm install -g @vue/cli > pour initier vueJS
-npm run serve > pour lancer le server

L’app est plutôt a regarder en 80% de l’écran, pour le confort visuel

# POURQUOI VUEJS

Les plus:
J’ai choisi d’utiliser VueJS en premier lieu, car je voulais organiser mes fichiers en différents composants avec chacun du CSS propre ainsi qu’un CSS global pour garder mon code DRY au maximum.
Je pensais honnêtement utiliser beaucoup plus de JS et cela m’aurait permis de simplifier le process. 

Les moins: 
Je n’ai quasiment pas utilisé de JS donc j’aurai tout à fais pu me contenter de Vanilla JS sans passer par un Framework. 
En ayant utilisé VueJS avec des composants je n’ai pas pu réaliser le smoothScroll demandé, car je n’ai pas utilisé le Router dès le départ … (J’ai utilisé le SmoothScroll dans mon portfolio via une Lib en Vanilla JS, ce que j’aurai plutôt dû utiliser après coup)

# NAVBAR 

Temps passé : 25mn 
Pas de soucis particuliers rencontrés sur cette étape. 
J’ai passé le logo de SZ en background pour pouvoir l’utiliser dans la longueur au-dessus d’un autre component. 
Pour le mobile j’ai utilisé des Media Query pour une taille inférieure à 600px. (Pour un client je détaillerai plus pour optimiser la version mobile au maximum). 
J’ai décidé de cacher les menus, pour un client j’aurais peut-être utilisé un Hamburger.

# SECTION2 > Landing page 

Temps passé: 20mn 
Encore une fois pas de difficulté particulière. 

# SECTION3 > Portfolio

Temps passé: 30mn 
Pas de difficulté particulière, car j’ai utilisé CSS Grid pour le placement des Logo avec une adaptation pour le mobile

# SLIDER 
Temps passé: 1h 
Un peu plus long, car j’ai essayé 3 lib différentes… J’ai finalement trouvé une lib qui convenait pour ce genre de “Carousel”. 
Quelques difficultés pour personnaliser les détails de la librairy, type Arrow, il manque le Hover dessus.
Le placement du cadre n’a pas été un problème. 
Pour la partie mobile, un peu plus compliquée, mais en jouant avec la lib et les Media Query je suis arrivé à un résultat convenable.

# FOOTER
Temps passé: 1h
Pour le footer et son animation en pur CSS j’ai utilisé des @Keyframe en modifiant la zone de texte de la droite vers la gauche. 
Le footer n’est également pas parfait il y’a un léger décalage de l’animation. 

# BILAN
Je m’étais donné entre 4 et 5h pour réaliser cette Homepage. J’ai mis un peu plus de temps avec quelques manques:

-Les ancres au click sur le menu de la navbar pour un smoothScroll (c’est de ma faute j’aurais du utiliser du VanillaJS ou le router de VueJS)
-la personnalisation de la flèche du carrousel 
-Le rendu Mobile pourrait être plus optimisé. J’aurais pu utiliser Bootstrap pour utiliser des classes rapides de taille d’écran. 
-La police est une GoogleFont, mais pour l’intégrer en local j’aurai utilisé @Fontface 😊
-Il faut noter qu’il y’a eu un long travail de préparation de l’application avec les images exportées de Photoshop ainsi que le choix de la stack qui avec un peu de recul aurait pu être plus optimale. 

Temps total: environ 5h 

Pour le reste pas de difficulté je me suis bien éclaté à faire ce test, en plus je trouve votre Home et le ton du site canon donc ça aide 😊.
Je suis assez curieux de savoir quelle animation CSS vous avez utilisé dans le bandeau.
Je me suis amusé à mettre la Home en Prod avec Firebase (Voilà une utilité d’avoir utilisé vue…). 
Voici l’adresse: https://studiozerancecopycat.firebaseapp.com/   
