// import React from 'react'
// import '../styles/home.css'
//  class Header extends React.Component {
//     state = {
//         ship: [],
       
//     }

//     filterList = (event) => {
//       let items = this.state.initialItems;
//       items = items.filter((item) => {
//         return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
//       });
//       this.setState({items: items});
//     }

//     componentWillMount = () => {
//       this.setState({
//           initialItems: this.props.content,
//           items: this.props.content
//       })
//     }

//     render() {
//       const 
//       return (
        
//         <div  className="hero-img">       
//           <form>
//                 <input type="text" placeholder="Search" onChange={this.filterList}/>
//           </form>
//            <div>
//             {
//                 this.state.items.map(function(ship) {
//                     return <div key={ship}>{ship}</div>
//                 })
//             }
//             </div>
//         </div>
//       );
//     }
// };

   

// export default Header
