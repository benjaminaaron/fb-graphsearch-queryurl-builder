
var Location = function(btn){
    
    var infoText = 'it works in many cases by inputing strings like <i>Berlin, Germany</i> <small>(english and comma country)</small><br>but to be on the safe side you may search the place on facebook and use the id visible in the URL here<br>in <a href="https://www.facebook.com/places/Things-to-do-in-Berlin-Germany/111175118906315/">this page</a> for Berlin the id <i>111175118906315</i> can be found in the URL';
        
    Template.call(this, 'location', btn, infoText);
           
    this.homeResidents = $('<input/>').attr({
        'type' : 'radio',
        'name' : 'location_' + this.id
    }).appendTo(this.td).click(function() { updateQueryURL(); });
    this.td.append('hometown');
    
    this.residentsPresent = $('<input/>').attr({
        'type' : 'radio',
        'name' : 'location_' + this.id,
        'checked' : 'true'
    }).appendTo(this.td).click(function() { updateQueryURL(); });
    this.td.append('live there');
    
    this.residentsPast = $('<input/>').attr({
        'type' : 'radio',
        'name' : 'location_' + this.id
    }).appendTo(this.td).click(function() { updateQueryURL(); });
    this.td.append('lived there');
    
    this.visitors = $('<input/>').attr({
        'type' : 'radio',
        'name' : 'location_' + this.id
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

    getContrib: function(){
        var type = '';
        if($(this.homeResidents).is(':checked')) type = 'home-residents';
        if($(this.residentsPresent).is(':checked')) type = 'residents/present';
        if($(this.residentsPast).is(':checked')) type = 'residents/past';
        if($(this.visitors).is(':checked')) type = 'visitors';
        
        var val = $(this.locationField).val();
        
        if(val == parseInt(val))
            return val + '/' + type;
        if(val.length == 0)
            return '_NO-LOCATION_/' + type;
        
        return 'str/' + val + '/pages-named/' + type;
    }
};
