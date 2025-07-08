import { Outlet } from 'react-router';
import Header from '../../components/Header';
import Banner from '../../components/Banner'
import Footer from '../../components/Footer';

function RootLayout() {
    return (
        <>
            <Header />
            <Banner/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default RootLayout;
