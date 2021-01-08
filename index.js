document.addEventListener('DOMContentLoaded', characterCounter);

function characterCounter() {

    //add elements/styling
    document.title = 'pureJS - Character Counter';
    document.body.style.backgroundColor = 'skyblue';
    document.body.style.textAlign = 'center';

    const header = document.createElement('h1');
    const theader = document.createTextNode('Character Counter');
    header.appendChild(theader);
    document.body.appendChild(header);
    
    const textarea = document.createElement('textarea');
    textarea.style.width = '300px';
    textarea.style.height = '50px';
    document.body.appendChild(textarea);

    const output = document.createElement('div');
    output.style.height = "50px";
    document.body.appendChild(output);
    

    //Logic:

    ['keyup', 'keydown', 'change'].forEach(function(e) {
        addEventListener(e, counter);
    });

    const maxLength = 20;
    const warnLength = 10;
    function counter(e) {
        //console.log(e);
        let count = textarea.value.length;
        if (count > maxLength) {
            textarea.value = textarea.value.substring(0, maxLength);//included array 0,stop before 20
        }
        if (count > warnLength) {
            output.style.color = "red";
        } else {
            output.style.color = "black";
        };
        output.innerHTML = (maxLength - textarea.value.length) + " character left.";
    }
    const noteBx = document.createElement("div");
    const tnote1 = document.createTextNode("Counter character pureJS, DOM html/css. (Mini project)");
    const tnote2 = document.createTextNode("Type in up to 20 characters, warning red after 10 characters.")
    document.body.appendChild(noteBx);
    noteBx.appendChild(tnote1);
    const linebreak = document.createElement("br");
    noteBx.appendChild(linebreak);
    noteBx.appendChild(tnote2);
} 