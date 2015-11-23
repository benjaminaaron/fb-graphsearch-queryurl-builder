
var Location = function(btn){
    Template.call(this, 'location', btn);
           
};

Location.prototype = {
    __proto__: Template.prototype,
    
    getContrib: function(){
        return '';
    }
    
};
