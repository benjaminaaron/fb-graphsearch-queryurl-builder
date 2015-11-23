
var Gender = function(btn){
    Template.call(this, 'gender', btn);
                
    this.maleRadioBtn = $('<input/>').attr({
        'type' : 'radio',
        'name': 'gender',
        'checked': 'true'
    }).appendTo(this.td).click(function() { updateQueryURL(); });
    this.td.append('male');
    
    $('<input/>').attr({
        'type' : 'radio',
        'name': 'gender'
    }).appendTo(this.td).click(function() { updateQueryURL(); });
    this.td.append('female');            
};

Gender.prototype = {
    __proto__: Template.prototype,
    
    getContrib: function(){
        return $(this.maleRadioBtn).is(':checked') ? 'male' : 'female';
    }
    
};
