//模拟数据
const express = require('express')
const app = express()
//推荐数据
var areaList = require('./src/data/DXYArea.json')
var wareaList = require('./src/data/DXYAreaW.json')
var newList = require('./src/data/DXYNews.json')
var overallList = require('./src/data/DXYOverall.json')
var rumorsList = require('./src/data/DXYRumors.json')
//API路径
var apiRoutes = express.Router()
app.use('/api', apiRoutes)

module.exports = {
  devServer: {
    host: 'localhost',
    port: 9292,
    https: false,
    open: true,
    hotOnly: true,
    before(app) {
      app.get('/api/area', (req, res) => {
        res.json({
          code: 1,
          msg: '成功',
          data: areaList
        })
      }),
        app.get('/api/warea', (req, res) => {
          res.json({
            code: 1,
            msg: '成功',
            data: wareaList
          })
        }),
        app.get('/api/new', (req, res) => {
          res.json({
            code: 1,
            msg: '成功',
            data: newList
          })
        }),
        app.get('/api/overall', (req, res) => {
          res.json({
            code: 1,
            msg: '成功',
            data: overallList
          })
        }),
        app.get('/api/rumors', (req, res) => {
          res.json({
            code: 1,
            msg: '成功',
            data: rumorsList
          })
        })
    }
  }
}
