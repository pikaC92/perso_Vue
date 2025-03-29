### Import des fonts dans Bootstrap - VueJS

1. Télécharger la font: https://fonts.google.com/
2. Créer un dossier font dans assets: src/assets/fonts
3. Déposer les fonts téléchargées dans ce dossier

4. Import de la font : créer un fichier _fonts.scss dans src/assets/styles

```
@font-face {
  font-family: "<nom de la font (à utiliser en local)";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("<nom de la font>"), url("@/assets/fonts/Barlow-Regular.ttf");
}
```
local("nom de la font") => cette instruction permet de chercher la font dans le navigateur avant de la chercher en local (pour éviter le chargement)

5. Override de la font bootstrap par défaut: `$font-family-sans-serif`

Dans le fichier _custom-variables.scss: importer le fichier _fonts.scss
puis overrider la valeur (avant l'import bootstrap!)

Par exemple pour du Barlow:
```
$font-family-sans-serif:  Barlow, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
```

