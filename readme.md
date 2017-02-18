# GitHub API specifications and testing

## Before start

- Go to the Apiary.io and [create new project](https://app.apiary.io/),
  for example ```https://app.apiary.io/githubtest5/tests/runs#tutorial```
    - Go to the [Tutorial tab](https://app.apiary.io/)
    and find your ```apiaryApiKey``` and ```apiaryApiName```. Skip other instructions on the page.
- [Setup a new token](https://github.com/settings/tokens) for the test goals with scopes: *gist, user:email*.
Do not forget to copy new token before closing tab.
- Checkout this repo to some folder

## Tested API Specifications

- Look into [github-api.md](/github-api.md). You can copy it into your https://app.apiary.io/ Editor to play online.

## Run with Vagrant

### Requirements

- [Vagrant](https://www.vagrantup.com)

### Execution

- Put your Apiary parameters and GitHub token below and run commands:
```
vagrant box update
DREDD_GITHUB_TEST_PATH=<path-to-dir-with-current-file> APIARY_API_KEY=<...> APIARY_API_NAME=<...> GITHUB_API_TOKEN=<...> vagrant up"
```
- After first launch you can run ```vagrant ssh``` and ```cd /var/dredd_test && composer check```

## OR Installing to localhost

### Requirements

- NodeJs and Npm.
- PHP 7.
- [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx): ```curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer```

### Installation steps

- Run: ```composer install && npm install```

### Execution on localhost

- Put your Apiary parameters and GitHub token below and run the command:
```
APIARY_API_KEY=<...> APIARY_API_NAME=<...> GITHUB_API_TOKEN=<...> composer check"
```