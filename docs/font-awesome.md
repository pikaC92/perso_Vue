### Installation de Font-Awesome

```
npm i --save @fortawesome/vue-fontawesome@latest-2
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```



Dans le fichier index.scss: 

Import de la librairie Font Awesome
```
import { library } from '@fortawesome/fontawesome-svg-core'
```

Import du composant FontAwesomeIcon:
```
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
```

Lister ensuite la liste des icones à importer:
```
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
```
Ensuite ajouter cette icone dans la librairie de base
```
library.add(faUserSecret)
```

Dans le fichier html :
```
<font-awesome-icon icon="fa-solid fa-user-secret" />
```
