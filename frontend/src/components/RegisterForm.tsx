// /home/rpz/code/blog-pessoal/frontend/src/components/RegisterForm.tsx

import React, { useState } from 'react';
import { responsiveStyleOfRegisterPage } from '@/styles/responsiveness';
import { useRouter } from 'next/router';

const RegisterForm = () => {
    const router = useRouter(); // Mova a chamada do useRouter para dentro do componente

    const responsiveStyles = responsiveStyleOfRegisterPage;
    const [formData, setFormData] = useState({
      username: '',
      email: '',
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
        const response = await fetch('http://127.0.0.1:8000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formData).toString(),
        });
        if (response.ok) {
            console.log(response);
            
          console.log('Registro deu Certo');
          router.push('/registro'); // Use router.push para redirecionar o usuário
        } else {
          console.error('Registro falhou');
        }
      } catch (error) {
        console.error('Erro ao processar o Registro:', error);
      }
      console.log('Formulário enviado:', formData);
    };


  return (
    <form className={responsiveStyles.formRegister} onSubmit={handleSubmit}>
        <div className={responsiveStyles.formRegisterHeader}>
            <span className={responsiveStyles.formRegisterHeaderTitle_1}>
                Hello World!
            </span>
            <span className={responsiveStyles.formRegisterHeaderTitle_2}>
                Register with your details
            </span>
        </div>
        <div className={responsiveStyles.formRegisterInputs}>
            <input 
              type='text' 
              className={responsiveStyles.userName} 
              name="username" placeholder='User name' 
              onChange={handleChange} 
              value={formData.username}
            />
                        <input 
              type='text' 
              className={responsiveStyles.email} 
              name="email" placeholder='Email' 
              onChange={handleChange} 
              value={formData.email}
            />
            <input 
              type='password' 
              className={responsiveStyles.password} 
              name="password" 
              placeholder='Password' 
              onChange={handleChange} 
              value={formData.password} 
            />
        </div>
        
        <button type='submit' className={responsiveStyles.formButtonRegister}>
            Register
        </button>

    </form>
  );
};

export default RegisterForm;
