import { Nav } from '@intility/bifrost-react';
import App from '../App';

const Navigation = () => {
    return (
        <Nav
            // if you only supply a string to `logo` you'll get an "it" logo graphic
            logo='Dinner planner'
            hideBranding
            side={
                <div>
                    <a href='/'>
                        <Nav.Item>Home</Nav.Item>
                    </a>
                    <a href='/profile'>
                        <Nav.Item>Profile</Nav.Item>
                    </a>
                </div>
            }
            top={
                <>
                    <a href='/profile' title='User profile'>
                        <Nav.Item />
                    </a>
                </>
            }>
            <App />
        </Nav>
    );
};

export default Navigation;
