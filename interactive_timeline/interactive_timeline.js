Element.prototype.addAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
}

var expanded_index = 0; 
var open_logo = false;
var list_1880s = [5, 6, 8];
var list_1890s = [2, 3, 4, 6];
var list_1900s = [4, 5, 6, 8];
var list_1910s = [1, 3, 5, 6, 7];
var list_1920s = [2, 9];
var list_1930s = [3, 8];
var list_1940s = [4, 5, 8];
var list_1950s = [2, 5, 6, 7];
var list_1960s = [1, 4, 7, 9];
var list_1970s = [2, 3, 4, 8];
var list_1980s = [1, 7, 9];
var list_1990s = [1, 4, 6];
var list_2000s = [2, 3, 4, 7, 8, 9];
var list_2010s = [1, 3, 8];
var list_of_lists = [list_1880s, list_1890s, list_1900s, list_1910s, list_1920s, list_1930s, list_1940s, list_1950s, list_1960s, list_1970s, list_1980s, list_1990s, list_2000s, list_2010s]

function open_years(year, index){
    if(expanded_index != index) {
        if(expanded_index > 0){
            close_years();
        }
        var years_list = document.getElementById('years');
        var list_item = years_list.childNodes[index];
        var correct_list = list_of_lists[(index-1)/2];
        for (var i=correct_list.length-1; i>=0; i--){
            list_element = document.createElement('li');
            list_element.className = index + '_dates'
            link_element = document.createElement('a');
            var year_last_digit = correct_list[i];
            var year_text = year.substring(0, 3) + (year_last_digit.toString());
            link_element.appendChild(document.createTextNode(year_text));
            (function (year_text) {
                link_element.onclick = function() { jumpto(year_text.toString()); }
            })(year_text);
            link_element.style.cursor = "pointer";
            list_element.appendChild(link_element);
            list_element.addAfter(list_item);
            expanded_index = index;
        }
        document.getElementById("info").scrollTop = document.getElementById(year).offsetHeight + document.getElementById(year).offsetTop - (window.innerHeight / 15)
    }
    else {
        if(expanded_index > 0) {
            close_years();
            expanded_index = 0;
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

function changeNavOutline(){
    if (open_logo==false) {
        document.getElementsByClassName("logo-custom")[0].style.outline = "0px solid white";
        open_logo=true;
    } else if (open_logo==true) {
        document.getElementsByClassName("logo-custom")[0].style.outline = "4px solid white";
        open_logo=false;
    }
}

function jumpto(year) {
    document.getElementById("info").scrollTop = document.getElementById(year).offsetHeight + document.getElementById(year).offsetTop - (window.innerHeight / 15)
}