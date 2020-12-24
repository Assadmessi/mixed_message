const generateRandomNum = num => {
    return Math.floor(Math.random() * num)
};

const collectiveLoveLetter = {
    man : ['Messi','Jerry','Mickey'],
    woman : ['Cintha','Juliet','Alice'],
    sentence : ['I love you','I hate you','Let\'s break up']
};

let personalLoveLetter = [];

for(let prop in collectiveLoveLetter){
    let optionId = generateRandomNum(collectiveLoveLetter[prop].length);
    switch(prop) {
        case 'man':
            personalLoveLetter.push(`I am ${collectiveLoveLetter[prop][optionId]}`);
            break;
        case 'woman':
            personalLoveLetter.push(`I am ${collectiveLoveLetter[prop][optionId]}`);
            break;
        case 'sentence':
            personalLoveLetter.push(`I am about to say you is that ${collectiveLoveLetter[prop][optionId]}`);
            break;
        default:
            loveLetter.push('Not enough information')
    }
};

const formatLoveLetter = loveLetter => {
    const formated = personalLoveLetter.join('\n');
    console.log(formated);
}

formatLoveLetter(personalLoveLetter);

