let div_num = getElementById("Num_div")
let add_btn = getElementById("add_btn")
let num = 0
function AdicionarNumero() {
    num = num++
    div_num.Text = `${num}`
}