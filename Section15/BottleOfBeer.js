/*Lyrics of the song 99 Bottles of Beer
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

97 bottles of beer on the wall, 97 bottles of beer.
Take one down and pass it around, 96 bottles of beer on the wall.

......

1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.*/

function BottleOfBeer(){
    let count = 99 ;

    while(count>=0){
        if (count > 1){
                console.log(count + " bottles of beer on the wall, " + count +" bottles of beer.")
                console.log("Take one down and pass it around, " + count + " bottles of beer on the wall.")
            }
        else if (count === 1 ){
            console.log(count + " bottle of beer on the wall, " + count +" bottle of beer.")
            console.log("Take one down and pass it around, no more bottles of beer on the wall.")
        }
        else{
            console.log("No more bottles of beer on the wall, no more bottles of beer.")
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
        }
        count--;
    }
}

BottleOfBeer();