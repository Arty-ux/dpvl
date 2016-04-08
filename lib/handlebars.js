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
        not: function(v1) {
            return !v1;
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
        },
        lte: function(v1, v2) {
            return v1 <= v2;
        },
        gte: function(v1, v2) {
            return v1 >= v2;
        },
        and: compareFunction(function(v1, v2) {
            return v1 && v2;
        }),
        or: compareFunction(function(v1, v2) {
            return v1 || v2;
        })
    });

    function compareFunction (comperator) {
        return function () {
            // Last argument is info provided by handlebars, so we cut it
            var params = Array.prototype.slice.call(arguments, 0, -1),
                length = params.length,
                result = params[0];
                        
            if (length == 1) return !!result;
            for (var i = 1; i < length; i++) {
                result = comperator(result, params[i]);
            }
            return result;
        }
    }
};
