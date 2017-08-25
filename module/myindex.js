var app=angular.module("myindexModule",[]);
app.controller("myindexctrl",function($scope){
	$scope.toggle = function(index){
        $scope.visible = !$scope.visible;
		$('ft').style.display = 'none';
		$('swi').children[index].className = 'home container swiper-slide swiper-no-swiping';
	},
	$scope.toggle2 = function(index){
        $scope.visible = !$scope.visible;
		$('ft').style.display = 'block';
		$('swi').children[index].className = 'home container swiper-slide swiper-slide-active';
	}
	$scope.sea = function(){
        $scope.seadiv = !$scope.seadiv;
	}
	$scope.dagou = function(index){
		var collLis = $('coll').getElementsByTagName('li');
		for(var i=0;i<collLis.length;i++){
			collLis[i].childNodes[1].style.display = 'none';
		}
		collLis[index].childNodes[1].style.display = 'block';
	}
})
