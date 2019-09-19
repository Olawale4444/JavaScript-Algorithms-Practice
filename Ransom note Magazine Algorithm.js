//    A simple Algorithm which checks if exactly the number of 
//  particular words in a string, 6can be found in another string 

//function which takes a note and second srtingText
function harmlessRansomNote(noteText, secondStringText) {
    // noteText = noteText.toLowerCase() ;
    //     secondStringText = secondStringText.toLowerCase() ;
    
    //   Stores the words in (noteText) and (secondStringText) into an array represented by
    //  variables (noteArr) and (secondStringArr).
    var noteArr = noteText.split(" ");
    var secondStringArr = secondStringText.split(" ");

    //stores the number of occurences of each word in a dictionary (magazineObj)
    var magazineObj ={};


    secondStringArr.forEach(word => {

        // checks if the current word exists already  
        if (!magazineObj[word]) magazineObj[word] = 0;

        //increment the word by one
        magazineObj[word]++ ;
    });

            var noteIsPossible = true;

            noteArr.forEach(word => {
                if (magazineObj[word]) {
                    magazineObj[word]-- ;
                    if (magazineObj[word] < 0) noteIsPossible = false ;
                }
            else noteIsPossible = false;
            });   

            return noteIsPossible
    };

    //  Returns "True" if you can recreate the first sentence from the second Sentence, 
    //   Returns false if you can't recreate the first sentence from the second.

    harmlessRansomNote("this is a sample note containing words ", 
    "this this is is a sample note note, containing words words to test the function")


