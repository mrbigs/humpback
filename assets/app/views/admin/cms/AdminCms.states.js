/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 11:28:21 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminCms.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.cms', {
			url: '/cms?skip?sort?limit?criteria?page',
			reloadOnSearch: false,
			ncyBreadcrumb: {
          		label: 'Content Management'
        	},
			views: {
				"admin": {
					controller: 'AdminCmsCtrl',
					templateUrl: 'app/views/admin/cms/index.html'
				}
			}
		})
		;
});