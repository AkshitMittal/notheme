$(function() {
    $("#submitButton").click(function() {

        let number = "";
        number = $("#numberInput").val();

        if (!isNaN(number) == false) {
            var content = "Error : ";
            content += "Please enter a valid number";
            $("#response").html(content);
        } else {
            let url = 'https://fibonacci-numbers.herokuapp.com/' + number;

            $.getJSON(url, (data) => {
                var content = "Fibonacci sequence : ";
                content += data.sequence;
                $("#response").html(content);
            });
        }
    });

});