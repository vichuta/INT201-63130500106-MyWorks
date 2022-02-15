//1.1
export let product = {
    items:[],
    //1.2.1
    add: function(name,unit){ 
        let foundIndex = -1;
        foundIndex = product.items.findIndex(
            (item) => item.itemName === name
        );
        if (foundIndex === -1) {
            product.items.push({ 
                itemName: name, 
                itemUnit: Number(unit),
                itemStatus: 'Pending'}
            );
        } else {
            product.items[foundIndex].itemUnit = unit;
        }
    //1.2.4
    },save: function () { 
        localStorage.setItem('ItemsList', JSON.stringify(product.items));
    },
    //1.2.1
    load: function(){   
        product.items = localStorage.getItem('ItemsList');
        if (product.items == undefined ||product.items === 0) {
            product.items = [];
          } else {
            product.items = JSON.parse(product.items);
          }
    },
    //1.2.1
    list: function () { 
        this.load();
        let listProduct = [];
        product.items.forEach((item) => {
            listProduct.push({ ...item});
        });
        return listProduct;
    },
    //1.2.1
    checkCountPending : function(){
        this.load();
        let itemsPending = product.items.filter((item)=>{return item.itemStatus == 'Pending'});
        return itemsPending.length;
    },
    //1.2.1
    checkCountDone : function(){
        this.load();
        let itemsPending = product.items.filter((item)=>{return item.itemStatus == 'Done'});
        return itemsPending.length;
    },

    //1.2.2
    removeAll: function(){
        if (confirm('Emptry List')) {
            product.items = [];
            localStorage.removeItem('ItemsList');
          }
    },
    
    //1.2.3
    buy: function(itemId){
        this.load()
        let indexTofind = product.items.findIndex((item)=>{
            return item.itemName.includes(itemId);
        });
        product.items[indexTofind].itemStatus = 'Done';
    },


}




















