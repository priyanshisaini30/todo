function sortTable(n) { 
    var table; 
    table = document.getElementById("table"); 
    var rows, i, x, y, count = 0; 
    var switching = true; 
    var direction = "ascending"; 
    while (switching) { 
 
        switching = false; 
        var rows = table.rows; 
 
        for (i = 1; i < (rows.length - 1); i++) { 
            var Switch = false; 
            
            x = rows[i].getElementsByClassName("TD")[n]; 
            y = rows[i + 1].getElementsByClassName("TD")[n]; 
            
 
            if (direction == "ascending") { 
                 
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
                    { 
                    Switch = true; 
                    break; 
                } 
            } else if (direction == "descending") {    
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) 
                    { 
                    Switch = true; 
                    break; 
                } 
            } 
        } 
        if (Switch) { 
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
            switching = true; 
            count++; 
        } else { 
            if (count == 0 && direction == "ascending") { 
                direction = "descending"; 
                switching = true; 
            } 
        } 
    } 
}


function sortTableByPriority(){
    var table; 
       table = document.getElementById("table"); 
       var rows, i, x, y,x1,y1, count = 0; 
       var switching = true; 
       var direction = "ascending"; 
       while (switching) { 
 
           switching = false; 
           var rows = table.rows; 
 
           for (i = 1; i < (rows.length - 1); i++) { 
               var Switch = false; 
               x1 = rows[i].getElementsByName("TD")[4]; 
               y1 = rows[i + 1].getElementsByName("TD")[4]; 
               
               console.log(x1.innerHTML,y1.innerHTML)
               if(x1.innerText == 'High'){
                   x = 1
                   console.log('hi')
               }
               else if(x1.innerText  == 'Medium'){
                   x = 2
               }
               else if(x1.innerText  == 'Low'){
                   x = 3
               }
               if(y1.innerText  == 'High'){
                   y = 1
               }
               else if(y1.innerText  == 'Medium'){
                   y = 2
               }
               else if(y1.innerText  == 'Low'){
                   y = 3
               }
 
               console.log(x,y)
               if (direction == "ascending") { 
                    
                   if (x > y) 
                       { 
                       Switch = true; 
                       break; 
                   } 
               } else if (direction == "descending") {    
                   if (x < y) 
                       { 
                       Switch = true; 
                       break; 
                   } 
               } 
           } 
           if (Switch) { 
               rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
               switching = true; 
               count++; 
           } else { 
               if (count == 0 && direction == "ascending") { 
                   direction = "descending"; 
                   switching = true; 
               } 
           } 
       }
}