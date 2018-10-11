
      google.load('visualization', '1.1', {packages: ['corechart','geochart']});

      function drawVisualization() {
      var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=GEOMAP');
				query.setQuery('SELECT A,B,C ');
				query.send(handleQueryResponse);
function handleQueryResponse(response)
{
	if (response.isError()) 
				{
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
				var data = response.getDataTable();
      var options = {
		  
        sizeAxis: { minValue: 10, maxValue: 20 },
        region: '150',
		datalessRegionColor: 'lightgrey',
          defaultColor: '#81d4fa',
		   backgroundColor: 'white',
        colorAxis: {colors: ['orange', 'red']} // orange to blue
      };

       
        var geochart2 = new google.visualization.GeoChart(
          document.getElementById('visualization'));
        geochart2.draw(data,options);
      }
	  }


      google.setOnLoadCallback(drawVisualization);
    
