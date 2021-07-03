import { useRouter } from 'next/router';
import React from 'react';

const PortfolioDetail = ({ query }) => {
  const router = useRouter();

  const id = router.query.id;
  return <h1>I am Details Page with ID: {id}</h1>;
};

// PortfolioDetail.getInitialProps = ({ query }) => {
//   return { query };
// };

export default PortfolioDetail;

// class PortfolioDetail extends React.Component {
//   static getInitialProps({ query }) {
//     return { query };
//   }

//   render() {
//     const id = this.props.query.id;
//     return <h1>I am Detail Page with id : {id} </h1>;
//   }
// }

// export default PortfolioDetail;
