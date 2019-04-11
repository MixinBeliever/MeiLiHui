import React,{Component}from 'react';
import './flmdetail.scss';

class FlmDetail extends Component{

    constructor(props){
        super(props);
        this.state ={
            detailInfo: null,
        };
    }
    componentDidMount(){
        console.log(this.props.match.params.id);

        fetch(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}&key=&sort=&timestamp=1554970706803&summary=18f372f3696d6e7a4acf52f10ef3943a&platform_code=H5`).then(res=>res.json()).then(res=>{
            console.log(res);
         this.setState({
             detailInfo: res.products
         })
        })
    }
    render(){
        return(
            <div>
               Detail
            </div>
        )
    }
}
export default FlmDetail;