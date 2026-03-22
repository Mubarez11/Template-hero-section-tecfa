# Lancer la page

## Methode stable

Sur cette machine, la methode la plus fiable est de lancer l'application en mode production local plutot qu'avec `npm run dev`.

Utilise toujours une de ces deux methodes depuis le dossier du projet :

### Option 1 - commande npm

```bash
cd C:\Users\moham\Desktop\gpu\gpu-2
npm run start:stable
```

### Option 2 - double-clic

Lance directement :

```text
lancer-page.bat
```

### Methode detaillee

```bash
cd C:\Users\moham\Desktop\gpu\gpu-2
npm run build
npx next start -p 3010
```

Puis ouvre :

```text
http://localhost:3010
```

## Pourquoi cette methode

- `npm run dev` peut declencher un chargement infini ou une erreur Turbopack
- `npm run start:stable` automatise `build` + `next start`
- le port `3010` evite les conflits avec d'autres projets deja ouverts
- `lancer-page.bat` permet de lancer la page sans retaper les commandes

## Routine apres chaque modification

1. Arreter le serveur en cours avec `Ctrl+C`
2. Relancer `npm run start:stable` ou double-cliquer sur `lancer-page.bat`
3. Reouvrir `http://localhost:3010`

## Si le port 3010 est deja pris

Trouve le PID :

```bash
netstat -ano | findstr :3010
```

Puis ferme le processus :

```bash
taskkill //PID <PID> //F
```

Ensuite relance :

```bash
npx next start -p 3010
```
