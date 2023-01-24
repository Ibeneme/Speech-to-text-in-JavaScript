const talk = document.getElementById("talk")


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const speechFinder = new SpeechRecognition

speechFinder.onstart = ()=>{
    console.log("microphone activated")
}

talk.addEventListener( "click", ()=>{
    speechFinder.start()
})

speechFinder.onresult = (event)=>{
    const firstStep = event.resultIndex
    const speeching = event.results[firstStep][0].transcript
    output.textContent = speeching
}



