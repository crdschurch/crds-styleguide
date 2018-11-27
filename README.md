# Crossroads Styleguide
Welcome to Crossroads Styleguide, the official pattern library of [Crossroads Church](https://www.crossroads.net/).

## Background
`crds-styleguide` is a static site built using Jekyll and Netlify. `crds-styles` is a pretty important dependancy of this repo you will undoubtedly encounter. Documentation for this repo can be found [here](https://github.com/crdschurch/crds-styles).

`crds-styleguide` operates under a continuous deployment strategy, meaning this repo differs from other Crossroads projects in that there is no INT or DEMO environment. If you view our branches, you will see a `master` branch (where PROD lives) and a series of `feature`/`defect` branches enabled with Netlify preview buttons. To view code not yet merged into PROD, open one of these `feature`/`defect` branches and click the green checkmark ✅ next to the latest commit to bring up the Netlify preview url.

## Installation
1. Run `bundle install` to receive any updated gems
    1. By default, this command will pull the latest updates from the master branch of `crds-styles`
    2. If you are making updates to `crds-styles` locally, run `CONTENT=local bundle` to point your environment to a local version
    3. If you want `crds-styleguide` to point to a release-friendly (but not deployed) version of `crds-styles`, run `CONTENT=deploy-preview bundle` to point your environment to development
2. Run `jekyll serve` to build and serve the site locally

See the Jekyll [documentation](https://jekyllrb.com/) for other build commands.

License
--------

This project is licensed under the [3-Clause BSD
License](https://opensource.org/licenses/BSD-3-Clause).