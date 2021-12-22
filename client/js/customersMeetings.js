const  params = (new URL(document.location)).searchParams;
const supplierId = params.get("sid");
const domainUrl = 'http://localhost:3200';

const getCustomerMeetings = () => {
  fetch(`${domainUrl}/weddingly/customers/${supplierId}`)
      .then((response) => response.json())
      .then((data) => {
          const meetingArray = [];
          console.log(data);
          data.appointment.forEach(element => {
            meetingArray.push(element);
          });
          meetingArray.forEach(element => {
              let date=element.dateTime.slice(0,10);   // for future use thts why the date is saved in one field
              let hour=element.dateTime.slice(11,22);
              const listObj = `<li class="list-group-item">With ${element.supplierName} on ${date} at ${hour} pm</li>`;
              $('#meetings-list').append(listObj);
          });
      });
};

getCustomerMeetings();

