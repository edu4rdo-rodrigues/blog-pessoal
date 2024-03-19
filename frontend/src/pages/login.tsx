// /home/rpz/code/blog-pessoal/frontend/src/pages/login.tsx
import React from 'react';
import { responsiveStyleOfLoginPage } from '@/styles/responsiveness';
import LoginForm from '@/components/LoginForm';
import RedLogos from '@/components/RedLogos';

const responsiveStyles = responsiveStyleOfLoginPage;


const LoginPage: React.FC = () => {
    return (
        <div className={responsiveStyles.backgroundRed}>
            <div className={responsiveStyles.backgroundBlack}>
                <div className={responsiveStyles.logo}></div>
                <p className={responsiveStyles.aboutUs}>
                    We Learn... We Acquire
                    Tech... Software...
                    &amp; We Teach

                </p>
            </div>
            <div className={responsiveStyles.containerForm}>
                <LoginForm />
                <RedLogos />
            </div>
        </div>
    );
};

export default LoginPage;
