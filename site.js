module.exports = {
  "vendor": [],
  "scripts": {},
  "styles": {
    "prefix": ["> 1%", "last 2 versions", "IE >= 9"],
    "include": []
  },
  "metalsmith": {
    "metadata": {
      "site_title": "D.Pavelescu",
      "meta_title" : {
        "de": "d.Pavelescu | PEDALONES Riesling 2015 | Nussberg Wien",
        "ro" : "d.Pavelescu | PEDALONES Riesling 2015 | Nussberg Vienna Austria"
      },
      "meta_description" : {
        "de": "Pop-up-Wein „PEDALONES“ - Riesling vom Wiener Nussberg 2015 - produziert von Önologe Dragos Pavelescu",
        "ro" : "Vin pop-up „PEDALONES“ - Riesling Wiener Nussberg 2015 - produs de Dragos Pavelescu, oenolog"        
      },
      "copyright" : {
        "de": "2016. Alle Rechte vorbehalten.",
        "ro" : "2016. Toate drepturile rezervate."
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
