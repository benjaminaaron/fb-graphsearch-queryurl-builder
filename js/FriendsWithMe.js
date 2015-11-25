
var FriendsWithMe = function(btn){
    Template.call(this, 'friends with me', btn);
    
    this.selector = $('<select/>').attr({
        'onchange' : 'updateQueryURL()'
    }).appendTo(this.td.append('&nbsp;&nbsp;'));
    $('<option/>').attr({'value': 'friends'}).appendTo(this.selector).append('1st degree');
    $('<option/>').attr({'value': 'friends/friends'}).appendTo(this.selector).append('2nd degree');
    $('<option/>').attr({'value': 'friends/friends/friends'}).appendTo(this.selector).append('3rd degree');
};

FriendsWithMe.prototype = {
    __proto__: Template.prototype,
    
    getContrib: function(){
        var friendsLevel = this.selector[0].options[this.selector[0].selectedIndex].value;
        return 'me/' + friendsLevel;
    }
};
