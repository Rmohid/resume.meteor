if (Meteor.isClient) {

    // Set default language to english
    Session.setDefault('language', 'EN');
    Session.setDefault('name', 'Robert Mohid');

    for (var k in englishVars) {
        if (englishVars.hasOwnProperty(k)) {
            Session.set(k, englishVars[k]);
        }
    }

    Template.menuTop.helpers({
        language: function() {
            return Session.get('language');
        },
        languageClass: function(language) {
            var text = '';
            console.log(Session.get('language') + " vs " + language);
            if (Session.get('language') == language) {
                text = 'menu-selected';
            }
            return text;
        },
    });

    Template.menuTop.events({
        'click .btn-template': function(event) {
            event.preventDefault();
            console.log(event.target.id);
            Session.set('main', event.target.id);
        },
        'click .set-french': function() {
            Session.set('language', "FR");

            for (var k in frenchVars) {
                if (frenchVars.hasOwnProperty(k)) {
                    Session.set(k, frenchVars[k]);
                }
            }
        },
        'click .set-english': function() {
            Session.set('language', "EN");

            for (var k in englishVars) {
                if (englishVars.hasOwnProperty(k)) {
                    Session.set(k, englishVars[k]);
                }
            }
        },
    });
    // Initialise dynamic template

    Template.body.created = function() {
        Session.set("main", "trad1");
    }

    Template.selectFrame.helpers({
        active: function() {
            return Session.get('main');
        }
    });


    // Language token replacement helpers

    var helpers = {
        name: function() {
            return Session.get('name');
        },
        email: function() {
            return Session.get('email');
        },
        phone: function() {
            return Session.get('phone');
        },
        address1: function() {
            return Session.get('address1');
        },
        address2: function() {
            return Session.get('address2');
        },
        summary: function() {
            return Session.get('summary');
        },
        skills: function() {
            return Session.get('skills');
        },
        skillsText: function() {
            return Session.get('skillsText');
        },
        education: function() {
            return Session.get('education');
        },
        experience: function() {
            return Session.get('experience');
        },
        references: function() {
            return Session.get('references');
        },
        school: function() {
            return Session.get('school');
        },
        degree: function() {
            return Session.get('degree');
        },
        major: function() {
            return Session.get('major');
        },
        gradDate: function() {
            return Session.get('gradDate');
        },
        job1: function() {
            return Session.get('job1');
        },
        job2: function() {
            return Session.get('job2');
        },
        reference1: function() {
            return Session.get('reference1');
        },
        reference2: function() {
            return Session.get('reference2');
        },
        reference3: function() {
            return Session.get('reference3');
        },
        skills: function() {
            return Session.get('skills');
        },
        skillData: function() {
            return Session.get('skillData');
        },
    };

    // Import helpers to templates
    Template.trad1.helpers(helpers);
    Template.dynamic1.helpers(helpers);
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
