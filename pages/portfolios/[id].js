// import { useRouter } from 'next/router';
import React from 'react';

export default function PortfolioDetail({ id }) {
  console.log(id);
  return <>{id}</>;
}

PortfolioDetail.getInitialProps = ({ query }) => {
  return { id: query?.id };
};
