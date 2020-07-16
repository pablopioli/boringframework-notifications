window.blazorNotifications = {
    browserSupportsNotifications: function () {
        return "Notification" in window;
    },

    permissionStatus: function () {
        return Notification.permission;
    },

    requestPermission: function () {
        Notification.requestPermission();
    },

    sendNotification: function (message) {
        new Notification(message);
    }
};
