const printReceipt = require('../main');


it ('To test output recipe', () => {
	var expected = "***<store earning no money>Receipt ***\n"+
"Name: Water, Quantity: 1 bottles Unit price: 3.00(yuan), Subtotal: 3.00 (yuan)\n"+
"Name: Apple, Quantity: 1 Kg Unit price: 5.50(yuan), Subtotal: 5.50 (yuan)\n"+
"----------------------\n"+
"Total: 8.50 (yuan)\n"+
"Saving: 0.00 (yuan)\n"+
"**********************";
	var item = ['ITEM000001','ITEM000002'];
	var actual = printReceipt.printReceipt(item);
	expect(actual).toBe(expected);
});

it ('To test with weight items', () => {
	var expected = "***<store earning no money>Receipt ***\n";
	var item = ['ITEM000001','ITEM000002-2'];
	var actual = printReceipt.printReceipt(item);
	expect(actual).toBe(expected);
});

