//var app = angular.module('ListaTarefas', []);
var app = angular.module('ListaTarefas', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('listaTarefas', {
        url: '/',
        templateUrl: 'views/listaTarefas.html'
    });

    $stateProvider.state('adicionarTarefa', {
        url: '/adicionarTarefa',
        templateUrl: 'views/adicionarTarefa.html'
    });

    $urlRouterProvider.otherwise('/');

});

app.controller('PrincipalCtrl', function ($scope, $http) {
    $scope.listaTarefas = [];

    $http.get('tarefas.json').then(function (response) {
        $scope.listaTarefas = response.data;
    });

    $scope.adicionarTarefa = function () {
        $scope.listaTarefas.push($scope.tarefa);
        $scope.limparCampos();
    };
    
    $scope.limparCampos = function(){
      $scope.tarefa = null;  
    };
});