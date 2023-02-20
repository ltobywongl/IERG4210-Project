import excuteQuery from "@/lib/db"

export default async function handler(req, res) {
  try {
    const result = await excuteQuery({
      query: 'SELECT * FROM products'
    });
    res.status(200).json(result)
  } catch (error) {
    console.log(error);
    res.status(500).json({})
  }
}
