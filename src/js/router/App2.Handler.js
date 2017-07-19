import ProfileHTML from '../components/Profile.Component.js';

const ProfileHandler = () => {
    document.querySelector('#router-view').innerHTML = ProfileHTML();
};

export default ProfileHandler;