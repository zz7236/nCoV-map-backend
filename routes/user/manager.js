const logger = require('log4js').getLogger('user-manager');
const assert = require('assert');
const router = require('express').Router();
const { buffer } = require('../../lib');

/**
 * 用户管理
 */

router.post('/', (req, res) => {
    let stat = { code:200, msg:"获取成功" };
    let data = { "index":"paper"};
    res.json({status:stat, data:data})
});

module.exports = router;