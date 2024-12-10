interface Product {
    id: number
    title: string
    price: number
    originalPrice?: number
    image: string
    isNew?: boolean
    isSale?: boolean
    description: string
}
const productList: Product[] = [
    {
        id: 1,
        title: "Library Stool Chair",
        price: 20,
        image: "/product/Image (5).png",
        description: "A versatile and stylish library stool chair designed for convenience and comfort. Its compact design makes it perfect for any space.A versatile and stylish library stool chair designed for convenience and comfort. Its compact design makes it perfect for any space.A versatile and stylish library stool chair designed for convenience and comfort. Its compact design makes it perfect for any space."
    },
    {
        id: 2,
        title: "Pink Sofa",
        price: 20,
        image: "/product/Image (9).png",
        description: "This modern stool chair combines functionality and elegance. Ideal for libraries, it offers a stable and durable seating experience."
    },
    {
        id: 3,
        title: "Orange Chair",
        price: 20,
        image: "/product/Image (10).png",
        description: "An ergonomic library stool chair crafted to enhance your reading sessions. Lightweight yet sturdy for easy portability.An ergonomic library stool chair crafted to enhance your reading sessions. Lightweight yet sturdy for easy portability.An ergonomic library stool chair crafted to enhance your reading sessions. Lightweight yet sturdy for easy portability."
    },
    {
        id: 4,
        title: "White Sofa",
        price: 20,
        image: "/product/Image (11).png",
        description: "Enjoy the perfect blend of aesthetics and practicality with this library stool chair. A must-have for avid readers."
    },
    {
        id: 5,
        title: "Office Chair",
        price: 20,
        image: "/category/Image (10).png",
        description: "This contemporary library stool chair adds sophistication to any setting. Built with comfort and durability in mind."
    },
    {
        id: 6,
        title: "Grey Chair",
        price: 20,
        image: "/hot/card (2).png",
        description: "Upgrade your space with this stylish stool chair. Its sleek design makes it an excellent choice for libraries and offices alike."
    },
    {
        id: 7,
        title: "Home Chair",
        price: 20,
        image: "/product/Image (12).png",
        description: "A compact and durable library stool chair designed for daily use. Its minimalist look complements any décor."
    },
    {
        id: 8,
        title: "Library Stool Chair",
        price: 20,
        image: "/hot/card (1).png",
        description: "Simple yet elegant, this library stool chair provides the perfect seating solution for reading nooks and study spaces."
    },
];

export default productList;