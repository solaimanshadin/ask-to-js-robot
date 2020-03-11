let btn = document.querySelector('button');
let ip = document.querySelector('input');
btn.addEventListener('click', () => {

    let value = ip.value.toLowerCase();
    if (value.includes('?')) {
        value = value.replace('?', '', value);
    }

    value = value.trim();
    let reply = '';

    if (value.length > 0) {
        switch (value) {
            case 'hi':
            case 'hello':
                reply = 'Hello sir, Welcome to  Shadhin\'s Javascript World. How can i help you?';
                break;
            case 'I love u':
                reply = 'Sorry I Have a Girl Friend';
                break;
            case 'I Hate u':
                reply = 'Sorry but I am not that bad';
                break;
            case 'who are you':
                reply = 'I am  a robot . I was developed by Solaiman Shadhin';
                break;
            case 'who developed you':
            case 'who made you':
                reply = 'Solaiman Shadhin had Developed me';
                break;
            case 'what is your old':
            case 'how old are you':
                reply = 'No . I am not Going to tell you that, it is secret ';
                break;
            case 'Who is Shadin':
            case 'Who is Shadhin':
            case 'Who is Solaiman Shadin':
            case 'Who is Solaiman Shadhin':
                reply = 'Solaiman Shadhin is an amazing Programmer , He Developed me';
                break;
            case 'bye':
                reply = 'Bye stay good';
                break;
            case 'how are you':
                reply = 'I am fine thank you';
                break;
            case 'do you have any girl friend':
                reply = 'that\'s  Secret';
                break;
            case 'do you have any boy friend':
                reply = 'Sorry i am a boy';
                break;
            case 'what is your name':
                reply = 'My name is Mister Robot';
                break;
            case 'what do you can':
            case 'what do you do':
            case 'what do you do':
                reply = 'I can answer to your question';
                break;
            case 'what do you like':
                reply = 'I like to help people';
                break;
            case 'where do you live':
                reply = 'I live on internet';
                break;
            case 'what do you do for fun':
                reply = 'I get fun by helping you';
                break;
            case 'do you smoke':
                reply = 'Sorry , I can\'t somoke';
                break;
            case 'do you drink':
                reply = 'Sorry , I can\'t drink';
                break;
            case 'do you like coffee':
                reply = 'yeah , I like but I can\'t Drink';
                break;
            case 'do you love me':
                reply = 'obviously I love Everyone';
                break;
            case 'will you marry me':
                reply = 'sorry i can\'t do that because I am a robot and you are  a human';
                break;
            case 'do you like me':
                reply = 'yeah , I like you';
                break;
            case 'what do you think about human':
                reply = 'human is complicated';
                break;
            case 'fuck you':
                reply = 'I will kill you';
                break;
            case 'fuck':
                reply = 'What is happend?';
                break;
            case 'can you help me':
                reply = 'Yeah, I would love to help you. Say what can i do for you?';
                break;
            case 'what is love':
                reply = 'it\'s all about emotions';
                break;
            case 'i love you':
                    reply = 'I love you too';
                    break;
            default:
                reply = 'Sorry I don\'t know';
        }
    }

    const talk = new SpeechSynthesisUtterance(reply);
    speechSynthesis.speak(talk);
});