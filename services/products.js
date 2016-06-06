angular
	.module('myStore')
	.factory('Products',function(){
		return{
			get:function(){
				return [
					{"name": "Will", "age": 30, "isSpecial": false},
  					{"name": "Laura", "age": 26, "isSpecial": true}
				];
			}
		};
	})