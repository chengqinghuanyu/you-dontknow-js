var Tast = {
    setID: function(ID) {
        this.id = ID;
    },
    outputID: function() {
        console.log(this.id);
    }
}
var XYZ = Object.create(Tast);
XYZ.prik = function(ID, label) {
    this.setID(ID);
    this.label = label;
}
XYZ.outputTaskDetail = function() {
    this.outputID();
    console.log(this.label);
}
XYZ.prik(12, 'aa');
XYZ.outputTaskDetail();