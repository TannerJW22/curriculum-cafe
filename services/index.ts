import { Post, graphqlAPI } from "@/utils/types";
import { request, gql } from "graphql-request";

export const getPosts = async (): Promise<GetPosts[]> => {
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
						createdAt
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

// :::*
export interface GetPosts {
	node: Post;
}
