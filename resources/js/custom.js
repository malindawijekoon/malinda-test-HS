$(function() {

    $( "#upload-modal" ).on('click', function() {
        var base_path = window.location.origin;


        var reader = new FileReader();
        reader.onload = function (e) {
            
            var table = $("<table />");
            var rows = e.target.result.split("\n");
            var row_count = 0;
            rows.pop();

            for (var i = 0; i < rows.length; i++) {
                var row = $("<tr />");
                var cells = rows[i].split(",");

                for (var j = 0; j < cells.length; j++) {
                    var cell = $("<td />");
                    if(j===0) {
                        cell.html("<input value='"+cells[j]+"' name='name_"+i+"'/>");
                    }
                    else if(j===1){
                        cell.html("<input value='"+cells[j]+"' name='number_"+i+"'/>");
                    }
                    row.append(cell);
                }
                row.append('<button type="button" class="close remove_row" id="remove_row_'+i+'" aria-label="Close">'
                                +'<span aria-hidden="true">&times; </span>'
                            +'</button>');
                
                table.append(row);
                row_count++;
            }
            var count_row = $("<tr>"
                                +"<td><input type='hidden' name='row_count' value='"+row_count+"'/></td>"
                             +"</tr>");
            table.append(count_row);
            
            $(".modal #datatable").html('');
            $(".modal #datatable").append(table);

                $('.modal').modal('show');
        }
        reader.readAsText($("#customFile")[0].files[0]);

        
    });

    
});



$(document).on('click', '.remove_row', function(){
        var periodStart = $(this).closest('tr').remove();  
});

$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });


$(function() {
    $('#all-contact-table').DataTable({
        "ajax": "/get-contacts",
        columns:[
            {data: "name"},
            {data: "number"},
          ]
    });
});