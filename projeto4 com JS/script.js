function tabuada(){
    let num = document.getElementById(`txtn`)
    let tab = document.getElementById(`seltab`)
    if (num.value.length == 0){
        window.alert(`Por favor, digite um número!`)
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = `` // limpa a tabuada

        while( c <= 10){
            let item =document.createElement(`option`)
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab ${c}`//útil para o back saber qual item foi selecionado
            tab.appendChild(item)
            c++
        }
    }

    
}