var numselected=null;

var tileselected=null;

var errors=0;

var board=[
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution=[
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload= function(){
    setgame();
}

function setgame(){
    for(let i=1;i<=9;i++){
        let number = document.createElement("div");
        number.id=i;
        number.innerText=i; 
        number.addEventListener("click",selectnumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }


for(let a=0;a<9;a++){
    for(let b=0;b<9;b++){
        let tile = document.createElement("div");
        tile.id=a.toString()+"-"+b.toString();
        if(board[a][b]!="-"){
        tile.innerText= board[a][b];
        tile.classList.add("tile-start")
        }
        if(a==2 || a==5){
            tile.classList.add("horizontal-line")
        }
        if(b==2 || b==5){
            tile.classList.add("vertical-line")
        }
        tile.addEventListener("click",selecttile);
        tile.classList.add("tile");
        document.getElementById("board").append(tile);
    }
}
}

function selectnumber(){
    if(numselected!=null){
        numselected.classList.remove("number-selected");
    }
        numselected =this;
        numselected.classList.add("number-selected");
}

function selecttile(){
    if(numselected){
        if(this.innerText!=""){
            return;
        }

        let cords = this.id.split("-");
        let a= parseInt(cords[0]);
        let b= parseInt(cords[1]);

        if(solution[a][b]==numselected.id){
           this.innerText=numselected.id; 
        }
        else{
            errors = errors+1;
            document.getElementById("errors").innerText = errors;
        }
    }
}