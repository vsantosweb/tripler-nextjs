
import React from 'react';
import Header from '../../components/Header';

export default function DefaultLayout({ children } : any) {
    return (
        <div style={{ display: 'flex',position: 'relative', flexDirection: 'column', height: 'auto', minHeight: '100%' }}>
           <Header />
            <div style={{height: 'auto',minHeight: '100%', flex: 1, padding: '0 .9em' }}>
                {children}
            </div>
            <footer style={{background: 'green', position: 'relative', bottom: '0'}}>footer</footer>
        </div>
    )
}
