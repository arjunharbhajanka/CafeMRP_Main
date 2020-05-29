'use strict';

(function ($) {

    var DEBUG = true;


    /*------------------
           Display page
       --------------------*/

    $.ajax({
        type: 'POST',
        url: "php/select_table.php",
        data: {tableNo: 1},
        success: function (result) {
            DEBUG && console.log(result);
            var values = JSON.parse(result);
            DEBUG && console.log(values[0]['table_no']);
            var len = values.length;
            DEBUG && console.log(len)
            var i = 0;
            var sum = 0;
            for (i = 0; i < len; i++) {
                $.ajax({
                    type: 'POST',
                    url: "php/table_contents.php",
                    data: {tableNo: values[i]['table_no']},
                    success: function (result) {
                        DEBUG && console.log(result);
                        var values = JSON.parse(result);
                        DEBUG && console.log(values[0]['item_name']);
                        var len = values.length;
                        DEBUG && console.log(len)
                        var i = 0;
                        var sum = 0;
                        for (i = 0; i < len; i++) {

                            console.log(values[i]['item_name'] + " " + values[i]['qty']);
                        }
                        console.log("next table");

                    }
                });

               //console.log(values[i]['amount']);
            }
        }
    });



})(jQuery);
