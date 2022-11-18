import Layout from '../src/components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    console.log('_APP.JS _APP.JS');
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
