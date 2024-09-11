import planilhas from './link_plhanilhas.js';
import Minicurso from './models/Minicurso.js';
import Palestra from './models/Palestra.js';
import Visita from './models/Visita.js';
import auth from './oauth.js';

function main() {
    let visitas = [];
    let minicursos = [];
    let palestras = [];
    for (let i in planilhas) {
        switch (planilhas[i].type) {
            case 'minicurso':
                minicursos.push(new Minicurso(planilhas[i]))
                break;
            case 'palestra':
                palestras.push(new Palestra(planilhas[i]))
                break;
            case 'visita':
                visitas.push(new Visita(planilhas[i]))
                break;
        }
    }

    console.log(visitas);
    console.log(palestras);
    console.log(minicursos);
}

main();