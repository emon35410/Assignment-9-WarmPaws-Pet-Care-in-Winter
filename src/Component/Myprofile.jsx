import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthConntext } from '../layout/Provider/AuthProvider';
import CircularText from './CircularText ';
import { updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import { toast } from 'react-toastify';

const Myprofile = () => {
    const { user, setUser } = useContext(AuthConntext);
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        if (user) {
            setDisplayName(user.displayName || "");
            setPhotoURL(user.photoURL || "");
            setLoading(false);
        }
    }, [user]);

    const handleUpdate = async () => {
        if (!auth.currentUser) return;

        setLoading(true);
        try {
            await updateProfile(auth.currentUser, {
                displayName,
                photoURL,
            });

            // update context with new info
            setUser({ ...user, displayName, photoURL });

            toast.success("Profile updated successfully!");
            setEditing(false);
        } catch (error) {
            console.error(error);
            toast.error("Error updating profile: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <CircularText text="INTERSTELLAR*" spinDuration={20} className="text-xl text-primary" />
            </div>
        );
    }

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <div className="bg-white shadow-lg space-y-6 rounded-2xl p-20 w-[700px] text-center">

                        {/* Display Image */}
                        <img
                            src={photoURL || "https://i.ibb.co/6W8d7J1/default-avatar.png"}
                            alt="User"
                            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
                            onLoad={() => setLoading(false)}
                        />
                        {loading && <p className="text-sm text-gray-500">Loading image...</p>}


                        {editing ? (
                            <>
                                {/* Editable Inputs */}
                                <input
                                    type="text"
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    className="input input-bordered w-full mb-2"
                                    placeholder="Update display name"
                                />
                                <input
                                    type="text"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                    className="input input-bordered w-full mb-2"
                                    placeholder="Update photo URL"
                                />
                                <button
                                    onClick={handleUpdate}
                                    disabled={loading}
                                    className="btn btn-primary w-full mt-2"
                                >
                                    {loading ? "Updating..." : "Save"}
                                </button>
                                <button
                                    onClick={() => setEditing(false)}
                                    className="btn btn-secondary w-full mt-2"
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <h2 className="text-xl text-blue-800 font-semibold">{displayName || "No Name"}</h2>
                                <p className="text-gray-600">
                                    Email: <span className="font-semibold">{user.email}</span>
                                </p>
                                <button
                                    onClick={() => setEditing(true)}
                                    className="mt-5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                                >
                                    Update Profile
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </main>
            <section>
                <Footer />
            </section>
        </>
    );
};

export default Myprofile;
