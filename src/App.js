import React, { Component } from 'react';
import './App.css';
import Headerbar from './component/Headerbar/headerbar';
import store from './store/store';
class App extends Component {
  constructor(){
      super()
      this.state = {
          isFixed: false,
          isShowHeaderbar: store.getState().headerbarReducer,
      }
  }
  componentWillMount(){
      store.subscribe(()=>{
          console.log('aaa',store.getState())
          this.setState({
            isShowHeaderbar: store.getState().headerbarReducer,
          })
      })
  }
  render() {
    return (
      <div className="App">
          {
            this.state.isShowHeaderbar?
            <Headerbar {...this.props} ></Headerbar>
            :
            null
          }
          { this.props.children }
      </div>
    );
  }
}

export default App;
