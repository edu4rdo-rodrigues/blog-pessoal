// /home/rpz/code/blog-pessoal/frontend/src/components/LoginForm.tsx

import React, { useState } from 'react';
import { responsiveStyleOfLoginPage } from '@/styles/responsiveness';
import Link from 'next/link';
import RedLogos from './RedLogos';
import { useRouter } from 'next/router';

const LoginForm = () => {
    const router = useRouter(); // Mova a chamada do useRouter para dentro do componente

    const responsiveStyles = responsiveStyleOfLoginPage;
    const [formData, setFormData] = useState({
      username: '',
      password: ''
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await fetch('http://127.0.0.1:8000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formData).toString(),
        });
        if (response.ok) {
            console.log(response);
            
          console.log('Login deu Certo');
          router.push('/posts'); // Use router.push para redirecionar o usuário
        } else {
          console.error('Login falhou');
        }
      } catch (error) {
        console.error('Erro ao processar o login:', error);
      }
      console.log('Formulário enviado:', formData);
    };


  return (
    <form className={responsiveStyles.formLogin} onSubmit={handleSubmit}>
        <div className={responsiveStyles.formLoginHeader}>
            <span className={responsiveStyles.formLoginHeaderTitle_1}>
                Hello World!
            </span>
            <span className={responsiveStyles.formLoginHeaderTitle_2}>
                Login with your details
            </span>
        </div>
        <div className={responsiveStyles.formLoginInputs}>
            <input type='text' className={responsiveStyles.userName} name="username" placeholder='User name or Email' onChange={handleChange} value={formData.username} />
            <input type='password' className={responsiveStyles.password} name="password" placeholder='Password' onChange={handleChange} value={formData.password} />
        </div>
        
        <div className={responsiveStyles.formContainerFlexHorizontalItensSecondaryActions}>
            <div className={responsiveStyles.formContainerFlexHorizontalItensCheckboxRememberMe}>
                <input type='checkbox' className={responsiveStyles.checkboxRememberMe}/>
                <span className={responsiveStyles.descriptionRememberMe}>
                    Remember me 
                </span>
            </div>
            <Link href={"#"} className={responsiveStyles.forgotPassword}>
                Forgot Password
            </Link>
        </div>
        <button type='submit' className={responsiveStyles.formButtonLogin}>
            Login
        </button>
        <Link href={"#"} className={responsiveStyles.dontHaveAnAccountSignup}>
            Don’t have an account? 
            <span className={responsiveStyles.dontHaveAnAccountSignupSub3}>
                Signup
            </span>
        </Link>
    </form>
  );
};

export default LoginForm;
