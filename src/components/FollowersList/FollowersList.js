import React, { useEffect, useState } from "react";
import "./FollowersList.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFollowers, getFollowers, removeFollower } from "../../features/followerSlice";

export default function FollowersList() {
	// const [followers, setFollowers] = useState(null);
	const { followers } = useSelector(getFollowers);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchFollowers());
	}, [dispatch]);

	const handleFetch = () => {
		dispatch(fetchFollowers());
	};

	const handleRemove = (index) => {
		dispatch(removeFollower(index));
	};

	return (
		<div className="followerslist-container">
			<div>
				{followers &&
					followers?.map((follower, index) => (
						<div key={index} className="follower-item" data-testid={`follower-item-${follower.cell}`}>
							<img src={follower.picture.large} />
							<div className="followers-details">
								<div className="follower-item-name">
									<h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
								</div>
								<p>{follower.login.username}</p>
								<button data-testid={`btn-remove-${follower.cell}`} onClick={() => handleRemove(follower.cell)}>
									Remove
								</button>
							</div>
						</div>
					))}
			</div>
			<div style={{ display: "flex" }}>
				<button onClick={handleFetch}>Fetch</button>
			</div>
			<div className="todo-footer">
				<Link to="/">Go Back</Link>
			</div>
		</div>
	);
}
