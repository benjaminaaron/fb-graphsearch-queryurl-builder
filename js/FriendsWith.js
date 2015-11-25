
var FriendsWith = function(btn){
    
    var infoText = '<b>to get someones user id</b>:<br>go to their profile page and view the source code of the page<br><small>(in Chrome and Firefox that is done by prefixing the URL with <i>view-source:</i>)</small><br>then search the source code <small>(Strg+F or Cmd+F)</small> for the phrase <i>fb://profile/</i><br>right after the one hit you get is the user id';
    
    Template.call(this, 'friends with', btn, infoText);
    
    this.friendIdField = $('<input/>').attr({
        'type' : 'text',
        'value' : '12345',
        'size' : 10
    }).appendTo(this.td).keyup(function() {         
        var val = $(this).val();
        if(val.length > 0)
            if(val != parseInt(val))
                notie.alert(3, 'that\'s not a user id, click the info icon to learn how to retrieve someones user id', 10);
            else
                updateQueryURL(); 
    });
    
    this.selector = $('<select/>').attr({
        'onchange' : 'updateQueryURL()'
    }).appendTo(this.td.append('&nbsp;&nbsp;'));
    $('<option/>').attr({'value': 'friends'}).appendTo(this.selector).append('1st degree');
    $('<option/>').attr({'value': 'friends/friends'}).appendTo(this.selector).append('2nd degree');
    $('<option/>').attr({'value': 'friends/friends/friends'}).appendTo(this.selector).append('3rd degree');
};

FriendsWith.prototype = {
    __proto__: Template.prototype,
    
    getContrib: function(){
        var val = $(this.friendIdField).val();
        var friendsLevel = this.selector[0].options[this.selector[0].selectedIndex].value;
        if(val == parseInt(val))
            return val + '/' + friendsLevel;
        else
            return '';
    }
};
