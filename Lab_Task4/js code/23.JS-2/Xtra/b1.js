function showDemo() {
    let name =Number(document.getElementById("name1").value);

    let age =Number(document.getElementById("name2").value);

    let sum=name+age;

    document.getElementById("output").innerHTML =

        "<h2>Resulted value</h2>" +sum + "<br><br>" +"<b>Array Elements</b><br>";
}




