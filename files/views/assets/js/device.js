
if(localStorage.getItem ('user_id') !== null){

	Apperyio.navigateTo('mainpage', {});
}else{
	Appery('mobilecollapsibleset_89').show();
}