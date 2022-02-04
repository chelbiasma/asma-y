var names = ['lili', 'pushka', 'bela', 'antonio', 'fox', 'REX'];
var olds = ['1 mois', ' 3ans', '9mois', '4ans', '2mois', '4ans'];
var vaccins = ['vacciné', 'vacciné', 'non vacciné', 'vacciné', 'non vacciné', 'vacciné'];
var images = ['/chat1.jpg ', '/chat2.jpeg', '/chien1.jpg', '/image3.jpg', '/image 4.jpg', '/image5.jpg'];
var sexs = ['<i class="fas fa-mars"></i>', '<i class="fas fa-mars"></i>', '<i class="fas fa-mars"></i>', '<i class="far fa-venus"></i>', '<i class="far fa-venus"></i>', '<i class="far fa-venus"></i>'];
var listdesanimaux = [];
var adoption = [];
var displayHTML = "";
for (let i = 0; i < names.length; i++) {
    const asmo = names[i];
    var old = olds[i];
    var vaccin = vaccins[i];
    var image = images[i];
    var sex = sexs[i];

    var animal = {
        id: i,
        asmo,
        old,
        vaccin,
        image,
        sex,
    }

    listdesanimaux.push(animal);
    displayHTML += `
    <div class="col">
    <div class="card" style="width: 18rem;">
    <img src="${image}"
    class="card-img-top" alt="...">
    <div class="card-body">
      <h3 class="card-title">${asmo}</h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${vaccin}</li>
      <li class="list-group-item">${old}</li>
      <li class="list-group-item">${sex}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">adopt me>
      <a href="#" class="card-link">delete>
      
    </div>
  </div>
  </div>

`
}
document.getElementById('animals').innerHTML = displayHTML