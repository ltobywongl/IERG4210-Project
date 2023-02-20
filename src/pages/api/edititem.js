import excuteQuery from "@/lib/db"

export default async function handler(req, res) {
    const form = req.body
    if (typeof form == "object" && Object.keys(form).length == 6 && !isNaN(form.cid) && !isNaN(form.pid) && !isNaN(form.price) && form.image !== undefined && form.image !== "") {
        console.log(form)
        try {
            const result = await excuteQuery({
                query: "UPDATE products SET cid = ?, name = ?, price = ?, description = ?, image = ? WHERE pid = ?;",
                values: [form.cid, form.name, form.price, form.description, form.image, form.pid],
            });
            res.status(200).json({data: 'edit success'})
        } catch (error) {
            console.log(error);
            res.status(500).json({data: 'edit failed'})
        }
    } else {
        res.status(500).json({data: 'edit failed'})
    }
}
