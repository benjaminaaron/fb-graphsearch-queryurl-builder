
var RshipStatus = function(btn){
    Template.call(this, 'relationship status', btn);
             
    this.selector = $('<select/>').attr({
        'onchange' : 'updateQueryURL()'
    }).appendTo(this.td.append('&nbsp;&nbsp;'));
    $('<option/>').attr({'value': 'single'}).appendTo(this.selector).append('single');
    $('<option/>').attr({'value': 'in-open-relationship'}).appendTo(this.selector).append('in an open relationship');
    $('<option/>').attr({'value': 'in-relationship'}).appendTo(this.selector).append('in a relationship');
    $('<option/>').attr({'value': 'its-complicated'}).appendTo(this.selector).append('it\'s complicated');
    $('<option/>').attr({'value': 'engaged'}).appendTo(this.selector).append('engaged');
    $('<option/>').attr({'value': 'married'}).appendTo(this.selector).append('married');
    $('<option/>').attr({'value': 'divorced'}).appendTo(this.selector).append('divorced');
    $('<option/>').attr({'value': 'separated'}).appendTo(this.selector).append('separated');
    $('<option/>').attr({'value': 'widowed'}).appendTo(this.selector).append('widowed');

};

RshipStatus.prototype = {
    __proto__: Template.prototype,

    getContrib: function(){
        return this.selector[0].options[this.selector[0].selectedIndex].value + '/users';
    }
};
