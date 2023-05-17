import React from "react";
import moment from "moment";
import Link from "next/link";
import { Post } from "@/utils";

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({ post }) => {
	return (
		<div className="relative h-72 transform duration-300 hover:-translate-y-2">
			<div
				className="absolute rounded-md bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
				style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
			/>
			<div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
			<div className="flex flex-col gap-3 rounded-lg p-4 items-center justify-center absolute w-full h-full">
				<div className="text-white mb-2 text-shadow font-semibold text-sm">
					{moment(post.fakeDate).format("MMM DD, YYYY")}
				</div>
				<div className="text-white mb-4 text-shadow font-bold text-[1.3rem] text-center leading-snug">
					{post.title}
				</div>
				<div className="flex items-center absolute bottom-5 w-full justify-center">
					<img
						alt={post.author.name}
						height="30px"
						width="30px"
						className="align-middle drop-shadow-lg rounded-full"
						src={post.author.photo.url}
					/>
					<div className="inline align-middle text-white text-shadow ml-2 font-medium">
						{post.author.name}
					</div>
				</div>
			</div>
			<Link href={`/post/${post.slug}`}>
				<span className="cursor-pointer absolute w-full h-full" />
			</Link>
		</div>
	);
};

export interface FeaturedPostCardProps {
	post: Post;
}

export default FeaturedPostCard;
