import React from 'react'
function HOCNavbar(Navbar){
  return class extends React.Component{
    render(){
      return <Navbar/>;
    }
  };
}


export default HOCNavbar;
