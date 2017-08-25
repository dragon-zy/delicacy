var app=angular.module("dmoudle",[])
//.directive("box",function(){		//指令
//	 return {
//	 	scope:{},
//	 	restrict:'AE',
//	 	templateUrl:"body.html",
//	 	replace:true
//	 }
//})
.directive("myindex",function(){		//指令
	 return {
	 	scope:{},
	 	restrict:'AE',
	 	templateUrl:"myindex.html",
	 	replace:true
	 }
})
.directive("classr",function(){
	 return {
	 	scope:{},
	 	restrict:'AE',
	 	templateUrl:'views/classr.html',
	 	replace:true
	 }
})
.directive("classb",function(){
	 return {
	 	scope:{},
	 	restrict:'AE',
	 	templateUrl:'views/classb.html',
	 	replace:true
	 }
})
.directive("delic",function(){
	 return {
	 	scope:{},
	 	restrict:'AE',
	 	templateUrl:"delic.html",
	 	replace:true
	 }
})
.directive("myhome",function(){
	 return {
	 	scope:{},
	 	restrict:'AE',
	 	templateUrl:"myhome.html",
	 	replace:true
	 }
})
