// Get all buttons with the name 'actionButton' and store in a NodeList called 'buttons'
   var buttons = document.getElementsByClassName('actionButton coupon_action');
console.log('looking for buttons');
    // Loop through NodeList and call the click() function on each button
    for(var i = 0; i <= buttons.length; i++)  
       buttons[i].click();
   console.log('clicked button ' + i);