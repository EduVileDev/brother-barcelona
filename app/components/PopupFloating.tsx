import { useState } from "react";
import styles from "@/app/ui/home.module.css"; // Podés crear este archivo de estilos o usar Tailwind si estás usando
import Image from "next/image";
import assets from "@/public";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.fabContainer}>
      {open && (
        <div className={styles.fabOptions}>
          <button className={styles.optionsWsp}><Image src={assets.wsp} alt='wsp' width={20} height={20}/>Escribenos por Whatsapp</button>
          <button className={styles.optionsForm}><Image src={assets.info} alt='info' width={15} height={15}/>Completa el formulario</button>
        </div>
      )}
      <button
        className={styles.fabButton}
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <Image src="/chat.svg" alt="whatsapp" width={15} height={15} />
        Hola, Bro :)
      </button>
    </div>
  );
}
