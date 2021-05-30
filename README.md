
# Sheet Utils

- [Sheet Utils](#sheet-utils)
  - [Setup](#setup)
  - [Running the project](#running-the-project)
  - [File structure](#file-structure)

## Setup

1. Install clasp via `npm install -g @google/clasp`
2. Log into the apps script api via `clasp login`
3. Create a new project via `clasp create --title <yourtitle>`
4. Open the project in web browser viw `clasp open` 
5. Create a google cloud platform project, or use one you already have.
6. Make sure you have enabled the scripts api, google sheets api, and google drive api..
7. Copy the project id, and project number, both located on the cloud project dashboard.
8. Go to "Project Settings" > "Google Cloud Platform (GCP) Project" and change the project. Paste the project number that was previously copied.
9. Create new oauth2 credentials via the gcp console. Choose "desktop" as the oauth type, and download the credentials json file to your project directory & rename it to `creds.json`.
10. Then, log in locally (make sure you're already logged in globally) via `clasp login --creds creds.json` (if you named your credentials creds.json)
11. Now you should be able to push and run your project locally! (maybe I probably forgot something.)

## Running the project

For this particular project, you will need a `env.ts` file located in the root folder of your projcet that looks something like this...

```
const env = {MAIN_SPREADSHEET_ID : "your-spreadsheet-id"};
```


I provided several scripts.
`npm run dev` will push your code and run the project remotely.
`npm run logger` will watch the STACKDRIVER logger and print to stdout.
`npm run config` will log in gloablly (requires oauth consent), and then locally, which requires the same thing.

## File structure
```
.
├── App.ts
├── README.md
├── appsscript.json
├── creds.json
├── env.ts
├── node_modules
├── package-lock.json
├── package.json
├── sheetutils.code-workspace
└── tsconfig.json
```