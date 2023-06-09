import { Post } from "@/utils";
import moment from "moment";
import React from "react";
import { MdDateRange } from "react-icons/md";

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
	const getContentFragment = (index: any, text: any, obj: any, type: any) => {
		let modifiedText = text;

		if (obj) {
			if (obj.bold) {
				modifiedText = <b key={index}>{text}</b>;
			}

			if (obj.italic) {
				modifiedText = <em key={index}>{text}</em>;
			}

			if (obj.underline) {
				modifiedText = <u key={index}>{text}</u>;
			}
		}

		switch (type) {
			case "heading-three":
				return (
					<h3 key={index} className="text-xl font-semibold mb-4">
						{modifiedText.map((item: any, i: number) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</h3>
				);
			case "paragraph":
				return (
					<p key={index} className="mb-8">
						{modifiedText.map((item: any, i: number) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</p>
				);
			case "heading-four":
				return (
					<h4 key={index} className="text-md font-semibold mb-4">
						{modifiedText.map((item: any, i: number) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</h4>
				);
			case "image":
				return (
					<img key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />
				);
			default:
				return modifiedText;
		}
	};

	return (
		<>
			<div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
				<div className="relative overflow-hidden shadow-md mb-6">
					<img
						src={post.featuredImage.url}
						alt=""
						className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
					/>
				</div>
				<div className="px-4 lg:px-0">
					<div className="flex items-center mb-8 w-full">
						<div className="hidden md:flex justify-center lg:mb-0 lg:w-auto mr-8 items-center">
							<img
								alt={post.author.name}
								height="30px"
								width="30px"
								className="align-middle rounded-full"
								src={post.author.photo.url}
							/>
							<p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
								{post.author.name}
							</p>
						</div>
						<div className="flex gap-2 font-medium text-gray-700">
							<MdDateRange className="text-2xl" />
							<span className="align-middle">{moment(post.fakeDate).format("MMM DD, YYYY")}</span>
						</div>
					</div>
					<h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
					{post.content.raw.children.map((typeObj: any, index: number) => {
						const children = typeObj.children.map((item: any, itemindex: number) =>
							getContentFragment(itemindex, item.text, item, item.type),
						);

						return getContentFragment(index, children, typeObj, typeObj.type);
					})}
				</div>
			</div>
		</>
	);
};

export interface PostDetailProps {
	post: Post;
}

export default PostDetail;
