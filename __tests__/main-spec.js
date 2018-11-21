const printReceipt = require('../main');

it ('To test output recipe', () => {
	var expected = "***<store earning no money>Receipt ***\n";
	var item = ['ITEM000001','ITEM000002'];
	var actual = printReceipt.printReceipt(item);
	expect(actual).toBe(expected);
});

