'use client';

import { useState } from 'react';
import Link from 'next/link';

interface IItem {
  id: number;
  name: string;
  desc: string;
  link: string;
  backgroundImage: string;
  isOpenSource: boolean;
}

export default function Home() {
  const [items] = useState<IItem[]>([
    {
      id: 1,
      name: 'Youdeyiwu',
      desc: 'Youdeyiwu is an open-source lightweight forum.',
      link: 'https://www.youdeyiwu.com',
      backgroundImage: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
      isOpenSource: true,
    },
    {
      id: 2,
      name: 'Infoharvest',
      desc: 'InfoHarvest is a bookmark management tool.',
      link: 'https://www.cnff.pw/infoharvest/',
      backgroundImage: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
      isOpenSource: true,
    },
    {
      id: 3,
      name: 'BRL',
      desc: 'BRL is a React library with Bootstrap components and utilities for faster UI development.',
      link: 'https://dafengzhen.github.io/bootstrap-react-logic',
      backgroundImage: 'linear-gradient(to right, #6a00f4 0%, #f20089 100%)',
      isOpenSource: true,
    },
    {
      id: 4,
      name: 'Prepforge',
      desc: 'Build Your Own Interview Question Bank.',
      link: 'https://www.cnff.pw/prepforge/',
      backgroundImage: 'linear-gradient(to right, #cc5803 0%, #ffb627 100%)',
      isOpenSource: true,
    },
    {
      id: 5,
      name: 'Scripts',
      desc: 'A collection of commonly used scripts and tools for various tasks.',
      link: 'https://www.cnff.pw/scripts/',
      backgroundImage: 'linear-gradient(90deg, hsla(280, 95%, 57%, 1) 0%, hsla(193, 90%, 55%, 1) 100%)',
      isOpenSource: false,
    },
  ]);

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {items.map((item) => {
            return (
              <div key={item.id} className="col d-flex">
                <div className="card shadow-sm border-0">
                  <div
                    className="card-body d-flex align-items-center justify-content-center p-4"
                    style={{ backgroundImage: item.backgroundImage, backgroundSize: 'cover', borderRadius: '1rem' }}
                  >
                    <div className="text-center text-white">
                      <div className="display-4 mb-3">
                        <em>
                          <Link
                            rel="noreferrer"
                            target="_blank"
                            href={item.link}
                            className="text-white link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                            style={{
                              backgroundImage: item.backgroundImage,
                              backgroundClip: 'text',
                              color: 'transparent',
                            }}
                          >
                            {item.name}
                          </Link>
                        </em>
                      </div>
                      <div className="lead">{item.desc}</div>

                      <div className="mt-3">
                        {!item.isOpenSource && <span className="badge bg-danger">Non-Open Source</span>}

                        {/*{item.isOpenSource ? (*/}
                        {/*  <span className="badge bg-success">Open Source</span>*/}
                        {/*) : (*/}
                        {/*  <span className="badge bg-danger">Non-Open Source</span>*/}
                        {/*)}*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer with GitHub link */}
        <footer className="text-center py-3 mt-5 border-top">
          <Link
            href="https://github.com/dafengzhen"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-secondary d-inline-flex align-items-center justify-content-center"
          >
            GitHub: @dafengzhen
          </Link>
        </footer>
      </div>
    </div>
  );
}
