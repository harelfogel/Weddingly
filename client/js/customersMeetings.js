const  params = (new URL(document.location)).searchParams;
const supplierId = params.get("sid");
const customerId=params.get("cid");
const domainUrl = `https://weddingly.herokuapp.com`;

const getCustomerMeetings = () => {
  fetch(`${domainUrl}/weddingly/customers/${customerId}`)
      .then((response) => response.json())
      .then((data) => {
          const meetingArray = [];
          data.appointment.forEach(element => {
            meetingArray.push(element);
          });
          meetingArray.forEach(element => {
              const listObj = `<li class="list-group-item">With ${element.supplierName} on ${element.date} at ${element.hour} </li>`;
              $('#meeting-list').append(listObj);
          });
      });
};

getCustomerMeetings();

