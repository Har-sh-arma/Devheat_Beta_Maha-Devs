
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
