import excuteQuery from "@/lib/db"

export default async function handler(req, res) {
    const id = req.body.pid;

    try {
        const result = await excuteQuery({
            query: "DELETE FROM products WHERE pid=?",
            values: [id],
        });
        res.status(200).json({data: "Success"})
    } catch (error) {
        console.log(error);
        res.status(500).json({data: error})
    }
}
