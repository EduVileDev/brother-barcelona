import React from 'react';
import styles from '../ui/select.module.css';

interface CustomSelectProps {
  name: string;
  register: any;
  options: { value: string; label: string }[];
  defaultOption?: string;
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  register,
  options,
  defaultOption = 'Selecciona una opción',
  className = '',
}) => {
  return (
    <select className={`${styles.select} ${className}`} {...register(name)}>
      <option value="">{defaultOption}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
