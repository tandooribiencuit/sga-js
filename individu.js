// définition des individus

var genNumber = 0; // nombre de gènes
var individuSize = 0; // taille d'un individu

// calcule le nombre de gènes
genNumber = genes.length;

// taille d'un individu
// calcul de la taille d'un individu (somme des tailles des gènes)
const reducer = (accumulator, currentValue) => accumulator + currentValue.size;
individuSize = genes.reduce(reducer, 0);

// création aléatoire du génotype
function randomGenotype() {
    var genotype = [];
    for (var i = 0; i < individuSize; i++) {
        genotype[i] = Math.round(Math.random());
    }
    return genotype;
}


// function decodeGenotype : convertie un génotype en entier
function decodeGenotype(genotype) {
    var x = [];
    var offset = 0;
    
    // console.log(genNumber);

    for (var i = 0; i < genNumber; i++) {
        var geneSize = genes[i].size;
        // console.log(geneSize);

        var gene = genotype.slice(offset, offset + geneSize);
        // console.log(gene);
        x.push(genes[1].decode(gene));
        offset += geneSize;
    }
    return x;
}



// defini un individu avec un génotype et un phénotype
function Individu() {
    this.genotype = [];
    this.phenotype = [];
    this.phenotype_D = [];
    this.fitness = 0;
    this.genotype = randomGenotype();
    this.phenotype = decodeGenotype(this.genotype);
    this.phenotype_D = decodeGenotypeCercle(this.genotype);
    this.fitness = fitness(this.phenotype);
}

// function decodeGenotype : convertie un génotype en entier
function decodeGenotypeCercle(genotype) {
    var x = [];
    var offset = 0;
    
    // console.log(genNumber);

    for (var i = 0; i < genNumber; i++) {
        var geneSize = genes[i].size;
        // console.log(geneSize);

        var gene = genotype.slice(offset, offset + geneSize);
        // console.log(gene);
        x.push(genes[1].decode(gene));
        offset += geneSize;
        if (i == 0) {
            x[0] = decodeA(x[0]);
        }
        if (i == 1) {
            x[1] = decodeB(x[0], x[1]);
        }
    }
    x.push(decodeC(x[0], x[1]));
    return x;

}