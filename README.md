# Ambition
A simple performant and pure JavaScript project

# Performance

## Clusters
Used to run server on multiple nodes (increase performance)

## Web Workers
Used to boost frontend perf by using the multi-core functionality of the client (increase performance)

## Service Workers
Used to remember/reuse already fetched data (increase performance + support offline experiences)

# Running
- `npm start` -> Run the server with clusters
- `npm run single-start` -> Run a unique server

# To put Heroku in place
## Setup
- Install heroku with homebrew: `brew install heroku/brew/heroku`
- Login: `heroku login`
- Create project: `heroku create`

## Run remote
- Deploy code: `git push heroku master`
- Run one instance of the app: `heroku ps:scale web=1`
- Visit app at URL generated: `heroku open`
- To see the logs: `heroku logs --tail`
- Define command to start the app: Create a Procfile and add: `web: npm start`
- What is a dyno? -> a lightweight container that runs the app. To see them: `heroku ps`
Note: `heroku ps:scale web=0` means no dyno for the app -> error message when accessing URL
Note2: Scaling to more than 1 dyno needs account verification

## Run locally
- `npm install`
- Start locally: `heroku local web`

## Push local changes
- Do your changes
- Confirm it works locally: `heroku local`
- Commit: `git add . && git commit -m "Add cool face API"`
- Deploy: `git push heroku main`
- Check that it worked: `heroku open cool`

## Start a console
- To see how dynos work: `heroku run bash`
- You can now run what you want: `ls`; `ps`; `exit`
https://devcenter.heroku.com/articles/one-off-dynos

## Use config vars
- Add a code that uses env variable `process.env.TIMES`
- Locally you need an `.env` file containing `TIMES=2` for example
- Remotely you can add a variable with `heroku config:set TIMES=2` and check config with `heroku config`

## Stop remote app
- Curring running dynos: `heroku ps`
- Stopping the dynos listed, e.g.: `heroku ps:stop web.1`
Note: dynos inactive will autosleep after 1hour inactivity: https://blog.heroku.com/app_sleeping_on_heroku
