function printReceipt(boughtItem){
	var recipeStr = "***<store earning no money>Receipt ***\n";
	var allitem = loadAllItems();
	var allPromote = loadPromotions();
	var eachItem = getBroughtItem(allitem, boughtItem);
	eachItem = getPromotions(eachItem,allPromote)
	return eachItem;
	//return recipeStr;
}
function getPromotions(item,promote){
	promote.forEach(p=>{
		if(p.type === 'BUY_TWO_GET_ONE_FREE')
		{
			item.filter(i=>p.barcodes.includes(i.barcode)).filter(i=>i.quantity>=3).map(j=>j.save = j.price)
		};
	});
	return item;
}
function getBroughtItem(allitem, boughtItem){
	let eachItem = allitem.filter(a=>boughtItem.includes(a.barcode));
	eachItem.map(a=>a.quantity = 0);
	for (let index = 0; index<boughtItem.length;index++){
		for (let jndex = 0; jndex<eachItem.length;jndex++){
			if (boughtItem[index].includes(eachItem[jndex].barcode)){
				if ((boughtItem[index].length)>10){
					eachItem[jndex].quantity=eachItem[jndex].quantity+2;
				}else{
					eachItem[jndex].quantity=eachItem[jndex].quantity+1;
				}
			}
		}
	}
	return eachItem;
}


function loadAllItems() {
  return [
    {
      barcode: 'ITEM000000',
      name: 'Cola',
      unit: 'bottles',
      price: 3.00
    },
    {
      barcode: 'ITEM000001',
      name: 'Water',
      unit: 'bottles',
      price: 3.00
    },
    {
      barcode: 'ITEM000002',
      name: 'Apple',
      unit: 'Kg',
      price: 5.50
    },
    {
      barcode: 'ITEM000003',
      name: 'Orange',
      unit: 'Kg',
      price: 15.00
    },
    {
      barcode: 'ITEM000004',
      name: 'Battery',
      unit: 'Unit',
      price: 2.00
    },
    {
      barcode: 'ITEM000005',
      name: 'Noodles',
      unit: 'Pack',
      price: 4.50
    }
  ];
}
function loadPromotions() {
  return [
    {
	  type: 'BUY_TWO_GET_ONE_FREE',
      barcodes: [
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
      ]
    }
  ];
}


module.exports = {
	printReceipt
}