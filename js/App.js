const url='https://api.dictionaryapi.dev/api/v2/entries/en/';

const result=document.getElementById("result");
const sound=document.getElementById("sound");
const search_btn=document.getElementById("search-btn");


search_btn.addEventListener("click",()=>{
    const input_word=document.getElementById('input-word').value;

    const finalurl=url+input_word;
    fetch(finalurl)
    .then((response)=>response.json())
    .then((data)=> {
        console.log(data)
    result.innerHTML=`
    <div class="word">
        <p>${input_word}</p>
       <button onclick="playSound()"><i class="fa-solid fa-volume-high"></i></button>
    </div>

    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
       </div>

       <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}
       </p>

       <div class="word-example">
       <p>synonyms:<sapn> ${data[0].meanings[0].synonyms[0]}</sapn></p>

       </div>`

       sound.setAttribute('src',data[0].phonetics[0].audio)
       console.log(sound);
    })

})

function playSound(){
    console.log("playing")
    sound.play();
}

