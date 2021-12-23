

const params = (new URL(document.location)).searchParams;
const customerId = params.get("cid");
const supplierId = params.get("sid");
const domainUrl = 'http://localhost:3200';
const datesArray = [];

const getMeetings = () => {
    fetch(`${domainUrl}/weddingly/suppliers/${supplierId}`)
        .then((response) => response.json())
        .then((data) => {
            const supplierName=data.name.replace(/\s/g, '');
            data.meeting.forEach(element => {
                datesArray.push(element);
            });
            const objectName = `<label  for="form">` +
                `See When ${data.name} Are Available For You` +
                `</label>`;
            $(".object-name").append(objectName);

            datesArray.forEach(element => {
                const meetingWithCustomer= {
                    meetingCustomerId:customerId,
                    meetingSupplierId:supplierId,
                    meetingSupplierName:supplierName,  
                    meetingId:element._id,
                    meetingDate:element.date,
                    meetingHour:element.hour.replace(/\s/g, '')  
                };  
                const strigifiedMeeting= JSON.stringify(meetingWithCustomer);  
                const formObj = `<div class="form-check radio-form">` +
                    `<input class="form-check-input" type="radio" name="firstRadio" id="dateRadio1" value=${strigifiedMeeting} checked />` +
                    `<div class="radio-labels">` +
                    `<div class="center-content">` +
                    `<h4 for="dateRadio1" class="form-check-label ">${element.date}</h4>` +
                    `</div>` +
                    `<div class="center-content">` +
                    `<h4 for="dateRadio1" class="form-check-label">${element.hour}</h4>` +
                    `</div>` +
                    `</div>` +
                    `</div>`;
                $(".center-content-column").append(formObj);
            });
        });
};

getMeetings();


$(document).ready(function () {
    $('button').click(function () {
        const dateParams = (new URL(document.location)).searchParams;
        const supplierMeetingId = dateParams.get("cid");
        const datesArray = [];
        let value =document.querySelector("input[name=firstRadio]:checked").value;
        if (value) {
            const meetingObj=JSON.parse(value);
           if(meetingObj){
            fetch(`${domainUrl}/weddingly/customers/meeting`,{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(meetingObj)
            }).then(data=> window.location.href=`http://127.0.0.1:5500/client/MyMeetings.html?cid=${customerId}`).catch(e => console.log(e))
           }
           else{
            alert('No date as been picked');
           }
        }
        else {
            alert('Nothing is selected');
        }
    })
});


