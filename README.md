# textlint-plugin-erb
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
