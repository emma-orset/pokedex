let randomNumber = Math.ceil(Math.random() * 150) + 1

let image = document.getElementById("image")
let answer = document.getElementById("answer")
let input = document.getElementById("input")
let button_check = document.getElementById("button_check")
let message = document.getElementById("message")
let button_next = document.getElementById("button_next")

fetch(`https://tyradex.vercel.app/api/v1/pokemon/${randomNumber}`)
    .then(res => res.json())
    .then(data => {
        if (data.status === 404){
            console.log(`Error ${data.message}`)
        } else{
            image.src = data.sprites.regular;

            let checkPokemon = async () => {
                let val = input.value.toLowerCase();

                if (val != ""){
                    answer.textContent = `#${data.pokedex_id} ${data.name.fr} (${data.name.en}, ${data.name.jp})`
                    if (val == (data.name.fr.toLowerCase() || data.name.en.toLowerCase() || data.name.jp.toLowerCase())){
                        message.textContent = "Bravo, bonne réponse !"
                    }
                    else{
                        message.textContent = "Dommage... Une prochaine fois."
                    } 
                    button_check.disabled = true;
                }
                else{
                    message.textContent = "Essaie quand même quelque chose, on sait jamais !"
                }
            
            }

            button_check.addEventListener("click", checkPokemon);

            input.addEventListener("keypress", function(event) {
                if (event.key === "Enter") {
                event.preventDefault();
                button_check.click();
                }
            });
        }
    }
)

button_next.addEventListener("click", function() {
    location.reload();
});