import { useState } from "react";
import styles from "@/app/ui/home.module.css"; // Podés crear este archivo de estilos o usar Tailwind si estás usando
import Image from "next/image";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.fabContainer}>
      {open && (
        <div className={styles.fabOptions}>
          <button className={styles.optionsWsp}>Escribenos por Whatsapp</button>
          <button className={styles.optionsForm}>Completa el formulario</button>
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
