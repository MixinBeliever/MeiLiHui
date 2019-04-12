import React,{Component}from 'react';
import './footer.scss';

class Footer extends Component{
    render(){
        return(
            <footer>
                <a className="flm_s" href="#">400-664-6698</a>
                <ul>
                    <li><a href="#">首页</a></li>
                    <li><a href="#">客户端</a></li>
                    <li><a href="#">登录</a></li>
                    <li className="flm_zh"><a href="#">注册</a></li>
                </ul>
                <p>浙ICP备16004860号-1</p>
            </footer>
        )
    }
}

export default Footer;