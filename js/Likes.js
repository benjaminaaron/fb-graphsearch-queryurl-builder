
var Likes = function(btn){
    Template.call(this, 'likes', btn);
           
};

Likes.prototype = {
    __proto__: Template.prototype,
    
    getContrib: function(){
        return '';
    }
    
};
