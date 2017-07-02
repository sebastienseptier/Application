# Manuel d'installation

## Intro ##

Le projet utilise la librairie open-source [React Native](https://facebook.github.io/react-native/), qui permet d'utiliser React pour le développement d'application iOS et android.
L'interêt :
* React utilise que du javaScript, et utilise un DOM virtuel pour ne pas devoir recharger complètement le DOM et charger uniquement le contenu nécessaire.
* Code facilement maintenable : l'application fonctionne par components donc chaque morceaux fonctionne indépendemment les uns des autres.
* Un même code pour iOS et android.
* Pas besoin d'IDE (Integrated Development Environment) comme Android Studio ou Xcode pour développer.
* Pas besoin de rebuilder le projet à chaque modification.

## Environnement à installer ##

#### [ Git ] pour le versioning et apporter les modifications au projet : [Télécharger](https://git-scm.com/) ####

Une fois installé il faut lancer l'application 'Git Bash' et configurer git avec les commandes suivantes:
```
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

#### [ Node.js ] pour avoir un serveur qui interprète le code javaScript de l'application : [Télécharger](https://nodejs.org/en/) ####
Une fois installé il faut ensuite lancer l'application 'Node.js Command Prompt' et installer l'environnement react-native:

```
$ npm install -g create-react-native-app
$ create-react-native-app Myfirstapp
$ cd Myfirstapp/
```
Retourner sur la console de 'Git Bash' pour lancer
```
$ cd Myfirstapp/
$ git init
```
Puis taper cette commande pour récupèrer le projet et le lancer:
```
$ git clone https://github.com/sebastienseptier/Myfirstapp
$ npm start
```
Un QR-code devrait s'afficher dans la console pour permettre à un téléphone d'accèder à l'application. 

## Débugage ##

React-native permet de ne pas devoir attendre 10min à chaque rebuild du projet, un moyen de voir directement le projet en marche est d'utiliser l'application mobile 'Expo' qui sert de client à notre serveur : [https://expo.io/](https://expo.io/).
Chaque modification du code entraîne un rafraichissement direct sur le télépone, et cela fonctionne sur iOS et android.

## Documentation ##
* Git : [https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
* Commandes git : [https://gist.github.com/aquelito/8596717](https://gist.github.com/aquelito/8596717)
* Node.js : [https://facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html)
* (Pour plus tard) Serveur de base de données pour l'application : [https://firebase.google.com/](https://firebase.google.com/)

## Commandes utiles ##
Vérifier l'état de mise à jour du projet parent :
```
$ git status
```
Pour créer un commit :
```
//Si c'est la premiere fois, ajouter le projet cible :
$ git remote add origin https://github.com/sebastienseptier/Myfirstapp.git
$ git add <nomDuFichier> 
$ git commit -m "raisonDeLaNouvelleMiseAJour"
$ git push origin master
```