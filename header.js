import React ,{Component} from "react";

// export default function Header({header,desc}) {
//   // console.log(props);
//   // const {header,desc}= props;
// // we ca desturucture the prop by passing directly in fuction argument as object
// // because prop is a object
//   return (
//     <div className="p-5 bg-primary text-white text-center">
//       <h1>{header }</h1>
//       <p>{ desc }</p>
//     </div>
//   );
// }

class Header extends Component{
  constructor(props){
    super();
  }
  render(){
    const {header,desc} = this.props;
    return (
     
      <div className="p-5 bg-primary text-white text-center">
        <h1>{ header }</h1>
        <p>{ desc }</p>
      </div>
    )
  }
}
export default Header;