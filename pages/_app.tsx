import React from 'react';
import { AuthProvier } from '../providers/auth/AuthProvider';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Theme from '../theme'
import { Layout } from '../resources/layouts'
import "../resources/fonts/line-awesome-1.3.0/1.3.0/css/line-awesome.min.css";
import 'swiper/css';
import Head from 'next/head';
import { persistor, store } from '../store';
import { useRouter } from 'next/router';
import { withRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  
  const history = useRouter();

  const [layout, setLayout] = React.useState<any>('DefaultLayout');

  return (
    <AuthProvier>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Theme>
            <Layout layoutType={layout}>
              <Component layout={setLayout} {...pageProps} history={history} />
            </Layout>
          </Theme>
        </PersistGate>
      </Provider>
    </AuthProvier>

  )
}

export default withRouter(MyApp)
