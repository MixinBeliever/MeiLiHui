import React , {Component} from 'react'
import style from './GoTop.module.scss'

class GoTop extends Component {
    constructor (props) {
        super(props)
        this.state = {
            dist : '',
            isshow : true
        }
    }
    render () {
        return (
            this.state.isshow ?
            <div className={style.gotop} onClick={this.gotop.bind(this)}>top</div>
            : null
        )
    }
    componentDidMount () {
        document.onscroll = () => {
            var scrollTa = document.documentElement.scrollTop || document.body.scrollTop; 
            console.log(scrollTa)
       }
    }
    
    
    gotop () {
        console.log('dist')
        var dist = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(dist)
       
    }
    componentWillUnmount () {
        document.onscroll = null
    }
} 
export default GoTop

