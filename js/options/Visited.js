
//People who visited places named "Hochschule Ansbach"
//www.facebook.com/search/str/hochschule%2Bansbach/places-named/visitors

var Visited = function(btn){
    Template.call(this, 'studies', btn);
    
    this.visitedField = $('<input/>').attr({
        'type' : 'text',
        'value' : 'my Cafe',
        'size' : 30
    }).appendTo(this.td).keyup(function() { updateQueryURL(); });        
};

Visited.prototype = {
    __proto__: Template.prototype,
    
    getContrib: function(){
        var val = $(this.visitedField).val();    
        if(val.length == 0)
            return '';
                    
        return val + '/visitors';
    }
};
