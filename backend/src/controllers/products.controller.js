export const fetchProducts = async (req, res) => {
    try {
        const { q } = req.query;
        if (!q) {
            return res.status(400).json({
                success: false,
                message: "Search query is required",
            });
        }

        const response = await fetch(
            `https://real-time-flipkart-data2.p.rapidapi.com/product-search?page=1&sort_by=RELEVANCE&q=${encodeURIComponent(q)}`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key": process.env.RAPID_API_KEY,
                    "x-rapidapi-host": "real-time-flipkart-data2.p.rapidapi.com",
                },
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.log("Flipkart Error Status:", response.status);
            console.log("Flipkart Error Body:", errorText);

            return res.status(response.status).json({
                success: false,
                message: "Flipkart API error",
                status: response.status,
                error: errorText,
            });
        }



        const data = await response.json();

        // 🔥 Normalize data for your wishlist app
        const products = (data.products || []).slice(0, 5).map(item => ({
            title: item.title,
            price: item.price,
            image: item.image,
            url: item.url,
            description: item.description || "",
            source: "Flipkart",
        }));

        return res.status(200).json({
            success: true,
            count: products.length,
            products,
        });
    } catch (err) {
        console.log(err.response?.status)
        console.log(err.response?.data)
        return res.status(500).json({
            success: false,
            message: "Internal Server error.",
            error: err.message
        })
    }
}