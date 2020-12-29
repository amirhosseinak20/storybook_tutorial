<!-- markdownlint-disable line-length -->

# iAPP React Framework

This is a [framework](https://en.wikipedia.org/wiki/Software_framework) for developing iApp.

**Note:** Node v12+ is required for this project
**Note:** This project uses [yarn v2](https://yarnpkg.com/) for package management and zero-install

## Structure

The project will have a number of files and folders that make up the structure of our application.

| File/Folder | Purpose |
| ----------- | ------- |
| .git/ | contains git files|
| .pnp/ | contains files related to [Plug'n'Play](https://yarnpkg.com/features/pnp)
| .storybook/ | contains [storybook configs](https://storybook.js.org/docs/react/configure/overview) |
| .yarn/ | contain files related to yarn |
| node_modules/ | contains node modules |
| public/ | contains static templates such as manifest.json, favicon, ... |
| scripts/ | contains custom scripts that used to generate new components, controllers, views, ...|
| src/ | contains app main dev files, everything you develop will goes here |
| storybook/ | contains files for [storybook](https://storybook.js.org/) |
| test/ | contains test files |
| .env | environment variables |
| .env.example | environment variables example |
| .eslintrc.js | [eslint configs and roles](https://eslint.org/docs/developer-guide/shareable-configs) |
| .gitignore | This file tells git which files (or patterns) it should ignore. See [GitHub - Ignoring files](https://help.github.com/articles/ignoring-files) for more info about ignoring files. |
| .pnp.js | This is pnp lock file |
| .yarnrc.yml | [yarn configs](https://yarnpkg.com/configuration/manifest) |
| craco.config.js | configs for [craco](https://github.com/gsoft-inc/craco) |
| package.json | This file allows you to specify what npm dependencies are needed for your Rails application. This file is used by Yarn. For more information about Yarn, see the [Yarn website](Yarn website). |
| README.md | This is a brief instruction manual for your application. |
| yarn.lock | yarn lock file |

**Note:** Most node modules are used from .yarn/ but there some needs to be (unplugged) [https://yarnpkg.com/cli/unplug]
**Node:** .env file may not exist if you recently cloned project you can copy .env.example and rename it to .env and put right values in there

## Scripts

to build project dependencies run

```sh
yarn install
```

to start development server run

```sh
yarn start
```

to build project for production run

```sh
yarn build
```

to run storybook server run

```sh
yarn storybook
```

to publish a static version of storybook run

```sh
yarn run build-storybook
```

### TODOs

- [x] initiate README.md
- [] add storybook
- [] add tests
- [x] add task runners

