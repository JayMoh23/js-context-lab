/*Variables*/
var friendNames = ["Brandon", "Erica", "Tyffani" , "Daniel", "Kirsten"]

var weapons = ["Tiger Woods golf club", "Malaria", "Rihanna\'s thighs", "Exploding Kitten", "Godzilla",
                "Explosive Diarrhea indeuced from Taco Bell consumption", "live action Dragon Ball movie", "The Fast and Furious franchise",
                "a Beats Pill", "a baby penguin", "a spoon", "a stone cold stunner", "Dane Cook comedy show",
                "ASMR", "a thick Scottish accent", "Hallmark Channel marathon", "literally any javascript lab",
                "sushi poisoning", "the stingray that killed Steve Irwin", "Timone from Lion King" ]

 var scenes = ["that one local pizza shopped owned by that one Italian family that knows my Italian family that talks about Italian stuff really loudly",
            "the local Applebees", "dimly lit ballroom", "Tron world", "Jurassic Park", "Atlantis", "the VMAs", "the dropoff point of Jim Carreys career",
            "the sandbox", "the nude beach"]

$(document).ready(function() {
    for(i=1; i<100; i++){

        var randFriend = friendNames[Math.floor(Math.random() * friendNames.length)];
        var randWeapon = weapons[Math.floor(Math.random() * weapons.length)];
        var randScene = scenes[Math.floor(Math.random() * scenes.length)];

        accusationHeading= $('<h3> Accusation' +i+ "</h3>").appendTo("body");
        accusationHeading.click(function(){
            alert('I accuse '+randFriend+', with the '+randWeapon+' in the '+randScene+ '!');
        })

    
       
       
    }
      
    
});



/* create onclick function for each h3 causing an alert popups with random math pulling from arrays*/