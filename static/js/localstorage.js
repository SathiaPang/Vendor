// local storage
const STORAGE = ["category_list", "vendor_list", "product_list"]

//Get
function getLocalStorage(storageName){
    return localStorage.getItem(storageName) ?
    JSON.parse(localStorage.getItem(storageName)) : [];
}
//Insert
function addToLocalStorage(value, storageName){
    let list = getLocalStorage(storageName);
    list.push(value);
    localStorage.setItem(storageName, JSON.stringify(list));
}
//Delete
function removeFromLocalStorage(id, storageName){
    let list = getLocalStorage(storageName);
    list = list.filter(function(item){
        if(item.id != id){
            return item
        }
    });
    localStorage.setItem(storageName, JSON.stringify(list));

}
//Update
function editLocalStorage(id, newValue, storageName){
    let list = getLocalStorage(storageName);
    list = list.map(function(item){
        if(item.id == id){
            return newValue;
        }
        return item;
    })
    localStorage.setItem(storageName, JSON.stringify(list));
}