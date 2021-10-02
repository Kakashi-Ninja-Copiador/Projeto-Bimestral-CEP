const options = {
    method: "GET",
    mode: "cors",
    caches: "default"
}

const cep = document.getElementById("cep")
cep.addEventListener("blur", (e) => {
    let Cep = document.getElementById("cep").value;
    console.log(Cep)
    let search = cep.value.replace("-", "")
    fetch(`https://viacep.com.br/ws/${search}/json/`, options).then((response) => {
        response.json().then(data => {
        document.getElementById("bai").value = data.bairro;
        document.getElementById("ddd").value = data.ddd;
        document.getElementById("ibge").value = data.ibge;
        document.getElementById("loc").value = data.localidade;
        document.getElementById("log").value = data.logradouro;
        document.getElementById("uf").value = data.uf;

        })
    })
})

function enviar() {
    let bairro = document.getElementById("bai").value;
    let ddd = document.getElementById("ddd").value;
    let ibge = document.getElementById("ibge").value;
    let localidade = document.getElementById("loc").value;
    let logradouro = document.getElementById("log").value;
    let uf = document.getElementById("uf").value;
    let json = {
        "bai": bairro,
        "ddd": ddd,
        "ibge": ibge,
        "loc": localidade,
        "log": logradouro,
        "uf": uf

        }
}