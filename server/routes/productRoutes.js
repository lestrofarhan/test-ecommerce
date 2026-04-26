import express from "express";
import {
    addProduct,
    filterProducts,
    getBestSellers,
    getByCategory,
    getProduct,
    getProducts,
    getTopRated,
    listOfProducts,
    searchProducts,
}
    from "../controllers/productControllers.js";
import Products from "../models/productModel.js";

const router = express.Router();

//Route to get all products
router.get('/', getProducts);

//Route to get a single product by id
router.get('/product/:id', getProduct);

//Route to add a product
router.post("/product", addProduct);

//Route to send products based on men,women and kid
router.get('/category/:category', getByCategory);

//Route to get top rated products
router.get('/filter/topRated', getTopRated);

//Route to get best sellers
router.get('/filter/bestSellers', getBestSellers)

//Route to search for an item
router.get('/products/search', searchProducts)

//Route to sort products
// router.get('/products/:category/sortby/:criteria/:order', sortProducts)

//Route to filter products
router.get('/products/filterBy', filterProducts)

//Route to get list of products
router.get('/products/:list', listOfProducts)





const sampleProducts = [
    // --- NIKE ---
    { brand: "Nike", title: "Air Max Pro", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&h=800&fit=crop", rating: 4.8, reviews: 120, sellPrice: 150, mrp: "180", discount: 16, category: "men", orders: "45" },
    { brand: "Nike", title: "Zoom Pegasus", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&h=800&fit=crop", rating: 4.5, reviews: 85, sellPrice: 120, mrp: "140", discount: 14, category: "women", orders: "30" },
    { brand: "Nike", title: "Revolution 6", img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800&h=800&fit=crop", rating: 4.2, reviews: 200, sellPrice: 55, mrp: "65", discount: 15, category: "kids", orders: "110" },
    { brand: "Nike", title: "Court Vision", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&h=800&fit=crop", rating: 4.6, reviews: 310, sellPrice: 75, mrp: "75", discount: 0, category: "men", orders: "90" },
    { brand: "Nike", title: "Air Force 1 GS", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&h=800&fit=crop", rating: 4.9, reviews: 500, sellPrice: 90, mrp: "100", discount: 10, category: "kids", orders: "250" },

    // --- ADIDAS ---
    { brand: "Adidas", title: "Ultraboost Light", img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=800&h=800&fit=crop", rating: 4.7, reviews: 420, sellPrice: 190, mrp: "210", discount: 9, category: "men", orders: "60" },
    { brand: "Adidas", title: "Pureboost 22", img: "https://images.unsplash.com/photo-1597044753138-b7a269455940?q=80&w=800&h=800&fit=crop", rating: 4.4, reviews: 150, sellPrice: 130, mrp: "150", discount: 13, category: "women", orders: "40" },
    { brand: "Adidas", title: "Stan Smith", img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800&h=800&fit=crop", rating: 4.8, reviews: 1200, sellPrice: 100, mrp: "100", discount: 0, category: "men", orders: "800" },
    { brand: "Adidas", title: "Grand Court", img: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=800&h=800&fit=crop", rating: 4.3, reviews: 95, sellPrice: 45, mrp: "60", discount: 25, category: "kids", orders: "55" },
    { brand: "Adidas", title: "Superstar W", img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&h=800&fit=crop", rating: 4.6, reviews: 880, sellPrice: 95, mrp: "110", discount: 13, category: "women", orders: "210" },

    // --- PUMA ---
    { brand: "Puma", title: "RS-X Efekt", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&h=800&fit=crop", rating: 4.5, reviews: 210, sellPrice: 110, mrp: "125", discount: 12, category: "men", orders: "75" },
    { brand: "Puma", title: "Mayze Stack", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&h=800&fit=crop", rating: 4.7, reviews: 140, sellPrice: 100, mrp: "110", discount: 9, category: "women", orders: "50" },
    { brand: "Puma", title: "Softride Enzo", img: "https://images.unsplash.com/photo-1538233412730-912da6023d4c?q=80&w=800&h=800&fit=crop", rating: 4.1, reviews: 60, sellPrice: 40, mrp: "55", discount: 27, category: "kids", orders: "35" },
    { brand: "Puma", title: "Suede Classic", img: "https://images.unsplash.com/photo-1612015670828-98e388d745f9?q=80&w=800&h=800&fit=crop", rating: 4.8, reviews: 900, sellPrice: 75, mrp: "85", discount: 11, category: "men", orders: "400" },
    { brand: "Puma", title: "Carina Street", img: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=800&h=800&fit=crop", rating: 4.4, reviews: 180, sellPrice: 65, mrp: "75", discount: 13, category: "women", orders: "120" },

    // --- SKECHERS ---
    { brand: "Skechers", title: "Arch Fit", img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&h=800&fit=crop", rating: 4.9, reviews: 2500, sellPrice: 95, mrp: "110", discount: 13, category: "men", orders: "1200" },
    { brand: "Skechers", title: "Go Walk 6", img: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=800&h=800&fit=crop", rating: 4.7, reviews: 600, sellPrice: 80, mrp: "90", discount: 11, category: "women", orders: "340" },
    { brand: "Skechers", title: "D'Lites", img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=800&h=800&fit=crop", rating: 4.6, reviews: 450, sellPrice: 70, mrp: "85", discount: 17, category: "women", orders: "190" },
    { brand: "Skechers", title: "Kids Light-Up", img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&h=800&fit=crop", rating: 4.5, reviews: 300, sellPrice: 50, mrp: "60", discount: 16, category: "kids", orders: "420" },
    { brand: "Skechers", title: "Uno Stand On Air", img: "https://images.unsplash.com/photo-1511551203524-9a24350a5771?q=80&w=800&h=800&fit=crop", rating: 4.8, reviews: 750, sellPrice: 85, mrp: "95", discount: 10, category: "men", orders: "280" }
];

router.post('/upload-sample-products', async (req, res) => {
    try {
        await Products.deleteMany({}); // Clears old test data
        const data = await Products.insertMany(sampleProducts);
        res.status(201).json({
            success: true,
            message: "20 high-quality products uploaded",
            data
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});


export default router;