import React, { Component } from 'react';
import store from '../../../store/store';
import { showHeaderbar, hideHeaderbar } from '../../ActionDispatch/actionCreator'
import style from './loginaccount.module.scss'
class Loginaccount extends Component {
  render() {
    return (
        <div>
            <div id={style.login_page}>
                <div className={style.close}>
                    <a href="javascript:;">X</a>
                </div>
                <h3 className={style.info}>
                    账号密码登录
                    <p>注册即送2600元红包</p>
                </h3>
                <div className={style.form}>
                    <div>
                        <input type="text" />
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    <div>
                        <button>→</button>
                    </div>
                    <div>
                        <a href="/login/mobile">通过验证码登录</a>
                        <a href="/login/mobile">忘记密码</a>
                    </div>
                </div>
            </div>
      </div>
    )
  }
  componentDidMount(){
      //隐藏headerbar
    store.dispatch(hideHeaderbar())
  }
  componentWillUnmount(){
      //显示headerbar
    store.dispatch(showHeaderbar())
  }
}

export default Loginaccount;
