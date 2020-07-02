/*
 * @Emall: 285840242@qq.com
 * @version: 
 * @Author: hukancheng
 * @Date: 2020-06-24 15:49:33
 * @LastEditors: hukancheng
 * @LastEditTime: 2020-06-24 17:01:11
 */ 
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg111';
  }
}

module.exports = HomeController;
