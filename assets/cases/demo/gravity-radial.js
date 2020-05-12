let Gravity = require('gravity');

cc.Class({
    extends: Gravity,

    properties: {
        gravityForce: 500,
    },

    onLoad: function () {
        this._position = cc.v2();
        this._center = cc.v2();
    },
    
    _applyForce: function (body) {
        let position = this._position;
        let center = this._center;
        //获取刚体的世界坐标
        body.getWorldPosition(position);
        this.body.getWorldPosition(center);
        //力的向量（指向中心点，大小跟刚体质量有关）
        let f = center.subSelf( position ).normalizeSelf().mulSelf(this.gravityForce * body.getMass());
        //向中心点施加一个力
        body.applyForce(f, position, false);
    }
});
