var myapp = function() {

    this.mylist = document.getElementById('mylist');
    this.productList = document.getElementById('productList');

    this.products = [
        {
            name: 'T-Shirt',
            descripcion: 'Azul',
            image: 'assets/Teeshirt_femme.svg',
            quantity: 13,
            price: '$1.23'
        },
        {
            name: 'Zapato',
            descripcion: 'Masculino',
            image:'assets/shoes.svg',
            quantity: 5,
            price: '$20000'
        },
        {
            name: 'Pantalon',
            descripcion: 'Masculino',
            image: 'assets/trousers.svg',
            quantity: 7,
            price: '$25000'
        }
    ]

    this.addProduct = function (main, productElement) {
        var card = document.createElement('div');
        card.className = 'demo-card-square mdl-card mdl-shadow--2dp';
        var title = document.createElement('div');
        title.className = 'mdl-card__title mdl-card--expand';
        title.style = `            color: #fff;
            background:
                url('`+productElement.image+`') bottom right 15% no-repeat #46B6AC;
            }`;
        var h2 = document.createElement('h2');
        h2.className = 'mdl-card__title-text';
        h2.innerHTML = productElement.name;
        title.appendChild(h2);
        var description = document.createElement('div');
        description.className = 'mdl-card__supporting-text';
        description.innerHTML =productElement.descripcion;
        var addbutton = document.createElement('div');
        addbutton.className = 'mdl-card__actions mdl-card--border';
        var a = document.createElement('a');
        a.className = 'mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect';
        addbutton.onclick = () => { return app.addProduct(app.productList, 'new element') };
        a.innerHTML = 'Add';
        addbutton.appendChild(a);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(addbutton);
        main.appendChild(card);
    }


    this.addElement = function (main, listElement) {
        var tr = document.createElement('tr');
        var description = document.createElement('td');
        description.className = 'mdl-data-table__cell--non-numeric';
        var quantity = document.createElement('td');
        var price = document.createElement('td');
        description.innerHTML = listElement[0].name;
        quantity.innerHTML = listElement[0].quantity;
        price.innerHTML = listElement[0].price;
        tr.appendChild(description);
        tr.appendChild(quantity);
        tr.appendChild(price);
        main.appendChild(tr);
    }

    this.test = function () {
        this.addElement(this.mylist, this.products);
        componentHandler.upgradeElement();
    }
}


window.onload = function () {
    this.app = new myapp();
    console.log("Productos:",app.products)
    // app.addProduct(app.productList, {name:'Zapatos',descripcion:'De vestir'});
    app.addProduct(app.productList, app.products[0]);
}