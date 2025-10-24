import React, { use, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthConntext } from '../layout/Provider/AuthProvider';
import CircularText from './CircularText ';
import { updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import { toast } from 'react-toastify';

const Myprofile = () => {
    const { user } = use(AuthConntext);
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setDisplayName(user.displayName || "");
            setPhotoURL(user.photoURL || "");
            setLoading(false);
        }
    }, [user])
    const handleUpdate = () => {
        if (!user) return;

        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL,
        })
            .then(() => {
                toast("Profile updated successfully!");
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                alert("Error updating profile: " + error.message);
                setLoading(false);
            });
    };

    console.log(user)
    if (!user) {
        return <div className="flex justify-center items-center h-screen">
            <CircularText
                text="INTERSTELLAR*"
                spinDuration={20}
                className="text-xl text-primary"
            />
        </div>;

    }
    
    return (
        <>
            
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <div className="bg-white shadow-lg space-y-6 rounded-2xl p-20 w-150 text-center">
                        <img
                            src={user.photoURL}
                            alt="User"
                            className=" rounded-2xl mx-auto mb-4"
                        />

                        <h2 className="text-xl font-semibold">{user.displayName}</h2>
                        <p className="text-gray-600">Email :<span className='font-semibold'> {user.email}</span></p>

                        <button onClick={handleUpdate} className="mt-5 px-4 py-2 hover:cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                            Update Profile
                        </button>
                    </div>
                </div>
            </main>
            <section>
                <Footer></Footer>
            </section>
            
            
        </>

    );
};

export default Myprofile;