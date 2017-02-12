var HandlebarsLayouts = require('handlebars-layouts');

module.exports = function(Handlebars) {

    Handlebars.registerHelper(HandlebarsLayouts(Handlebars));

    var fileHash;
    Handlebars.registerHelper('fileHash', function() {
        if (!fileHash) {
            var d = new Date();
            var n = d.getMilliseconds();
            var random = Math.random() * n;
            
            fileHash = random.toString().replace('.','');
        }
        
        return fileHash;
    });

    Handlebars.registerHelper('makeHash', function(link) {
        var hash = link.replace('/','--');
        
        return hash;
    });

    Handlebars.registerHelper({
        eq: function(v1, v2) {
            return v1 === v2;
        },
        ne: function(v1, v2) {
            return v1 !== v2;
        },
        isLast: function(index, arr) {
            if (isNaN(parseInt(index)) || !arr) {
                return false;
            }

            return index === (arr.length - 1);
        },
        lt: function(v1, v2) {
            return v1 < v2;
        },
        gt: function(v1, v2) {
            return v1 > v2;
        },
        empty: function(v) {
            var value = v || '';

            if (typeof value === 'string') {
                return value.length === 0;
            }

            if (typeof value === 'object') {
                return !!value.length && value.length > 0;
            }

            return !!value;
        },
        not: function(v) {
            return !v;
        }
    });
};
