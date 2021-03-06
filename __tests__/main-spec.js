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
	var expected = "***<store earning no money>Receipt ***\n"+
"Name: Water, Quantity: 1 bottles Unit price: 3.00(yuan), Subtotal: 3.00 (yuan)\n"+
"Name: Apple, Quantity: 2 Kg Unit price: 5.50(yuan), Subtotal: 11.00 (yuan)\n"+
"----------------------\n"+
"Total: 14.00 (yuan)\n"+
"Saving: 0.00 (yuan)\n"+
"**********************";
	var item = ['ITEM000001','ITEM000002-2'];
	var actual = printReceipt.printReceipt(item);
	expect(actual).toBe(expected);
});

it ('To test qualified discount items', () => {
	var expected = "***<store earning no money>Receipt ***\n"+
"Name: Water, Quantity: 3 bottles Unit price: 3.00(yuan), Subtotal: 6.00 (yuan)\n"+
"----------------------\n"+
"Total: 6.00 (yuan)\n"+
"Saving: 3.00 (yuan)\n"+
"**********************";
	var item = ['ITEM000001','ITEM000001','ITEM000001'];
	var actual = printReceipt.printReceipt(item);
	expect(actual).toBe(expected);
});

it ('To test not qualified discount items', () => {
	var expected = "***<store earning no money>Receipt ***\n"+
"Name: Apple, Quantity: 3 Kg Unit price: 5.50(yuan), Subtotal: 16.50 (yuan)\n"+
"----------------------\n"+
"Total: 16.50 (yuan)\n"+
"Saving: 0.00 (yuan)\n"+
"**********************";
	var item = ['ITEM000002','ITEM000002','ITEM000002'];
	var actual = printReceipt.printReceipt(item);
	expect(actual).toBe(expected);
});
it ('To test buy 6 get 2 free', () => {
	var expected = "***<store earning no money>Receipt ***\n"+
"Name: Water, Quantity: 6 bottles Unit price: 3.00(yuan), Subtotal: 12.00 (yuan)\n"+
"----------------------\n"+
"Total: 12.00 (yuan)\n"+
"Saving: 6.00 (yuan)\n"+
"**********************";
	var item = ['ITEM000001','ITEM000001','ITEM000001','ITEM000001','ITEM000001','ITEM000001'];
	var actual = printReceipt.printReceipt(item);
	expect(actual).toBe(expected);
});

