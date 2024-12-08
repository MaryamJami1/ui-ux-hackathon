
interface Product {
    id: number
    title: string
    price: number
    originalPrice?: number
    image: string
    isNew?: boolean
    isSale?: boolean
    description?: string
}
const products: Product[] = [
    {
        id: 1,
        title: "Library Stool Chair",
        price: 20,
        image: "/product/Image (5).png",
        isNew: true
    },
    {
        id: 2,
        title: "Pink Sofa",
        price: 20,
        originalPrice: 30,
        image: "/product/Image (9).png",
        isSale: true
    },
    {
        id: 3,
        title: "Orange Chair",
        price: 20,
        image: "/product/Image (10).png"
    },
    {
        id: 4,
        title: "White Sofa",
        price: 20,
        image: "/product/Image (11).png"
    },
    {
        id: 5,
        title: "Office Chair",
        price: 20,
        image: "/category/Image (10).png",
        isNew: true
    },
    {
        id: 6,
        title: "Wooden Chair",
        price: 20,
        originalPrice: 30,
        image: "/hot/card (2).png",
        isSale: true
    },
    {
        id: 7,
        title: "Library Stool Chair",
        price: 20,
        image: "/product/Image (12).png"
    },
    {
        id: 8,
        title: "Wooden Chair",
        price: 20,
        image: "/hot/card (1).png"
    },
    {
        id: 1,
        title: "Office Chair",
        price: 20,
        image: "/product/Image (5).png",
        isNew: true
    },
    {
        id: 2,
        title: "Library Stool Chair",
        price: 20,
        originalPrice: 30,
        image: "/product/Image (9).png",
        isSale: true
    },
    {
        id: 3,
        title: "Stool Chair",
        price: 20,
        image: "/product/Image (10).png"
    },
    {
        id: 4,
        title: "Office Chair",
        price: 20,
        image: "/product/Image (11).png"
    },
]
export default products;