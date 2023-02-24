function add_carro(){
    container = document.getElementById("form-carro")
    html = "<br><div class='row'><div class='col-md'><input type='text' placeholder='carro' class='form-control' name=""></div><div class='col-md'><input type='text' placeholder='Placa' class='form-control'></div></div>"
    container.innerHTML += html
}