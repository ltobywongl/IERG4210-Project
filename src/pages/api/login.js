import excuteQuery from "@/lib/db"
import bcrypt from "bcrypt"

export default async function handler(req, res) {
  if (req.method === 'POST') {
    bcrypt.hash(req.body.password, 10, async function (err, hash) {
      console.log(hash)
    });
    try {
      const result = await excuteQuery({
        query: 'SELECT * FROM user where email=?;',
        values: [req.body.email],
      });
      if (result && result[0].password) {
        bcrypt.compare(req.body.password, result[0].password, function (err, compare_result) {
          if (compare_result) {
            let user = {}
            user.id = result[0].userid
            user.name = result[0].email
            if (user.name === "IERG4210admin@gmail.com") {
              user.role = "admin"
            } else user.role = "user"
            res.status(200).json(user)
          } else {
            res.status(403).json({})
          }
        });
      } else {
        res.status(403).json({})
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({})
    }
  } else {
    res.status(500).json({})
  }
}
