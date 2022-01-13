let size=10
let CP=0
let diemwin=5
let InGame=false
function settup(){
    let table=document.getElementById("table")
    let row=document.getElementsByClassName("row")
    let sq=document.getElementsByClassName("sq")
    table.innerHTML=""

    for (let i=0;i<size;i++){
        table.innerHTML += '<tr class="row"></tr>'
        for(let j=0;j<size;j++){
            let div="<div class='sq' onClick='clicked(id)' onMouseOver='MI(id)' onMouseOut='MO(id)'></div>"
            row.item(i).innerHTML += '<td class="col">' + div + '</td>'
            sq.item(j+i*size).setAttribute("id",(j+i*size).toString());
            sq.item(j+i*size).setAttribute("player","-1")
        }
    }
}

function clicked(id){
    if (!InGame) return
    let sq= document.getElementsByClassName("sq")
    let pos= parseInt(id)
    if (sq.item(pos).getAttribute("player") != "-1") return

    
    // his.push(pos)
    let hinh="url('Images/o.png')"
    if (CP==1) hinh="url('Images/X.png')"

    sq.item(pos).style.backgroundImage = hinh
    sq.item(pos).setAttribute("player",CP.toString())
    
    if (CP == 0) CP = 1;
    else CP = 0;

    let iplayer = "url('Images/o.png')";
	if (CP == 1) iplayer = "url('Images/X.png')";
	let imgp = document.getElementById("imgCP");
	imgp.style.backgroundImage = iplayer;  
    
    let check=win()
    
    if (check)
	{   
		var mess = 'Player with "X" win';
		if (CP == 1) mess = 'Player with "O" win';
		alert(mess);
		InGame=false
    }
}


function MI(id){
	if (!InGame) return
    let sq = document.getElementsByClassName("sq")
    let pos = parseInt(id)
    sq.item(pos).style.backgroundColor= "#3F3"
}
function MO(id){
	if (!InGame) return
    let sq = document.getElementsByClassName("sq")
    let pos = parseInt(id)
    sq.item(pos).style.backgroundColor= "#FFF"

}


function win()
{
	let result = false;
	let Board = GetBoard();
	for (x = 0;x < size;x++)
	{
		for (y = 0;y < size;y++)
		{
			if ((checkngang(x,y,Board))||(checkdoc(x,y,Board))||checksac(x,y,Board)||checkhuyen(x,y,Board))
			{
				let sq = document.getElementsByClassName("sq");
				for(let j = 0;j < awin.length;j++)
				{
					sq.item(awin[j]).style.backgroundColor = "rgb(233, 229, 27)";
                    //alert(awin.length);
				}
				result = true;
			}
		}
	}
	return result;
}
function checkngang(x,y,Board)
{
	awin = [];
	let count = 0;
	let player = Board[x + y*size];
	if (player == -1) return false;
	
	
	for (i = x; i < size;i++)
	{
		let p = Board[i+y*size];
		if (p == player && p != -1)
		{
			count++;
			awin.push(i+y*size);
		}
		else {break}
	}

	if (count >= diemwin) 
	{
		return true;
	}
	return false;
}
function checkdoc(x,y,Board)
{
	awin = [];
	let count = 0;
	let player = Board[x + y*size];
	if (player == -1) return false;
	
	for (i = y; i < size;i++)
	{
		let p = Board[x+i*size];
		if (p == player && p != -1)
		{
			count++;
			awin.push(x+i*size);
		}
		else {break}
	}

	if (count >= diemwin) 
	{
		return true;
	}
	return false;
}
function checksac(x,y,Board)
{
	awin = [];
	let count = 0;
    if (x > size-diemwin || y < diemwin-1) return false
	let player = Board[x + y*size];
	if (player == -1) return false;
	
	for (i = 0; i <= minab(size-x,y);i++)
	{
		var p = Board[(x+i)+(y-i)*size];
		if (p == player && p != -1)
		{
			count++;
			awin.push((x+i)+(y-i)*size);
		}
		else{break};
	}

	if (count >= diemwin) 
	{
		return true;
	}
	return false;
}
function checkhuyen(x,y,Board)
{
	awin = [];
	let count = 0;
    if (x > size-diemwin || y > size-diemwin) return false
	let player = Board[x + y*size];
	if (player == -1) return false;
	
	for (i = 0; i < minab(size-x,size-y);i++)
	{
		var p = Board[(x+i)+(y+i)*size];
		if (p == player && p != -1)
		{
			count++;
			awin.push((x+i)+(y+i)*size);
		}
		else{break};
	}

	if (count >= diemwin) 
	{
		return true;
	}
	return false;
}
function GetBoard()
{
	let TBoard = [];
	let sq = document.getElementsByClassName("sq");
	for (i = 0; i < size*size;i++)
		TBoard.push(parseInt(sq.item(i).getAttribute("player")));
		
	return TBoard;
}


function minab(a,b){
    if(a>b) return b
    else return a
}


function PVP(){
	settup();
	InGame=true
}