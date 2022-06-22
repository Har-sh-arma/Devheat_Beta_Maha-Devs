
let food =[{amount:0,name:"samosa",price:15,qty:0},{amount:0,name:"pani puri",price:20,qty:0},{amount:0,name:"tikki chaat",price:25,qty:0},{amount:0,name:"indori bhel",price:20,qty:0},{amount:0,name:"vada pav",price:15,qty:0},{amount:0,name:"neembu soda",price:20,qty:0}];
let serial_no=[]; //to know which serial row has which items(i.e 0,1.2....5)
let index=0;
let serial=[]   //to know which item has which serial row(i.e 1,2,....6)
let total=0;

function display_row(row_no,item)
{
    document.getElementById((row_no*10)+1).innerHTML=row_no;
    document.getElementById((row_no*10)+2).innerHTML=food[item].name;
    document.getElementById((row_no*10)+3).innerHTML=food[item].qty;
    document.getElementById((row_no*10)+4).innerHTML=food[item].amount;
}

function display_empty_row(row_no)
{
    document.getElementById((row_no*10)+1).innerHTML="";
    document.getElementById((row_no*10)+2).innerHTML="";
    document.getElementById((row_no*10)+3).innerHTML="";
    document.getElementById((row_no*10)+4).innerHTML="";
}

function display_delete_button(row_no)
{
    
        const btn = document.createElement("button");
        btn.innerHTML = "-";
        btn.id=(row_no*10);
        document.getElementById((row_no*10)+3).appendChild(btn);
        document.getElementById(row_no*10).onclick=function hi(){delete_item(serial_no[row_no]);};

   
}

function display_total()
{
    total= food[0].amount+food[1].amount+food[2].amount+food[3].amount+food[4].amount+food[5].amount; 
    document.getElementById("total").innerHTML=total;     
}

function add_item(item)
{
    if(food[item].qty==0)
    {
        food[item].qty++;
        food[item].amount=food[item].qty*food[item].price;
        index++;
        serial_no[index]=item; //intialized serial_no arry with appropriate index(serial no) as "item"
        serial[item]=index; //intialized that particular item has serial row no =index
        display_row(serial[item],item);
        display_total();
        display_delete_button(serial[item]);
        
    }
    else
    {
        food[item].qty++;
        food[item].amount=food[item].qty*food[item].price;
        display_row(serial[item],item);   
        display_total();
        display_delete_button(serial[item]);
      
    }
}
function delete_item(item)
{
    if(food[item].qty>1)
    {
        food[item].qty--;
        food[item].amount=food[item].qty*food[item].price;
        display_row(serial[item],item);
        display_delete_button(serial[item]);
        display_total();
    }
    else
    {
        food[item].amount=0;
        if(serial[item]==index)
        {
            index--;
            food[item].qty--;
            display_empty_row(serial[item])
            serial[item]=item;
            display_total();
        }
        else if(serial[item]<index)
        {
            food[item].qty--;
            for(let i=serial[item];i<index;i++)
            {
                serial_no[i]=serial_no[i+1];
                serial[serial_no[i]]--;
                display_row(i,serial_no[i]);
                display_delete_button(i);
            }
            display_total();
            display_empty_row(index);
            index--;  
            
        }
    }
}
