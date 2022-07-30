const getResponse = {
	data: {
		results: [
			{
				cell: 0,
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
				cell: 1,
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
				cell: 2,
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
