import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header: React.FC<HeaderProps> = () => {
	const categories = [
		{ name: "react", slug: "reactSlug" },
		{ name: "foo foo", slug: "bar bar" },
		{ name: "xyz", slug: "abc" },
	];

	return (
		<div className="container mx-auto px-10 mb-8">
			<div className="border-b w-full inline-block border-green3 py-8">
				<div className="md:float-left block flex items-center gap-4">
					<Link href="/">
						<Image alt="logo" src="/img/cc-logo.png" width={75} height={15} />
					</Link>
					<span className="cursor-pointer font-bold text-3xl text-white"> Curriculum Cafe</span>
				</div>
				<div className="hidden md:float-left md:contents">
					{categories.map((category, i) => (
						<Link key={category.slug} href={`/category/${category.slug}`}>
							<span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
								{category.name}
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

// :::*
export interface HeaderProps {
	//
}

export default Header;
