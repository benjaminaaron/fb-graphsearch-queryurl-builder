
var Likes = function(btn){
    
    var infoText = 'lists people who like pages that contain what you enter here in the page-title';
        
    Template.call(this, 'likes', btn, infoText);
    
    this.likesField = $('<input/>').attr({
        'type' : 'text',
        'value' : 'Sustainability',
        'size' : 30
    }).appendTo(this.td).keyup(function() { updateQueryURL(); });       
};

Likes.prototype = {
    __proto__: Template.prototype,
    
    getContrib: function(){
        var val = $(this.likesField).val();
        
        if(val.length == 0)
            return '';
        
        return 'str/' + val + '/pages-named/likers';
    }
};
