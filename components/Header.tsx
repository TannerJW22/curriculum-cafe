import Link from "next/link";
import Image from "next/image";

const Header: React.FC<HeaderProps> = () => {
	return (
		<div className="container mx-auto px-10 mb-8">
			<div className="border-b w-full inline-block shadow-lg py-6">
				<div className="md:float-left">
					<Link className="flex items-center gap-2 px-6" href="/">
						<Image alt="logo" src="/img/cc-logo-transparent.png" width={80} height={15} />
						<span className="cursor-pointer font-bold text-3xl text-brown2 mt-2.5">
							Curriculum Cafe
						</span>
					</Link>
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
