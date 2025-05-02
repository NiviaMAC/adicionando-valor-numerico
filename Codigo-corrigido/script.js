let div_num = document.getElementById("num_div")
let add_btn = document.getElementById("add_btn") //não
//há necessidade de pegar esse elemento de adicionar
//botão
let num = 0
function AdicionarNumero() {
    num = num +1 //pode também ser apenas
    //num++
    div_num.textContent = `${num}` //poderia ficar
    // " " num ou apenas com o num, o código funcionaria
    console.log(num)
}