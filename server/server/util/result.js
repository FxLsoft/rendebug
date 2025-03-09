module.exports = function (data, isSuccess = true, msg = "") {

    this.success = !!isSuccess;
    this.message = msg || "success";
    this.data = data || {};
}