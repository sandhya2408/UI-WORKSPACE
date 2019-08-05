$(function(){
    $("#search").keyup(function(){
        searchstr = $("#search").val()
        
        showResult(searchstr);

    })
    $("#idViewAll").click(function(){
        $.ajax({
            url:"https://fms-mite.herokuapp.com/fms/",
            method:"GET",
            success: function(data){
                showTable(data);

            }
        })
    })
    function showResult(searchKey){
        $.ajax({
            url:"https://fms-mite.herokuapp.com/fms/search/"+searchKey,
            method:"GET",
            success: function(data){
                showTable(data);

            }
        });

    }

    function showTable(data){
        str = "<table class= 'table'>";
        str += "<tr><th>Name</th><th>Qualifications</th><th>Dept</th><th>Status</th></tr>";
        for(i=0;i<data.length;i++){
            str +="<tr>";
            str +="<td>"+data[i]["name"]+"</td>";
            str +="<td>"+data[i]["qualification"]+"</td>";
            str +="<td>"+data[i]["deptId"]+"</td>";
            str +="<td>"+data[i]["active"]+"</td>";
            str +="</tr>"
        }
        str += "</table>"
        $("#idTable").html(str);
    }





})