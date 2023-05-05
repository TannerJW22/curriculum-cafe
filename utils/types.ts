// ::: Type Definitions

export interface Post {
	title: string;
	slug: string;
	excerpt: string;
	content: string;
	featuredImage: {
		url: string;
	};
	isFeatured: boolean;
	author: Author;
	community: Community;
	fakeDate: Date;
	//
	createdAt: Date;
}

export type Author = {
	bio: string;
	name: string;
	id: string;
	photo: {
		url: string;
	};
};

export type Community = {
	name: string;
	slug: string;
};

// ::: Constants

export const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

// ::: Util Functions
