import React, { useState, useEffect } from 'react';
import './index.less';
// import { dipatchLeftSide } from '@/config/commonMethods';

// const Home = (props: any) => {
//   dipatchLeftSide(props);

//   useEffect(() => {
//     // document.οnClick = two();
//     console.dir('...', document);
//   });
//   const one = e => {
//     e.nativeEvent.stopImmediatePropagation();
//     alert(1);
//   };

//   const two = () => {
//     alert(2);
//   };
//   return (
//     <div className="homePage">
//       <div style={{ height: 150, width: 150, backgroundColor: '#000' }} onClick={one} />
//     </div>
//   );
// };

// export default Home;

class Home extends React.Component {
  // componentDidMount() {
  //   document.onclick = this.two;
  // }
  // one(e) {
  //   e.nativeEvent.stopImmediatePropagation();
  //   alert(1);
  // }
  // two() {
  //   alert(2);
  // }
  render() {
    return <div style={{ height: 150, width: 150, backgroundColor: '#000' }} />;
  }
}

export default Home;
