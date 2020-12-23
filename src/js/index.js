import '../css/index.less';
import base from '../assets/js/common.js';
import Clipboard from 'clipboard';
const url_8008='http://10.88.71.83:8008';
const copyDatas= function(){  
	 var data_arr=$('#h5_after_payment .hap_content li .val');
	 var username=data_arr.eq(0).text();
	 var password=data_arr.eq(1).text();
	 console.log(username,password);
	 let clipboard = new Clipboard('#h5_after_payment', {
	 text: function () {
	   return `用户名：${username}，密码：${password}`
	 }
   });
	 
};
window.onload=function(){
	$("#h5_after_payment").on('click',
		copyDatas
	)
	$("#h5_after_payment").trigger('click');
	
}