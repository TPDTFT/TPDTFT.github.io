	google.charts.load('current', {packages: ['corechart', 'bar']});
	function change()
 {
    var listbox = document.getElementById("chart");
    var selIndex = listbox.selectedIndex;
    var selValue = listbox.options[selIndex].value;
    var selText = listbox.options[selIndex].text;
    console.log(selValue);
	google.charts.setOnLoadCallback(drawGID);
	
	
		function drawGID()
		{
		if (selValue == 'Sprint-171')
		{
		
        
      
			var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,D,E ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,D,E ');
				query1.send(handleQueryResponse2);

	  
		}
		else if (selValue == 'Sprint-172')
		{
		
        
		var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,F,G ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,F,G ');
				query1.send(handleQueryResponse2);
		
	  
		}
		else if (selValue == 'Sprint-173')
		{
			var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,H,I ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,H,I ');
				query1.send(handleQueryResponse2);
			
		}
		else if (selValue == 'Sprint-174')
		{var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,J,K ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,J,K ');
				query1.send(handleQueryResponse2);
			
			
		}else if (selValue == 'Sprint-175')
		{
			var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,L,M ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,L,M ');
				query1.send(handleQueryResponse2);
		}
		else if (selValue == 'Sprint-176')
		{
			var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,N,O ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,N,O ');
				query1.send(handleQueryResponse2);
		}
		else if (selValue == 'Sprint-177')
		{
			var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,P,Q ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,P,Q ');
				query1.send(handleQueryResponse2);
		}
		else if (selValue == 'Sprint-178')
		{
			var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,R,S ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,R,S ');
				query1.send(handleQueryResponse2);
		}
		else if (selValue == 'Sprint-179')
		{
			var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,T,U ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,T,U ');
				query1.send(handleQueryResponse2);
		}
		else if (selValue == 'Sprint-180')
		{
			var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,V,W ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,V,W ');
				query1.send(handleQueryResponse2);
		}
		else if (selValue == 'Sprint-181')
		{
			var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,X,Y ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,X,Y ');
				query1.send(handleQueryResponse2);
		}
		else if (selValue == 'Sprint-182')
		{
			var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,Z,AA ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,Z,AA ');
				query1.send(handleQueryResponse2);
		}
		else if (selValue == 'Sprint-183')
		{
			var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,AB,AC ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,AB,AC ');
				query1.send(handleQueryResponse2);
		}
		else if (selValue == 'Sprint-184')
		{
			var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,AD,AE ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,AD,AE ');
				query1.send(handleQueryResponse2);
		}
		else if (selValue == 'Sprint-185')
		{
			var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,AF,AG ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,AF,AG ');
				query1.send(handleQueryResponse2);
		}
		else if (selValue == 'Sprint-186')
		{
			var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,AH,AI ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,AH,AI ');
				query1.send(handleQueryResponse2);
		}
		else if (selValue == 'Sprint-187')
		{
			var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,AJ,AK ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,AJ,AK ');
				query1.send(handleQueryResponse2);
		}
		else if (selValue == 'Sprint-188')
		{
			var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,AL,AM ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,AL,AM ');
				query1.send(handleQueryResponse2);
		}
		else if (selValue == 'Sprint-189')
		{
			var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Status');
				query.setQuery('SELECT A,AN,AO ');
				query.send(handleQueryResponse);
				var query1 = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1WsL07MhF4pWX20EaFUNBx_Aco3sldNIFeGgNNYN3SsE&sheet=Priority');
				query1.setQuery('SELECT A,AN,AO ');
				query1.send(handleQueryResponse2);
		}
		
		
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
					
						title: 'Defect count based on Status',
						 
						
					
		
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
				 var materialChart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
			//	var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
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
					
						title: 'Defect count based on Priority',
						 
				
		
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
				 var materialChart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
				//var materialChart = new google.charts.Bar(document.getElementById('chart_div2'));
				materialChart.draw(data,  google.charts.Bar.convertOptions(materialOptions));
  
		}

	 
		}
		