
var Age = function(btn){
    Template.call(this, 'age', btn);
    
    var self = this;
           
    this.exactly = $('<input/>').attr({
        'type' : 'radio',
        'name': 'age',
        'checked': 'true'
    }).appendTo(this.td).click(function() { updateQueryURL(); $(self.ageField2).hide(); });
    this.td.append('=');
    
    this.younger = $('<input/>').attr({
        'type' : 'radio',
        'name': 'age'
    }).appendTo(this.td).click(function() { updateQueryURL(); $(self.ageField2).hide(); });
    this.td.append('<');
    
    this.older = $('<input/>').attr({
        'type' : 'radio',
        'name': 'age'
    }).appendTo(this.td).click(function() { updateQueryURL(); $(self.ageField2).hide(); });
    this.td.append('>');
    
    this.btwn = $('<input/>').attr({
        'type' : 'radio',
        'name': 'age'
    }).appendTo(this.td).click(function() {         
        $(self.ageField2).show();
        updateQueryURL(); 
    });
    this.td.append('> <<br>');
    
    this.ageField = $('<input/>').attr({
        'type' : 'text',
        'value' : '30',
        'size' : 4
    }).appendTo(this.td).keyup(function() { 
        var val = $(this).val();
        if(val.length > 0){
            if(val != parseInt(val))
                notie.alert(3, 'that\'s not a number', 1);
            updateQueryURL();
        }
    });
    
    this.ageField2 = $('<input/>').attr({
        'type' : 'text',
        'value' : '30',
        'size' : 4,
        'style': 'display:none'
    }).appendTo(this.td).keyup(function() { 
        var val = $(this).val();
        if(val.length > 0){
            if(val != parseInt(val))
                notie.alert(3, 'that\'s not a number', 1);
            updateQueryURL();
        }
    });
    
};

Age.prototype = {
    __proto__: Template.prototype,
    
    getContrib: function(){        
        var ageStr = '';
                
        if($(this.btwn).is(':checked')){
            ageStr = '_TODO_';
            return parseInt($(this.ageField).val()) + '/users-older/' + parseInt($(this.ageField2).val()) + '/users-younger'; 
        } 
        if($(this.exactly).is(':checked')) ageStr = 'users-age';
        if($(this.younger).is(':checked')) ageStr = 'users-younger';
        if($(this.older).is(':checked')) ageStr = 'users-older';
        
        return parseInt($(this.ageField).val()) + '/' + ageStr;
    }
    
};
