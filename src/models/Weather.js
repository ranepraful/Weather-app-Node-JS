const Weather = function(data) {
    this.data = data
    this.errors = []

}
Weather.prototype.validateUserInput = function() {
    if (this.data == ""){
        this.errors.push("Please enter city value.")
    }


}
module.exports = Weather