
var Age = function(btn){
    Template.call(this, 'age', btn);
           
};

Age.prototype = {
    __proto__: Template.prototype,
    
    getContrib: function(){
        return '';
    }
    
};
