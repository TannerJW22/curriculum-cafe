import React from "react";
import moment from "moment";
import Link from "next/link";
import { MdDateRange } from "react-icons/md";

import { Post } from "@/utils";

const PostCard: React.FC<PostCardProps> = ({ post }) => {
	return (
		<div key={post.title} className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
			<div className="relative overflow-hidden shadow-md pb-80 mb-6">
				<img
					className="container absolute object-top object-fill shadow-lg rounded-t-lg lg:rounded-lg"
					alt={post.title}
					src={post.featuredImage.url}
				/>
			</div>
			<h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-green2 text-3xl font-semibold">
				<Link href={`/post/${post.slug}`}>{post.title}</Link>
			</h1>
			<div className="block lg:flex text-center items-center justify-center mb-8 w-full">
				<div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
					<img
						className="align-middle rounded-md"
						alt={post.author.name}
						src={post.author.photo.url}
						width="30px"
						height="30px"
					/>
					<p className="inline align-middle text-gray-700 ml-2 text-lg">{post.author.name}</p>
				</div>
				<div className=" flex items-center gap-2 font-medium text-gray-700">
					<MdDateRange className="text-xl" />
					<span>{moment(post.fakeDate).format("MMM DD, YYYY")}</span>
				</div>
			</div>
			<p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
				{post.excerpt}
			</p>
			<div className="text-center">
				<Link href={`/post/${post.slug}`}>
					<span className="transition duration-300 transform hover:-translate-y-1 inline-block bg-green2 hover:bg-green3 text-lg font-semibold rounded-full text-white px-8 py-3 cursor-pointer shadow-md">
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
