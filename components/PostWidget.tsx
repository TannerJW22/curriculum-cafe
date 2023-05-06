import React, { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimiliarPosts } from "@/services";
import { Post } from "@/utils";

const PostWidget: React.FC<PostWidgetProps> = () => {
	const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

	useEffect(() => {
		getRecentPosts().then((res: any) => setRelatedPosts(res));
	}, []);

	const renderedPosts = relatedPosts.map((post: any) => {
		return (
			<div key={post.title}>
				<Link href={`/post/${post.slug}`} key={post.title} className="text-md">
					<div className="flex items-center w-full mb-1 pl-4 hover:bg-green0 hover:bg-opacity-30 py-3 rounded-xl">
						<div className="w-16 flex-none">
							<img
								className="align-middle rounded-full"
								alt={post.title}
								src={post.featuredImage.url}
								height="60px"
								width="60px"
							/>
						</div>

						<div className="flex-grow ml-4">
							<p className="text-gray-500 font-xs">
								{moment(post.fakeDate).format("MMM DD, YYYY")}
							</p>

							{post.title}
						</div>
					</div>
				</Link>
			</div>
		);
	});

	return (
		<div className="bg-white shadow-lg rounded-lg p-8 mb-8">
			<h3 className="text-xl mb-6 font-semibold border-b border-green0 pb-4">Recent Posts</h3>
			{renderedPosts}
		</div>
	);
};

// :::*
export interface PostWidgetProps {
	//
}

export default PostWidget;
