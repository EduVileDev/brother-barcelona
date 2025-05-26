import React from 'react'
import styles from '@/app/ui/finalForm.module.css'
import Image from 'next/image'
import assets from '@/public'
import { useForm } from "react-hook-form";
import CustomInput from '../components/CustomInput';
import CustomSelect from '../components/CustomSelect';
import { selectOptions } from '../data/data';

function FinalForm() {

  const { register, handleSubmit } = useForm<FormData>();
  interface FormData {
    nombre: string;
    telefono: string;
    email: string;
    curso?: string;
    mensaje?: string;
  }

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };

  return (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
      <div className={styles.boxCentered}>
        <div className={styles.col}>
          <h5>#Sosloquehacés</h5>
          <Image src={assets.bear} alt="bear image" width={500} height={400} />
        </div>
        <div className={styles.col}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <p className={styles.title}>
              ¿Quieres saber más sobre nuestros cursos?
            </p>
            <p className={styles.subText}>Completá este formulario</p>
            <div className={styles.containerInputs}>
              <div className={styles.formRow}>
                <label htmlFor="nombre" className={styles.label}>
                  Nombre*
                </label>
                <CustomInput
                  type="text"
                  placeholder="Escribe tu nombre"
                  register={register}
                  name="nombre"
                />
              </div>

              <div className={styles.formRow}>
                <label htmlFor="telefono" className={styles.label}>
                  Teléfono*
                </label>
                <CustomInput
                  type="number"
                  placeholder="612 27 84 09"
                  register={register}
                  name="telefono"
                />
              </div>

              <div className={styles.formRow}>
                <label htmlFor="email" className={styles.label}>
                  E-mail*
                </label>
                <CustomInput
                  type="number"
                  placeholder="Escribe tu correo electrónico"
                  register={register}
                  name="email"
                />
              </div>

              <div className={styles.formRow}>
                <label htmlFor="curso" className={styles.label}>
                  Curso de interés
                </label>
                <CustomSelect
                  name="curso"
                  register={register}
                  options={selectOptions}
                  defaultOption="Selecciona tu curso"
                />
              </div>

              <div className={styles.formRow}>
                <label htmlFor="mensaje" className={styles.label}>
                  Mensaje
                </label>
                <CustomInput
                  type="number"
                  placeholder="Escribe un mensaje adicional"
                  register={register}
                  name="mensaje"
                />
              </div>
            </div>
            <p className={styles.requiredText}>*datos obligatorios</p>
            <button className={styles.submit} type="submit" >Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FinalForm