class DogWalker {
    numberOfWalksCalculator(dogSizes){
        let numberOfWalks = 0;
        let dogWalksMap = new Map();

        // populating the map base on the presence of key
        dogSizes.forEach(dog => {
            if(dogWalksMap.has(dog)){
               dogWalksMap.set(dog, dogWalksMap.get(dog) + 1); 
            } else {
                dogWalksMap.set(dog, 1);
            }
        });

        // checking the values to see number of walks required
        dogWalksMap.forEach(function(value, key) {
            if(value % 2 == 0){
                numberOfWalks = numberOfWalks + value / 2;
            } else{
                numberOfWalks = numberOfWalks + Math.floor(value / 2) + 1;
            }
        });
        
        return numberOfWalks;
    }
}

module.exports = DogWalker;