// /home/rpz/code/blog-pessoal/frontend/src/pages/login.tsx
import React from 'react';
import { responsiveStyleOfLoginPage } from '@/styles/responsiveness';
import LoginForm from '@/components/LoginForm';
import RedLogos from '@/components/RedLogos';
import Image from 'next/image';
import svgImage from "../../public/RightContent.svg"
const responsiveStyles = responsiveStyleOfLoginPage;


const LoginPage: React.FC = () => {
    return (
        <div className={responsiveStyles.backgroundRed}>
            <div className={responsiveStyles.backgroundBlack}>
                <Image src={svgImage} alt='' className={responsiveStyles.logo} />
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
