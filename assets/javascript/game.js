        var win = 0;
        var loss = 0;
        var guessesRemaining = 10;
        var guessedLetters = [];

        var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

        // The Computer's Choice

         var ranLetter = Math.floor(Math.random() * letters.length);
         var computerChoice = letters[ranLetter];

         console.log(computerChoice);

        // The player's Input
        document.onkeyup = function(event) {
            var userChoice = event.key;
              
              if (guessesRemaining <= 0) {
                loss++;
                document.getElementById("loss").innerHTML = lossCount++;
                guessesRemaining = 10;
                guessedLetters = [];
                document.getElementById("guessedLetters").innerHTML = guessedLetters;
                document.getElementById("guessesRemaining").innerHTML = 10;
                ranLetter = Math.floor(Math.random() * letters.length);
                computerChoice = letters[ranLetter];
                console.log(computerChoice);
              }
              // compares the randomly selected computer choice and user choice
              if (computerChoice === userChoice) {
                document.getElementById("win").innerHTML = win++;
                guessedLetters = [];
                document.getElementById("guessedLetters").innerHTML = guessedLetters;
                ranLetter = Math.floor(Math.random() * letters.length);
                computerChoice = letters[ranLetter];
                console.log(computerChoice);
                guessesRemaining = 10;
                document.getElementById("guessesRemaining").innerHTML = 10;
              } else {
                document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
                guessedLetters.push(userChoice);
                document.getElementById("guessedLetters").innerHTML = guessedLetters;
              }
          }
