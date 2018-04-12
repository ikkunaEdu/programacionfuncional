


var myapp = function() {

    this.mylist = document.getElementById('mylist');
    this.productList = document.getElementById('productList');

    

    this.products = [
        {
            name: 't-shirt',
            description: 'azul',
            quantity: 13,
            price: '$.123'
        }
    ]

    this.addProduct = function (main, productElement) {
        var card = document.createElement('div');
        card.className = 'demo-card-square mdl-card mdl-shadow--2dp';
        var title = document.createElement('div');
        title.className = 'mdl-card__title mdl-card--expand';
        var h2 = document.createElement('h2');
        h2.className = 'mdl-card__title-text';
        h2.innerHTML = 'My Title';
        title.appendChild(h2);
        var description = document.createElement('div');
        description.className = 'mdl-card__supporting-text';
        description.innerHTML = 'My description';
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
        componentHandler.upgradeElement(this.mylist);
    }
}


window.onload = function () {
    this.app = new myapp();
    app.addProduct(app.productList, 'new element');
}