import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import apiRequest from "../../utils/api";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const data = useLoaderData();

  const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1 className="gradient-text">User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info glass-container">
            <div className="user-header">
              <div className="avatar-wrapper">
                <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
                <div className="status-badge"></div>
              </div>
              <div className="user-meta">
                <h2>{currentUser.username}</h2>
                <span>{currentUser.email}</span>
              </div>
            </div>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1 className="gradient-text">My Properties</h1>
            <Link to="/add">
              <button className="create-btn">Create New Post</button>
            </Link>
          </div>
          <div className="list-wrapper">
            <Suspense fallback={<div className="loader"></div>}>
              <Await
                resolve={data?.postResponse}
                errorElement={<p>Error loading posts!</p>}
              >
                {(postResponse) => <List posts={postResponse?.data?.userPosts} />}
              </Await>
            </Suspense>
          </div>
          <div className="title">
            <h1 className="gradient-text">Saved Properties</h1>
          </div>
          <div className="list-wrapper">
            <Suspense fallback={<div className="loader"></div>}>
              <Await
                resolve={data?.postResponse}
                errorElement={<p>Error loading posts!</p>}
              >
                {(postResponse) => <List posts={postResponse?.data?.savedPosts} />}
              </Await>
            </Suspense>
          </div>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Suspense fallback={<div className="loader"></div>}>
            <Await
              resolve={data?.chatResponse}
              errorElement={<p>Error loading chats!</p>}
            >
              {(chatResponse) => <Chat chats={chatResponse?.data} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
