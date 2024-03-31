
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


# Sikret CLI

Tool for dealing with your Secrets App from anywhere


## Overview

![](https://github.com/firdausious/sikret-cli/blob/main/docs/overview.png)


## Features

- ⬇️ Pull secrets as file (.json, .env)
- 🔑 Support for Doppler (at the moment), more will coming..

## Demo

![](https://github.com/firdausious/sikret-cli/blob/main/docs/demo-1.png)
![](https://github.com/firdausious/sikret-cli/blob/main/docs/demo-2.gif)

## Usage

##### Install CLI
```shell
npx sikret-cli
```

##### Add your auth token from your provider (ex: [from Doppler](https://docs.doppler.com/reference/api#authentication)) with `SIKRET_TOKEN`
```shell
export SIKRET_TOKEN=<YOUR_TOKEN>
```

##### Ready to go! 🚀 Try to pull your secret by
```shell
npx sikret-cli pull -p sikret -e dev
```

##### NOTE: here's the full command
```shell
npx sikret-cli --help
sikret <command>

Commands:
  sikret pull  Pull secret from specific provider. Default to: Doppler

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

or detail for `pull`
```shell
npx sikret-cli pull --help
sikret pull

Pull secret from specific provider. Default to: Doppler

Options:
      --version         Show version number                            [boolean]
      --help            Show help                                      [boolean]
      --provider, --pv  Secret provider. Ex: doppler | [TODO] hashicorp-consul |
                        [TODO] hashicorp-vault | [TODO] gcp-secretmanager
                                                   [string] [default: "doppler"]
  -p, --project         Key/Label from the secret                       [string]
  -e, --environment     Scope/Environment from the secret               [string]
  -f, --format          Output format: dotenv | json | [TODO] tmpl
                                                    [string] [default: "dotenv"]
  -o, --output          Output file path              [string] [default: ".env"]
  -t, --token           Auth Token from provider                        [string]
```

From here, you should be ready to go to kickstart your project ✅

## How to contribute

Learn how to contribute by following this doc.

## Roadmap
- [ ] Capabilities
    - [x] Pull secrets
    - [x] Write secrets (.json)
    - [x] Write secrets (.env)
    - [ ] Write secrets (.tmpl)
    - [ ] Inject to runtime
    - [ ] Create secrets
    - [ ] Update secrets
- [ ] More providers
    - [x] Doppler
    - [ ] AWS Secret Manager
    - [ ] GCP Secret Manager
    - [ ] Hashicorp Vault
    - [ ] Hashicorp Consul
- [ ] Chore
    - [ ] Linters, formatters, ci/cd
    - [ ] Semantic-release
    - [ ] Unit Tests
    - [ ] Migrate to **RUST** 🔥

## License

[MIT](https://choosealicense.com/licenses/mit/)

