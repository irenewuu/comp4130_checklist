let data = [];

// // Create a "close" button and append it to each list item
var listItem = document.getElementsByTagName("li");

// Create a new list item when clicking on the "Add" button
function newElement() {
  console.log(data)
  var li = document.createElement("li");
  // li.className = "unchecked";
  var inputValue = document.getElementById("myInput").value;
  
  //putting input value in list 
  var spanText = document.createTextNode(inputValue);
  var span = document.createElement("span");
  span.appendChild(spanText);
  li.appendChild(span);


  // delete img
  var bin = document.createElement("img");
  bin.src = "image/iconly/bold/delete.svg";
  bin.className = "close";
  li.appendChild(bin);

  if (inputValue === '') {
    alert("You must write something!");
    data.push()
  } else {
    document.getElementById("NewList").appendChild(li);
  }

  document.getElementById("myInput").value = "";

  // Click on a close button to hide the current list item
  // push object in array
  data.push({ value: inputValue })
  console.log(data)

  // Add a "checked" symbol when clicking on a list item
  // var list = document.querySelector('ul');
  // list.addEventListener('click', function(ev) {
  //   if (ev.target.tagName === 'LI') {
  //     // ev.target.tagName.className = "checked";
  //     ev.target.classList.toggle('checked');
  //   }
  // }, false);

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
}