import excuteQuery from "@/lib/db"

export default async function handler(req, res) {
  const { id } = req.query
  try {
    const result = await excuteQuery({
      query: 'SELECT * FROM orders WHERE userid=(?) ORDER BY created_at DESC LIMIT 5;',
      values: [id],
    });
    res.status(200).json(result)
  } catch (error) {
    console.log(error);
    res.status(500).json({})
  }
}
