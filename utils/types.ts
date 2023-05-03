// ::: Type Definitions

export interface Post {
	title: string;
	slug: string;
	excerpt: string;
	content?: string;
	featuredImage: object; // <<--|
	isFeatured?: boolean;
	author?: object; // <<--|
	community?: object; // <<--|
}

// ::: Constants

export const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

// ::: Util Functions
