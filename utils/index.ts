// ::: Type Definitions

export interface Post {
	title: string;
	slug: string;
	excerpt: string;
	content: any;
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

export type CMSComment = {
	name: string;
	email: string;
	comment: string;
	post: any;
	fakeDate: Date;
};

// ::: Constants

export const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const loadGraphCMSImg = ({ src }: any) => src;

// ::: Util Functions
