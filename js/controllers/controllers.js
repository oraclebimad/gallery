angular.module('BIMADGallery', ['components'])
.controller('PluginListCtrl', ['$scope', '$http', 'pluginPopup', function ($scope, $http, pluginPopup) {
	$scope.$watch(function () { return pluginPopup.getPlugin(); }, function (newValue) {
        if (newValue) $scope.popupPlugin = newValue;
    });
    
	$scope.plugins = [
		{
			'id':'1',
			'name':'Donuts Chart',
			'gallery':
				[{
					'img_url': 'img/donut-1.jpg',
					'title': '',
					'description': ''
				},
				{
					'img_url': 'img/donut-2.jpg',
					'title': '',
					'description': ''
				}
				],
			'thumbnail': 'img/donuts-chart.jpg',
			'video_thumb':'',
			'video_url': 'http://player.vimeo.com/video/117539755',
			'author': 'Oracle BIMAD',
			'download_link':'https://github.com/oraclebimad/donut/archive/master.zip',
			'description': 
				'',
			'repo_url': 'https://github.com/oraclebimad/donut'
		},
		{
			'id':'2',
			'name':'Treemap with Zoom in',
			'gallery':
				[{
					'img_url': 'img/treemap-1.jpg',
					'title': '',
					'description': ''
				}
				],
			'thumbnail': 'img/treemap.jpg',
			'video_thumb':'',
			'video_url': 'http://player.vimeo.com/video/117541986',
			'author': 'Oracle BIMAD',
			'download_link':'https://github.com/oraclebimad/Treemap/archive/master.zip',
			'description': '',
			'repo_url': 'https://github.com/oraclebimad/Treemap'
		},
		{
			'id':'3',
			'name':'Line Bar with Color',
			'gallery':
				[{
					'img_url': 'img/line-bar-chart-color-1.jpg',
					'title': '',
					'description': ''
				},
				{
					'img_url': 'img/line-bar-chart-color-2.jpg',
					'title': '',
					'description': ''
				}
				],
			'thumbnail': 'img/bar-chart-with-color.jpg',
			'video_thumb':'',
			'video_url': 'http://player.vimeo.com/video/117541838',
			'author': 'Oracle BIMAD',
			'download_link':'https://github.com/oraclebimad/line-chart-color/archive/master.zip',
			'description': 
				'',
			'repo_url': 'https://github.com/oraclebimad/line-chart-color'
		},
		{
			'id':'4',
			'name':'Line Bar',
			'gallery':
				[{
					'img_url': 'img/line-bar-chart-1.jpg',
					'title': '',
					'description': ''
				}
				],
			'thumbnail': 'img/bar-chart-no-color.jpg',
			'video_thumb':'',
			'video_url': 'http://player.vimeo.com/video/117530869',
			'author': 'Oracle BIMAD',
			'download_link':'https://github.com/oraclebimad/line-chart-no-color/archive/master.zip',
			'description': 
				'',
			'repo_url': 'https://github.com/oraclebimad/line-chart-no-color'
		},
		{
			'id':'5',
			'name':'Scatterplot',
			'gallery':
				[{
					'img_url': 'img/scatterplot-1.jpg',
					'title': '',
					'description': ''
				},
				{
					'img_url': 'img/scatterplot-2.jpg',
					'title': '',
					'description': ''
				}
				],
			'thumbnail': 'img/scatterplot.jpg',
			'video_thumb':'',
			'video_url': 'http://player.vimeo.com/video/117544283',
			'author': 'Oracle BIMAD',
			'download_link':'https://github.com/oraclebimad/scatterplot/archive/master.zip',
			'description': 
				'',
			'repo_url': 'https://github.com/oraclebimad/scatterplot'
		}
	];
}]);