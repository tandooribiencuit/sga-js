// définition du problème


// définition des fonctions pour bien décoder les valeurs des gènes
function decodeA(val_a) {
    return(Math.round((val_a*10))/10);
}
function decodeB(val_a, val_B) {
    return(Math.round((((80 - val_a)/1000)*val_B + 10)*10)/10);
}

function decodeC(val_a, val_b) {
    return(100 - val_a - val_b);
}

// définition des genes
genes.push(new Gene(10, 80, 0.1));
genes.push(new Gene(0, 100, 0.1));

// fonction fitness : fonction à optimiser
function fitness(x) {
    return (x[0] * x[1] *x[2])/(x[0] + x[1] + x[2] + 1);
}