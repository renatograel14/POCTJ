var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    appId: '7rdaqt8mej77w11z',
    scheme: 'https'
});

// START_CUSTOM_CODE_demoAppBackend
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_demoAppBackend
module.exports = provider;