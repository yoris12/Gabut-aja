const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return[
        "Perkenalkan nama saya Yoris, Siapa nama kamu?",
        `Halo ${data?.nama},Berapa usia kamu?`,
        `ohh ${data?.usia},hobi kamu apa ya?`,
        `waw sama donk aku juga hobi ${data?.hobi},BTW punya pacar gak?`,
        `ohh....${data?.pacar},ya udah klo gitu.Udahan ya!`
        
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart(){
    if(jawaban.value.length < 1) return alert("Silahkan Isi Jawaban Dulu😒")
    init++
    if(init === 1){
        botDelay({nama: jawaban.value})
    }
    else if(init === 2){
        botDelay({usia: jawaban.value})
    }
    else if(init === 3){
        botDelay({hobi: jawaban.value})
    }
    else if(init === 4){
        botDelay({pacar: jawaban.value})
    }
    else if(init === 5){
        finishing()
    }
    else{
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
    loaders.style.display = "none"
    container[0].style.filter = "none"
    }, [1000])
    usersData.push(jawaban.value)
    jawaban.value = ""
}
function finishing() {
    pertanyaan.innerHTML = `Makasih ya ${usersData[0]} Udah Mampir ke YorisWeb😁,
    kali-kali kita main ${usersData[2]} bareng😊`
    jawaban.value = "Makasih juga 😘"
}
function botEnd() {
    alert(`terimakasih ${usersData[0]} sudah berkunjung!`)
    window.location.reload()
}