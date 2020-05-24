function area() {
    var al = document.getElementById("naltura").value;
    var b = document.getElementById("nbasemenor").value;
    var bm = document.getElementById("nbasemayor").value;
    var area = ((parseFloat(b) + parseFloat(bm))*al/2);
    alert("El area del Trapecio es = "+ area);
    }