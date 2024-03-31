# Contributing Guidelines

*Pull requests, bug reports, and all other forms of contribution are welcomed and highly encouraged!* :octocat:

### Contents

- [Read the roadmap](#read-the-roadmap)
- [Code Structure](#code-structure)
- [Running locally](#running-locally)
- [Commit message](#commit-message)
- [Send the pull request](#send-the-pull-request)
- [Publish to npm](#publish-to-npm)

> **This guide serves to set clear expectations for everyone involved with the project so that we can improve it together while also creating a welcoming space for everyone to participate. Following these guidelines will help ensure a positive experience for contributors and maintainers.**

## Read the roadmap
Read the roadmap from [README File](./README.md) or go to this repo project.

## Code Structure
```shell
bin/                  ## output
src/
├── commands          ## contains command lists
│   └── pull.ts
├── index.ts          ## entry point
├── libs              ## main engine
│   ├── output
│   │   └── index.ts
│   └── secret
│       └── index.ts
├── providers         ## 3rd-party providers, adapter
│   └── Doppler
│       ├── config.ts
│       └── index.ts
└── utils             ## helpers
    └── fetcher.ts
```


## Running locally

1. Install dependencies
```shell
npx sikret-cli
```

1. Start development
```shell
npm run watch
```

## Commit message

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `test`: adding or updating tests, eg add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.

Our pre-commit hooks verify that your commit message matches this format when committing.

## Send the pull request

When you're sending a pull request:

- Prefer small pull requests focused on one change.
- Verify that linters and tests are passing.
- Review the documentation to make sure it looks good.
- Follow the pull request template when opening a pull request.
- For pull requests that change the API or implementation, discuss with maintainers first by opening an issue.

## Publish to npm
```shell
npm run release
```

