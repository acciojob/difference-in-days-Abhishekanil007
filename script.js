var dateDiffInDays = function (date1, date2) {
	 dt1 = new Date(date1);
	 dt2 = new Date(date2);

	if(dt1 === dt2)
	{
		return 0;
	}

	return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24) );
	
};

// Do not change the code below. 
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
