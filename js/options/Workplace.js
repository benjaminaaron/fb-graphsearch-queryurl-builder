//People who work at IKEA USA
//www.facebook.com/search/85409903065/employees/present

var Workplace = function(btn){
    
    Template.call(this, 'workplace', btn);
    
    this.presentWorkplace = $('<input/>').attr({
        'type' : 'radio',
        'name' : 'workplace_' + this.id,
        'checked' : 'true'
    }).appendTo(this.td).click(function() { updateQueryURL(); });
    this.td.append('present');
    
    this.pastWorkplace = $('<input/>').attr({
        'type' : 'radio',
        'name' : 'workplace_' + this.id
    }).appendTo(this.td).click(function() { updateQueryURL(); });
    this.td.append('past<br>');   
    
    this.workplaceField = $('<input/>').attr({
        'type' : 'text',
        'value' : 'some workplace',
        'size' : 30
    }).appendTo(this.td).keyup(function() { updateQueryURL(); });
};

Workplace.prototype = {
    __proto__: Template.prototype,
    
    getContrib: function(){
        var type = '';
        if($(this.presentWorkplace).is(':checked')) type = 'present';
        if($(this.pastWorkplace).is(':checked')) type = 'past';
        
        var val = $(this.workplaceField).val();    
        if(val.length == 0)
            return '';
                    
        return val + '/employees/' + type;
    }
};
