var str = "u";
var a = "";
for ( var y = 15; y> -15; y--){
    var b = "";
    for(var x = -30; x < 30; x++){
        var c = "";
        if (((Math.pow((x*0.05), 2) +
            Math.pow((y*0.1), 2) -1)**3-
            Math.pow((x*0.05), 2) *
            Math.pow((y*0.1), 3))<=0){
                let index = (x - y)%str.length;
                if (index < 0){
                    index = index + str.length;
                }     
                c = str[index];
            }else{
                c = " ";
            }
            b += c;
    }
    a = a + b + "\n";
}

console.log(a);