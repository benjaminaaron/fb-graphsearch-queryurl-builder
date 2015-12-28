
var Template = function(title, btn, infoText){ 
    
    this.id = makeID();
    this.title = title;
    this.requireIntersect = false;
       
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
        'class' : 'frame'
    }).appendTo(this.tr);
    
    this.td.append('<font size="4.5" color="#800000"><b>' + title + '</b></font> ');
    
    this.td.append('&nbsp;&nbsp;');
    
    var removeLink = $('<a/>').attr({
        'href' : '#',
    }).appendTo(this.td).append('<small>[remove]</small>');
    
    if(infoText){
        this.td.append('&nbsp;&nbsp;&nbsp;');
        var infoIcon = $('<img/>').attr({
            'width' : '18px',
            'src' : 'files/info.png'
        }).appendTo(this.td).click(function(){
            notie.alert(1, infoText, 8);
        });
    }
    this.td.append('<br>');

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
        
        //ensure working indizes and correct appendRow
        if(templates.length == 0)
            appendRow = basicAppendRow;
        for(var i in templates)
            templates[i].index = i;
                
        updateQueryURL();
    }
};
