function sendFun(){

}

window.onload=function(){
    var firebaseRef=firebase.database().ref("User");
    firebaseRef.once('value').then(function(dataSnapshot){  //ดึงข้อมูลในfirebase
        console.log(dataSnapshot.val());
    });

}