const logoText = document.getElementById('nonEditable');
const otherText = document.getElementById('editable');
const welcomeButton = document.getElementById('welcomeButton');
const bgColorSlider = document.getElementById('bgColorSlider');

function greeting() {
    logoText.style.display = 'none';
    otherText.style.display = 'inline-block';
    let greetings = [
        [...'Välkommen till Familjen'],
        [...'Hej på dig!'],
        [...'Tjenixen'],
        [...'Tjabba tjena hallå!'],
        [...'Howdy partner!'],
        [...'Psssst..'],
    ];

    printer(greetings[Math.floor(Math.random() * 6)], otherText);
    setTimeout(() => {
        let today = new Date();
        let messages = [
            [...'Klockan är '+ today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes()],
            [...'Lookin\' sharp!'],
            [...'Hakan upp, axlarna ner.'],
            [...'Kul att se dig!'],
            [...'* Visslar *'],
            [...'Fan vad snygg du är!'],
        ];

        printer(messages[Math.floor(Math.random() * 6)], otherText);
        
        setTimeout(function() {
            resetText();
        }, 3200)
    }, 4000)
}

function resetText() {
    otherText.style.display = 'none';
    logoText.innerHTML = '';
    logoText.style.display = 'inline-block';
    printer([...'FAMILJEN'], logoText);
}

function printer(input, target){
    target.innerHTML = '';
    const timer = ms => new Promise(res => setTimeout(res, ms));
    async function load () {
        for (let i=0; i < input.length; i++) {
            target.innerHTML += input[i];
            await timer(50);
        }
    }
    load();
};
