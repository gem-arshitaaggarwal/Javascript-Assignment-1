
(function() {
  // Data
  const data = [   { name: "Arshit Aggarwal", age: 22, dob: "07/12/1991", email: "Arshit@gmail.com", company: "Gemini Solutions" },    { name: "Abhinav Puri", age: 22, dob: "05/05/2000", email: "Abhinav@gmail.com", company: "Gemini Solutions" },    { name: "Ashish Kalkhandey", age: 20, dob: "10/10/2002", email: "Ashish@yahoo.com", company: "Accenture" },    { name: "Hunar Paul", age: 21, dob: "12/12/2001", email: "Hunar@rediffmail.com", company: "ABCe Inc." },    { name: "Anush Angral", age: 20, dob: "04/04/2002", email: "Anush@gmail.com", company: "Incredivle Inc." }  ];
  
    var a = document.createElement("H1");
    var b = document.createTextNode("Personal Information Dynamic Table");
    a.appendChild(b);
    document.body.appendChild(a);
    
  
  // Create table
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const headers = ["Name", "Age", "DOB", "Email", "Company"];
  
  // Create table headers
  headers.forEach(header => {
    const th = document.createElement("th");
    th.style.fontWeight = "bold";
    const textNode = document.createTextNode(header);
    th.appendChild(textNode);
    thead.appendChild(th);
  });
  
  // Create table rows
  data.forEach(rowData => {
    const tr = document.createElement("tr");
    
    Object.values(rowData).forEach(value => {
      const td = document.createElement("td");
      const textNode = document.createTextNode(value);
      td.appendChild(textNode);
      tr.appendChild(td);
    });
    
    tbody.appendChild(tr);
  });
  
  // Append thead and tbody to table
  table.appendChild(thead);
  table.appendChild(tbody);
  table.setAttribute('border','5');
  // Append table to the body
  document.body.appendChild(table);
})();
