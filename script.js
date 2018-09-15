function calculate(){
   var countryData = document.querySelector(".country").value;
   var ageData = document.querySelector(".age").value;
   var year = document.querySelector(".year").value;

 $.ajax({
     url : `http://api.population.io:80/1.0/population/${year}/${countryData}/${ageData}`,
     success:function(data) {
        let male= data[0].males;
        let female= data[0].females;
        let total= data[0].total;
       
         var ctx = document.getElementById("myChart").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["male", "Female", "Total"],
                    datasets: [{
                        label: 'population',
                        data: [male, female, total],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });

        }
 });  

}