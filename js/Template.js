
var Template = function(title, btn){    
    if(btn){          
        $(btn).attr('disabled', 'true');
        this.btn = btn;
    }
    
    this.tr = $('<tr/>');
    $(this.tr).insertAfter(appendRow).closest('tr');
    this.parentTr = appendRow; //to restore it in destroy
    appendRow = this.tr;

    this.td = $('<td/>').attr({
        'align' : 'center',
        'class' : ''
    }).appendTo(this.tr);
    this.td.append('<b>' + title + '</b> ');
    
    var removeLink = $('<a/>').attr({
        'href' : '#',
    }).appendTo(this.td).append('<small>remove</small></br>');
    
    var self = this;
    removeLink.click(function() {
        self.destroy();
    });

};

Template.prototype = {

    destroy: function(){
        if(this.btn)                
            $(this.btn).removeAttr('disabled');
            
        var newestTemplate = templates[templates.length - 1];    
        if(this.index == newestTemplate.index)
            appendRow = this.parentTr;            
        
        this.tr.remove();
        templates.splice(this.index, 1);
    }        
    
};
