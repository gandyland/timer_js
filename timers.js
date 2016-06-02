$(document).on("ready", function(){

    var counter = 0;
    var counterUpdaterBucket;
    var counterUpdaterBucketIsEmpty = true;

    $("#start").on("click", function(){
        if(counterUpdaterBucketIsEmpty == true){
            counterUpdaterBucket = setInterval(function(){
                counter += 1;
                $("h1").text(counter);
            }, 100);
            counterUpdaterBucketIsEmpty = false;
        }
    });

    $("#pause").on("click", function(){
        clearInterval(counterUpdaterBucket);
        counterUpdaterBucketIsEmpty = true;
    });

    $("#reset").on("click", function(){
        clearInterval(counterUpdaterBucket);
        counterUpdaterBucketIsEmpty = true;
        counter = 0;
        $("h1").text(counter);
    });

});
