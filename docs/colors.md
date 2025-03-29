## Personnaliser le theme-color Bootstrap

Dans le dossier src/assets/styles créer un fichier `_custom_variables.scss`

```
$primary: #002454;
$secondary: #e3001b;


$theme-colors: (
        "primary": $primary,
        "secondary": $secondary
);

@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import "node_modules/bootstrap-vue/src/index.scss";
```

Override des couleurs individuelles puis override du theme-colors.
Les fichiers bootstrap et bootstrap-vue doivent être importés après.

Ensuite importer le fichier `_custom_variables.scss` dans le ficher src/styles/index.scss (fichier scss principal de l'application)

```
@import "custom_variables";
```

