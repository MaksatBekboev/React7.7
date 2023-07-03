import React from 'react';
import { useForm } from 'react-hook-form';
import './index.css';

const RegistrationForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="firstName" className="form-label">Фамилия:</label>
        <input type="text" id="firstName" className="form-input" {...register('firstName', { required: true })} />
      </div>

      <div className="form-group">
        <label htmlFor="lastName" className="form-label">Имя:</label>
        <input type="text" id="lastName" className="form-input" {...register('lastName', { required: true })} />
      </div>

      <div className="form-group">
        <label htmlFor="middleName" className="form-label">Отчество:</label>
        <input type="text" id="middleName" className="form-input" {...register('middleName')} />
      </div>

      <div className="form-group">
        <label htmlFor="birthYear" className="form-label">Год рождения:</label>
        <input type="number" id="birthYear" className="form-input" {...register('birthYear', { required: true })} />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber" className="form-label">Номер телефона:</label>
        <input type="tel" id="phoneNumber" className="form-input" {...register('phoneNumber', { required: true })} />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" id="email" className="form-input" {...register('email', { required: true })} />
      </div>

      <button type="submit" className="form-button">Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;
