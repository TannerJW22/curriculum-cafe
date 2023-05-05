import Link from "next/link";
import Image from "next/image";

const Header: React.FC<HeaderProps> = () => {
	return (
		<div className="container mx-auto px-10 mb-8">
			<div className="border-b w-full inline-block border-green0 py-8">
				<div className="md:float-left flex items-center gap-4">
					<Link href="/">
						<Image alt="logo" src="/img/cc-logo.png" width={75} height={15} />
					</Link>
					<span className="cursor-pointer font-bold text-3xl text-white"> Curriculum Cafe</span>
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
