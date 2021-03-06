/**
* assets/app/models/index.js
* @description 
* JSdata Models handle the client side objects sent from the server and preform
* local CRUD operations that resolve with the server
* 
**/

angular.module( 'humpback.models'
, [
	/**
	* @CORE
	* These are core models used by the framework
	* They are compiled with grunt -> tasks/register/humpback.js 
	**/
	/* CORE PROJECT MODELS */
	'alert.model',
	'category.model',
	'email.model',
	'model.model',
	'passport.model',
	'permission.model',
	'role.model',
	'route.model',
	'setting.model',
	'user.model',
	/* CORE PROJECT MODELS END */
	
	/**
	* @PROJECT SPECIFIC
	* These project specific or custom models for this individual project
	
	**/
	/* PROJECT MODELS */

	/* PROJECT MODELS END */
	]
);