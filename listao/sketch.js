var alunos;
var listao;
var i = 0;
//i = nome do aluno na lista de fp
var j = 1;
// 0 = MATRICULA
// 1 = NOME
// 2 = SITUACAO
// 3 = DISCIPLINA
//alunos.rows[0].arr[i] = info do aluno
//listao.rows[0].table.rows[0] = campus
//listao.rows[0].table.rows[1] = curso
//listao.rows[0].table.rows[5-...] = nome do aluno aprovado 
var curso;
var campus;
var lastName = "";
function preload(){
alunos = loadTable('listao2017.csv');
	listao = loadTable('vest.csv');
}
function setup(){
	//console.log(listao.rows[0].table.rows[1].arr[0].arr);
	//for (let index = 0; index < 1; index++) {
		for(var n = 1; n < listao.rows.length; n++){
			//console.log(n);
			if(  listao.rows[n].arr[0] != "" & listao.rows[n].arr[0] != "ESCORE"& listao.rows[n].arr[0] != "COTISTA"& listao.rows[n].arr[0] != "NOME" & listao.rows[n].arr[0] != "INSC" & listao.rows[n].arr[0] != "PRIMEIRA ENTRADA                                   Turno: Noturno" & listao.rows[n].arr[0] != "PRIMEIRA ENTRADA                                   Turno: Integral" & listao.rows[n].arr[0] != "SEGUNDA ENTRADA                                   Turno: Noturno" & listao.rows[n].arr[0] != "SEGUNDA ENTRADA                                   Turno: Integral" & listao.rows[n].arr[0] != "PRIMEIRA ENTRADA                                   Turno: Matutino" & listao.rows[n].arr[0] != "PRIMEIRA ENTRADA                                   Turno: Vespertino" & listao.rows[n].arr[0] != "SEGUNDA ENTRADA                                   Turno: Matutino" & listao.rows[n].arr[0] != "SEGUNDA ENTRADA                                   Turno: Vespertino"){
				campus = listao.rows[n-1].arr[0];
				curso =  listao.rows[n].arr[0];
			}

			for(var m = 0; m < alunos.rows.length; m++){
			if(alunos.rows[m].arr[1] == listao.rows[n].arr[6]){
				if(lastName !=listao.rows[n].arr[6]){
				console.log(listao.rows[n].arr[6] +" " +curso + " "+ campus + " " +alunos.rows[m].arr[2] + " " + alunos.rows[m].arr[3]);
				}
				lastName = listao.rows[n].arr[6];
			}
		}
			//if("VINICIUS SILVA JACINTO" == listao.rows[n].arr[6]){
			//	console.log(listao.rows[n].arr[6] +" " +curso + " " + campus);
			//}
		}
		
	}

function draw(){
	

}