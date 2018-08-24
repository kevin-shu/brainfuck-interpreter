function interpret(instructions){
    // var instructions = "++++++++++[>+++++++>++++++++++>+++>+<<<<-]";
    var output = "";
    var tape = [];
    var index = 0;
    var loopStack = [];

    for (var _i=0; _i<instructions.length; _i++) {
        if(tape[index]===undefined){ tape[index]=0; }
        switch(instructions[_i]) {
            case "+":
                tape[index]++; break;
            case "-":
                tape[index]--; break;
            case ">":
                index++; break;
            case "<":
                index--; break;
            case "[":
                if(loopStack[loopStack.length-1]!=_i){
                    loopStack.push(_i);
                }
                if(tape[index]===0){
                    for(;instructions[_i]==="]";_i++){}
                }
                break;
            case "]":
                if(tape[index]!==0){
                    _i = loopStack[loopStack.length-1];
                } else {
                    loopStack.pop();
                }
                break;
            case ".":
                // number to char 
                puts(String.fromCharCode(tape[index]));
                // tape[index] = String.fromCharCode(tape[index]);
                break;
            case ",":
                // char to number
                var chars = prompt("請輸入一個字元");
                if (chars=="") {
                    tape[index] = 13;
                } else {
                    tape[index] = chars.charCodeAt(0);
                }
                break;
        }
    }
}

function puts(char){
    $("pre").text( $("pre").text()+char );
}