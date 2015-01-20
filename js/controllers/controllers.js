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
					'img_url': 'img/circle-percent.jpg',
					'title': 'Image title',
					'description': 'Lorem ipsum dolor sit amet, no pri libris consetetur'
				},
				{
					'img_url': 'img/donuts-chart.jpg',
					'title': 'Image title',
					'description': 'Lorem ipsum dolor sit amet, no pri libris consetetur'
				},
				{
					'img_url': 'img/bar-chart-with-color.jpg',
					'title': 'Image title',
					'description': 'Lorem ipsum dolor sit amet, no pri libris consetetur'
				}
				],
			'thumbnail': 'img/donuts-chart.jpg',
			'video_thumb':'',
			'video_url': 'http://player.vimeo.com/video/116582567',
			'author': 'Oracle BIMAD',
			'download_link':'https://github.com/oraclebimad/donut/archive/master.zip',
			'description': 
				'Lorem ipsum dolor sit amet, no pri libris consetetur, nec epicuri suscipit in. Sit no vidisse maluisset, ' +
				'mei aeque affert mollis ut. Amet solet recteque id eum. Vis ut oblique omnesque officiis, et soleat fuisset ' +
				'mea, exerci consul nusquam per te. Ea nam persius voluptaria neglegentur. In error latine equidem sea. \n'+
				'Ne esse melius consetetur duo. Essent honestatis vis eu, his audiam iriure intellegebat in. Nobis tollit '+
				'conclusionemque mea no, aperiam pericula concludaturque vix ad. In eum nisl erroribus, ex sea omnes tation '+
				'consequat. Erat harum voluptua id mea, et vis epicurei definitionem. Platonem iudicabit an qui, tale nobis '+
				'iisque eos et.\n'+
				'His cu illud prompta, ea falli disputando quo. Mea quis duis simul in, cu putent insolens nominati quo. '+
				'Congue fierent elaboraret has te, mei in noster fabellas facilisis, has ut quando mnesarchum. Conceptam '+
				'cotidieque ne quo, odio falli corpora ne mea. Case commune ei cum.\n'+
				'Everti evertitur at eam, his dicunt impetus te. Ne mea nibh dicit. His alii intellegebat cu, at error '+
				'cetero mel. Id cum omnesque scripserit reformidans, ex usu omnis nihil. Vel meis latine ullamcorper ut, '+
				'nec at labores molestie, et aperiam facilis officiis eos.',
			'repo_url': 'https://github.com/oraclebimad/donut'
		},
		{
			'id':'2',
			'name':'Treemap',
			'gallery':
				[{
					'img_url': 'img/circle-percent.jpg',
					'title': 'Image title asdf',
					'description': 'Lorem ipsum dolor sit amet, no pri libris consetetur'
				},
				{
					'img_url': 'img/donuts-chart.jpg',
					'title': 'Image title asdf',
					'description': 'Lorem ipsum dolor sit amet, no pri libris consetetur'
				},
				{
					'img_url': 'img/bar-chart-with-color.jpg',
					'title': 'Image title asdf',
					'description': 'Lorem ipsum dolor sit amet, no pri libris consetetur'
				}
				],
			'thumbnail': 'img/treemap.jpg',
			'video_thumb':'',
			'video_url': 'http://player.vimeo.com/video/116582567',
			'author': 'Oracle BIMAD',
			'download_link':'https://github.com/oraclebimad/donut/archive/master.zip',
			'description': 
				'His cu illud prompta, ea falli disputando quo. Mea quis duis simul in, cu putent insolens nominati quo. '+
				'Congue fierent elaboraret has te, mei in noster fabellas facilisis, has ut quando mnesarchum. Conceptam '+
				'cotidieque ne quo, odio falli corpora ne mea. Case commune ei cum.\n'+
				'Lorem ipsum dolor sit amet, no pri libris consetetur, nec epicuri suscipit in. Sit no vidisse maluisset, ' +
				'mei aeque affert mollis ut. Amet solet recteque id eum. Vis ut oblique omnesque officiis, et soleat fuisset ' +
				'mea, exerci consul nusquam per te. Ea nam persius voluptaria neglegentur. In error latine equidem sea. \n'+
				'Ne esse melius consetetur duo. Essent honestatis vis eu, his audiam iriure intellegebat in. Nobis tollit '+
				'conclusionemque mea no, aperiam pericula concludaturque vix ad. In eum nisl erroribus, ex sea omnes tation '+
				'consequat. Erat harum voluptua id mea, et vis epicurei definitionem. Platonem iudicabit an qui, tale nobis '+
				'iisque eos et.\n'+
				'Everti evertitur at eam, his dicunt impetus te. Ne mea nibh dicit. His alii intellegebat cu, at error '+
				'cetero mel. Id cum omnesque scripserit reformidans, ex usu omnis nihil. Vel meis latine ullamcorper ut, '+
				'nec at labores molestie, et aperiam facilis officiis eos.',
			'repo_url': 'https://github.com/oraclebimad/donut'
		},
		{
			'id':'3',
			'name':'Line Chart Color',
			'gallery':
				[{
					'img_url': 'img/circle-percent.jpg',
					'title': 'Image title asdf',
					'description': 'Lorem ipsum dolor sit amet, no pri libris consetetur'
				},
				{
					'img_url': 'img/donuts-chart.jpg',
					'title': 'Image title asdf',
					'description': 'Lorem ipsum dolor sit amet, no pri libris consetetur'
				},
				{
					'img_url': 'img/bar-chart-with-color.jpg',
					'title': 'Image title asdf',
					'description': 'Lorem ipsum dolor sit amet, no pri libris consetetur'
				}
				],
			'thumbnail': 'img/bar-chart-with-color.jpg',
			'video_thumb':'',
			'video_url': 'http://player.vimeo.com/video/116582567',
			'author': 'Oracle BIMAD',
			'download_link':'https://github.com/oraclebimad/donut/archive/master.zip',
			'description': 
				'His cu illud prompta, ea falli disputando quo. Mea quis duis simul in, cu putent insolens nominati quo. '+
				'Congue fierent elaboraret has te, mei in noster fabellas facilisis, has ut quando mnesarchum. Conceptam '+
				'cotidieque ne quo, odio falli corpora ne mea. Case commune ei cum.\n'+
				'Lorem ipsum dolor sit amet, no pri libris consetetur, nec epicuri suscipit in. Sit no vidisse maluisset, ' +
				'mei aeque affert mollis ut. Amet solet recteque id eum. Vis ut oblique omnesque officiis, et soleat fuisset ' +
				'mea, exerci consul nusquam per te. Ea nam persius voluptaria neglegentur. In error latine equidem sea. \n'+
				'Ne esse melius consetetur duo. Essent honestatis vis eu, his audiam iriure intellegebat in. Nobis tollit '+
				'conclusionemque mea no, aperiam pericula concludaturque vix ad. In eum nisl erroribus, ex sea omnes tation '+
				'consequat. Erat harum voluptua id mea, et vis epicurei definitionem. Platonem iudicabit an qui, tale nobis '+
				'iisque eos et.\n'+
				'Everti evertitur at eam, his dicunt impetus te. Ne mea nibh dicit. His alii intellegebat cu, at error '+
				'cetero mel. Id cum omnesque scripserit reformidans, ex usu omnis nihil. Vel meis latine ullamcorper ut, '+
				'nec at labores molestie, et aperiam facilis officiis eos.',
			'repo_url': 'https://github.com/oraclebimad/donut'
		},
		{
			'id':'4',
			'name':'Line Chart No Color',
			'gallery':
				[{
					'img_url': 'img/circle-percent.jpg',
					'title': 'Image title asdf',
					'description': 'Lorem ipsum dolor sit amet, no pri libris consetetur'
				},
				{
					'img_url': 'img/donuts-chart.jpg',
					'title': 'Image title asdf',
					'description': 'Lorem ipsum dolor sit amet, no pri libris consetetur'
				},
				{
					'img_url': 'img/bar-chart-with-color.jpg',
					'title': 'Image title asdf',
					'description': 'Lorem ipsum dolor sit amet, no pri libris consetetur'
				}
				],
			'thumbnail': 'img/bar-chart-no-color.jpg',
			'video_thumb':'',
			'video_url': 'http://player.vimeo.com/video/116582567',
			'author': 'Oracle BIMAD',
			'download_link':'https://github.com/oraclebimad/donut/archive/master.zip',
			'description': 
				'His cu illud prompta, ea falli disputando quo. Mea quis duis simul in, cu putent insolens nominati quo. '+
				'Congue fierent elaboraret has te, mei in noster fabellas facilisis, has ut quando mnesarchum. Conceptam '+
				'cotidieque ne quo, odio falli corpora ne mea. Case commune ei cum.\n'+
				'Lorem ipsum dolor sit amet, no pri libris consetetur, nec epicuri suscipit in. Sit no vidisse maluisset, ' +
				'mei aeque affert mollis ut. Amet solet recteque id eum. Vis ut oblique omnesque officiis, et soleat fuisset ' +
				'mea, exerci consul nusquam per te. Ea nam persius voluptaria neglegentur. In error latine equidem sea. \n'+
				'Ne esse melius consetetur duo. Essent honestatis vis eu, his audiam iriure intellegebat in. Nobis tollit '+
				'conclusionemque mea no, aperiam pericula concludaturque vix ad. In eum nisl erroribus, ex sea omnes tation '+
				'consequat. Erat harum voluptua id mea, et vis epicurei definitionem. Platonem iudicabit an qui, tale nobis '+
				'iisque eos et.\n'+
				'Everti evertitur at eam, his dicunt impetus te. Ne mea nibh dicit. His alii intellegebat cu, at error '+
				'cetero mel. Id cum omnesque scripserit reformidans, ex usu omnis nihil. Vel meis latine ullamcorper ut, '+
				'nec at labores molestie, et aperiam facilis officiis eos.',
			'repo_url': 'https://github.com/oraclebimad/donut'
		}
	];
}]);