var Pid = (function () {
    var pid = null;

    var getPid = function() {
        return pid;
    };

    var setPid = function(u) {
        pid = u;
    };

    return {
        getPid : getPid,
        setPid : setPid
    }
})()

export default Pid;