//creo un oggetto per un singolo studente
var student = {
    "firstName" : "Francesco",
    "lastName" : "Laurora",
    "age" : 32,
};

//stampo le informazioni contenute nell'oggetto attraverso il ciclo for-in
for (var key in student) {
    document.getElementById("student_info").innerHTML += `<li>${student[key]}</li>`    
}

//creo un array di oggetti
var studyGroup = [
    {
        "firstName" : "Leonardo",
        "lastName" : "Da Vinci",
        "age" : 67,
    },

    {
        "firstName" : "Raffaello",
        "lastName" : "Sanzio",
        "age" : 37,
    },
    
    {
        "firstName" : "Donatello",
        "lastName" : "di Betto Bardi",
        "age" : 80,
    },

    {
        "firstName" : "Michelangelo",
        "lastName" : "Buonarroti",
        "age" : 88,
    },        

    {
        "firstName" : "Maestro",
        "lastName" : "Splinter",
        "age" : 37,
    },
];

//stampo in pagina i valori corrispondenti a firstName e lastName di ogni oggetto presente dell'array studyGroup