(function(){
	var cont = "";
	var midNumKey = 0;
	var mid1NumFlag = false;
	var mid2NumFlag = false;
	var eqlFlag = false;
	var flag = 0;
	var midNum = [];
	var ope;
	var eqlNum;
	var elems;
	var ari;

	window.onload = function init(){
		midNum[0] = document.getElementById("mid1num");
		midNum[1] = document.getElementById("mid2num");
		ope = document.getElementById("ope");
		eqlNum = document.getElementById("eqlnum");
		elems = document.getElementsByClassName("button");
		ari = document.getElementsByClassName("symbol");

		// 数字キーのイベントハンドラ
		for(var i = 0;i < elems.length;i++){
			elems[i].addEventListener("click",function(e){
				pushNumber(e.target.dataset.number);
			},false);
		}

		// 四則演算キーのイベントハンドラ
		for(var i = 0;i < ari.length;i++){
			ari[i].addEventListener("click",function(e){
				pushSymbol(e.target.dataset.number);
			},false);
		}

		// ＝のイベントハンドラ
		document.getElementById("eqlbtn").addEventListener("click",equal,false);

		// ac のイベントハンドラ
		document.getElementById("clr").addEventListener("click",allClear,false);
	}

	// 数字キーが押された際の処理
	function pushNumber(new_num){

		if( eqlFlag || eqlNum.value == "ERROR" || midNum[0].value == "NaN" ){
			allClear();
		}

		if(new_num != "." && midNum[midNumKey].value == "0"){
			midNum[midNumKey].value = new_num;
		}else if(midNum[midNumKey] == ""){
			midNum[midNumKey].value = "0.";
		}else{
			midNum[midNumKey].value += new_num;
		}

		mid1NumFlag = true;
	}

	// 演算子が押された際の処理
	function pushSymbol(new_cont){

		if(midNumKey == 0){
			midNumKey = 1;
		}else if( midNum[0].value == "NaN" || eqlNum.value == "ERROR"){
			allClear();
		}else if( mid1NumFlag || eqlFlag ){
			equal();
			console.log(parseFloat(eqlNum.value));
			var num = parseFloat(eqlNum.value);
			allClear();
			pushNumber(num);
			midNumKey = 1;		
		}

		cont = new_cont;

		if(midNum[1].value == ""){
			midNum[1].value = "0";
		}

		switch(cont){
			case "add":
				ope.textContent = ("+");
				break;
			case "sub":
				ope.textContent = ("-");
				break;
			case "mul":
				ope.textContent = ("×");
				break;
			case "div":
				ope.textContent = ("÷");
				break;
		}

		mid1NumFlag = false;
	}

	//＝を押したときの処理
	function equal() {

		//四則演算ごとの関数を呼び出す
		switch(cont){
			case "add":
				// add関数で足し算の処理
				add();
				break;
			case "sub":
				// sub関数で引き算の処理
				sub();
				break;
			case "mul":
				// mul関数で掛け算の処理
				mul();
				break;
			case "div":
				// div関数で割り算の処理
				div();
				break;
		}

		eqlFlag = true;

	}
	
	/* 演習の編集範囲 はじめ */

	/* 演習1 ここから */
	// TODO: このコメントアウトを削除して書く
	/* 演習1 ここまで */

	/* TODO: 演習2 以降は下記に自由に記入 */

	/* 演習の編集範囲 おわり */

	// ac を押したときの処理
	function allClear(){
		midNum[0].value = "0";
		ope.textContent = " ";
		midNum[1].value = "";
		eqlNum.value = "";
		mid1NumFlag = false;
		eqlFlag = false;
		midNumKey = 0;
	}

}());