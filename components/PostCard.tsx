import React from "react";
import moment from "moment";
import Link from "next/link";
import { MdDateRange } from "react-icons/md";

import { Post } from "@/utils";

const PostCard: React.FC<PostCardProps> = ({ post }) => {
	return (
		<div
			key={post.title}
			className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 min-w-[200px]"
		>
			<div className="relative shadow-md sm:pb-80 pb-48 mb-6">
				<img
					className="container w-full h-full absolute shadow-lg rounded-t-lg lg:rounded-lg"
					alt={post.title}
					src={post.featuredImage.url}
				/>
			</div>
			<h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-green2 sm:text-3xl text-lg font-semibold">
				<Link href={`/post/${post.slug}`}>{post.title}</Link>
			</h1>
			<div className="flex flex-col md:flex-row gap-8 text-center items-center justify-center mb-8 w-full">
				<div className="flex flex-shrink-0 items-center justify-center">
					<img
						className="align-middle rounded-md object-fill"
						alt={post.author.name}
						src={post.author.photo.url}
						width="30px"
						height="30px"
					/>
					<p className="inline align-middle text-gray-700 ml-2 sm:text-lg text-sm">
						{post.author.name}
					</p>
				</div>
				<div className=" flex items-center gap-2 font-medium sm:text-lg text-sm text-gray-700 ">
					<MdDateRange className="sm:text-xl text-base" />
					<span>{moment(post.fakeDate).format("MMM DD, YYYY")}</span>
				</div>
			</div>
			<p className="text-center sm:text-lg text-sm text-gray-700 font-normal px-4 lg:px-20 mb-8">
				{post.excerpt}
			</p>
			<div className="text-center">
				<Link href={`/post/${post.slug}`}>
					<span className="transition duration-300 transform hover:-translate-y-1 inline-block bg-green2 hover:bg-green3 sm:text-lg text-xs font-semibold rounded-full text-white px-6 py-3 cursor-pointer shadow-md">
						Continue Reading
					</span>
				</Link>
			</div>
		</div>
	);
};

// :::*
export interface PostCardProps {
	post: Post;
}

export default PostCard;
