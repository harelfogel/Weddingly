const domainUrl = 'http://localhost:3200';

const stars = [
  `<span class="fa fa-star checked"></span>` +
  `<span class="fa fa-star checked"></span>` +
  `<span class="fa fa-star checked"></span>` +
  `<span class="fa fa-star"></span>` +
  `<span class="fa fa-star"></span>`,

  `<span class="fa fa-star checked"></span>` +
  `<span class="fa fa-star checked"></span>` +
  `<span class="fa fa-star checked"></span>` +
  `<span class="fa fa-star checked "></span>` +
  `<span class="fa fa-star"></span>`,

  `<span class="fa fa-star checked"></span>` +
  `<span class="fa fa-star checked"></span>` +
  `<span class="fa fa-star checked "></span>` +
  `<span class="fa fa-star checked"></span>` +
  `<span class="fa fa-star checked"></span>`,
];


function getCard(photo, name, id, starObj, index) {
  let card = `<div id="card"  class="card text-center" style="width: 14rem;">` +
    `<img src="${photo}" class="card-img-top"  alt="${name}">` +
    `<div class="card-body">` +
    `<h5 class="card-title">${name}</h5>` +
    `${starObj[index]}` +
    `<a href="setAppoitment.html?sid=${id}" class="btn btn-primary">Get a meeting</a>` +
    `</div>` +
    `</div>`;
  return card
}

const getSuppliers = () => {
  fetch(`${domainUrl}/weddingly/suppliers`)
    .then((response) => response.json())
    .then((data) => {
      const suppliers = {
        catring: [],
        photographers: [],
        weddingHalls: [],
        DJ: [],
      };
      data.map((supplier) => {
        const supplierType = supplier.type;
        switch (supplierType) {
          case 'Catring':
            suppliers.catring.push(supplier);
            break;
          case 'Photographer':
            suppliers.photographers.push(supplier);
            break;
          case 'Wedding Hall':
            suppliers.weddingHalls.push(supplier);
            break;
          default:
            suppliers.DJ.push(supplier);
        }
      });
      function writeSupplierCardToHtml(obj, htmlIdString) {
        obj.forEach((element) => {
          console.log(element.placeId);
          $.get(`${domainUrl}/weddingly/ratings/${element.placeId}`, function (response) {
            let elementRating = response["rating"];
            const ratingGrade =
              elementRating * 6 + element.user_ratings_total * 0.009;

            let id = element._id;

            if (ratingGrade <= 30.09) {
              let oneStarsCard = getCard(element.photo, element.name, id, stars, 0);
              $(htmlIdString).append(oneStarsCard);
            } else if (ratingGrade > 30.09 && ratingGrade <= 35.5) {
              let twoStarsCard = getCard(element.photo, element.name, id, stars, 1);
              $(htmlIdString).append(twoStarsCard);
            } else {
              let threeStarsCard = getCard(element.photo, element.name, id, stars, 2);
              $(htmlIdString).append(threeStarsCard);
            }
          })
        });
      }

      writeSupplierCardToHtml(suppliers.catring, '#carusel-catring');
      writeSupplierCardToHtml(suppliers.weddingHalls, '#carusel-wedding-halls');
      writeSupplierCardToHtml(
        suppliers.photographers,
        '#carusel-photographers'
      );
      writeSupplierCardToHtml(suppliers.DJ, '#carusel-DJ');
    });
};

getSuppliers();

