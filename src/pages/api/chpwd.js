import excuteQuery from "@/lib/db"
import bcrypt from "bcrypt"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const result = await excuteQuery({
                query: 'SELECT * FROM user where userid=?;',
                values: [req.body.id],
            });
            if (result && result[0].password) {
                bcrypt.compare(req.body.password, result[0].password, async function (err, compare_result) {
                    if (compare_result) {
                        bcrypt.hash(req.body.newPassword, 10, async function (err, hash) {
                            if (hash) {
                                try {
                                    const result = await excuteQuery({
                                        query: "UPDATE user SET password = ? WHERE userid = ?;",
                                        values: [hash, req.body.id],
                                    });
                                    res.status(200).json({ msg: "Password change success!" })
                                } catch (error) {
                                    console.log(error);
                                    res.status(500).json({ msg: "Error updating password!" })
                                }
                            } else {
                                console.log(error);
                                res.status(500).json({ msg: 'edit failed' })
                            }
                        });
                    } else {
                        res.status(403).json({ msg: "Password check failed!" })
                    }
                });
            } else {
                res.status(403).json({ msg: "user ID not found!" })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({})
        }
    } else {
        res.status(500).json({})
    }
}
