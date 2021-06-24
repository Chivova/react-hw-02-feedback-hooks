npx create-react-app .

npm install --save-dev prop-types https://www.npmjs.com/package/prop-types

Open your package.json and add a homepage field for your project: "homepage":
"https://myusername.github.io/my-app", npm install --save gh-pages "scripts": {
"predeploy": "npm run build", "deploy": "gh-pages -d build", npm run deploy
https://create-react-app.dev/docs/deployment#github-pages

.prettierrc.json --> ( { "printWidth": 80, "tabWidth": 2, "useTabs": false,
"semi": true, "singleQuote": true, "trailingComma": "all", "bracketSpacing":
true, "jsxBracketSameLine": false, "arrowParens": "avoid", "proseWrap": "always"
} ) .huskyrc--> ( { "hooks": { "pre-commit": "lint-staged" } } ) .lintstagedrc
--> ( { "src/**/\*.{json,css,scss,md}": ["prettier --write"],
"src/**/\*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"] } ) npm
install --save-dev prettier eslint { husky issue solved with a local
installation of mrm and mrm-task-lint-staged

npm install mrm mrm-task-lint-staged --save-dev npx mrm lint-staged npm
uninstall mrm mrm-task-lint-staged

but it's nice to have package-level fix }

npm install modern-normalize @import '/modern-normalize/modern-normalize.css';
https://www.npmjs.com/package/modern-normalize
