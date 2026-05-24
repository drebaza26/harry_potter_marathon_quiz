const questions = [

{
q:"Cuando Harry vive con su familia adoptiva antes de descubrir el mundo mágico, ¿cómo se llaman exactamente los tíos con quienes pasa su infancia y que suelen tratarlo con desprecio?",
o:[
"Arthur y Molly Dursley",
"Vernon y Petunia Dursley",
"James y Petunia Potter",
"Vernon y Lily Dursley"
],
a:1
},

{
q:"Durante su primer año en Hogwarts, Harry recibe una escoba excepcionalmente rápida que le permite convertirse en buscador de Gryffindor. ¿Cuál era?",
o:[
"Nimbus 2000",
"Saeta de Fuego",
"Nimbus 2001",
"Cleansweep"
],
a:0
},

{
q:"Cuando los Dursley intentan impedir que Harry reciba sus cartas de Hogwarts, ¿quién aparece personalmente para revelarle la verdad sobre su origen?",
o:[
"McGonagall",
"Hagrid",
"Dumbledore",
"Hedwig"
],
a:1
},

{
q:"¿Cómo se llama el banco mágico donde Harry visita por primera vez las bóvedas junto a Hagrid?",
o:[
"Azkaban",
"Ollivanders",
"Gringotts",
"Durmstrang"
],
a:2
},

{
q:"¿Cuál es el nombre del perro gigante de tres cabezas encargado de proteger una entrada secreta relacionada con la Piedra Filosofal?",
o:[
"Fang",
"Fluffy",
"Norberto",
"Buckbeak"
],
a:1
},

{
q:"En la primera película, ¿qué profesor aparentemente tímido termina compartiendo cuerpo con Voldemort?",
o:[
"Snape",
"Quirrell",
"Lupin",
"Lockhart"
],
a:1
},

{
q:"¿Quién abre realmente la Cámara de los Secretos bajo la influencia del diario de Tom Riddle?",
o:[
"Draco Malfoy",
"Ginny Weasley",
"Harry Potter",
"Percy Weasley"
],
a:1
},

{
q:"¿Qué criatura ayuda indirectamente a salvar a Harry y Sirius Black cerca del lago en El Prisionero de Azkaban?",
o:[
"Hipogrifo",
"Basilisco",
"Dementor",
"Fénix"
],
a:0
},

{
q:"¿Qué objeto mágico utiliza Hermione para viajar varias horas hacia atrás en el tiempo?",
o:[
"Recordadora",
"Giratiempos",
"Espejo de Oesed",
"Varita de Saúco"
],
a:1
},

{
q:"¿Cómo se llama el torneo internacional extremadamente peligroso al que Harry entra inesperadamente?",
o:[
"Copa Mundial de Magia",
"Torneo Supremo",
"Torneo de los Tres Magos",
"Liga Internacional"
],
a:2
},

{
q:"¿Quién manipula el Cáliz de Fuego para hacer que Harry aparezca como cuarto campeón?",
o:[
"Lucius Malfoy",
"Snape",
"Barty Crouch Jr",
"Karkaroff"
],
a:2
},

{
q:"En la primera prueba del Torneo de los Tres Magos, ¿qué deben enfrentar los participantes?",
o:[
"Sirenas",
"Dragones",
"Laberintos",
"Troles"
],
a:1
},

{
q:"¿Qué personaje muere al final de El Cáliz de Fuego, marcando el regreso definitivo de Voldemort?",
o:[
"Cedric Diggory",
"Viktor Krum",
"Mad-Eye Moody",
"Sirius Black"
],
a:0
},

{
q:"¿Cómo se llama el grupo secreto creado por Harry para enseñar Defensa Contra las Artes Oscuras a otros estudiantes?",
o:[
"Ejército de Dumbledore",
"Orden del Fénix",
"Guardianes de Hogwarts",
"Resistencia Mágica"
],
a:0
},

{
q:"Durante una batalla, George Weasley pierde permanentemente una parte del cuerpo. ¿Cuál?",
o:[
"Una mano",
"Un ojo",
"Una oreja",
"Su varita"
],
a:2
},

{
q:"¿Quién termina matando a Dumbledore en la torre astronómica de Hogwarts?",
o:[
"Bellatrix",
"Voldemort",
"Draco",
"Snape"
],
a:3
},

{
q:"¿Cuáles son las tres Reliquias de la Muerte mencionadas en la saga?",
o:[
"Piedra Filosofal, Varita y Capa",
"Piedra de Resurrección, Varita de Saúco y Capa de Invisibilidad",
"Horrocrux, Varita y Capa",
"Copa, Diadema y Piedra"
],
a:1
},

{
q:"¿Qué personaje destruye finalmente a Nagini, el último Horrocrux vivo de Voldemort?",
o:[
"Harry",
"Ron",
"Neville Longbottom",
"Hermione"
],
a:2
},

{
q:"Al terminar la saga principal, ¿con quién termina casándose Harry Potter?",
o:[
"Hermione",
"Luna Lovegood",
"Cho Chang",
"Ginny Weasley"
],
a:3
},

{
q:"Cuando Harry enfrenta a un dementor por primera vez, ¿qué sentimiento suelen provocar estas criaturas en sus víctimas?",
o:[
"Euforia",
"Recuerdos felices",
"Desesperación y recuerdos dolorosos",
"Rabia"
],
a:2
}

];

let current = -1;
let score = 0;

function level(score){

if(score>=18)
return "🏆 Director de Hogwarts — McGonagall estaría orgullosa";

if(score>=15)
return "🐍 Prefecto de Slytherin — Alumno destacado";

if(score>=10)
return "📚 Estudiante aplicado — Sobreviviste al examen";

return "😅 Muggle — Los dementores ganaron";
}

function render(){

if(current===-1){

app.innerHTML=`
<div class="card">

<h1>🐍 Examen de Hogwarts</h1>

<p>
20 preguntas sobre Harry Potter.
Nivel: fácil-intermedio.
Permitido para parejas después de maratones.
</p>

<button class="btn"
onclick="start()">
Comenzar examen
</button>

</div>
`;

return;
}

if(current>=questions.length){

app.innerHTML=`
<div class="card">

<h1>${score}/${questions.length}</h1>

<h2>${level(score)}</h2>

<button
class="btn"
onclick="location.reload()">

Volver a jugar

</button>

</div>
`;

return;
}

let q = questions[current];

app.innerHTML=`

<div class="card">

<p>
Pregunta ${current+1}
de ${questions.length}
</p>

<h2>${q.q}</h2>

${q.o.map((x,i)=>

`
<label class="opt">

<input
type="radio"
name="answer"
value="${i}">

${x}

</label>
`

).join("")}

<button
class="btn"
onclick="nextQuestion()">

Siguiente

</button>

</div>
`;
}

function start(){

current=0;
render();

}

function nextQuestion(){

let selected =
document.querySelector(
'input[name="answer"]:checked'
);

if(!selected)
return;

if(+selected.value===
questions[current].a)
score++;

current++;

render();

}

render();
