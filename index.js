let data = [];

var listItem = document.getElementsByTagName("li");

// Create a new list item when clicking on the "Add" button
function newElement() {

  // appending text from input to list: chisaki ===================================
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  //putting input value in list 
  var spanText = document.createTextNode(inputValue);
  var span = document.createElement("span");
  span.appendChild(spanText);
  li.appendChild(span);
  // trashbin img appended
  var bin = document.createElement("img");
  bin.src = "image/iconly/bold/delete.svg";
  bin.className = "close";
  li.appendChild(bin);


  // onhover trash bin: younsoo ===================================================
  // change color of delete img when hovering
  bin.onmouseleave = function() {
    this.src = "image/iconly/bold/delete.svg";
  }
  bin.onmouseover = function() {
    this.src = "image/iconly/bold/delete-hover.svg";
  }  

  // show error message or add list: irene ===========================================
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("NewList").appendChild(li);

    // push object in array
    data.push({ value: inputValue })
    console.log(data)
  }

  document.getElementById("myInput").value = "";


  // Click on a close button to delete the current list item: maria ==================
  var close = document.getElementsByClassName("close");

    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        
        data.splice(data[i], 1);
        console.log(data)

        // delete the item onclick
        var div = this.parentElement;
        div.remove(0,-1);
      }
    }

    // check, uncheck function: leah ============================================
    for (var i = 0; i < listItem.length; i++) {
      listItem[i].onclick = function () {
       // Add a "checked" symbol when clicking on a list item
        var list = document.querySelector('ul');
        list.addEventListener('click', function(ev) {
          if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');      
          }  
        }, false);
      }
    }

  // change color of list background color when hovering: younsoo ================
  for (var i = 0; i < listItem.length; i++) { 
    listItem[i].onmouseleave = function() {
      this.classList.remove("hover");
    }  
    listItem[i].onmouseover = function() {      
      if(this.className != "checked"){
        this.classList.add("hover");
      }
    }
  }    
}

// sorting function: hyerin =========================================================
function sortList() {
  var list, i, switching, listValue, activateSwitch;
  list = document.getElementById("NewList");
  switching = true;
  // Make a loop that will continue until no switching has been done 
  while (switching) {
    switching = false;
    listValue = list.getElementsByTagName("LI");
    // all list items
    for (i = 0; i < (listValue.length - 1); i++) {
      activateSwitch = false;
      // check alphabetical order
      if (listValue[i].innerHTML.toLowerCase() > listValue[i + 1].innerHTML.toLowerCase()) {
        activateSwitch = true;
        break;
      }
    }
    if (activateSwitch) {
      // for switching
      listValue[i].parentNode.insertBefore(listValue[i + 1], listValue[i]);
      switching = true;
    }
  }
}