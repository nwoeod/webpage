var data_arr = [];
var temp = "";


function readTxt(e){
	//console.log("1");
	//var temp =  document.getElementById("email").value;
    //document.getElementById("demo").innerHTML = temp;
	
	
	var fileList = e.files;
	if(!fileList || fileList.length <= 0){
		return false;
	}
	
	if(fileList[0]['type'] != 'text/plain'){
		alert("請讀取txt檔")
		return;
	}
	
	var reader = new FileReader();
	reader.readAsText(fileList[0], "UTF-8");
	
	reader.onload = function (e) {
		//console.log(reader.result);
		//document.getElementById("demo").innerHTML = reader.result;
		
		var str = JSON.parse(reader.result);
		data_arr = JSON.parse(reader.result);
		//str.push({"name":"aa","age":"20"});
		
		document.getElementById("demo").innerHTML = JSON.stringify(str);
		
		var arr = JSON.stringify(str).split(",");
		temp = "";
		
		for(var i=0; i<str.length; i++){
			if(i==0){
				temp += "[" + JSON.stringify(str[i]) + ",\n";
			}else if(i==str.length-1){
				temp += JSON.stringify(str[i]) + "]\n";
			}else{
				temp +=  JSON.stringify(str[i]) + ",\n";
			}
			
			
		}
		
		
	}
	
	//savefiles(temp, 'json.txt');
	
}

function showDate(){
	
	for(var i=0; i<data_arr.length; i++){
		
		document.getElementById("demo").innerHTML += 
		'<div class="media">'+
		'	<div class="media-left media-top">'+
		'		<img src="'+ data_arr[i].img +'" class="media-object" style="width:60px">'+
		'	</div>'+
		'	<div class="media-body">'+
		'		<h4 class="media-heading">'+ data_arr[i].name +'</h4>'+
		'		<p>'+data_arr[i].remake+'</p>'+
		'	</div>'+
		'</div>'+
		'<hr>';
		
	}
	
	
}


function readImg(e){
	
	var fileList = e.files;
	if(!fileList || fileList.length <= 0){
		return false;
	}
	
	
	var reader = new FileReader();
	reader.readAsDataURL(fileList[0]);
	
	reader.onload = function (e) {
		var img = new Image();
		img.scr = reader.result;
		//document.getElementById("demo").innerHTML = img.scr;
		$('<img src="' + this.result + '" width="200">').appendTo('body');
	}
	
	
	
}

/**
 * @param data 需要保存的内容
 * @param name 保存的文件名 
 */
function savefiles(data, name) {
	//Blob为js的一个对象，表示一个不可变的, 原始数据的类似文件对象，这是创建文件中不可缺少的！
	var urlObject = window.URL || window.webkitURL || window;
	var export_blob = new Blob([data]);
	var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
	save_link.href = urlObject.createObjectURL(export_blob);
	save_link.download = name;
	save_link.click();
}