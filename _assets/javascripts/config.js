module.exports = [
  {
    name: "application_deferred",
    deps: [
      "vendor/jquery-3.3.1.min",
      "vendor/bootstrap.min",
      "vendor/imgix.min",
      "vendor/imgix-optimizer",
      "vendor/clipboard.min"
    ],
    files: [
      "components/clippable",
      "components/dark-theme",
      "components/search",
      "components/images",
      "components/interactive-example",
      "components/modal-example",
      "components/tooltips-example"
    ]
  }
];
