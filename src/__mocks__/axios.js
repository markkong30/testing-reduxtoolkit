const getResponse = {
	data: {
		results: [
			{
				name: {
					first: "hi",
					last: "mom",
				},
				picture: {
					large: "https://randomuser.me/api/portraits/men/5.jpg",
				},
				login: {
					username: "HiMom",
				},
			},
			{
				name: {
					first: "hi",
					last: "mom",
				},
				picture: {
					large: "https://randomuser.me/api/portraits/men/5.jpg",
				},
				login: {
					username: "HiMom",
				},
			},
			{
				name: {
					first: "hi",
					last: "mom",
				},
				picture: {
					large: "https://randomuser.me/api/portraits/men/5.jpg",
				},
				login: {
					username: "HiMom",
				},
			},
			{
				name: {
					first: "hi",
					last: "mom",
				},
				picture: {
					large: "https://randomuser.me/api/portraits/men/5.jpg",
				},
				login: {
					username: "HiMom",
				},
			},
			{
				name: {
					first: "hi",
					last: "mom",
				},
				picture: {
					large: "https://randomuser.me/api/portraits/men/5.jpg",
				},
				login: {
					username: "HiMom",
				},
			},
		],
	},
};

export default {
	get: jest.fn().mockResolvedValue(getResponse),
};
