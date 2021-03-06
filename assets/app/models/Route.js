/**
* @description 
* Global Route. Model
* humpback-model created at Tue Jun 09 2015 14:23:16 GMT-0400 (EDT)
**/
angular.module('route.model', [
    'humpback.models'
])

/**
* @description 
* Run and ignore for unit testing
* 
**/
.run(function($sailsSocket, DS, RouteService, utils){
	
	if(utils.development()){ console.log(window._name,': listening to route changes')};

    $sailsSocket.subscribe('route', function(envelope){
        //console.log(envelope);
        RouteService.handler[envelope.verb](envelope)
    });

    return DS.defineResource({
        name: 'route',
        maxAge: 36000000,
        deleteOnExpire: 'none',
        onExpire: function (id, route) {
            console.log(id, 'Route Expired');
        },
        storageMode: 'localStorage',
        idAttribute: 'id',
        endpoint: '/route',
        baseUrl: window._prefix || '/api',
        meta: {
            contentCount: 0
        },
        
        /**
        * @description 
        * Model's Life Cycle Callbacks
        * http://www.js-data.io/v1.5.8/docs/dsdefaults
        **/
        beforeInject: function(resource, data){
            //console.log(data);
            /*
            if(data.categories){
                Promise.all(_.map(data.categories, function(category){
                    return DS.inject('category_route__route_category', {
                        id: category.id,
                        category_routes: category.id,
                        route_categories: data.id,
                    });
                }));
            }
            */
        },
        beforeCreate: function (resource, data, cb) {
            cb(null, data);
        },
        beforeUpdate: function(resource, data, cb){
            cb(null, data);
        },
        afterUpdate: function(resource, data, cb){
            cb(null, data);
        },
        afterCreate: function (resource, data, cb) {
            cb(null, data);
        },
        beforeDestroy: function (resource, data, cb) {
            cb(null, data);
        },
        afterDestroy: function (resource, data, cb) {
            cb(null, data);
        },

        /**
        * @description 
        * Define's Relations to the Model 
        * 
        **/
        relations:{
            relations:{
               hasMany: {
                    category_route__route_category: {
                        localField: 'routes',
                        foreignKey: 'route_categories'
                    }
                }
            }
        }
    });
    
})

/**
* @description 
* The RouteService factory Exposes Handler and Service methods for the Route Server Side Model
* 
**/
.factory('RouteService',function(DS, $sailsSocket, utils){
	var _service = {};
	var _handler = {};

    /**
    * @description 
    * When a Route is created that the app is listenting to inject it into the local DB
    * 
    **/
	_handler.created = function(envelope){
        'use strict';
        utils.development(envelope);
        DS.inject('route', envelope.data);
        
    };

    /**
    * @description 
    * When a Route is deleted that the app is listenting to eject it from the local DB 
    * 
    **/
    _handler.deleted = function(envelope){
        'use strict';
        utils.development(envelope);
        DS.eject('route', envelope.data);

    };

    /**
    * @description 
    * When a Route is updated that the app is listenting to inject it from the local DB, or if only a ID fetch it from the server 
    * 
    **/
    _handler.updated = function(envelope){
        'use strict';
        utils.development(envelope);
        if(envelope.data){
            envelope.data.id = envelope.id;
            DS.inject('route', envelope.data);
        }else{
            DS.refresh('route',envelope.id);
        }

    };

    /**
    * @description 
    * When a Route model's collection is added to, inject it into the Route Model 
    * 
    **/
    _handler.addedTo = function(envelope){
        'use strict';
        utils.development(envelope);
    };

    /**
    * @description 
    * When a Route model's collection is detracted from eject it from the Route Model 
    * 
    **/
    _handler.removedFrom = function(envelope){
        'use strict';
        utils.development(envelope);
    };

    /**
    * @description 
    * When a Route model is messaged 
    * 
    **/
    _handler.messaged = function(envelope){
        'use strict';
        utils.development(envelope);
    };

	return {
		service : _service,
		handler : _handler
	}
});