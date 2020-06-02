
function searching()
{
var input=prompt("enter number you want to search");


document.write("</br></br>Random selected elements of array</br>");
var myarray=[1,4,6,7,8,9,0,2];
document.write(myarray);

//document.write("the length of array is")

console.log(myarray);
var len=myarray.length;
document.write("</br></br>the length of array is : ", len);

var sorted=myarray.sort();
document.write("</br></br>array in sorted form is like</br>" , sorted);

//var xx=myarray.indexOf(2);
//document.write("</br> index of input num is : ",myarray.indexOf(2));

document.write("</br></br>");
 

var vv;
for( var i=0 ; i<=len ;i++)
{

    if(input==myarray[i])
    {
        document.write("index is here"+i);
        document.write("user required elment is here : ")
        document.write(input);       
    }    
}

//var indexx=myarray.findIndex(input);
//document.write(myarray.indexOf(input));
//print(myarray.indexOf(input));
}

function lengthis()
{
    //var inn=prompt("find index of number")
    var arr=[11,26,31,4,5,6,8,39];
    var present=arr.indexOf(31);
    document.write(" index is " ,);


    document.write("elements in array are </br>" , arr, "</br></br>");
    for( var i=0; i<8; i++)
    {
        
        //document.write(" " ,arr[i]);
        document.write("</br> index of  ", arr[i] ," is-:",arr.indexOf(arr[i]));    
    }

    /*var present=arr.indexOf(31);
    if(present >-1)
    {
        document.write(indexOf(inn));
    }
    else
    {
        document.write("num is not in array");
    }*/

    document.write("</br></br><h3>we have roman urdu sentence</h3>");
    var vc=prompt("enter number for repeatation of senstence");
    var alpha="ya to hoga";
    var alpha2="chat sy gira aur mar gya</br>"
    document.write("" , alpha , "&nbsp &nbsp", alpha2);
    var indexx=alpha.indexOf("to");
    var conn=alpha.concat(alpha2);
    var lstindex=alpha2.lastIndexOf("mar");
    var rep=alpha2.repeat(vc);


    document.write("</br> repeat function as </br>" , rep);
    document.write("</br></br>last index is" , lstindex);
    document.write("</br>index of word to is :" , indexx);  
    document.write("</br>sentence is concatinate : ", conn);

    
}
