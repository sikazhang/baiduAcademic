/*
* @Author: whuzxq
* @Date:   2017-08-31 09:27:22
* @Last Modified by:   whuzxq
* @Last Modified time: 2017-08-31 09:43:18
*/
var EventUtil={
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type]=handler;
		}
	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler);
		}else{
			element["on"+type]=null;
		}
	}
};