(function () {
	'use strict';

	angular.module('MenuApp')
	.component('items', {
		templateURL: 'items.items.template.html',
		bindings: {
			items: '<'
		}
	});
})();