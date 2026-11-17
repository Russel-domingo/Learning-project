
class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    
    displayDetails() {
        console.log(`Book Title: ${this.title} Book author: ${this.author} Book price: ${this.price}`);
    }
}

class Cart {
    constructor() {
        this.items = [];
    }
    
    addToCart(book) {
        this.items.push(book);
    }
    
    removeToCart(book) {
        this.items = this.items.filter(function(item) {
            if(item !== book) {
                return true;
            } else {
                return false;
            }
        });
    }
    
    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].price;
        }
        return total;
    }
    
    checkOut() {
        const total = this.calculateTotal();
        console.log(`Check Out complete Total of : ${total}`);
        this.items = [];
    }
}

class User {
    constructor(user) {
        this.user = user;
        this.cart = new Cart();
    }
    
    addToCart(book) {
        this.cart.addToCart(book);
    }
    
    removeToCart(book) {
        this.cart.removeToCart(book);
    }
    
    viewCart() {
        console.log(`User: ${this.user}'s Cart: `);
        for(let i = 0; i < this.cart.items.length; i++) {
            this.cart.items[i].displayDetails();
        }
    }
    
    purchase() {
        this.cart.checkOut();
        
    }
    
}


// Create Book Instances
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 15.99);
const book2 = new Book("1984", "George Orwell", 12.99);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 10.49);

// Create a User
const user = new User("JohnDoe");

// Add Books to Cart
user.addToCart(book1);
user.addToCart(book2);
user.addToCart(book3);

// View Cart
console.log("\n--- Viewing Cart ---");
user.viewCart();

// Calculate Total Manually (For Verification)
const expectedTotal = book1.price + book2.price + book3.price;
console.log(`Expected Total: $${expectedTotal.toFixed(2)}`);

// Remove a Book and Recalculate Total
console.log("\n--- Removing a Book (1984) ---");
user.removeToCart(book2);

// View Cart After Removal
user.viewCart();

// Verify New Total
const newTotal = book1.price + book3.price;
console.log(`Expected New Total: $${newTotal.toFixed(2)}`);

// Proceed to Checkout
console.log("\n--- Checkout Process ---");
user.purchase();

// View Cart After Checkout (Should be Empty)
console.log("\n--- Viewing Cart After Checkout ---");
user.viewCart();