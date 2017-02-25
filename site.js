module.exports = {
  "vendor": [],
  "scripts": {},
  "styles": {
    "prefix": ["> 1%", "last 2 versions", "IE >= 9"],
    "include": []
  },
  "metalsmith": {
    "metadata": {
      "site_title": "PEDALONES",
      "meta_title" : {
        "de": "PEDALONES - Qualitätswein aus Österreich, Wien, Nussberg",
        "ro" : "PEDALONES - Vin de calitate superioara din Austria, Nussberg, Vienna"
      },
      "meta_description" : {
        "de": "PEDALONES - Qualitätswein aus Österreich, Wien, Nussberg - produziert von Önologe Dragos Pavelescu in Wien, Nussberg, Österreich",
        "ro" : "Vin pop-up PEDALONES - Riesling Wiener Nussberg 2015 - produs de Dragos Pavelescu, oenolog in Vienna, Nussberg, Austria"        
      },
      "copyright" : {
        "de": "D.Pavelescu. Alle Rechte vorbehalten.",
        "ro" : "D.Pavelescu. Toate drepturile rezervate."
      }
    },
    "config": {
      "contentRoot": "./content",
      "assetRoot": "./sources",
      "scriptRoot": "./scripts",
      "styleRoot": "./styles",
      "layoutRoot": "./layouts",
      "destRoot": "./build"
    },
    "plugins": {
      "metalsmith-drafts": {},
      "metalsmith-collections": {
          "de": {
            "pattern": "de/*.md",
            "sortBy": "order",
            "metadata": {
              "langLabel": "Deutsch"
            }
          },
          "ro": {
            "pattern": "ro/*.md",
            "sortBy": "order",
            "metadata": {
              "langLabel": "Română"
            }
          }
        },
      "metalsmith-markdown": {
        "smartypants": true,
        "smartLists": true,
        "gfm": true,
        "tables": true,
        "breaks": true,
        "pedantic": false
      },
      "metalsmith-permalinks": {
        "pattern": ":collection/:title"
      },
      "metalsmith-layouts": {
        "engine": "handlebars",        
        "directory": "./layouts",
        "partials": "./layouts/partials",
        "default": "index.handlebars"
      },
      "metalsmith-assets": {
        "source": "./sources",
        "destination": "./"
      },
      "metalsmith-html-minifier": {
        "_metalsmith_if": "production",
        "removeAttributeQuotes": false,
        "keepClosingSlash": true
      }
    }
  }
}
