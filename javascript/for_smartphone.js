
let food =[{amount:0,name:"samosa",price:15,qty:0},{amount:0,name:"pani puri",price:20,qty:0},{amount:0,name:"tikki chaat",price:25,qty:0},{amount:0,name:"indori bhel",price:20,qty:0},{amount:0,name:"vada pav",price:15,qty:0},{amount:0,name:"neembu soda",price:20,qty:0}];
let serial_no=[];
let index=0;
let serial=[{samosa:0},{panipuri:0},{tikki:0},{bhel:0},{vadapav:0},{soda:0}]
let total=0;
/*function display()
{
 document.getElementById("show").innerHTML="samosa quantity: " + food[0].qty +"</br>"+ "panipuri quantity: " + food[1].qty + "</br>"+ "tikki quantity: " + food[2].qty + "</br>" + "bhel quantity: " + food[3].qty + "</br>" +"vadapav quantity: " +  food[4].qty + "</br>" + "soda quantity: " + food[5].qty;
 
}*/
function display_row(row_no,item)
{
    document.getElementById((row_no*10)+1).innerHTML=row_no;
    document.getElementById((row_no*10)+2).innerHTML=food[item].name;
    document.getElementById((row_no*10)+3).innerHTML=food[item].qty;
    document.getElementById((row_no*10)+4).innerHTML=food[item].amount;
}
function display_total()
{
    total= food[0].amount+food[1].amount+food[2].amount+food[3].amount+food[4].amount+food[5].amount; 
    document.getElementById("total").innerHTML=total;     
}


function add_samosa()
{
    if(food[0].qty==0)
    {
        food[0].qty++;
        food[0].amount=food[0].qty*food[0].price;
        index++;
        serial_no[index]=0; //intialized serial_no arry with appropriate index(serial no) as "0"
        serial.samosa=index; //intialized that samosa item has serial no '1'
        display_row(serial.samosa,serial_no[serial.samosa]);
        display_total();
        //create delete button with id =(index*10) 
    }
    else
    {
        food[0].qty++;
        food[0].amount=food[0].qty*food[0].price;
        display_row(serial.samosa,serial_no[serial.samosa]);   
    }   display_total();
}
function add_pani_puri()
{
    if(food[1].qty==0)
    {
        food[1].qty++;
        food[1].amount=food[1].qty*food[1].price;
        index++;
        serial_no[index]=1; //intialized serial_no arry with appropriate index(serial no) as "0"
        serial.panipuri=index; //intialized that samosa item has serial no '1'
        display_row(serial.panipuri,serial_no[serial.panipuri]); 
        display_total();  
        //create delete button with id =(index*10) 
    }
    else
    {
        food[1].qty++;
        food[1].amount=food[1].qty*food[1].price;
        display_row(serial.panipuri,serial_no[serial.panipuri]); 
        display_total();  
    }
}
function add_tik_cht()
{
    if(food[2].qty==0)
    {
        food[2].qty++;
        food[2].amount=food[2].qty*food[2].price;
        index++;
        serial_no[index]=2; //intialized serial_no arry with appropriate index(serial no) as "0"
        serial.tikki=index; //intialized that samosa item has serial no '1'
        display_row(serial.tikki,serial_no[serial.tikki]);   
        display_total();
        //create delete button with id =(index*10) 
    }
    else
    {
        food[2].qty++;
        food[2].amount=food[2].qty*food[2].price;
        display_row(serial.tikki,serial_no[serial.tikki]);   
        display_total();
    }
}
function add_indori_bhel()
{
    if(food[3].qty==0)
    {
        food[3].qty++;
        food[3].amount=food[3].qty*food[3].price;
        index++;
        serial_no[index]=3; //intialized serial_no arry with appropriate index(serial no) as "0"
        serial.bhel=index; //intialized that samosa item has serial no '1'
        display_row(serial.bhel,serial_no[serial.bhel]);   
        display_total();
        //create delete button with id =(index*10) 
    }
    else
    {
        food[3].qty++;
        food[3].amount=food[3].qty*food[3].price;
        display_row(serial.bhel,serial_no[serial.bhel]);   
        display_total();
    }
}
function add_vada_pav()
{
    if(food[4].qty==0)
    {
        food[4].qty++;
        food[4].amount=food[4].qty*food[4].price;
        index++;
        serial_no[index]=4; //intialized serial_no arry with appropriate index(serial no) as "0"
        serial.vadapav=index; //intialized that samosa item has serial no '1'
        display_row(serial.vadapav,serial_no[serial.vadapav]);   
        display_total();
        //create delete button with id =(index*10) 
    }
    else
    {
        food[4].qty++;
        food[4].amount=food[4].qty*food[4].price;
        display_row(serial.vadapav,serial_no[serial.vadapav]);  
        display_total(); 
    } 
} 
function add_nbs()
{
    if(food[5].qty==0)
    {
        food[5].qty++;
        food[5].amount=food[5].qty*food[5].price;
        index++;
        serial_no[index]=5; //intialized serial_no arry with appropriate index(serial no) as "0"
        serial.soda=index; //intialized that samosa item has serial no '1'
        display_row(serial.soda,serial_no[serial.soda]);  
        display_total(); 
        //create delete button with id =(index*10) 
    }
    else
    {
        food[5].qty++;
        food[5].amount=food[5].qty*food[5].price;
        display_row(serial.soda,serial_no[serial.soda]);  
        display_total(); 
    }
}
