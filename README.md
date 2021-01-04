# Inclusive Naming Initiative

This repository is a [Hugo](https://gohugo.io/) website for the Inclusive Naming Initiative. 

## Using this repository

This repository uses:

* **[Hugo](https://gohugo.io/)** as a static site generator. Hugo is [golang](https://golang.org) based, so you'll need that as well.
* **[Bootstrap 4.5.x](https://getbootstrap.com/docs/4.5/getting-started/introduction/)** as a CSS framework
* **[Netlify](https://www.netlify.com/)** for building, hosting, and DNS management

## Running locally

Make sure you have [npm](https://www.npmjs.com/) and [yarn](https://yarnpkg.com/) installed. Clone this repository and run the following two commands in its directory:

```shell
# Install npm assets
yarn

# Run the server locally
make serve
```

## Running on Netlify

Netlify is a CI/CD build tool and hosting solution for (among other things) static sites. We **strongly** recommend using Netlify unless you have a good reason not to.

This repository comes with a pre-configured [`netlify.toml`](https://github.com/cncf/hugo-netlify-starter/blob/master/netlify.toml) file. To build to Netlify:

1. Go to [netlify.com](https://netlify.com) and sign up. We recommend signing up using a GitHub account.
2. Click **New Site from Git**, and give Netlify access to your GitHub account.
  > **Note:** For projects with lots of contributors, it can be handy to create a general/bot account instead of granting access with a personal account.

3. Install Netlify with access to your documentation site repository.
4. Leave all other settings as default and click **Deploy Site**.
