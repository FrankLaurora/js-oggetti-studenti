//creo un oggetto per un singolo studente
var student = {
    "firstName" : "Francesco",
    "lastName" : "Laurora",
    "age" : 32
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
        "age" : 67
    },

    {
        "firstName" : "Raffaello",
        "lastName" : "Sanzio",
        "age" : 37
    },
    
    {
        "firstName" : "Donatello",
        "lastName" : "di Betto Bardi",
        "age" : 80
    },

    {
        "firstName" : "Michelangelo",
        "lastName" : "Buonarroti",
        "age" : 88
    },        

    {
        "firstName" : "Maestro",
        "lastName" : "Splinter",
        "age" : 37
    },
];

//stampo in pagina i valori corrispondenti a firstName e lastName di ogni oggetto presente dell'array studyGroup
for(let i = 0; i < studyGroup.length; i++) {
    document.getElementById("ninja_turtles").innerHTML += `
    <li><strong>Nome:</strong> ${studyGroup[i].firstName}</li>
    <li><strong>Cognome:</strong> ${studyGroup[i].lastName}</li>
    <hr>`;
}

//raccolgo le informazioni inserite dall'utente per creare un nuovo studente nell'array studyGroup
var signUp = document.getElementById("sign_up");

signUp.addEventListener("click",
    function() {
        //raccolgo gli input dell'utente
        let firstName = document.getElementById("first_name").value;
        let lastName = document.getElementById("last_name").value;
        let age = parseInt(document.getElementById("age").value);

        //creo un nuovo oggetto con gli input raccolti
        let newStudent = {
            "firstName" : firstName,
            "lastName" : lastName,
            "age" : age
        };
        
        //aggiungo il nuovo studente all'array
        studyGroup.push(newStudent);

        //stampo il nuovo studente in pagina
        document.getElementById("ninja_turtles").innerHTML += `
        <li><strong>Nome:</strong>${firstName}</li>
        <li><strong>Cognome:</strong> ${lastName}</li>
        <hr>`
    }
);