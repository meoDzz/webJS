import React from 'react';

// class Application extends React.Component {
//   render() {
//     console.log('Check pros:', this.props)
//     // let name = this.props.name
//     // let age = this.props.age
    
//     let{name, age, address, def} = this.props;
//     return (
//       <div>
//         Name: {this.props.name}
//         Age: {this.props.address}
//         <div className='job-lists'>
//           {

//             def.map((item, index) => {
//               return(
//                 // Luôn thêm key vào mỗi div để trình duyệt
//                 // biết thằng nào được thay đổi
//                 // tránh thay đổi toàn bộ biến
//                 <div key= {item.id}>
//                   {item.id} - {item.salary}
//                 </div>
//               )
//             })
//           }
            
//         </div>
         
//       </div>
//     );
//   }
// }


// Dùng arrow function with HOOK only
// Arrow function stateless
const Application = (props) =>
{
    let{ def} = props;
    return (
      <div>
        <div className='job-lists'>
          {

            def.map((item, index) => {
              return(
                // Luôn thêm key vào mỗi div để trình duyệt
                // biết thằng nào được thay đổi
                // tránh thay đổi toàn bộ biến
                <div key= {item.id}>
                  {item.id} - {item.salary}
                </div>
              )
            })
          }
            
        </div>
         
      </div>
    );
}

export default Application;