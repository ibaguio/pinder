/*
 * JS for profilePage generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '33f72e88-f312-4e6d-866f-186e1004cd5b';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "SMSSuccess",
    "location": "SMSSuccess.html"
}, {
    "name": "mapViewPage",
    "location": "mapViewPage.html"
}, {
    "name": "loginScreen",
    "location": "loginScreen.html"
}, {
    "name": "editProfilePage",
    "location": "editProfilePage.html"
}, {
    "name": "profilePage",
    "location": "profilePage.html"
}, {
    "name": "dashboard",
    "location": "dashboard.html"
}, {
    "name": "discoveryPreferencesPage",
    "location": "discoveryPreferencesPage.html"
}, {
    "name": "otherProfilePage",
    "location": "otherProfilePage.html"
}];

function profilePage_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'toggleDoneButton': 'profilePage_toggleDoneButton',
        'editProfileButton': 'profilePage_editProfileButton',
        'mobilegrid_9': 'profilePage_mobilegrid_9',
        'mobilegridcell_10': 'profilePage_mobilegridcell_10',
        'profilePicture': 'profilePage_profilePicture',
        'mobilegridcell_11': 'profilePage_mobilegridcell_11',
        'spacer_16': 'profilePage_spacer_16',
        'nameLabel': 'profilePage_nameLabel',
        'mobilelabel_17': 'profilePage_mobilelabel_17',
        'spacer_20': 'profilePage_spacer_20',
        'mobilelabel_18': 'profilePage_mobilelabel_18',
        'mobilelabel_19': 'profilePage_mobilelabel_19'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.mappings["profilePage_restservice1_onsuccess_mapping_0"] = {
        "homeScreen": "profilePage",
        "directions": [

        {
            "from_name": "restservice1",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "profilePage",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body']['data']['last_name']",
                "target_transformation": function(value, element) {
                    var fullName = sessionStorage.firstName + " " + value;
                    return fullName;
                },
                "target": "$['nameLabel:text']"

            },

            {

                "source": "$['body']['data']['location']",
                "target_transformation": function(value, element) {
                    var locationAndAge = localStorage.ageTemp + ", " + value;
                    return locationAndAge;
                },
                "target": "$['mobilelabel_17:text']"

            },

            {

                "source": "$['body']['data']['picture_url']",
                "target": "$['profilePicture:image']"

            }

            ]
        },

        {
            "from_name": "restservice1",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "firstName",
            "to_type": "SESSION_STORAGE",

            "mappings": [

            {

                "source": "$['body']['data']['first_name']",
                "target": "$"

            }

            ]
        },

        {
            "from_name": "restservice1",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "ageTemp",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$['body']['data']['age']",
                "target": "$"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["profilePage_restservice1_onbeforesend_mapping_0"] = {
        "homeScreen": "profilePage",
        "directions": [

        {
            "from_name": "userFbId",
            "from_type": "LOCAL_STORAGE",

            "to_name": "restservice1",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {},
                "parameters": {},
                "body": null
            },

            "mappings": [

            {

                "source": "$",
                "target": "$['parameters']['me']"

            }

            ]
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.restservice1 = Apperyio.datasources.restservice1 = new Apperyio.DataSource(GetMeService, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["profilePage_restservice1_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("profilePage");
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["profilePage_restservice1_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'profilePage';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var profilePage_onLoad = function() {
            profilePage_elementsExtraJS();

            try {
                restservice1.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };

            profilePage_deviceEvents();
            profilePage_windowEvents();
            profilePage_elementsEvents();
        };

    // screen window events


    function profilePage_windowEvents() {

        $('#profilePage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#profilePage').on({
            pageshow: function(event) {
                try {
                    $a.c15r("mobilelabel_19", "set", "text", $a.storage["aboutMe"].get("$"))
                } catch (e) {
                    console.error(e)
                };
            },
        });

    };

    // device events


    function profilePage_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function profilePage_elementsExtraJS() {
        // screen (profilePage) extra code

    };

    // screen elements handler


    function profilePage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#profilePage_mobileheader [name="toggleDoneButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('dashboard', {
                        transition: 'flip',
                        reverse: false
                    });

                }
            },
        }, '#profilePage_mobileheader [name="toggleDoneButton"]');
        $(document).off("click", '#profilePage_mobileheader [name="editProfileButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('editProfilePage', {
                        reverse: false
                    });

                }
            },
        }, '#profilePage_mobileheader [name="editProfileButton"]');

    };

    $(document).off("pagebeforeshow", "#profilePage").on("pagebeforeshow", "#profilePage", function(event, ui) {
        Apperyio.CurrentScreen = "profilePage";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    profilePage_onLoad();
};

$(document).off("pagecreate", "#profilePage").on("pagecreate", "#profilePage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    profilePage_js();
});