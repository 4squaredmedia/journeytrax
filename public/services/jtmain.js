'use strict';

//Service used for Journey Trax Webservice
angular.module('mean').factory('Journeys', ['$resource',
	function($resource) {
		return $resource('journey/:journeyId', {
			journeyId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
