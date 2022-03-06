var images = [
    "assets/images/bg_copy_2.jpg",
    "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
]

var i=0;

// function slider(){
//     document.getElementById("bg").src = images[i];

// }

var background = document.getElementById("bg");

function slideLeft(){
    if(i==0)
        i=4;
    else
        i--;
    document.getElementById("bg").style.backgroundImage =  `url("${images[i]}")` ;
    // console.log(document.getElementById("bg").src);
    console.log("left");
}

function slideRight(){
    if(i==4)
        i=0;
    else 
        i++;
        document.getElementById("bg").style.backgroundImage = `url("${images[i]}")`;
    // console.log(document.getElementById("bg").src);
}

