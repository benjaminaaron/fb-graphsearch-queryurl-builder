
var Likes = function(btn){
    Template.call(this, 'likes', btn);
    
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
        
        if(val == parseInt(val))
            return val + '/likers';
        if(val.length == 0)
            return '_NO-LIKE_/likers';
        
        return 'str/' + val + '/likers';
    }
    
};
