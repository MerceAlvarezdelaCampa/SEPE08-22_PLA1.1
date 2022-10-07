import {Vacanca} from './interfaces/vacanca';

const nom = document.getElementById("nom")! as HTMLInputElement;
const preu = document.getElementById("preu")! as HTMLInputElement;
const pais = document.getElementById("pais")! as HTMLInputElement;
const descripcio = document.getElementById("descripcio")! as HTMLInputElement;

const vacances: Vacanca[] = [];

function addVacanca(): void {
    const vacanca: Vacanca = {} as Vacanca;
    vacanca.id = vacances.length + 1;
    vacanca.nom = nom.value;
    vacanca.preu = +preu.value;
    vacanca.pais = pais.value;
    vacanca.descripcio = descripcio.value;
    vacances.push(vacanca);
    let code = "<ul>";
    for(let i = 0; i < vacances.length; i++) {
        code = code + `<li onclick="getVacancaDetail(${vacances[i].id})">${vacances[i].nom}</li>`;
    }
    code = code + "</ul>";
    document.getElementById("llistat")!.innerHTML = code;
}

function getVacancaDetail(id: number): void {
    const vacanca: Vacanca = vacances.filter((v) => v.id === id)[0];
    console.log(vacanca);
    const detall = `<div><div>Nom: ${vacanca.nom}</div><div>Preu: ${vacanca.preu}</div><div>Descripció: ${vacanca.descripcio}</div></div>`
    document.getElementById("detall")!.innerHTML = detall;
}
