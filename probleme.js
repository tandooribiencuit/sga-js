// définition du problème


// définition des fonctions pour bien décoder les valeurs des gènes
function decodeA(val_a) {
    return(Math.round(val_a*10)/10);
}
function decodeB(val_a, val_B) {
    return(Math.round(((80 - val_a)*(val_B/100) + 10)*10)/10);
}

function decodeC(val_a, val_b) {
    return(Math.round((100 - val_a - val_b)*10)/10);
}

function PIarea(r) {
    return (Math.PI * Math.pow(r, 2));
}

// définition des genes
genes.push(new Gene(10, 80, 0.1));
genes.push(new Gene(0, 100, 0.1));

// fonction fitness : fonction à optimiser
function fitness(x) {
    const a = decodeA(x[0]);
    const b = decodeB(a, x[1]);
    const c = decodeC(a, b);
    return (Math.round((PIarea(50) - (PIarea(a/2) + PIarea(b/2) + PIarea(c/2)))*10)/10);
}