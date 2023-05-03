import React from "react";
import moment from "moment";
import Link from "next/link";

import { Post } from "@/utils/types";

const PostCard: React.FC<PostCardProps> = ({ post }) => {
	return (
		<div>
			{post.title}
			{post.excerpt}
		</div>
	);
};

// :::*
export interface PostCardProps {
	post: Post;
}

export default PostCard;
