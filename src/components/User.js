var UserProfile = (function () {
    var user = {};

    var getUser = function() {
        return user;
    };

    var setUser = function(u) {
        user = u;
    };

    return {
        getUser : getUser,
        setUser : setUser
    }
})()

export default UserProfile;