import React from "react";
import { getPosts, getPostDetails } from "@/services";
import {
	PostDetail,
	CommunityWidget,
	PostWidget,
	Author,
	Comments,
	CommentsForm,
} from "@/components";
import { Community, Post } from "@/utils";

const PostDetails = ({ post }: PostDetailsProps) => {
	return (
		<>
			<div className="container mx-auto px-10 mb-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					<div className="col-span-1 lg:col-span-8">
						<PostDetail post={post} />
						<Author author={post.author} />
						<CommentsForm slug={post.slug} />
						<Comments slug={post.slug} />
					</div>
					<div className="col-span-1 lg:col-span-4">
						<div className="relative lg:sticky top-8">
							<CommunityWidget />
							<PostWidget />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export async function getStaticProps({ params }: any) {
	const post = (await getPostDetails(params.slug)) || [];

	return {
		props: { post },
	};
}

export async function getStaticPaths() {
	let posts: any = await getPosts();

	return {
		paths: posts.map((post: any) => ({ params: { slug: post.slug } })),
		fallback: false,
	};
}

export interface PostDetailsProps {
	post: Post;
}

export default PostDetails;
