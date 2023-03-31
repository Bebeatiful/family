var famlityimg = ["dowload (1).jpg","download (2).jpg","download (3).jpg","download (4).jpg"]
var names = ["album de familia","Rodrigo","Silce","dragão"]

var i = 0
function updated(){
    i++;
    var member = 4
    if (i > member){
       i = 0
    }
    var upimage = famlityimg[i];
    var upname = names[i];
    document.getElementById("familyimg").src = upimage;
    document.getElementById("famlityname").innerHTML = upname;
}