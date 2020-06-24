let selector;
let text;
let title;

window.onload = function() {
	categoria();
	produto();
	marca();
}
function categoria(event) {
	selector = document.getElementById('selectCategoria');
	text = selector[selector.selectedIndex].text;
	if(text == "Roupa"){
		document.getElementById("produto0").textContent = "Camiseta";
		document.getElementById("produto1").textContent = "Calça";
	} else {
		document.getElementById("produto0").textContent = "Macarrão";
		document.getElementById("produto1").textContent = "Arroz";
	}
	produto();
}
function produto(event) {
	selector = document.getElementById('selectProduto');
	text = selector[selector.selectedIndex].text;
	if(text == "Macarrão"){
		document.getElementById("marca0").textContent = "Macarrão1";
		document.getElementById("marca1").textContent = "Macarrão2";
	} else if(text == "Arroz") {
		document.getElementById("marca0").textContent = "Arroz1";
		document.getElementById("marca1").textContent = "Arroz2";
	} else if(text == "Camiseta") {
		document.getElementById("marca0").textContent = "Camiseta1";
		document.getElementById("marca1").textContent = "Camiseta2";
	} else if(text == "Calça") {
		document.getElementById("marca0").textContent = "Calça1";
		document.getElementById("marca1").textContent = "Calça2";
	}
	marca();
}

let bars = [
    ['Month', 'Sales'],
    ["January", 0],
    ["February", 0],
    ["March", 0],
    ["April", 0],
];

function marca(event){
    selector = document.getElementById('selectMarca');
    text = selector[selector.selectedIndex].text;
    title = `Monthly sale of ${text}`
    if(text == "Macarrão1"){
        bars = [
        ['Month', 'Sales'],
		["January", 3],
		["February", 7],
		["March", 5],
		["April", 9],
        ];
        draw(bars, title);
	} else if(text == "Macarrão2"){
		bars = [
		['Month', 'Sales'],
		["January", 8],
		["February", 2],
		["March", 7],
		["April", 12],
		];
		draw(bars, title)
	} else if(text == "Arroz1"){
		bars = [
		['Month', 'Sales'],
		["January", 33],
		["February", 23],
		["March", 10],
		["April", 27],
		];
		draw(bars, title)
	} else if(text == "Arroz2"){
		bars = [
		['Month', 'Sales'],
		["January", 13],
		["February", 21],
		["March", 33],
		["April", 31],
		];
		draw(bars, title)
	} else if(text == "Calça1"){
		bars = [
		['Month', 'Sales'],
		["January", 15],
		["February", 27],
		["March", 38],
		["April", 30],
		];
		draw(bars, title)
	} else if(text == "Calça2"){
		bars = [
		['Month', 'Sales'],
		["January", 25],
		["February", 17],
		["March", 38],
		["April", 43],
		];
		draw(bars, title)
	} else if(text == "Camiseta1"){
		bars = [
		['Month', 'Sales'],
		["January", 11],
		["February", 9],
		["March", 20],
		["April", 7],
		];
		draw(bars, title)
	} else if(text == "Camiseta2"){
		bars = [
		['Month', 'Sales'],
		["January", 22],
		["February", 30],
		["March", 15],
		["April", 9],
		];
		draw(bars, title)
	}
}
  
  
function draw(bars, title){
	google.charts.load('current', {
		packages: ['bar']
	  }).then(drawStuff);
	google.charts.setOnLoadCallback(drawStuff);
	function drawStuff() {
		var data = new google.visualization.arrayToDataTable(bars);
		var options = {
            height: 450,
            bar: { groupWidth: "40%" },
			legend: { position: 'none' },
			is3D:true,
			chart: {
				title: title},
				axes: {
					x: {
									0: { side: 'bottom', label: ' '} // Top x-axis.
								}
							},
						};
						var chart = new google.charts.Bar(document.getElementById('chart-container'));
						chart.draw(data, google.charts.Bar.convertOptions(options));
						window.addEventListener('resize', drawStuff, false);
				}
		}