/**
Template Controllers

@module Templates
*/

/**
The multiply contract template

@class [template] components_multiplyContract
@constructor
*/

// solidity source code
var source = "" + 
"contract test {\n" +
"   function multiply(uint a) returns(uint d) {\n" +
"       return a * 7;\n" +
"   }\n" +
"}\n";

// contract hex code
var hex = "603580600c6000396000f30060003560e060020a90048063c6888fa114601557005b601e6004356028565b8060005260206000f35b600081600702905091905056";

// contract description, this will be autogenerated somehow
var abi =  [{
    "name": "multiply(uint256)",
    "type": "function",
    "inputs": [
    {
        "name": "a",
        "type": "uint256"
    }
    ],
    "outputs": [
    {
        "name": "d",
        "type": "uint256"
    }
    ]
}];

// Construct Multiply Contract Object and contract instance
var MultiplyContract = web3.eth.contract(abi),
	contract;

Template['components_multiplyContract'].helpers({

	/**
	Get multiply contract source code.
	
	@method (source)
	*/

	'source': function(){
		return source;
	},
});

Template['components_multiplyContract'].events({

	/**
	On "Create New Contract" click
	
	@event click .btn-default
	*/

	"click .btn-default": function(event, template){ // Create Contract
		var address = web3.eth.sendTransaction({from: web3.eth.accounts[0], code: hex}); // Eventually web3.eth.solidity(source) instead of hex for Go CLI
        	contract = new MultiplyContract(address); // Create Multiply Contract with Address
		Session.set('address', address); // Set Address for Further Use
	},

	/**
	On Multiply Number Input keyup
	
	@event keyup .form-control
	*/

	"keyup .form-control": function(event, template){ // Call Contract
		var value = template.find("#multiplyNum").value;
		var result = contract.call({from: web3.eth.accounts[0]}).multiply(parseInt(value)); // Call Contract and Multply Given Value
		Session.set('multiplyValue', String(value));
		Session.set('multiplyResult', String(result));
	},
});
