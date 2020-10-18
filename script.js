
function btnDaftar() {

	let namalengkap = document.getElementById("f_namalengkap").value;
	let jenkel = radioValidation();
	let Hobi = HobiValidation();
	let email = emailIsValid();
	let telp = document.getElementById("f_telp").value;

	let username = document.getElementsByName('f_username')[0].value;
	let password = document.getElementsByName('f_password')[0].value;

	if(namalengkap == "") {
		alert('Field Nama lengkap harus di isi !');
		return;
	} if (!jenkel){
		alert('Mohon pilih Jenis Kelamin !');
		return;
	} if(!Hobi) {
		alert('Mohon pilih Hobi !');
		return;
	} if(!email) {
		alert('Field email salah, mohon periksa kembali !');
		return;
	} if(username == ""){
		alert('Field Username tidak boleh kosong');
		return
	} if(username.length > 10){
		alert('Field Username maksimal 10 char');
		return
	} if(password == ""){
		alert('Field Password tidak boleh kosong');
		return
	} if(password.length < 7){
		alert('Field Password minimal 7 char');
		return
	} if(telp == ""){
		alert('Field Telp tidak boleh kosong');
		return
	} else {
		alert('sukses mendaftar');
	}
	
}

function btnReset() {
	document.getElementById("FormValidation").reset();
}

function radioValidation(){
	let elements = document.getElementsByName('f_jenkel');
	let JenkelValue = false;

	elements.forEach(e => {
        if (e.checked) {
            JenkelValue = e.value;
        }
	});
	
	return JenkelValue;

}

function HobiValidation(){
	
    let elements = document.getElementsByName("f_hobi[]");
	let HobiChecked=false;

	elements.forEach(e => {
        if (e.checked) {
            HobiChecked = e.value;
        }
	});

	return HobiChecked;

}

function emailIsValid () {
	let email = document.getElementById("f_email").value;
	if(email!= ""){
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	} else {
		return false;
	}
	
}

function isNumber(evt) {
	
	var iKeyCode = (evt.which) ? evt.which : evt.keyCode
	if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
		return false;

	return true;
}    