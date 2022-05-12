var selectedImages = [];

var flippedUnknown = "https://pngimg.com/uploads/square/small/square_PNG97.png";

var countPressed = 0;

var total = 5;

var randomMax = 4;


function randomNr() {
    var random = Math.floor(Math.random() * randomMax);
    return random;
}

function animatePic(image) {
    $(image).fadeOut(400).fadeIn(400);
    
    setTimeout(function(){
        $(image).fadeOut(400).fadeIn(400);
        $(image).attr("src", flippedUnknown); // return to flipped after 5s
        selectedImages = []; // reset list
        countPressed = 0;
    }, 3000);
}

function checkWin() {
    if (total === 1) {
        $("#title").text("You won Bisch! 😘");
        $("img").remove();
    }
}

$("img").click(function(){
    //var currentSrc = $(this).attr("src");
    //console.log(currentSrc);

    if (countPressed < 2){
        countPressed++;
        console.log(countPressed);

        var random = randomNr();
        selectedImages.push(random);
        console.log(selectedImages);


        $(this).attr("src", `https://picsum.photos/id/23${random}/200`);
        
        if (selectedImages[0] === selectedImages[1]) {

            $("#title").fadeOut(200).fadeIn(200);
            $("#title").text("Match! 👌");

            setTimeout(function(){
                $("#title").text("Annoying Memory 🤯 Game");
            }, 2000)

            console.log("Score!");
            $(this).remove();
            total--;
            randomMax--;
            checkWin();
        }

        animatePic(this);
    }
})


