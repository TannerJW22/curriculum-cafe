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

	const res: any = await request(graphqlAPI!, query);
	let posts = res.postsConnection.edges;
	posts = posts.map((post: any): Post => post.node);

	return posts;
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

export const getCommunityPost = async (slug: string) => {
	const query = gql`
		query getCommunityPost($slug: String!) {
			postsConnection(where: { community: { slug: $slug } }) {
				edges {
					cursor
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

	const res: any = await request(graphqlAPI!, query, { slug: slug });
	let posts = res.postsConnection.edges;
	posts = posts.map((post: any): Post => post.node);
	return posts;
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

// :::
export const getFeaturedPosts = async () => {
	const query = gql`
    query GetCategoryPost() {
      posts(where: {isFeatured: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        fakeDate
      }
    }   
  `;

	const res: any = await request(graphqlAPI!, query);

	return res.posts;
};
