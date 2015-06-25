(function(){
	'use strict';
	/**
	* @description 
	* Root Module Loads dependencies and Initializes the APP.
	* 
	**/
	angular.module( 'humpback',	[
		
		'ui.router',
		'js-data',	
		'sails.io',

		//Foundation core
		'foundation',
		'foundation.core',
			
		//humpback core
		'humpback.controllers',
		'humpback.policies',
		'humpback.services',
		'humpback.models'
	  
	])

	/**
	* @description 
	* Root Module Run that can be ignored during unit testing.
	* 
	**/
	.run(['DS', 'DSSailsSocketAdapter', '$rootScope', '$state', '$stateParams', '$q' , function (DS, DSSailsSocketAdapter, $rootScope, $state, $stateParams, $q) {

		/**
		* @description 
		* Initiate the Socket Adapter for JS-data
		* 
		**/
		// register the adapter with the data store
		DS.adapters.DSSailsSocketAdapter = DSSailsSocketAdapter;
		// set the custom adapter as the default
		DS.defaults.defaultAdapter = 'DSSailsSocketAdapter';


		/**
		* @description 
		* Attach APP wide on RUN
		* 
		**/
		// Attach Fast CLick
		FastClick.attach(document.body);

		/**
		* @description 
		* Expose data sent from server
		* 
		**/
		
		if(window._env){
			console.log("HUMPBACK ENV:", window._env);
			$rootScope.__env = window._env;
		}

	}])

	/**
	* @description 
	* APP Wide Controller 
	* 
	**/
	.controller( 'HumpbackCtrl', function AppCtrl ($rootScope, $state, utils){
		if(utils.development()){ console.log("App loaded"); }

	});


})();