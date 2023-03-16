// code your solution here
function saturdayFun(funActivity = "roller-skate"){
    return `This Saturday, I want to ${funActivity}!`;
}

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrapper = "*"){

    return function(compliment = "special"){
        return `You are ${wrapper}${compliment}${wrapper}!`;
    }
   
}
wrapAdjective("||")("a dedicated programmer");