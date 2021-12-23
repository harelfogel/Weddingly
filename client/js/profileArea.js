const myUrl = `https://weddingly.herokuapp.com`;
const myParams = (new URL(document.location)).searchParams;
const myCustomerId =  myParams.get("cid");


async function renderCouple(){
    const response = await fetch(`${myUrl}/weddingly/customers/${myCustomerId}`);
    const data = await response.json();
    $(".couplesName").each(function(i,e){
        $(e).html(data.brideName + " & " + data.groomName);
    })

}

$(document).ready(renderCouple);