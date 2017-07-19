import ProfileHTML from '../components/Profile.Component.html';

const ProfileHandler = () => {
    document.querySelector('#router-view').innerHTML = ProfileHTML;
};

export default ProfileHandler;