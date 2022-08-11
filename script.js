let blockSelect = document.querySelector('#blockChoice');
for(let i=1; i<=6; i++){
    let block = document.createElement('div');
    block.setAttribute('class', `block${i}`);
    
    block.setAttribute('draggable', 'true');
    block.setAttribute('id', 'lego')
    blockSelect.append(block);
}

brick1 = false;
brick2 = false;
brick3 = false;
brick4 = false;
brick5 = false;
brick6 = false;

let legoNum = 1;

   


function range(start, end){
    let arr = [];
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}

let pixels = range(0, 4903);
let numOfPixels = pixels.length;
let temp;

for(i = 0; i <= numOfPixels; i++){
    let sandbox = document.querySelector('#sandbox');
    temp = document.createElement('div');
    temp.setAttribute('class', `pixel ${i}`);
    sandbox.appendChild(temp);
}

let spaces = Array.from(document.querySelectorAll('.pixel'));
let blocks = Array.from(document.querySelectorAll('#lego'));

//Lego listeners
blocks.forEach(lego =>{
    lego.addEventListener('dragstart', dragstart);
    lego.addEventListener('dragend', dragend);
    
});

//Drag functions
function dragstart(e){
    //e.preventDefault();
    if(e.target.classList.contains('block1')){this.classList.add('picked1')}
    else if(e.target.classList.contains('block2')){this.classList.add('picked2')}
    else if(e.target.classList.contains('block3')){this.classList.add('picked3')}
    else if(e.target.classList.contains('block4')){this.classList.add('picked4')}
    else if(e.target.classList.contains('block5')){this.classList.add('picked5')}
    else if(e.target.classList.contains('block6')){this.classList.add('picked6')}
    console.log(this.classList[1]);

     if(blocks.some(lego => {
        return lego.classList.contains('picked1')
    })){brick1 = true}else{brick1 = false}

    if(blocks.some(lego => {
        return lego.classList.contains('picked2')
    })){brick2 = true}else{brick2 = false}

    if(blocks.some(lego => {
        return lego.classList.contains('picked3')
    })){brick3 = true}else{brick3 = false}

    if(blocks.some(lego => {
        return lego.classList.contains('picked4')
    })){brick4 = true}else{brick4 = false}

    if(blocks.some(lego => {
        return lego.classList.contains('picked5')
    })){brick5 = true}else{brick5 = false}

    if(blocks.some(lego => {
        return lego.classList.contains('picked6')
    })){brick6 = true}else{brick6 = false}
}

function dragend(e){
    //e.preventDefault();
    setTimeout(()=> {e.target.classList.remove(e.target.classList[1])}, .500);
}

for(let space of spaces){
    space.addEventListener('dragover', dragover);
    space.addEventListener('dragenter', dragenter);
    space.addEventListener('dragleave', dragleave);
    space.addEventListener('drop', dragdrop);
    //space.addEventListener('click', getID)
}

function dragover(e){
    
    e.preventDefault();
    e.target.classList.add('highlight');
    
    if(brick1 === true){e.target.classList.add('bottomGlow')}

    else if(brick2 === true){
        e.target.classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 1].classList.add('bottomGlow');
    }
    else if(brick3 === true){
        e.target.classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 1].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 2].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 3].classList.add('bottomGlow');
    }
    else if(brick4 === true){
        e.target.classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 1].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 2].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 3].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 4].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 5].classList.add('bottomGlow');
    }
    else if(brick5 === true){
        e.target.classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 1].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 2].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 3].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 4].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 5].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 6].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 7].classList.add('bottomGlow');
    }
    else if(brick6 === true){
        e.target.classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 1].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 2].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 3].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 4].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 5].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 6].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 7].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 8].classList.add('bottomGlow');
        spaces[spaces.indexOf(e.target) - 9].classList.add('bottomGlow');
    }
    else return;

}

function dragenter(e){
    e.preventDefault();
    e.target.classList.add('highlight');
    e.target.classList.add('bottomGlow')
}

function dragleave(e){
    e.preventDefault();
    e.target.classList.remove('highlight')
    for(let space of spaces){
        space.classList.remove('bottomGlow');
    }
}

function dragdrop(e){
    e.preventDefault();
    e.target.classList.remove('highlight')
    
    let brick = blocks[0];
    
    let spaces = Array.from(document.querySelectorAll('.pixel'))
    for(let space of spaces){
        space.classList.remove('bottomGlow')
    }
    let idNumUnder = (spaces.indexOf(e.target) + 109);
    let idNumOver = (spaces.indexOf(e.target) - 109);
    
        
    
    //IF A CERTAIN BRICK IS TRUE, THAT WILL BE THE BRICK LAYED DOWN. ALTER THE ARRAY
    
    if(e.target.classList.contains('row44') && brick1 === true ){
        e.target.setAttribute('id', 'lego');
        e.target.classList.add('placed');
        e.target.style.backgroundColor = brick.style.backgroundColor;
        e.target.style.borderLeft = "1px solid black";
        e.target.style.borderRight = "1px solid black";
        e.target.classList.add(`${legoNum}`);
        legoNum++;
    }

    else if(e.target.classList.contains('row44') && brick2 === true ){
        e.target.setAttribute('id', 'legoRightEnd');
        e.target.classList.add('placed');
        e.target.style.backgroundColor = brick.style.backgroundColor;
        e.target.style.borderLeftColor = brick.style.backgroundColor;
        e.target.style.borderRight = "1px solid black";
        e.target.classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 1].setAttribute('id', 'legoLeftEnd');
        spaces[spaces.indexOf(e.target) - 1].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 1].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderLeft = "1px solid black";
        spaces[spaces.indexOf(e.target) - 1].classList.add(`${legoNum}`);
        
        
        legoNum++;
        console.log(idNumUnder);
    }

    else if(e.target.classList.contains('row44') && brick3 === true ){
        e.target.setAttribute('id', 'legoRightEnd');
        e.target.classList.add('placed');
        e.target.style.backgroundColor = brick.style.backgroundColor;
        e.target.style.borderLeftColor = brick.style.backgroundColor;
        e.target.style.borderRight = "1px solid black";
        e.target.classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 1].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 1].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 1].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 2].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 2].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 2].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 3].setAttribute('id', 'legoLeftEnd');
        spaces[spaces.indexOf(e.target) - 3].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 3].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].style.borderLeft = "1px solid black";
        spaces[spaces.indexOf(e.target) - 3].classList.add(`${legoNum}`);
        
        legoNum++;
        
        console.log(idNumUnder);
    }

    else if(e.target.classList.contains('row44') && brick4 === true ){
        e.target.setAttribute('id', 'legoRightEnd');
        e.target.classList.add('placed');
        e.target.style.backgroundColor = brick.style.backgroundColor;
        e.target.style.borderLeftColor = brick.style.backgroundColor;
        e.target.style.borderRight = "1px solid black";
        e.target.classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 1].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 1].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 1].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 2].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 2].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 2].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 3].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 3].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 3].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 4].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 4].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 4].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 4].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 4].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 4].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 5].setAttribute('id', 'legoLeftEnd');
        spaces[spaces.indexOf(e.target) - 5].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 5].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 5].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 5].style.borderLeft = "1px solid black";
        spaces[spaces.indexOf(e.target) - 5].classList.add(`${legoNum}`);
        
        legoNum++;
        
        console.log(idNumUnder);
    }

    else if(e.target.classList.contains('row44') && brick5 === true ){
        e.target.setAttribute('id', 'legoRightEnd');
        e.target.classList.add('placed');
        e.target.style.backgroundColor = brick.style.backgroundColor;
        e.target.style.borderLeftColor = brick.style.backgroundColor;
        e.target.style.borderRight = "1px solid black";
        e.target.classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 1].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 1].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 1].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 2].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 2].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 2].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 3].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 3].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 3].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 4].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 4].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 4].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 4].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 4].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 4].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 5].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 5].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 5].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 5].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 5].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 5].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 6].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 6].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 6].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 6].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 6].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 6].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 7].setAttribute('id', 'legoLeftEnd');
        spaces[spaces.indexOf(e.target) - 7].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 7].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 7].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 7].style.borderLeft = "1px solid black";
        spaces[spaces.indexOf(e.target) - 7].classList.add(`${legoNum}`);
        
        legoNum++;
        
        console.log(idNumUnder);
    }

    else if(e.target.classList.contains('row44') && brick6 === true ){
        e.target.setAttribute('id', 'legoRightEnd');
        e.target.classList.add('placed');
        e.target.style.backgroundColor = brick.style.backgroundColor;
        e.target.style.borderLeftColor = brick.style.backgroundColor;
        e.target.style.borderRight = "1px solid black";
        e.target.classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 1].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 1].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 1].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 2].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 2].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 2].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 3].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 3].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 3].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 4].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 4].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 4].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 4].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 4].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 4].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 5].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 5].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 5].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 5].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 5].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 5].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 6].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 6].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 6].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 6].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 6].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 6].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 7].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 7].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 7].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 7].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 7].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 7].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 8].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 8].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 8].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 8].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 8].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 8].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 9].setAttribute('id', 'legoLeftEnd');
        spaces[spaces.indexOf(e.target) - 9].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 9].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 9].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 9].style.borderLeft = "1px solid black";
        spaces[spaces.indexOf(e.target) - 9].classList.add(`${legoNum}`);
        
        legoNum++;
        
        console.log(idNumUnder);
    }


    else if(e.target && brick1 === true){
        let myElUnder = spaces[idNumUnder];
        let overTarget = spaces[idNumOver];
        if(myElUnder.classList.contains('placed') || overTarget.classList.contains('placed')){
            e.target.setAttribute('id', 'lego');
            e.target.classList.add('placed');
            e.target.style.backgroundColor = brick.style.backgroundColor;
            e.target.style.borderLeft = "1px solid black";
            e.target.style.borderRight = "1px solid black";
            e.target.classList.add(`${legoNum}`);
            console.log(idNumUnder);}
        legoNum++;
    }

    else if(e.target && brick2 === true){
        let underTarget = spaces[idNumUnder];
        let overTarget = spaces[idNumOver];
        if(underTarget.classList.contains('placed')  || spaces[idNumUnder - 1].classList.contains('placed') || overTarget.classList.contains('placed')  || spaces[idNumOver - 1].classList.contains('placed')){
            e.target.setAttribute('id', 'legoRightEnd');
        e.target.classList.add('placed');
        e.target.style.backgroundColor = brick.style.backgroundColor;
        e.target.style.borderLeftColor = brick.style.backgroundColor;
        e.target.style.borderRight = "1px solid black";
        e.target.classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 1].setAttribute('id', 'legoLeftEnd');
        spaces[spaces.indexOf(e.target) - 1].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 1].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderLeft = "1px solid black";
        spaces[spaces.indexOf(e.target) - 1].classList.add(`${legoNum}`);
        
    }
    legoNum++;
    }
    else if(e.target && brick3 === true){
        let underTarget = spaces[idNumUnder];
        let overTarget = spaces[idNumOver];
        if(underTarget.classList.contains('placed')  || spaces[idNumUnder - 1].classList.contains('placed') || spaces[idNumUnder - 2].classList.contains('placed') || spaces[idNumUnder - 3].classList.contains('placed')    || overTarget.classList.contains('placed')  || spaces[idNumOver - 1].classList.contains('placed') || spaces[idNumOver - 2].classList.contains('placed') || spaces[idNumOver - 3].classList.contains('placed')){
            e.target.setAttribute('id', 'legoRightEnd');
        e.target.classList.add('placed');
        e.target.style.backgroundColor = brick.style.backgroundColor;
        e.target.style.borderLeftColor = brick.style.backgroundColor;
        e.target.style.borderRight = "1px solid black";
        e.target.classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 1].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 1].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 1].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 2].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 2].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 2].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 3].setAttribute('id', 'legoLeftEnd');
        spaces[spaces.indexOf(e.target) - 3].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 3].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].style.borderLeft = "1px solid black";
        spaces[spaces.indexOf(e.target) - 3].classList.add(`${legoNum}`);
            console.log(idNumUnder);}
        legoNum++;
    }

    else if(e.target && brick4 === true){
        let underTarget = spaces[idNumUnder];
        let overTarget = spaces[idNumOver];
        if(underTarget.classList.contains('placed')  || spaces[idNumUnder - 1].classList.contains('placed') || spaces[idNumUnder - 2].classList.contains('placed') || spaces[idNumUnder - 3].classList.contains('placed') || spaces[idNumUnder - 4].classList.contains('placed') || spaces[idNumUnder - 5].classList.contains('placed')    || overTarget.classList.contains('placed')  || spaces[idNumOver - 1].classList.contains('placed') || spaces[idNumOver - 2].classList.contains('placed') || spaces[idNumOver - 3].classList.contains('placed') || spaces[idNumOver - 4].classList.contains('placed') || spaces[idNumOver - 5].classList.contains('placed')){
            e.target.setAttribute('id', 'legoRightEnd');
        e.target.classList.add('placed');
        e.target.style.backgroundColor = brick.style.backgroundColor;
        e.target.style.borderLeftColor = brick.style.backgroundColor;
        e.target.style.borderRight = "1px solid black";
        e.target.classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 1].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 1].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 1].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 2].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 2].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 2].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 3].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 3].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 3].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 4].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 4].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 4].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 4].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 4].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 4].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 5].setAttribute('id', 'legoLeftEnd');
        spaces[spaces.indexOf(e.target) - 5].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 5].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 5].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 5].style.borderLeft = "1px solid black";
        spaces[spaces.indexOf(e.target) - 5].classList.add(`${legoNum}`);
            console.log(idNumUnder);}
        legoNum++;
    }

    else if(e.target && brick5 === true){
        let underTarget = spaces[idNumUnder];
        let overTarget = spaces[idNumOver];
        if(underTarget.classList.contains('placed')  || spaces[idNumUnder - 1].classList.contains('placed') || spaces[idNumUnder - 2].classList.contains('placed') || spaces[idNumUnder - 3].classList.contains('placed') || spaces[idNumUnder - 4].classList.contains('placed') || spaces[idNumUnder - 5].classList.contains('placed') || spaces[idNumUnder - 6].classList.contains('placed') || spaces[idNumUnder - 7].classList.contains('placed')    || overTarget.classList.contains('placed')  || spaces[idNumOver - 1].classList.contains('placed') || spaces[idNumOver - 2].classList.contains('placed') || spaces[idNumOver - 3].classList.contains('placed') || spaces[idNumOver - 4].classList.contains('placed') || spaces[idNumOver - 5].classList.contains('placed') || spaces[idNumOver - 6].classList.contains('placed') || spaces[idNumOver - 7].classList.contains('placed')){
            e.target.setAttribute('id', 'legoRightEnd');
            e.target.classList.add('placed');
            e.target.style.backgroundColor = brick.style.backgroundColor;
            e.target.style.borderLeftColor = brick.style.backgroundColor;
            e.target.style.borderRight = "1px solid black";
            e.target.classList.add(`${legoNum}`);
            spaces[spaces.indexOf(e.target) - 1].setAttribute('id', 'legoMiddle');
            spaces[spaces.indexOf(e.target) - 1].classList.add('placed');
            spaces[spaces.indexOf(e.target) - 1].style.backgroundColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 1].style.borderRightColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 1].style.borderLeftColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 1].classList.add(`${legoNum}`);
            spaces[spaces.indexOf(e.target) - 2].setAttribute('id', 'legoMiddle');
            spaces[spaces.indexOf(e.target) - 2].classList.add('placed');
            spaces[spaces.indexOf(e.target) - 2].style.backgroundColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 2].style.borderRightColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 2].style.borderLeftColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 2].classList.add(`${legoNum}`);
            spaces[spaces.indexOf(e.target) - 3].setAttribute('id', 'legoMiddle');
            spaces[spaces.indexOf(e.target) - 3].classList.add('placed');
            spaces[spaces.indexOf(e.target) - 3].style.backgroundColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 3].style.borderRightColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 3].style.borderLeftColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 3].classList.add(`${legoNum}`);
            spaces[spaces.indexOf(e.target) - 4].setAttribute('id', 'legoMiddle');
            spaces[spaces.indexOf(e.target) - 4].classList.add('placed');
            spaces[spaces.indexOf(e.target) - 4].style.backgroundColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 4].style.borderRightColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 4].style.borderLeftColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 4].classList.add(`${legoNum}`);
            spaces[spaces.indexOf(e.target) - 5].setAttribute('id', 'legoMiddle');
            spaces[spaces.indexOf(e.target) - 5].classList.add('placed');
            spaces[spaces.indexOf(e.target) - 5].style.backgroundColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 5].style.borderRightColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 5].style.borderLeftColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 5].classList.add(`${legoNum}`);
            spaces[spaces.indexOf(e.target) - 6].setAttribute('id', 'legoMiddle');
            spaces[spaces.indexOf(e.target) - 6].classList.add('placed');
            spaces[spaces.indexOf(e.target) - 6].style.backgroundColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 6].style.borderRightColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 6].style.borderLeftColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 6].classList.add(`${legoNum}`);
            spaces[spaces.indexOf(e.target) - 7].setAttribute('id', 'legoLeftEnd');
            spaces[spaces.indexOf(e.target) - 7].classList.add('placed');
            spaces[spaces.indexOf(e.target) - 7].style.backgroundColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 7].style.borderRightColor = brick.style.backgroundColor;
            spaces[spaces.indexOf(e.target) - 7].style.borderLeft = "1px solid black";
            spaces[spaces.indexOf(e.target) - 7].classList.add(`${legoNum}`);
            console.log(idNumUnder);}
        legoNum++;
    }

    else if(e.target && brick6 === true){
        let underTarget = spaces[idNumUnder];
        let overTarget = spaces[idNumOver];
        if(underTarget.classList.contains('placed')  || spaces[idNumUnder - 1].classList.contains('placed') || spaces[idNumUnder - 2].classList.contains('placed') || spaces[idNumUnder - 3].classList.contains('placed') || spaces[idNumUnder - 4].classList.contains('placed') || spaces[idNumUnder - 5].classList.contains('placed') || spaces[idNumUnder - 6].classList.contains('placed') || spaces[idNumUnder - 7].classList.contains('placed') || spaces[idNumUnder - 8].classList.contains('placed') || spaces[idNumUnder - 9].classList.contains('placed')    || overTarget.classList.contains('placed')  || spaces[idNumOver - 1].classList.contains('placed') || spaces[idNumOver - 2].classList.contains('placed') || spaces[idNumOver - 3].classList.contains('placed') || spaces[idNumOver - 4].classList.contains('placed') || spaces[idNumOver - 5].classList.contains('placed') || spaces[idNumOver - 6].classList.contains('placed') || spaces[idNumOver - 7].classList.contains('placed') || spaces[idNumOver - 8].classList.contains('placed') || spaces[idNumOver - 9].classList.contains('placed')){
        e.target.setAttribute('id', 'legoRightEnd');
        e.target.classList.add('placed');
        e.target.classList.add(`${legoNum}`);
        e.target.style.backgroundColor = brick.style.backgroundColor;
        e.target.style.borderLeftColor = brick.style.backgroundColor;
        e.target.style.borderRight = "1px solid black"
        spaces[spaces.indexOf(e.target) - 1].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 1].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 1].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 1].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 1].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 2].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 2].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 2].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 2].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 3].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 3].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 3].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 3].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 4].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 4].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 4].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 4].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 4].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 4].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 5].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 5].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 5].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 5].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 5].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 5].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 6].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 6].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 6].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 6].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 6].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 6].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 7].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 7].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 7].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 7].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 7].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 7].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 8].setAttribute('id', 'legoMiddle');
        spaces[spaces.indexOf(e.target) - 8].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 8].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 8].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 8].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 8].style.borderLeftColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 9].setAttribute('id', 'legoLeftEnd');
        spaces[spaces.indexOf(e.target) - 9].classList.add('placed');
        spaces[spaces.indexOf(e.target) - 9].classList.add(`${legoNum}`);
        spaces[spaces.indexOf(e.target) - 9].style.backgroundColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 9].style.borderRightColor = brick.style.backgroundColor;
        spaces[spaces.indexOf(e.target) - 9].style.borderLeft = "1px solid black";
        
        
        console.log(idNumUnder);}
        legoNum++;
    }
   
    
    
    else{return}
    
}



function chunckArr(arr, chunkSize){
    
    let arrLen = arr.length;
    let tempArr = [];
    for(let i = 0; i<arrLen; i+=chunkSize){
        myChunk = arr.slice(i, i + chunkSize);
        tempArr.push(myChunk);
    }
    return tempArr;
}

let rows = chunckArr(spaces, 109);

for(let i = 0; i<rows.length; i++){
    rows[i].forEach(child =>{
        child.classList.add(`row${i}`);
    });
}






let clear = document.querySelector('.clear');
clear.addEventListener("click", function(e){
    e.preventDefault();
    location.reload();
})


let colorBtns = Array.from(document.querySelectorAll('#color'));

colorBtns.forEach(btn  => {
    btn.addEventListener('click', changeColor)
})

function changeColor(e){
    e.preventDefault();
    if(e.target){
        for(let lego of blocks){
            lego.style.backgroundColor = e.target.classList[0];
            
        }
    }
}


let undo = document.querySelector('.undo');

undo.addEventListener("click", undoBrick);

function undoBrick(e){
    e.preventDefault();
    
    
    spaces.forEach(space => {
        let brickNo = legoNum - 1;
        if(space.classList[4] == legoNum - 1){
            
            space.style.border == "1px solid white";
            space.style.backgroundColor = "transparent";
            space.removeAttribute('id');
            space.classList.remove('placed');
            space.style.borderLeft = '1px solid white';
            space.style.borderRight = '1px solid white';
            space.classList.remove(`${brickNo}`);
            
            }
            
        else{return}
    })
    if(legoNum >= 2){legoNum--;}
    else{legoNum = 1;}
    console.log(legoNum)
}