# textlint-plugin-erb [![Build Status](https://travis-ci.org/takemikami/textlint-plugin-erb.svg?branch=master)](https://travis-ci.org/takemikami/textlint-plugin-erb) [![Dependency Status](https://gemnasium.com/badges/github.com/takemikami/textlint-plugin-erb.svg)](https://gemnasium.com/github.com/takemikami/textlint-plugin-erb)
for erb (html.erb) support for textlint

## Installation

```
npm install -g takemikami/textlint-plugin-erb#master
```

## Usage

add plugin to your ``.textlintrc``

```
{
  "plugins": [
    "erb"
  ]
}
```

execute textlint

```
textlint app/views/**/*.erb
```

## Build

```
npm install
babel -s -d lib src
```
