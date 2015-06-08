((() => {
    //Optional parameter
    function buildAddressOptional(address1: string, city: string, state: string, address2?: string) {
	var addr2 = (address2.length > 0) ? ", " + address2 : "";
	displayAddress(address1 + addr2 + ", " + city + ", " + state);
    }

    ////Rest parameters
    function buildAddressRest(city: string, state: string,  ...addresses: string[]) {
	var fullAddress = "";
	addresses.forEach(addr => fullAddress += (addr.length > 0) ? addr + ", " : ""); // Aggregate
	fullAddress += city + ", " + state;
	displayAddress(fullAddress);
    }

    function displayAddress(msg: string) {
	result.innerHTML = msg;
    }

    var $ = id => document.getElementById(id);
    var result = $("result");
    var addressButton = <HTMLButtonElement>$("addressButton"),
	address = <HTMLInputElement>$("address"),
	address2 = <HTMLInputElement>$("address2"),
	city = <HTMLInputElement>$("city"),
	state = <HTMLInputElement>$("state");

    //Call function with optional parameter
    //addressButton.addEventListener('click', () => buildAddressOptional(address.value, city.value, state.value, address2.value));

    //Call function with Rest parameters
    addressButton.addEventListener("click", () => buildAddressRest(city.value, state.value, address.value, address2.value));

})());