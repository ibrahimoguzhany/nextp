import App from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

import Hero from '../components/shared/Hero';
import Navbar from '../components/shared/Navbar';

const MyApp = ({ Component, pageProps }) => {
  debugger
  return (
    <div className='portfolio-app'>
      <Navbar />
      {pageProps.appData}
      {Component.name === 'Home' && <Hero />}
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </div>
  );
};

MyApp.getInitialProps = async (context) => {
  debugger
  console.log('GET INITIAL PROPS');
  const initialProps =
    App.getInitialProps && (await App.getInitialProps(context));

  return {
    pageProps: { appData: 'Hello _App Compoenent', ...initialProps.pageProps },
  };
};

export default MyApp;
