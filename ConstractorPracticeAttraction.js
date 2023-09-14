function Attraction(name,price,description){
    // Constructor function to create Attraction objects
    this.name=name // Name of the attraction
    this.price=price  // Price to enter the attraction
    this.description=description  // Description of the attraction

    // Method to summarize the attraction
    this.summerise=function(){
        console.log( `${name} is ${description}. It costs $${price} to enter.`)
    }
    
}
// Create a new Attraction object
const attraction1= new Attraction("Disneyland",60,"a world famous theme park with hundreds of rides and activities")
// Call the summarize method to display information about the attraction
attraction1.summerise()