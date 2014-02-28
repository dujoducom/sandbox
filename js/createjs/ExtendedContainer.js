(function() {
 	
 	var ExtendedContainer = function(args) {
	  this.initialize(args);
	}

	var p = ExtendedContainer.prototype = new createjs.Container();
	 
	p.Container_initialize = p.initialize;

	p.initialize = function(args) {
	    this.Container_initialize();
	    var t = this;
	    t.args = args;
	    /* ETC */
	}

	p.someMethod = function() {
		/* ETC */	
	}

	window.ExtendedContainer = ExtendedContainer;

}());