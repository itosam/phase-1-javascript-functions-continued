// function declaration
// function razzle () { 
//     console.log("You've been razzled!") }

// razzle();

function saturdayFun(fun = "roller-skate") {
    return `This Saturday, I want to ${fun}!`
}

const mondayWork = function(monday = "go to the office") {
    return `This Monday, I will ${monday}.`
}

let wrapAdjective = function(highlight = "*") {
    return function(adj = "special") {
        return `You are ${highlight}${adj}${highlight}!`
};
}
