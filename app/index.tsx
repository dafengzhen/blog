"use client";

import Link from "next/link";
import { useState } from "react";

interface IItem {
  id: number;
  name: string;
  desc: string;
  link: string;
  backgroundImage: string;
}

export default function Index() {
  const [items, setItems] = useState<IItem[]>([
    {
      id: 1,
      name: "Youdeyiwu",
      desc: "Youdeyiwu is an open-source lightweight forum.",
      link: "https://www.youdeyiwu.com",
      backgroundImage: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      id: 2,
      name: "Infoharvest",
      desc: "InfoHarvest is a bookmark management tool.",
      link: "https://www.dafengzhen.cn/infoharvest",
      backgroundImage: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
    },
  ]);

  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{ background: "aliceblue" }}
    >
      <div className="container my-4">
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          {items.map((item) => {
            return (
              <div key={item.id} className="col d-flex">
                <div className="card border-0 shadow-sm">
                  <div className="card-body d-flex text-bg-dark rounded">
                    <div className="d-flex flex-wrap flex-lg-nowrap text-center justify-content-center align-items-center gap-4 py-3">
                      <div className="display-4 fw-semibold">
                        <em>
                          <Link
                            rel="noreferrer"
                            target="_blank"
                            href={item.link}
                            style={{
                              backgroundImage: item.backgroundImage,
                              backgroundClip: "text",
                              color: "transparent",
                            }}
                            className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                          >
                            {item.name}
                          </Link>
                        </em>
                      </div>
                      <div className="lead fw-medium">{item.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
