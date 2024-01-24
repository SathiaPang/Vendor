class Category{
    constructor(id, name){
        this.id = id
        this.name = name
    }
}

class Vendor{
    constructor(id, name, logo, description, email, phone, password){
        this.id = id
        this.name = name
        this.logo = logo
        this.description = description
        this.email = email
        this.phone = phone
        this.password = password
    }
}

class Customer{
    constructor(id, name, profile, email, phone){
        this.id = id
        this.name = name
        this.profile = profile
        this.email = email
        this.phone = phone
    }
}


class Product{
    constructor(id, name, description, categoryId, image, price, quantity, vendorId){
        this.id = id
        this.name = name
        this.description = description
        this.categoryId = categoryId
        this.price = price
        this.image = image
        this.quantity = quantity
        this.vendorId = vendorId
    }
}

class ProductItem{
    constructor(id, name, image, price, quantity){
        this.id = id
        this.name = name
        this.price = price
        this.image = image
        this.quantity = quantity
    }
}

class Order{
    constructor(id, customerName, customerPhoneNumber, address, date, status, totalPrice){
        this.id = id
        this.customerName = customerName
        this.customerPhoneNumber = customerPhoneNumber
        this.date = date
        this.status = status
        this.totalPrice = totalPrice
        this.address = address
    }
}


//Data Transfer Objecf