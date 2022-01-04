function calc(){

    var valorProjeto = $("#valorProjeto").val();
    var horasDiarias = $("#horasDiarias").val();
    var diasEfetivos = $("#diasEfetivos").val();
    var diasFerias = $("#diasFerias").val();
    var valorHora = 0;

    valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias)) + (diasFerias * diasEfetivos * horasDiarias );
    $("#rslt").text(valorHora)
}