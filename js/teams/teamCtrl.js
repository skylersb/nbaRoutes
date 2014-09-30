var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){

	$scope.teamData = teamData;
	$scope.newGame = {};
	$scope.showNewGameForm = false;
	$scope.toggleNewGameForm = function(){
		$scope.showNewGameForm !== $scope.showNewGameForm;
	}
	if($routeParams.team === 'utahjazz'){
		$scope.homeTeam = 'Utah Jazz';
		$scope.logoPath = 'images/jazz-logo.png'
	} else if($routeParams.team === 'losangeleslakers'){
		$scope.homeTeam = 'Los Angeles Lakers';
		$scope.logoPath = 'images/lakers-logo.png'
	} else {
		$scope.homeTeam = 'Miami Heat';
		$scope.logoPath = 'images/heat-logo.png'
	}
	$scope.submitGame = function(){
		$scope.homeTeam = $scope.homeTeam.split('').join('').toLowerCase()
		$scope.addNewgame($scope.newGame).then(getTeamData($scope.newGame.homeTeam).then(results))
	}
	$scope.teamData = teamData;
	$scope.newGame = {};
	$scope.showNewGameForm = false;
	console.log($scope)

});

