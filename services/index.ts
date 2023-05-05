import { Post, graphqlAPI } from "@/utils/types";
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
export const getSimiliarPosts = async (slug: string, communities: string[]): Promise<[]> => {
	const query = gql`
		query getPostDetails($slug: String!, $Communities: [String!]) {
			posts(
				where: { slug_not: $slug, AND: { Communities_some: { slug_in: $Communities } } }
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
