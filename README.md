# ITVMO Setup and Architecture

## Overview

ITVMO.gov is built using Federalist, which runs the static stie generator [Jekyll](https://jekyllrb.com/). The local environment can be set up using just Jekyll, no need for docker even though it's included in Federalist. 

## Pushing Changes

Always cut a new feature branch from main when developing, pushing up changes to your feature branch creates a Federalist link that can be shared internally with clients. Once a feature branch is merged with main, all changes from that branch will be pushed to production.

## Jekyll and Ruby

Jekyll is a static site generator built using Ruby. This project uses a specific version outlined in `.ruby-version` at the project root, and in the `Gemfile`. On windows you must have ruby installed, MacOS it already comes pre-installed. On Mac, the `.ruby-version` file only works with [rbenv](https://github.com/rbenv/rbenv), install that and then from the project root run `rbenv local` which will add the corresponding version to your project.

### Bundler

Install [bundler](https://bundler.io/) on your machine. This is a package manager for all your ruby gems and relies on the `Gemfile` to make your project work and fires up the local environment.

## Installing the Project

- Run the command `bundle install` from the project root to pull down all of the gems that Jekyll needs to get started.
- Run the command `bundle exec jekyll serve --watch` which will start the development server.
- Don't touch files in the `_site` directory, this gets built out every time a change is made. 

## Project Files

`_includes` and `_layouts` has files related to the overall look/feel of the site, `_resources` contains everything on the resources pages, and `_pages` contains the markup for all static pages on the site. All files within Jekyll utilize [Liquid](https://shopify.github.io/liquid/basics/introduction/) for the templating language. Follow the front matter patterns at the top of .md files, and all style changes can take place in `assets`. Using SCSS? Add or edit files inside the `_sass` directory and add their import reference in the `css/main.scss` file.
