
var Age = function(btn){
    Template.call(this, 'age', btn);
    
    var self = this;
           
    this.exactly = $('<input/>').attr({
        'type' : 'radio',
        'name': 'age',
        'checked': 'true'
    }).appendTo(this.td).click(function() { self.requireIntersect = false; updateQueryURL(); $(self.ageField2).hide(); });
    this.td.append('exactly');
    
    this.younger = $('<input/>').attr({
        'type' : 'radio',
        'name': 'age'
    }).appendTo(this.td).click(function() { self.requireIntersect = false; updateQueryURL(); $(self.ageField2).hide(); });
    this.td.append('younger than');
    
    this.older = $('<input/>').attr({
        'type' : 'radio',
        'name': 'age'
    }).appendTo(this.td).click(function() { self.requireIntersect = false; updateQueryURL(); $(self.ageField2).hide(); });
    this.td.append('older than');
    
    this.btwn = $('<input/>').attr({
        'type' : 'radio',
        'name': 'age'
    }).appendTo(this.td).click(function() {  
        self.requireIntersect = true;       
        $(self.ageField2).show();
        updateQueryURL(); 
    });
    this.td.append('between<br>');
    
    this.ageField = $('<input/>').attr({
        'type' : 'text',
        'value' : '25',
        'size' : 4
    }).appendTo(this.td).keyup(function() { 
        var val = $(this).val();
        if(val.length > 0 && val != parseInt(val))
            notie.alert(3, 'that\'s not a number', 1);
        updateQueryURL();
    });
    
    this.ageField2 = $('<input/>').attr({
        'type' : 'text',
        'value' : '35',
        'size' : 4,
        'style': 'display:none'
    }).appendTo(this.td).keyup(function() { 
        var val = $(this).val();
        if(val.length > 0 && val != parseInt(val))
            notie.alert(3, 'that\'s not a number', 1);
        updateQueryURL();
    });
};

Age.prototype = {
    __proto__: Template.prototype,
    
    getContrib: function(){        
        var ageStr = '';
        var val = $(this.ageField).val();
                
        if($(this.btwn).is(':checked'))
            return parseInt(val) + '/users-older/' + parseInt($(this.ageField2).val()) + '/users-younger'; 
        if($(this.exactly).is(':checked')) ageStr = 'users-age';
        if($(this.younger).is(':checked')) ageStr = 'users-younger';
        if($(this.older).is(':checked')) ageStr = 'users-older';
        
        if(val.length == 0)
            return '';
        
        return parseInt(val) + '/' + ageStr;
    }
};
