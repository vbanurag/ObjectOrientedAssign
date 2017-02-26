(function() {
    var inscount = 0;
    var directcount = 0;

    function count(obj) {
        if (this instanceof count) {
            inscount++;
            alert("instance count increased to " + inscount);
        } else {
            directcount++;
            alert("normal function call increased to " + directcount);
        }
    }
    count();
    new count();
})();