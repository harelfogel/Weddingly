const domainUrl=`https://weddingly.herokuapp.com`;
window.onload = () => {
    console.log("did load create profile");
    $('#create-costumer').click(async (event) => {
        event.preventDefault();

        const costumer = {
            groomName: $('#groomName').val(),
            brideName: $('#brideName').val(),
            initialBudget: $('#budget').val(),
            email: $('#email').val(),
            date: $('#date').val(),
        }
        fetch(`${domainUrl}/weddingly/customers/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(costumer)
        }).then(res => {
            return res.json();
        })
        .then(data => {
            window.location.href=`http://127.0.0.1:5500/client/index2.html?cid=${data._id}`;
        })
            .catch(e => console.log(e))
    });
}