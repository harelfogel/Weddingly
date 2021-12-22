window.onload= () => {
    console.log("did load create profile");
    $('#create-costumer').click(async(event) => {
        event.preventDefault();
        
        const costumer = {
            groomName:$('#groomName').val(),
            brideName:$('#brideName').val(),
            initialBudget:$('#budget').val(),
            email: $('#email').val(),
            date:$('#date').val(),
        }
        console.log(costumer);
        fetch("http://localhost:3200/weddingly/customers",{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(costumer)
        }).then(res=> console.log(res)).catch(e => console.log(e))
        
    });
}