/**
 * Created by Michel on 09/12/2016.
 */

var app = angular.module('formulario', ['ngMask']);

app.controller('myCtrl', function($scope) {
    $scope.dados = [];


    $scope.validaNome = function(e){
       if($scope.nome){
             nome = $scope.nome.replace(/[^a-zA-Z]/g,"");
            $scope.nome = nome;
       }
    }

    $scope.validaTel = function(e) {
        if($scope.phone) {
            numero = $scope.phone.replace(/\D/g, "");
            $scope.phone = numero;
        }
    }

     $scope.validaEmail = function(e){
         // if($scope.myForm.email.$$rawModelValue) {
            req = /[^a-zA-Z 0-9 @ . - _]/g;
             emailValida = $scope.myForm.email.$$rawModelValue.replace(req, "");
             $scope.email = emailValida;
         // }
    }
    $scope.enviaDados = function() {
        console.log($scope.myForm);
        if ($scope.myForm.$valid) {
           $scope.dados.push({nome:$scope.nome,tel:$scope.phone,email:$scope.email});
            limpaForm();
        }
    }
    $scope.limpaForm = function(){
        limpaForm();
    }
    function limpaForm(){

        $scope.myForm.$setPristine();
        $scope.nome = "";
        $scope.phone = "";
        $scope.email = "";
    }
});
