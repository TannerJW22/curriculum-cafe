import React from "react";
import { useRouter } from "next/router";

import { getCommunities, getCommunityPost } from "@/services";
import { PostCard, CommunityWidget, Loader, PostWidget } from "@/components";
import { Community, Post } from "@/utils";

const CommunityPost: React.FC<CommunityPostProps> = ({ posts, slug }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <Loader />;
	}

	let communityName: string = slug.replaceAll("-", " ");
	communityName = communityName.replace(/\b\w/g, (match: any) => match.toUpperCase());

	return (
		<div className="container mx-auto px-10 mb-8">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
				<div className="col-span-1 lg:col-span-8">
					<div className="flex justify-center bg-white shadow-lg rounded-lg pt-5 px-8 mb-8">
						<h2 className="relative overflow-hidden mb-6 text-2xl font-semibold">
							{communityName}
						</h2>
					</div>
					{posts.map((post: Post, index: number) => (
						<PostCard key={index} post={post} />
					))}
				</div>
				<div className="col-span-1 lg:col-span-4">
					<div className="relative lg:sticky top-8">
						<CommunityWidget />
						<PostWidget />
					</div>
				</div>
			</div>
		</div>
	);
};
export default CommunityPost;

export interface CommunityPostProps {
	posts: any;
	slug: string;
}

export async function getStaticProps({ params }: any) {
	let slug = params.slug;
	let posts = (await getCommunityPost(slug)) || [];

	return {
		props: { posts, slug },
	};
}

export async function getStaticPaths() {
	const communities = await getCommunities();
	return {
		paths: communities.map((community: any) => ({ params: { slug: community.slug } })),
		fallback: true,
	};
}
