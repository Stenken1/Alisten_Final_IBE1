function Light_Mode(){
	light = document.getElementById('lightmode');
	dark = document.getElementById('darkmode');
	light.style.display="block";
	dark.style.display="none";
	console.log(1)



	white_back = document.getElementsByClassName("white_back");
	if (white_back != null) {
		for (var i = white_back.length - 1; i >= 0; i--) {
			white_back[i].style.backgroundColor = "white";
		}
	}

	beige_back = document.getElementsByClassName("beige_back");
	if (beige_back != null) {
		for (var i = beige_back.length - 1; i >= 0; i--) {
			beige_back[i].style.backgroundColor = "#E3AE8B";
		}
	}

	dark_red_back = document.getElementsByClassName("dark_red_back");
	dark_red_back[0].style.backgroundColor = "#714D56";

	red_font = document.getElementsByClassName("red_font");
	for (var i = red_font.length - 1; i >= 0; i--) {
		red_font[i].style.color = "#714D56";
	}

	hr = document.getElementById("hr");
	if (hr !=null) {
		hr.style.backgroundColor="#92987B";
	}

	black_font = document.getElementsByClassName("black_font");
	for (var i = black_font.length - 1; i >= 0; i--) {
		black_font[i].style.color = "black";
	}
	dark_beige_font = document.getElementsByClassName("dark_beige_font");
	for (var i = dark_green_font.length - 1; i >= 0; i--) {
		dark_beige_font[i].style.color = "#807272";
	}
	footer = document.getElementById("footer");
	footer.style.backgroundColor = "#807272";
	border = document.getElementsByClassName("top_borders");
	if (border != null) {
		for (var i = border.length - 1; i >= 0; i--) {
			border[i].style.borderTop = "1px solid #714D56";
		}
	}
}
function Dark_Mode(){
	light = document.getElementById('lightmode');
	dark = document.getElementById('darkmode');
	light.style.display="none";
	dark.style.display="block";
	console.log(1)

	body = document.getElementById("body");
	body.style.backgroundColor = "#2b2b2b";

	black_back = document.getElementsByClassName("black_back");
	for (var i = black_back.length - 1; i >= 0; i--) {
		black_back[i].style.backgroundColor = "black";
	}
	dark_gray_back = document.getElementsByClassName("dark_gray_back");
	if (dark_gray_back != null) {
		for (var i = dark_gray_back.length - 1; i >= 0; i--) {
			dark_gray_back[i].style.backgroundColor = "#2e2e2e";
		}
	}
		

	white_font = document.getElementsByClassName("white_font");
	for (var i = white_font.length - 1; i >= 0; i--) {
		white_font[i].style.color = "white";
	}

	hr = document.getElementById("hr");
	if (hr != null) {
		hr.style.backgroundColor="black";
	}

	green_font = document.getElementsByClassName("green_font");
	for (var i = green_font.length - 1; i >= 0; i--) {
		green_font[i].style.color = "#92987B";
	}
	dark_green_font = document.getElementsByClassName("dark_green_font");
	for (var i = dark_green_font.length - 1; i >= 0; i--) {
		dark_green_font[i].style.color = "#787d65";
	}
	pplace = document.getElementById("product_place");
	if (pplace) {
		pplace.style.backgroundColor = "#b8b8b8";
	}
	border = document.getElementsByClassName("top_borders");
	if (border != null) {
		for (var i = border.length - 1; i >= 0; i--) {
			border[i].style.borderTop = "none";
		}
	}
}





function Open_Nav(){
	side_navigation = document.getElementById("side_navigation");
	side_navigation.style.display = "block";
}
function Close_Nav(){
	side_navigation = document.getElementById("side_navigation");
	side_navigation.style.display = "none";
}