This project is a personal website for Darius Gourdine. Designed by Melchor Dominguez.

## Check out the Deployment Site

This project is readily available to view at https://www.dariusbgourdineaudio.com/

## Deployment Process

The deployment process is done automatically by the .github/workflows/intergrate.yml file using GitHub Actions.

## Run the website locally

### Step 1: Clone the project

```sh
git clone https://github.com/melchord/melchord.github.io
cd melchord.github.io/
```

### Step 2: Instal npm dependencies

```sh
cd src/
npm i
```

### Step 3: Build and run dev

```sh
npm run build
npm run dev
```

This starts up the local website on http://localhost:3000. As you make changes, the site freshes automatically in your browser. No need to Ctrl+C!.