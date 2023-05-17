import React, { useEffect, useState } from "react";
import { getCommunities } from "@/services";
import Link from "next/link";
import { Community } from "@/utils";

const CommunityWidget: React.FC<CommunityWidgetProps> = () => {
	const [communities, setCommunities] = useState<Community[]>([]);

	const renderedCommunities = communities.map(community => {
		return (
			<Link key={community.slug} href={`/community/${community.slug}`}>
				<span className="cursor-pointer block mb-3 hover:text-green2">{community.name}</span>
			</Link>
		);
	});

	useEffect(() => {
		getCommunities().then(res => setCommunities(res));
	}, []);

	return (
		<div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-8">
			<h3 className="text-xl mb-5 font-semibold border-b border-green0 pb-4">Communities</h3>
			{renderedCommunities}
		</div>
	);
};

// :::*
export interface CommunityWidgetProps {
	//
}

export default CommunityWidget;
