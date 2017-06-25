/**
 * Created by samuelliu on 6/24/17.
 */
const models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql  = require('../sqlMap')

var conn = mysql.createConnection(models.mysql)
conn.connect()
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: 1,
      msg: 'failure!!!!!'
    })
  } else {
    res.json(ret)
  }
}

router.post('/addUser', (req, res) => {
  var sql = $sql.user.add
  var params = req.body
  console.log(params)
  conn.query(sql, [params.username, params.age], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
module.exports = router
