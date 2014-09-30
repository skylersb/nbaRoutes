var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){

var teamsArray = [];
teamsArray.push(teamService.getTeamData('utahjazz').then);
teamsArray.push(teamService.getTeamData('miamiheat').then);
teamsArray.push(teamService.getTeamData('lalakers').then);
console.log(teamsArray)

});