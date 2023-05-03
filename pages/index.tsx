import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Categories, PostCard, PostWidget } from "../components";
import { getPosts } from "../services";

export default function HomePage({ posts }: HomePageProps) {
	console.log(posts); // <<--*
	return (
		<div className="container mx-auto px-10 mb-8 bg-gray-300">
			<Head>
				<title>Curriculum Cafe | Home</title>
			</Head>
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
				<div className="lg:col-span-8 col-span-1">
					{/* {posts.map((post, i) => (
						<PostCard post={post} key={post.title} />
					))} */}
				</div>
				<div className="lg:col-span-4 col-span-1">
					<div className="lg:sticky relative top-8">New Components</div>
					<PostWidget />
					<Categories />
				</div>
			</div>
		</div>
	);
}

export interface HomePageProps {
	posts: any;
}

export async function getStaticProps() {
	const posts = (await getPosts()) || [];

	return {
		props: { posts },
	};
}
