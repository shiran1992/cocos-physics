cc.Class({
    extends: cc.Component,

    properties: {
        tangentSpeed: 5
    },

    // onPreSolve: function (contact) {
    //     contact.setTangentSpeed( this.tangentSpeed );
    // }

    onBeginContact: function (contact) {
        contact.setTangentSpeed( this.tangentSpeed );
    }
});
