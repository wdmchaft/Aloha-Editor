/*!
* Aloha Editor
* Author & Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Licensed unter the terms of http://www.aloha-editor.com/license.html
*/

Ext.tree.AlohaTreeLoader = function(config) {
	this.resourceObjectTypes = [];
	Ext.apply(this, config);
	Ext.tree.AlohaTreeLoader.superclass.constructor.call(this);
};

Ext.extend( Ext.tree.AlohaTreeLoader, Ext.tree.TreeLoader, {
	directFn : function(node, callback) {
    	GENTICS.Aloha.ResourceManager.getNavigation(null, this.resourceObjectTypes, null, function( items ) {
 	        var response = {};
 	        response= {
 	            status: true,
 	            scope: this,
 			    argument: {callback: callback, node: node}
 	   		};
 	      	if(typeof callback == "function"){
 	        	callback(items, response);
 	      	}	 	        
    	});
	},
    createNode: function(node) {
        node.text = node.name;
        node.leaf = node.hasMoreItems;
        return Ext.tree.TreeLoader.prototype.createNode.call(this, node);
    },
	setResourceObjectTypes: function(otypes){
    	this.resourceObjectTypes = otypes;
    }
});	
