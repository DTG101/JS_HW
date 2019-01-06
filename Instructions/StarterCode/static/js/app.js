// Brining in data from data.js
var tableData = data;
var tbody = d3.select("tbody");
console.log(data);


// Building table for all data from data.js
data.forEach((UFO) => {
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});
 
  
// Using date form in html, script code that will listen for //events and search through the date/time column to find rows //that match user input
//select the submit button
var submit = d3.select("#filter-btn");
submit.on("click",function() {
    //prevent the page from refreshing
    d3.event.preventDefault();
    // Remove data in table
    d3.selectAll("td").remove();
    //select the input elements and the the raw HTML nodes
    var inputElementdate = d3.select("#datetime");
    //get the value properties of the input elements
    var inputValuedate = inputElementdate.property("value");
    // console.log(filteredData);
    console.log(inputValuedate);
    
    //filter the data by date and create new table
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValuedate);
    
        //Function to create filtered table
        function filter(filteredData) {
            console.log("Search Results:",filteredData);
            
            // Build the new table
            // Use D3 to select the table body
            var tbody = d3.select("tbody");
            filteredData.forEach((filteredTable) => {
            // Append one row per sighting for date specified
                var row = tbody.append("tr");
            Object.entries(filteredTable).forEach(([key,value]) => {
                var cell = tbody.append("td");
                cell.text(value);
                });
            });
        }
    
    filter(filteredData);

});






