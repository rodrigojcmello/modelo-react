class Cordova {
    initialize() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    }
    onDeviceReady() {

    }
};

export default new Cordova;
