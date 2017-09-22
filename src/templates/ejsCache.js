define([
    'common/util/ejs',
    'text!./contractClassStart.ejs',
    'text!./contractClassEnd.ejs',
    'text!./contractStates.ejs',
    'text!./contractUserDefinitions.ejs',
    'text!./contractTransitions.ejs',
    'text!./contractComplete.ejs',
], function (ejs,
             classStart,
             classEnd,
             states,
             userDefinitions,
             transitions,
             complete) {

    return {
        contractType: {
            classStart: classStart,
            classEnd: classEnd,
            states: states,
            transitions: transitions,
            userDefinitions: userDefinitions,
            complete: ejs.render(complete, {
                classStart: classStart,
                classEnd: classEnd,
                states: states,
                transitions: transitions,
                userDefinitions: userDefinitions
            })
        }
    };
});
