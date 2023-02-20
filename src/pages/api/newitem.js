import excuteQuery from "@/lib/db"

export default async function handler(req, res) {
    try {
        const result = await excuteQuery({
            query: "INSERT INTO products (cid, name, price, description, image) VALUES (0, 'name', 0, 'description', '/')",
        });
        res.status(200).json({data: "Success"})
    } catch (error) {
        console.log(error);
        res.status(500).json({data: error})
    }
}
