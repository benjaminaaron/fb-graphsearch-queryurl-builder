//People who go to Hochschule Ansbach
//www.facebook.com/search/143532189024758/students/present

var Studies = function(btn){
                
    Template.call(this, 'studies', btn);
    
    this.presentStudies = $('<input/>').attr({
        'type' : 'radio',
        'name' : 'studies_' + this.id,
        'checked' : 'true'
    }).appendTo(this.td).click(function() { updateQueryURL(); });
    this.td.append('present');
    
    this.pastStudies = $('<input/>').attr({
        'type' : 'radio',
        'name' : 'studies_' + this.id
    }).appendTo(this.td).click(function() { updateQueryURL(); });
    this.td.append('past<br>');   
    
    this.studiesField = $('<input/>').attr({
        'type' : 'text',
        'value' : 'Hochschule München',
        'size' : 30
    }).appendTo(this.td).keyup(function() { updateQueryURL(); });     
};

Studies.prototype = {
    __proto__: Template.prototype,
    
    getContrib: function(){
        var type = '';
        if($(this.presentStudies).is(':checked')) type = 'present';
        if($(this.pastStudies).is(':checked')) type = 'past';
        
        var val = $(this.studiesField).val();    
        if(val.length == 0)
            return '';
                    
        return val + '/students/' + type;
    }
};
