"use client";
import Image from "next/image";
import React from "react";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import { navs } from "@/app/data/data";
import styles from "@/app/ui/header.module.css";
import { useScrolled } from "@/app/hooks/useScrolled";
import assets from "@/public";
import { useMediaQuery } from "react-responsive";

function Header() {

  const scrolled = useScrolled(50);
  const isMobile = useMediaQuery({ query: '(max-width: 990px)' });


  return (
    <Navbar expand="lg" className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`} fixed="top">
      <Container className={styles.headerContainer}>
        <Navbar.Brand href="/">
          <Image src={scrolled ?  assets.logo : assets.isoIcon} alt="" className={scrolled ? styles.imageLogo : styles.isoIcon} width={scrolled ? 100 : 30} height={scrolled ? 100 : 30} />
        </Navbar.Brand>
        <div className={styles.boxWspHeader}>
          {isMobile && 
            <div className={styles.wspHeader}>
              <Image alt='logo-whatsApp' src={assets.wsp} width={20} height={20}/>
              <span>915 76 68 76</span>
            </div>
          }
          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          className={styles.ajuste}
        >
          <Offcanvas.Header closeButton className={styles.headerOffcanvas}>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              <Image src={assets.logo} alt="" className={styles.imageLogo} width={100} height={100} />
            </Offcanvas.Title>
            {isMobile && 
              <div className={styles.wspHeader}>
                <Image alt='logo-whatsApp' src={assets.wsp} width={20} height={20}/>
                <span>915 76 68 76</span>
              </div>
            }
          </Offcanvas.Header>
          <Offcanvas.Body className={styles.canvasHeader}>
            <Nav
              className={styles.headerNav}
              navbarScroll
            >
            {navs.map((nav) => (
              <Nav.Link
                key={nav.id}
                href={nav.href}
                className={`${styles.headerNavLink} ${scrolled ? styles.headerNavLinkScrolled : ""}`}>
                {nav.name}
                <Image
                  src="/hex-blue.svg"
                  alt="hover"
                  width={40}
                  height={40}
                  className={styles.headerNavLinkImage}
                />
              </Nav.Link>
            ))}
          </Nav>
          {isMobile && 
            <div className={styles.textOffcanvasMobile}>
              <h5>Ven a conocernos</h5>
              <span>Calle de las Huertas 48,<br/> 28014, Madrid <br/> +34 910 52 66 49 | +34 612 27 84 09 <br/> madrid@brotherad.com</span>
            </div>
          }
          <Nav className={styles.boxSocial}>
            <Nav.Link >
              <Image src={assets.email} alt="" width={isMobile ? 23 : 15} height={isMobile ? 23 : 15} className={styles.isoIcon} />
            </Nav.Link>
            <Nav.Link>
              <Image src={assets.instagram} alt="" width={isMobile ? 25 :20 } height={isMobile ? 25 : 20} className={scrolled ? styles.imageLogo : styles.isoIcon}/>
            </Nav.Link>
            <Nav.Link>
              <Image src={assets.globe} alt="" width={isMobile ? 25 : 20} height={isMobile ? 25 : 20} className={scrolled ? styles.imageLogo : styles.isoIcon} />
            </Nav.Link>
          </Nav>
          {isMobile && 
            <div className={styles.footerOffcanvasMobil}>
              <Image src={assets.globe} alt="logo-website" width={25} height={25}/>
              <p>Worldwide</p>
              <Image src={assets.globe} alt="logo-website" width={25} height={25}/>
            </div>
          }
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;