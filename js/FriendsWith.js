
var FriendsWith = function(btn){
    Template.call(this, 'friends with', btn);
           
};

FriendsWith.prototype = {
    __proto__: Template.prototype,
    
    getContrib: function(){
        return '';
    }
    
};
