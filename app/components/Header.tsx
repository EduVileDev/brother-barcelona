"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { navs } from "@/app/data/data";
import styles from "@/app/ui/header.module.css";
import { useScrolled } from "@/app/hooks/useScrolled";

function Header() {

  const scrolled = useScrolled(50);

  return (
    <Navbar expand="lg" className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`} fixed="top">
      <Container className={styles.headerContainer}>
        <Navbar.Brand href="#">
          <Image src="/iso.svg" alt="" width={20} height={20} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-end" id="navbarScroll">
          <Nav
            className={styles.headerNav}
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {navs.map((nav) => (
              <Nav.Link
                key={nav.id}
                href={nav.href}
                className={styles.headerNavLink}
              >
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
          <Nav className="col-2 flex flex-row justify-center">
            <Nav.Link>
              <Image src="/email.svg" alt="" width={15} height={15} />
            </Nav.Link>
            <Nav.Link>
              <Image src="/instagram.svg" alt="" width={20} height={20} />
            </Nav.Link>
            <Nav.Link>
              <Image src="/globe.svg" alt="" width={20} height={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
