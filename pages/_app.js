import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    console.log(' _APP.JS COMPONENT', Component);
    console.log(' _APP.JS pageProps', pageProps);
    return <Component {...pageProps} />;
}

export default MyApp;
