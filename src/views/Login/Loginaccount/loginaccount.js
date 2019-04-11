import React, { Component } from 'react';
import store from '../../../store/store';
class Loginaccount extends Component {
  render() {
    return (
        <div>
            <div>
                <div>
                    <a href="">X</a>
                </div>
                <h3>

                </h3>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <input type="text" />
                </div>
            </div>
            <div>

            </div>
      </div>
    )
  }
  componentDidMount(){
      //隐藏headerbar
    store.dispatch({
        type: 'hideHeaderbar',
        payload: false,
    })
  }
  componentWillUnmount(){
      //显示headerbar
    store.dispatch({
        type: 'showHeaderbar', 
        payload: true,   //需要隐藏
    })
  }
}

export default Loginaccount;
