const proxy = require('http-proxy-middleware'); //模块 vue ,react 之所以支持反向代理
module.exports = function(app) {
    //http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5
    app.use(proxy('/appapi', {
            target: 'http://www.mei.com',
            host: 'www.mei.com',
            changeOrigin:true,
            
    }));
};