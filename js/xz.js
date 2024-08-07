// Tabuleiro inicial
const gridCont = document.querySelector('#grid');  // elemento inicial definido no HTML
var branco = 0;
var bgclasse = ["fundob", "fundop"]; 
// var bgclasse = ["grid-item", "grid-item"]; 
for(let linha = 0; linha < 10; linha++ ) {
    for (let coluna = 0; coluna < 10; coluna++) {
        let gridItem = document.createElement('div');
        aidi = linha.toString()+coluna.toString();
        console.log(aidi);  // debug
        gridItem.id = aidi;
        gridItem.className="grid-item";
        if (coluna == 0 || coluna == 9) {
            if (linha < 1 || linha > 8) {
                gridItem.className = "item-canto";
            } else {
                gridItem.className = "item-cerca";
                gridItem.innerText = linha;
            }
        } else 
            if (linha == 0 || linha == 9) {
                gridItem.className = "item-cerca";
                gridItem.innerText = String.fromCharCode(64+coluna);
            
        } else {
            branco = (linha + coluna)%2;
            gridItem.className = bgclasse[branco];
            if (linha == 1) {
                if (coluna == 1 || coluna == 8) gridItem.innerHTML = "<img src='img/tp.png'>";
                if (coluna == 2 || coluna == 7) gridItem.innerHTML = "<img src='img/cp.png'>";
                if (coluna == 3 || coluna == 6) gridItem.innerHTML = "<img src='img/bp.png'>";
                if (coluna == 4) gridItem.innerHTML = "<img src='img/dp.png'>";
                if (coluna == 5) gridItem.innerHTML = "<img src='img/rp.png'>";
            }
            if (linha == 2) gridItem.innerHTML = "<img src='img/pp.png'>";
            if (linha == 7) gridItem.innerHTML = "<img src='img/pb.png'>";
            if (linha == 8) {
                if (coluna == 1 || coluna == 8) gridItem.innerHTML = "<img src='img/tb.png'>";
                if (coluna == 2 || coluna == 7) gridItem.innerHTML = "<img src='img/cb.png'>";
                if (coluna == 3 || coluna == 6) gridItem.innerHTML = "<img src='img/bb.png'>";
                if (coluna == 4) gridItem.innerHTML = "<img src='img/db.png'>";
                if (coluna == 5) gridItem.innerHTML = "<img src='img/rb.png'>";
            }
        }
        gridCont.appendChild(gridItem); 
    }
}

function porConteudo(linha, coluna) {
    if(coluna == 0 ) {

    }
}
