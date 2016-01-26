
var Name = function(btn){
    
    var infoText = '(part of) a persons name';
        
    Template.call(this, 'name', btn, infoText);
    
    this.nameField = $('<input/>').attr({
        'type' : 'text',
        'value' : 'Max Mustermann',
        'size' : 30
    }).appendTo(this.td).keyup(function() { updateQueryURL(); });       
};

Name.prototype = {
    __proto__: Template.prototype,
    
    getContrib: function(){
        var val = $(this.nameField).val();
        
        if(val.length == 0)
            return '';
        
        return 'str/' + val + '/users-named';
    }
};
