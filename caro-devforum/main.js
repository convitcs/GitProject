let size=10
let CP=0
function settup(){
    let table=document.getElementById("table")
    let row=document.getElementsByClassName("row")
    let sq=document.getElementsByClassName("sq")
    table.innerHTML=""

    for (let i=0;i<size;i++){
        table.innerHTML += '<tr class="row"></tr>'
        for(let j=0;j<size;j++){
            let div="<div class='sq' onClick='clicked(id)' onMouseOver='MI(id)' onMouseOut='MO(id)'>alo</div>"
            row.item(i).innerHTML += '<td class="col">' + div + '</td>'
            sq.item(j+i*size).setAttribute("id",(j+i*size).toString());
            sq.item(j+i*size).setAttribute("player","-1")
        }
    }
}

function clicked(id){
    if (!IG) return
    

}
function MI(id){
    let sq = document.getElementsByClassName("sq")
    let pos = parseInt(id)
    sq.item(pos).style.backgroundColor= "#3F3"
}
function MO(id){
    let sq = document.getElementsByClassName("sq")
    let pos = parseInt(id)
    sq.item(pos).style.backgroundColor= "#FFF"

}