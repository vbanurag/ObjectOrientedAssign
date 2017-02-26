(function() {
    function Employee(name, salary, address) {
        this.name = (name == 'undefined') ? "_blank" : name;
        this.salary = (salary == "undefined") ? 0 : salary;
        this.address = (address == 'undefined') ? "_blank" : address;
    }

    function copyObject(obj) {
        var keyset = Object.keys(obj);
        var temp = {};
        if (this instanceof employee) {
            for (var i = 0; i < keyset.length; i++) {
                this[keyset[i]] = obj[keyset[i]];
            }
            return;
        } else {
            for (var i = 0; i < keyset.length; i++) {
                temp[keyset[i]] = obj[keyset[i]];
            }
            return temp;
        }
    }


    Employee.prototype.copyObject = copyObject; //For copy the Object from same type;

    var emp = new Employee("anurag", 78000, "Sec-24 , Rohini");
    alert("Name : " + emp.name + "\nSalary : " + emp.salary + "\nAddress: " + emp.address);


})();