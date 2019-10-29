    //Simulate mouse clicks for testing widgets - 'My Location' not available
   //var testElementsArray = ['OK', 'Search', 'Close', 'Basemap Gallery', '2015 Tacoma', 'Topographic', 'Default extent',  'Legend', 'Layer List', 'Add More Data', 'Add CSV File', 'Add Data List', 'Add ESRI Data', 'Measure', 'Google Street View', 'Draw', 'Print', 'Favorites', 'Help']; //Array of Widgets by ID to click
   var testElementsArray = ['OK', 'Search', 'Close']; //DAILY TEST OF GEOCODING, PANNING, AND IDENTIFY - Array of Widgets by ID to click

   function simulateButtonClick(element) {
     var promise = new Promise(function(resolve, reject) { // do async operation and process the result
       console.error('Clicking ...', element);
       try {
         if (element == 'Search') {
           document.getElementById('esri_dijit_Search_0_input').value = '747 Market St';
           const event = new Event('input', {
             bubbles: true
           });
           document.getElementById('esri_dijit_Search_0_input').dispatchEvent(event); //Manually trigger an input event (enter)
         }
         if (element == 'Close') {
           setTimeout(simulateMapEvents, 4000); //Leave enough time to see the popup before closing
         }
         document.querySelector('[title="' + element + '"]').click(); //ALL: Click element - need " for elements with spaces in name
         setTimeout(function() {
           resolve('Done!'); //nothing to return
         }, 4000); //Wait 4 seconds for next DOM element to be available (basemap buttons, search box, etc) before moving on 
       } catch (error) {
         alert('Widget ' + element + ' had the follow problem: \n' + error);
       }
     });
     return promise;
   }

   function simulateMapEvents() {
     console.error('Starting map events ...');
     var panNumber = 0;
     console.error('Panning up ...');
     window._widgetManager.map.panUp(); //Also works: window. instead of this.
     window._widgetManager.map.on("pan-end", function(evt) {
       panNumber++;
       if (panNumber < 2) {
         console.error('Panning down ...');
         window._widgetManager.map.panDown();
       }
       if (panNumber == 2) {
	     console.error('Clicking map ...');
	     window._widgetManager.map.emit('click', {mapPoint: new esri.geometry.Point(-13630239.432707999, 5983932.398006234, esri.SpatialReference({wkid:102100}))}); // Click map @ Marcourt Building
       console.error('Automated testing done!');  //Just Geocoding and Identify
       }
     });
   }

   function processArray(array, fn) {
     var index = 0;
     function next() {
       if (index < array.length) {
         fn(array[index++]).then(next); //Promises chained together - synchronize a sequence of promises with .then, don't run the next widget test until the previous test has finished
       } else {
       	 //console.error('Automated testing done!');  //Everything
       }
     }
     next(); //start looping through array
   }

   setTimeout(function() {
     console.error('Waiting a specific time for WAB to be ready ...');
     processArray(testElementsArray, simulateButtonClick); //Run a async operation on each item in array, but one at a time serially such that the next operation does not start until the previous one has finished.
   }, 10000);
