import React, { Component } from 'react';

// const withClass = (WrapperComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrapperComponent {...props} />
//     </div>
//   );
// };

// return anonymous class
const withClass = (WrapperComponent, className) => {
  return class extends Component {
    render () {
      return (
        <div className={className}>
          <WrapperComponent {...this.props} />
        </div>
      );
    }
  }
};

export default withClass;
