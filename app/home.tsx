'use client';

import Link from 'next/link';
import { useState } from 'react';

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
			backgroundImage: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
			desc: 'Youdeyiwu is an open-source lightweight forum.',
			id: 1,
			isOpenSource: true,
			link: 'https://www.youdeyiwu.com',
			name: 'Youdeyiwu',
		},
		{
			backgroundImage: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
			desc: 'InfoHarvest is a bookmark management tool.',
			id: 2,
			isOpenSource: true,
			link: 'https://www.cnff.pw/infoharvest/',
			name: 'Infoharvest',
		},
		{
			backgroundImage: 'linear-gradient(to right, #6a00f4 0%, #f20089 100%)',
			desc: 'BRL is a React library with Bootstrap components and utilities for faster UI development.',
			id: 3,
			isOpenSource: true,
			link: 'https://dafengzhen.github.io/bootstrap-react-logic',
			name: 'BRL',
		},
		{
			backgroundImage: 'linear-gradient(to right, #cc5803 0%, #ffb627 100%)',
			desc: 'Build Your Own Interview Question Bank.',
			id: 4,
			isOpenSource: true,
			link: 'https://www.cnff.pw/prepforge/',
			name: 'Prepforge',
		},
		{
			backgroundImage:
				'linear-gradient(90deg, hsla(280, 95%, 57%, 1) 0%, hsla(193, 90%, 55%, 1) 100%)',
			desc: 'A collection of commonly used scripts and tools for various tasks.',
			id: 5,
			isOpenSource: false,
			link: 'https://www.cnff.pw/scripts/',
			name: 'Scripts',
		},
	]);

	return (
		<div className="min-vh-100 d-flex align-items-center bg-light">
			<div className="container py-5">
				<div className="row row-cols-1 row-cols-md-2 g-4">
					{items.map((item) => {
						return (
							<div className="col d-flex" key={item.id}>
								<div className="card shadow-sm border-0">
									<div
										className="card-body d-flex align-items-center justify-content-center p-4"
										style={{
											backgroundImage: item.backgroundImage,
											backgroundSize: 'cover',
											borderRadius: '1rem',
										}}
									>
										<div className="text-center text-white">
											<div className="display-4 mb-3">
												<em>
													<Link
														className="text-white link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
														href={item.link}
														rel="noreferrer"
														style={{
															backgroundClip: 'text',
															backgroundImage: item.backgroundImage,
															color: 'transparent',
														}}
														target="_blank"
													>
														{item.name}
													</Link>
												</em>
											</div>
											<div className="lead">{item.desc}</div>

											<div className="mt-3">
												{!item.isOpenSource && (
													<span className="badge bg-danger">
														Non-Open Source
													</span>
												)}

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
						className="text-decoration-none text-secondary d-inline-flex align-items-center justify-content-center"
						href="https://github.com/dafengzhen"
						rel="noreferrer"
						target="_blank"
					>
						GitHub: @dafengzhen
					</Link>
				</footer>
			</div>
		</div>
	);
}
