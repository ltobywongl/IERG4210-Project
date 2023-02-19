import excuteQuery from "@/lib/db"

export default async function handler(req, res) {
  const { id } = req.query
  try {
    const result = await excuteQuery({
      query: 'SELECT * FROM products WHERE pid=(?)',
      values: [id],
    });
    res.status(200).json(result[0])
  } catch (error) {
    console.log(error);
    res.status(500).json({})
  }
}
