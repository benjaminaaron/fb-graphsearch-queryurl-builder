
var FriendsWithMe = function(btn){
    Template.call(this, 'friends with me', btn);
           
};

FriendsWithMe.prototype = {
    __proto__: Template.prototype,
    
    getContrib: function(){
        return '';
    }
    
};
