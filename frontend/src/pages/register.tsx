// /home/rpz/code/blog-pessoal/frontend/src/pages/register.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import RedLogos from '@/components/RedLogos';
import { responsiveStyleOfLoginPage } from '@/styles/responsiveness';
import RegisterForm from '@/components/RegisterForm';
import Image from 'next/image';
import svgImage from "../../public/RightContent.svg"

const responsiveStyles = responsiveStyleOfLoginPage;


const Register: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode enviar os dados de registro para o backend
    console.log('Dados de registro enviados:', formData);
    // Redirecionar após o registro bem-sucedido
    router.push('/login');
  };

  return (
    <>
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
              <RegisterForm />
              <RedLogos />
          </div>
      </div>
      <div>
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
    
  );
};

export default Register;
