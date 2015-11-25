
var FriendsWith = function(btn){
    Template.call(this, 'friends with', btn);
    
    this.friendIdField = $('<input/>').attr({
        'type' : 'text',
        'value' : '',
        'size' : 20
    }).appendTo(this.td).keyup(function() {         
        var val = $(this).val();
        if(val.length > 0)
            if(val != parseInt(val))
                notie.alert(3, 'that\'s not a user id, click the info icon to learn how to retrieve someones user id', 3);
            else
                updateQueryURL(); 
    });

           
};

FriendsWith.prototype = {
    __proto__: Template.prototype,
    
    getContrib: function(){
        return '';
    }
    
};
