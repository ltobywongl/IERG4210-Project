import excuteQuery from "@/lib/db"

export default async function handler(req, res) {
    console.log(req.body)
    if (req.method === 'POST') {
        try {
            const result = await excuteQuery({
                query: "INSERT INTO orders (orderid, userid, items, amount) VALUES (?, ?, ?, ?);",
                values: [req.body.orderId, req.body.userId, req.body.items, req.body.amount]
            });
            res.status(200).json({data: "Success"})
        } catch (error) {
            console.log(error);
            res.status(500).json({data: error})
        }
    } else {
        res.status(500).json({})
    }
}
