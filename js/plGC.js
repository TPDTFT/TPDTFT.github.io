 google.charts.load('current', {packages: ['corechart', 'bar']});
	google.charts.setOnLoadCallback(drawGID); 
	function drawGID()
		{
				var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=PL');
				query.setQuery('SELECT A,B,C ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=PLP');
				query1.setQuery('SELECT A,B,C ');
				query1.send(handleQueryResponse2);
				var query2 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=PLSP');
				query2.setQuery('SELECT A,B');
				query2.send(handleQueryResponse3);
				var query3 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=PLPSP');
				query3.setQuery('SELECT A,B');
				query3.send(handleQueryResponse4);
			
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
					width:"100%",
                     height:"100%",
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
				var materialChart = new google.visualization.ColumnChart(document.getElementById('Status_Chart'));
				//var materialChart = new google.charts.Bar(document.getElementById('Status_Chart'));
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
					width:"100%",
                     height:"100%",
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
					title: 'Open Defects - Overall',
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
					title: 'Open Defects - Prodapt',
					pieHole: 0.4,
					//is3D: true,
					backgroundColor: { fill:'transparent' },
	
					//legendTextStyle: { color: '#FFF' },
					//titleTextStyle: { color: '#FFF' },
				}
			var chart = new google.visualization.PieChart(document.getElementById('ProdaptPie_Chart'));
			chart.draw(data, options);
  
		}
				 //Count table 
	  
	   google.charts.load('current', {'packages':['table']});
	   	  google.charts.setOnLoadCallback(drawPriorityTable);

      google.charts.setOnLoadCallback(drawTable);
	  function drawTable()
		{
				var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=PL');
				query.setQuery('SELECT A,B,C ');
				query.send(drawTableResponse);
		}

      function drawTableResponse(response) {
	  if (response.isError()) 
				{
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
	  
        var data = response.getDataTable();
       

        var table = new google.visualization.Table(document.getElementById('status_Table'));

        table.draw(data, {showRowNumber: false, width: '100%', height: '100%'});
      }
	  ///priority
	  function drawPriorityTable()
		{
				var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=PLP');
				query.setQuery('SELECT A,B,C ');
				query.send(drawPriorityTableResponse);
		}

      function drawPriorityTableResponse(response) {
	  if (response.isError()) 
				{
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
	  
        var data = response.getDataTable();
       

        var table = new google.visualization.Table(document.getElementById('priority_Table'));

        table.draw(data, {showRowNumber: false, width: '100%', height: '100%'});
      }