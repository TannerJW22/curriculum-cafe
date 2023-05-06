import { Post, graphqlAPI } from "@/utils";
import { request, gql } from "graphql-request";

// :::
export const getPosts = async (): Promise<[]> => {
	const query = gql`
		query getPosts {
			postsConnection {
				edges {
					node {
						author {
							bio
							name
							id
							photo {
								url
							}
						}
						fakeDate
						slug
						title
						excerpt
						featuredImage {
							url
						}
						community {
							name
							slug
						}
					}
				}
			}
		}
	`;

	let res: any = await request(graphqlAPI!, query);
	return res.postsConnection.edges;
};

// :::
export const getRecentPosts = async (): Promise<[]> => {
	const query = gql`
		query getPostDetails() {
			posts(
				orderBy: fakeDate_ASC
				last: 3
			) {
				title
				featuredImage {
					url
				}
				fakeDate
				slug
			}
		}
	`;

	let res: any = await request(graphqlAPI!, query);
	return res.posts;
};

// :::
export const getPostDetails = async (slug: string): Promise<Post> => {
	const query = gql`
		query getPostDetails($slug: String!) {
			post(where: { slug: $slug }) {
				title
				excerpt
				featuredImage {
					url
				}
				author {
					name
					bio
					photo {
						url
					}
				}
				fakeDate
				slug
				content {
					raw
				}
				community {
					name
					slug
				}
			}
		}
	`;

	let res: any = await request(graphqlAPI!, query, { slug });
	return res.post;
};

// :::
export const getSimiliarPosts = async (slug: string, community: string): Promise<[]> => {
	const query = gql`
		query getPostDetails($slug: String!, $community: String!) {
			posts(where: { slug_not: $slug, community: $community }, last: 3) {
				title
				featuredImage {
					url
				}
				fakeDate
				slug
			}
		}
	`;

	let res: any = await request(graphqlAPI!, query, { slug, community });
	return res.posts;
};

// :::
export const getCommunities = async (): Promise<[]> => {
	const query = gql`
		query getCommunities {
			communities {
				name
				slug
			}
		}
	`;

	let res: any = await request(graphqlAPI!, query);
	return res.communities;
};

// :::
export const getComments = async (slug: string) => {
	const query = gql`
		query getComments($slug: String!) {
			comments(where: { post: { slug: $slug } }) {
				name
				fakeDate
				comment
			}
		}
	`;

	const res: any = await request(graphqlAPI!, query, { slug });

	console.log(res); // <<--*
	console.log("RES>COMMENTS>>>>\n", res.comments); // <<--*

	return res.comments;
};

// :::
export const submitComment = async (obj: any) => {
	const res = await fetch("/api/comments", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(obj),
	});

	return res.json();
};
