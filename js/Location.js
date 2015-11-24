
var Location = function(btn){
    Template.call(this, 'location', btn);
           
    this.homeResidents = $('<input/>').attr({
        'type' : 'radio',
        'name': 'location_' + this.id,
        'checked': 'true'
    }).appendTo(this.td).click(function() { updateQueryURL(); });
    this.td.append('hometown');
    
    this.residentsPresent = $('<input/>').attr({
        'type' : 'radio',
        'name': 'location_' + this.id
    }).appendTo(this.td).click(function() { updateQueryURL(); });
    this.td.append('live there');
    
    this.residentsPast = $('<input/>').attr({
        'type' : 'radio',
        'name': 'location_' + this.id
    }).appendTo(this.td).click(function() { updateQueryURL(); });
    this.td.append('lived there');
    
    this.visitors = $('<input/>').attr({
        'type' : 'radio',
        'name': 'location_' + this.id
    }).appendTo(this.td).click(function() { updateQueryURL(); });
    this.td.append('visited<br>');
    
    this.locationField = $('<input/>').attr({
        'type' : 'text',
        'value' : 'Berlin, Germany',
        'size' : 30
    }).appendTo(this.td).keyup(function() { updateQueryURL(); });
    
};

Location.prototype = {
    __proto__: Template.prototype,
    
    
    /*
    
    home-residents
    residents/present
    residents/past
    visitors
    
    */
    
    
    getContrib: function(){
        
        var val = $(this.locationField).val();

        if(val == parseInt(val)){
            
        }
        
        
        return '';
    }
    
};
