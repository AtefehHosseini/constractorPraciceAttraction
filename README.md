# constractorPraciceAttraction
Constructor Creation With JavaScript
# JavaScript Attraction Summarizer

Welcome to my GitHub repository! Here, I practice JavaScript by creating a simple script to summarize attractions. This project serves as a learning exercise and a demonstration of my coding skills.

## About This Project

In this project, I've implemented a JavaScript constructor function called `Attraction`. This constructor allows you to create objects representing various attractions. Each attraction object has properties like `name`, `price`, and `description`, and a method called `summarize` to display information about the attraction.

## How It Works

Here's a quick overview of the code:

```javascript
function Attraction(name, price, description) {
    // Constructor function to create Attraction objects
    this.name = name;          // Name of the attraction
    this.price = price;        // Price to enter the attraction
    this.description = description;  // Description of the attraction

    // Method to summarize the attraction
    this.summarize = function () {
        console.log(`${name} is ${description}. It costs $${price} to enter.`);
    }
}

// Create a new Attraction object
const attraction1 = new Attraction("Disneyland", 60, "a world-famous theme park with hundreds of rides and activities");

// Call the summarize method to display information about the attraction
attraction1.summarize();
