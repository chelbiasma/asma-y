var makeups = ['Brushes', 'Black mascara', 'Lipgloss', 'brown pencil', 'Eyliner', 'Bronzer', 'Fondation', 'Eau de parfum Spray', 'Eyeshadows'];
var prices = [120, 130, 140, 120, 130, 160, 50, 82, 100];
var images = ['/11436203.jpg', '/11436203.jpg', '/11436203.jpg', '/11436203.jpg', '/11436203.jpg', '/11436203.jpg', '/11436203.jpg', '/11436203.jpg', '/11436203.jpg'];

var products = []
var cart = []
var displayHTML = ""
for (let i = 0; i < makeups.length; i++) {
    const makeup = makeups[i];
    var price = prices[i];
    var image = images[i];

    var product = {
        id: i,
        makeup,
        price,
        image,
        quantité: 1
    }
    products.push(product)
}
displayHTML += `
<div class="col-4">
<div class="card" style="width: 18rem;">
  <img src=${image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${makeup}</h5>
    <h6>${price}</h6>
    <a onclick="achri(${i})" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>
`
document.getElementById('products').innerHTML = displayHTML