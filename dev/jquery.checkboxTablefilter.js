(function ($) {
    var $table;

    var methods = {
        init: function (options) {
            var columnIndex = options.columnIndex;
            var checkBoxFilterAttributeName = "checkBoxTableFilter-" + columnIndex;
            addFilterAttributeInRows();

            return $table;


            function addFilterAttributeInRows() {
                var map = {};
                var id = 1;
                $table.find("tbody tr").each(function (i, row) {
                    var $row = $(row);
                    var $cell = $row.find("td:nth-child(" + columnIndex + ")");
                    var text = $cell.text().trim();

                    if (!map[text]) {
                        map[text] = id;
                        id++;
                    }

                    $row.attr(checkBoxFilterAttributeName, map[text]);
                });
            }
        }
    };


    $.fn.checkBoxTableFilter = function (options) {
        $table = this;
        if (methods[options]) {
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + options + ' does not exist on jQuery.checkBoxTableFilter');
            return {};
        }
    };

})(jQuery);