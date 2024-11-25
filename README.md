## Getting Started
First clone the project from Gitlab with command (git clone ........)
Then open the project in VS code or Webstorm . in the terminal run the commands below :
First, run the development server:
1. git flow init (this command initiate gitflow and show the structured I have designed). notice that you will be asked some question , just push enter key all and go.
2. npm i (for installing all the dependencies you need)

now you can start . first you need to create a new feature ,so you can work on you're own feature without interrupting and effect on develop.
for creating new feature and work on it run the command `git flow feature start <YOU'RE_FEATURE_NAME>` . after any changes run the commands (git add .) and (git commit -m "")
finally, for publishing you're feature run (git flow publish) automatically publish you're own feature.

## Run Developer Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```