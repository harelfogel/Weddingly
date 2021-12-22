
const params = (new URL(document.location)).searchParams;
const supplierId = params.get("sid");
const domainUrl = 'http://localhost:3200';
const datesArray = [];

const getMeetings = () => {
    fetch(`${domainUrl}/weddingly/suppliers/${supplierId}`)
        .then((response) => response.json())
        .then((data) => {
            data.meeting.forEach(element => {
                datesArray.push(element);
            });
            const objectName = `<label  for="form">` +
                `See When ${data.name} Are Available For You` +
                `</label>`;
            $(".object-name").append(objectName);

            datesArray.forEach(element => {
                const formObj = `<div class="form-check radio-form">` +
                    `<input class="form-check-input" type="radio" name="firstRadio" id="dateRadio1" value="${element._id}" checked />` +
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
console.log(datesArray);

$(document).ready(function () {
    $('button').click(function () {
        var value = $("input[type=radio][name=firstRadio]:checked").val();
        if (value) {
            
            alert(value+'Has been removed');
            datesArray.pop(value);
        }
        else {
            alert('Nothing is selected');
        }
    })
});
