angular.module('components', [])
.directive('plugin', ['pluginPopup', function (pluginPopup){
	return {
		restrict: 'E',
		transclude: true,
		scope: { plugin: '=' },
		link: function ($scope, $element, attrs, ctrl, $http, $rootScope) {
			/*$http.get('https://api.github.com/orgs/oraclebimad/repos').success(function(data){
				$scope.plugins = data;
				console.log(data[0]);
			});*/	
			angular.element($element).on('click', function (){
				pluginPopup.setPlugin($scope.plugin);
			});
		},
		templateUrl: 'js/templates/plugin.html'
	};
}])
.directive('popup', ['pluginPopup', '$sce', function (pluginPopup, $sce){
	return{
		restrict: 'E',
		transclude: true,
		link: function ($scope, $element, attrs, ctrl) {
			
			$scope.imageVisible = true;

			$scope.videoImageTab = function (imageVisible){
				if(imageVisible){
					$scope.imageVisible = true;
				} else{
					$scope.imageVisible = false;
				}
			};

			$('#myModal').on('show.bs.modal', function (e) {
			  	$scope.selectedPlugin = pluginPopup.getPlugin();
			  	$scope.selectedPlugin.trusted_video_url = $sce.trustAsResourceUrl($scope.selectedPlugin.video_url);
			  	$scope.$digest();
			});

			$('#myModal').on('hide.bs.modal', function (e){
				$scope.videoImageTab(true);
			})
			
		},
		templateUrl: 'js/templates/popup.html'
	};
}])
.factory('pluginPopup', ['$window', function (win){
	var plugin;
	return {
		getPlugin: function (){
			return plugin;
		},
		setPlugin: function(selectedPlugin){
			plugin = selectedPlugin;
		}
	}
}])
.filter('trustAsResourceUrl', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);