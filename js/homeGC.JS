 google.charts.load('current', {packages: ['corechart', 'bar','geochart']});

	google.charts.setOnLoadCallback(drawGID); 
	function drawGID()
		{
				var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,B,C ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,B,C ');
				query1.send(handleQueryResponse2);
				var query2 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=SP');
				query2.setQuery('SELECT A,B');
				query2.send(handleQueryResponse3);
				var query3 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=PSP');
				query3.setQuery('SELECT A,B');
				query3.send(handleQueryResponse4);
				var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=GEOMAP');
				query.setQuery('SELECT A,B,C ');
				query.send(handleQueryResponse6);
			
		}				
function handleQueryResponse(response) 
		{
				if (response.isError()) 
				{
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
				var data = response.getDataTable();
				var materialOptions = 
				{
					width:900,
                     height:300,
				animation: {
								duration: 1000,
								easing: 'out',
								startup: true
							},	
					 
					
						title : 'Count based on status',
						
					
					
		
					hAxis: 
					{
						title: 'Status',
						minValue: 0,
						
					},
					vAxis: 
					{
						title: 'Defect'	,
						
					},
					backgroundColor: { fill:'transparent' },
					
				};
				
				materialChart = new google.visualization.ColumnChart(document.getElementById('Status_Chart'));
				//materialChart = new google.charts.Bar(document.getElementById('Status_Chart'));
				
				materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  
		}
   
		
			function handleQueryResponse2(response) 
		{

				if (response.isError()) 
				{
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
				var data = response.getDataTable();
				var materialOptions = 
				{
					width:900,
                     height:300,
				animation: {
								duration: 1000,
								easing: 'out',
								startup: true
							},	
					
						title: 'Count based on priority',
						
					
		
					hAxis: 
					{
						title: 'Priority',
						minValue: 0,
						
					},
					vAxis: 
					{
						title: 'Defect'	,
						
					
					
					},
	
					backgroundColor:
					{ 
					fill:'transparent',
					//stroke: '#00001a',
					//strokeWidth: 2					
					},
				};
				var materialChart = new google.visualization.ColumnChart(document.getElementById('Priority_chart'));
				//var materialChart = new google.charts.Bar(document.getElementById('Priority_chart'));
				materialChart.draw(data,  google.charts.Bar.convertOptions(materialOptions));
  
		}
		function handleQueryResponse3(response) 
		{
				if (response.isError()) 
				{
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
				var data = response.getDataTable();
				var options = 
				{
			
					title: 'Overall',
					pieHole: 0.4,
					//is3D: true,
					backgroundColor: {
					fill:'transparent',
					
					},
					
					//legendTextStyle: { color: '#FFF' },
					//titleTextStyle: { color: '#FFF' },
				}
			var chart = new google.visualization.PieChart(document.getElementById('AllPie_Chart'));
			chart.draw(data, options);
  
		}
	 
		
		function handleQueryResponse4(response) 
		{
				if (response.isError()) 
				{
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
				var data = response.getDataTable();
				var options = 
				{
					title: 'Prodapt',
					pieHole: 0.4,
					//is3D: true,
					backgroundColor: { fill:'transparent' },
	
					//legendTextStyle: { color: '#FFF' },
					//titleTextStyle: { color: '#FFF' },
				}
			var chart = new google.visualization.PieChart(document.getElementById('ProdaptPie_Chart'));
			chart.draw(data, options);
  
		}
		function handleQueryResponse6(response)
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
	  