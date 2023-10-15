"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Section = () => {
	return (
		<section className='lg:py-16'>
			<div className='grid grid-cols-1 sm:grid-cols-12'>
				<motion.div
				  intial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1}}
					transition={{ duration: 0.5 }}
					className='col-span-8 place-self-center text-center sm:text-left jusify-self-start'
				>
					<h1 className= 'text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>
							Hello, I&apos;m{" "}Hello
						</span>
						<br />
						<TypeAnimation 
							sequence={[
								"Darius Goudine",
								1000,
								'Technical Sound Design',
								1000,
								'Video Game Audio',
								1000,
								'Media Composition',
								1000
							]}
							wrapper='span'
							speed={50}
							repeat={Infinity}
						/>
					</h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
						<div>
							<Link
							  href='/contact'
								className='px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white'
							>
								Hire Me
							</Link>
						</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Section;