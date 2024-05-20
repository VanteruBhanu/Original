const mobiles = [
    {
        brand: "Apple",
        model: "MacBook Pro 16-inch",
        display: "16 inches, Retina display",
        processor: "Intel Core i9",
        ram: "16GB",
        storage: "512GB SSD",
        price: "$2399.99"
    },
    {
        brand: "Dell",
        model: "XPS 13",
        display: "13.4 inches, 4K Ultra HD",
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "512GB SSD",
        price: "$1599.99"
    },
    {
        brand: "HP",
        model: "Spectre x360",
        display: "15.6 inches, OLED",
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "1TB SSD",
        price: "$1799.99"
    },
    {
        brand: "Lenovo",
        model: "ThinkPad X1 Carbon",
        display: "14 inches, WQHD",
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "512GB SSD",
        price: "$1499.99"
    },
    {
        brand: "Asus",
        model: "ZenBook 14",
        display: "14 inches, Full HD",
        processor: "AMD Ryzen 7",
        ram: "16GB",
        storage: "512GB SSD",
        price: "$1199.99"
    },
    {
        brand: "Acer",
        model: "Swift 3",
        display: "14 inches, Full HD",
        processor: "AMD Ryzen 5",
        ram: "8GB",
        storage: "512GB SSD",
        price: "$699.99"
    },
    {
        brand: "Microsoft",
        model: "Surface Laptop 4",
        display: "13.5 inches, PixelSense",
        processor: "Intel Core i5",
        ram: "8GB",
        storage: "256GB SSD",
        price: "$999.99"
    },
    {
        brand: "Razer",
        model: "Blade 15",
        display: "15.6 inches, Full HD",
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "512GB SSD",
        price: "$1799.99"
    },
    {
        brand: "MSI",
        model: "GS66 Stealth",
        display: "15.6 inches, Full HD",
        processor: "Intel Core i9",
        ram: "32GB",
        storage: "1TB SSD",
        price: "$2299.99"
    },
    {
        brand: "Samsung",
        model: "Galaxy Book Pro 360",
        display: "15.6 inches, AMOLED",
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "1TB SSD",
        price: "$1399.99"
    }
];



  export const results = mobiles.filter((item) => item.price >= "$1299" && item.storage>="256GB" ).map((item) => `

  <div class="mobilecontainer">
    <img src="https://images.pexels.com/photos/248528/pexels-photo-248528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="${item.model}">
    <h3>${item.model}</h3>
    <p>Storage: ${item.storage}</p>
    <p>Specifications: ${item.specifications}</p>
    <p>Price: $${item.price}</p>
  </div>
`);