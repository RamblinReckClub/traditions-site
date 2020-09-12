Element.prototype.addAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
}

var expanded_index = 0; 

function open_years(year, index){
    if(expanded_index != index) {
        if(expanded_index > 0){
            close_years()
        }
        var years_list = document.getElementById('years');
        var list_item = years_list.childNodes[index];
        for (var i = 0; i < 9; i++){
            list_element = document.createElement('li');
            list_element.className = index + '_dates'
            link_element = document.createElement('a');
            var year_last_digit = 9-i;
            var year_text = year.substring(0, 3) + (year_last_digit.toString());
            link_element.appendChild(document.createTextNode(year_text));
            link_element.href = "";
            list_element.appendChild(link_element);
            list_element.addAfter(list_item);
            expanded_index = index;
    }
    }
}

function close_years(){
    var years_list = document.getElementById('years');
    var delete_class_name = expanded_index + '_dates'
    var nodes_to_delete = years_list.getElementsByClassName(delete_class_name)
    for (var i = nodes_to_delete.length; i > 0; i--){
        years_list.removeChild(nodes_to_delete[i - 1])
    }
}