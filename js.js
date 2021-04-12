var pilih;

function batu() {
	pilih = 1;
	game();
}

function gunting() {
	pilih = 2;
	game();
}

function kertas() {
	pilih = 3;
	game();
}

function game() {
	var komputer = Math.floor(Math.random() * (3)) + 1;
	if (pilih == 1 && komputer == 1) {
		tampil("manusia", "rock");
		tampil("komputer", "rock");
		seri();
	} else if (pilih == 1 && komputer == 2) {
		tampil("manusia", "rock");
		tampil("komputer", "scissors");
		menang();
	} else if (pilih == 1 && komputer == 3) {
		tampil("manusia", "rock");
		tampil("komputer", "paper");
		kalah();
	} else if (pilih == 2 && komputer == 1) {
		tampil("manusia", "scissors");
		tampil("komputer", "rock");
		kalah();
	} else if (pilih == 2 && komputer == 2) {
		tampil("manusia", "scissors");
		tampil("komputer", "scissors");
		seri();
	} else if (pilih == 2 && komputer == 3) {
		tampil("manusia", "scissors");
		tampil("komputer", "paper");
		menang();
	} else if (pilih == 3 && komputer == 1) {
		tampil("manusia", "paper");
		tampil("komputer", "rock");
		menang();
	} else if (pilih == 3 && komputer == 2) {
		tampil("manusia", "paper");
		tampil("komputer", "scissors");
		kalah();
	} else if (pilih == 3 && komputer == 3) {
		tampil("manusia", "paper");
		tampil("komputer", "paper");
		seri();
	}

	document.getElementById('mulai').style.display = "none";
	document.getElementById('hasil').style.display = "block";
}

function tampil(id, nilai) {
	document.getElementById(id).className = "far fa-hand-" + nilai;
}

function menang() {
	document.getElementById('pesan').innerHTML = "Selamat Anda menang !!";
}

function seri() {
	document.getElementById('pesan').innerHTML = "Hasil seri, silahkan coba lagi .";
}

function kalah() {
	document.getElementById('pesan').innerHTML = "Uh oh, Anda sedang tidak beruntung :(";
}

function ulang() {
	document.getElementById('mulai').style.display = "block";
	document.getElementById('hasil').style.display = "none";
}