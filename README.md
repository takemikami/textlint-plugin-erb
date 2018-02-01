textlint-plugin-erb
---

[![Build Status](https://travis-ci.org/takemikami/textlint-plugin-erb.svg?branch=master)](https://travis-ci.org/takemikami/textlint-plugin-erb)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fec7cf1e6f174982a59861843576e41c)](https://www.codacy.com/app/takemikami/textlint-plugin-erb?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=takemikami/textlint-plugin-erb&amp;utm_campaign=Badge_Grade)
[![Dependency Status](https://gemnasium.com/badges/github.com/takemikami/textlint-plugin-erb.svg)](https://gemnasium.com/github.com/takemikami/textlint-plugin-erb)
[![npm](https://img.shields.io/npm/v/textlint-plugin-erb.svg)](https://www.npmjs.com/package/textlint-plugin-erb)

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
