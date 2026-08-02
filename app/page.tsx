'use client';

import Link from 'next/link';
import { useMemo } from 'react';

import styles from './page.module.css';

interface IItem {
  backgroundImage: string;
  desc: string;
  icon?: string;
  id: number;
  isOpenSource: boolean;
  link: string;
  name: string;
}

const ITEMS: IItem[] = [
  {
    backgroundImage: 'linear-gradient(135deg,#f093fb 0%,#f5576c 100%)',
    desc: 'Youdeyiwu is an open-source lightweight forum.',
    icon: 'bi-chat-dots',
    id: 1,
    isOpenSource: true,
    link: 'https://www.youdeyiwu.com',
    name: 'Youdeyiwu',
  },
  {
    backgroundImage: 'linear-gradient(135deg,#4facfe 0%,#00f2fe 100%)',
    desc: 'InfoHarvest is a bookmark management tool.',
    icon: 'bi-bookmark-star',
    id: 2,
    isOpenSource: true,
    link: 'https://www.cnff.pw/infoharvest/',
    name: 'InfoHarvest',
  },
  {
    backgroundImage: 'linear-gradient(135deg,#6a00f4 0%,#f20089 100%)',
    desc: 'React components and utilities based on Bootstrap.',
    icon: 'bi-bootstrap',
    id: 3,
    isOpenSource: true,
    link: 'https://dafengzhen.github.io/bootstrap-react-logic',
    name: 'BRL',
  },
  {
    backgroundImage: 'linear-gradient(135deg,#cc5803 0%,#ffb627 100%)',
    desc: 'Build your own interview question bank.',
    icon: 'bi-journal-bookmark',
    id: 4,
    isOpenSource: true,
    link: 'https://www.cnff.pw/prepforge/',
    name: 'PrepForge',
  },
  {
    backgroundImage: 'linear-gradient(135deg,#8b5cf6 0%,#06b6d4 100%)',
    desc: 'A collection of useful scripts and development tools.',
    icon: 'bi-terminal',
    id: 5,
    isOpenSource: false,
    link: 'https://www.cnff.pw/scripts/',
    name: 'Scripts',
  },
];

export default function Page() {
  const items = useMemo(() => ITEMS, []);

  const openSource = items.filter((i) => i.isOpenSource).length;

  return (
    <main className={styles.page}>
      <div className="container py-5">
        <section className={styles.hero}>
          <div className="text-center">
            <div className={styles.logo}>
              <i className="bi bi-grid-3x3-gap-fill" />
            </div>

            {/*<h1 className="display-4 fw-bold"></h1>*/}

            <p className="lead text-secondary mx-auto mt-3">
              A collection of open-source projects, developer tools and experiments.
            </p>

            <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
              <div className={styles.stat}>
                <strong>{items.length}</strong>
                <span>Projects</span>
              </div>

              <div className={styles.stat}>
                <strong>{openSource}</strong>
                <span>Open Source</span>
              </div>

              <div className={styles.stat}>
                <strong>{items.length - openSource}</strong>
                <span>Private</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
            {items.map((item) => (
              <ProjectCard item={item} key={item.id} />
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <Link
              className={styles.footerLink}
              href="https://github.com/dafengzhen"
              rel="noreferrer"
              target="_blank"
            >
              <i className="bi bi-github" />
              @dafengzhen
            </Link>

            <div className="text-secondary small"></div>

            <Link className={styles.footerLink} href="/">
              <i className="bi bi-house-door" />
              Home
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

function ProjectCard({ item }: { item: IItem }) {
  return (
    <div className="col">
      <div className={`card h-100 border-0 shadow-sm ${styles.card}`}>
        <div
          className={styles.banner}
          style={{
            backgroundImage: item.backgroundImage,
          }}
        >
          <div className={styles.overlay} />

          <div className={styles.icon}>
            <i className={`bi ${item.icon}`} />
          </div>
        </div>

        <div className="card-body d-flex flex-column p-4">
          <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
            <h3 className="h4 fw-bold mb-0">
              <Link
                className={`text-decoration-none ${styles.title}`}
                href={item.link}
                rel="noreferrer"
                target="_blank"
              >
                {item.name}
              </Link>
            </h3>

            <span
              className={`badge rounded-pill ${
                item.isOpenSource ? 'text-bg-success' : 'text-bg-danger'
              }`}
            >
              <i className={`bi me-1 ${item.isOpenSource ? 'bi-github' : 'bi-lock-fill'}`} />
              {item.isOpenSource ? 'Open Source' : 'Closed'}
            </span>
          </div>

          <p className={`text-secondary mb-4 ${styles.desc}`}>{item.desc}</p>

          <div className="mt-auto">
            <Link
              className={`btn btn-light border w-100 ${styles.button}`}
              href={item.link}
              rel="noreferrer"
              target="_blank"
            >
              Visit Project
              <i className="bi bi-arrow-up-right ms-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
