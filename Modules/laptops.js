
const laptops = [
    {
      image: "macbookpro16.jpg",
      model: "Apple MacBook Pro 16",
      storage: "512GB SSD",
      specifications: "16-inch Retina display, Apple M1 Pro or M1 Max chip, Up to 64GB RAM, Up to 10-core CPU, Up to 32-core GPU",
      price: 2399
    },
    {
      image: "dellxps15.jpg",
      model: "Dell XPS 15",
      storage: "1TB SSD",
      specifications: "15.6-inch 4K UHD+ display, Intel Core i7 or i9 processor, Up to 64GB RAM, NVIDIA GeForce RTX 3050 Ti graphics",
      price: 1899
    },
    {
      image: "hpenvy13.jpg",
      model: "HP Envy 13",
      storage: "256GB SSD",
      specifications: "13.3-inch FHD display, Intel Core i5 or i7 processor, Up to 16GB RAM, Intel Iris Xe graphics",
      price: 999
    },
    {
        image: "lenovolegion7i.jpg",
        model: "Lenovo Legion 7i",
        storage: "1TB SSD",
        specifications: "15.6-inch FHD display, Intel Core i7 or i9 processor, Up to 32GB RAM, NVIDIA GeForce RTX 3080 graphics",
        price: 2099
      },
      {
        image: "asusrogstrixg17.jpg",
        model: "ASUS ROG Strix G17",
        storage: "512GB SSD + 1TB HDD",
        specifications: "17.3-inch FHD display, AMD Ryzen 7 or 9 processor, Up to 32GB RAM, NVIDIA GeForce RTX 3070 graphics",
        price: 1799
      },
      {
        image: "msisummite15.jpg",
        model: "MSI Summit E15",
        storage: "512GB SSD",
        specifications: "15.6-inch 4K UHD+ display, Intel Core i7 processor, Up to 64GB RAM, NVIDIA GeForce GTX 1650 Ti graphics",
        price: 1799
      },
      {
        image: "razorblade15.jpg",
        model: "Razer Blade 15",
        storage: "1TB SSD",
        specifications: "15.6-inch FHD or 4K OLED display, Intel Core i7 or i9 processor, Up to 32GB RAM, NVIDIA GeForce RTX 3080 graphics",
        price: 2299
      },
      {
        image: "surfacebook3.jpg",
        model: "Microsoft Surface Book 3",
        storage: "512GB SSD",
        specifications: "13.5-inch PixelSense display, Intel Core i7 processor, Up to 32GB RAM, NVIDIA GeForce GTX 1650 graphics",
        price: 2399
      },
      {
          image: "asusrogstrixg17.jpg",
          model: "ASUS ROG Strix G17",
          storage: "512GB SSD + 1TB HDD",
          specifications: "17.3-inch FHD display, AMD Ryzen 7 or 9 processor, Up to 32GB RAM, NVIDIA GeForce RTX 3070 graphics",
          price: 1799
        },
      {
        image: "lggram17.jpg",
        model: "msi 17",
        storage: "1TB SSD",
        specifications: "17-inch WQXGA display, Intel Core i7 processor, Up to 16GB RAM, Intel Iris Xe graphics",
        price: 1699
      },
    {
      image: "lggram17.jpg",
      model: "LG Gram 17",
      storage: "1TB SSD",
      specifications: "17-inch WQXGA display, Intel Core i7 processor, Up to 16GB RAM, Intel Iris Xe graphics",
      price: 1699
    },
    {
      image: "acerpredatorhelios300.jpg",
      model: "Acer Predator Helios 300",
      storage: "512GB SSD",
      specifications: "15.6-inch FHD display, Intel Core i7 processor, Up to 32GB RAM, NVIDIA GeForce RTX 3060 graphics",
      price: 1299
    }
  ];
  
  export const result = laptops.filter((item) => item.price >= 1699 && item.storage>"512GB SSD").map((item) => `
  <div class="laptopcontainer">
    <img src="https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="${item.model}">
    <h3>${item.model}</h3>
    <p>Storage: ${item.storage}</p>
    <p>Specifications: ${item.specifications}</p>
    <p>Price: $${item.price}</p>
  </div>
`);    