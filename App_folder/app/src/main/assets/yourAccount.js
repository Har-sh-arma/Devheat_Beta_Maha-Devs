
//Adding user data

var user = {name:"Default",
            address:"Flat/ Locality/Area",
            phone:"+91 XXXXX XXXXX",
            email:"example@example.com",
            GSTIN:"22 AAAAA0000A 1Z5",
            invoice_num:0};

function load_data(){
    user = JSON.parse(Android.load_user_data());
}

function add_data(){
    return Android.add_user_data(JSON.stringify(user));
}

window.onload = function(){
  load_data();
  for(let i = 0; i< 6; i++){
      document.getElementById(Object.keys(user)[i]).placeholder = user[Object.keys(user)[i]];
    }
}

function submit(){
  for(let i = 0; i< 6; i++){
    user[Object.keys(user)[i]] = document.getElementById(Object.keys(user)[i]).value;
    add_data();
    document.getElementById(Object.keys(user)[i]).placeholder = document.getElementById(Object.keys(user)[i]).value;
    document.getElementById(Object.keys(user)[i]).value = "";
  }
}

function validate(){
   console.log("inside validate function");
   var email_id = document.getElementById("email").value ;
   var phone_no = document.getElementById("phone").value ;
   var gst_no = document.getElementById("GSTIN").value ;
   var bussiness_name = document.getElementById("name").value ;
   var last_invoice_no = document.getElementById("invoice_num").value ;
   var bussiness_addr = document.getElementById("address").value ;
   var chk_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   var chk_gst_no = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
   var chk_phone_no =  /^[0-9]{10}$/;


   if((chk_email.test(email_id)) && (chk_phone_no.test(phone_no)) && (chk_gst_no.test(gst_no)) && (last_invoice_no!="") && (bussiness_name!="") && (bussiness_addr!="")){
    submit();
    Android.showToast("Details Saved");
    return true;
   }
   else
   {
     Android.showToast("Invalid Credentials");
     console.log("inside else statment of validate fun");
      return false;
   }

}
