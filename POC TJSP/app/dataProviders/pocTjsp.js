var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    appId: 'ydzxxh9xwnuuxcrn',
    scheme: 'https'
});

// START_CUSTOM_CODE_pocTjsp
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_pocTjsp
module.exports = provider;