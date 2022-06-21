
let food =[{samosa_price:15,samosa_qty:0},{panipuri_price:20,panipuri_qty:0},{tikki_price:25,tikki_qty:0},{bhel_price:20,bhel_qty:0},{vadapav_price:15,vadapav_qty:0},{soda_price:20,soda_qty:0}];
 
function display()
{
 document.getElementById("show").innerHTML="samosa quantity: " + food[0].samosa_qty +"</br>"+ "panipuri quantity: " + food[1].panipuri_qty + "</br>"+ "tikki quantity: " + food[2].tikki_qty + "</br>" + "bhel quantity: " + food[3].bhel_qty + "</br>" +"vadapav quantity: " +  food[4].vadapav_qty + "</br>" + "soda quantity: " + food[5].soda_qty;
 
}


function add_samosa()
{
    food[0].samosa_qty++;
     display();
}
function add_pani_puri()
{
    food[1].panipuri_qty++; 
    display();
}
function add_tik_cht()
{
    food[2].tikki_qty++;
    display();
}
function add_indori_bhel()
{
    food[3].bhel_qty++;
    display();
}
function add_vada_pav()
{
    food[4].vadapav_qty++;
    display();
} 
function add_soda()
{
    food[5].soda_qty++;
    display();
}
