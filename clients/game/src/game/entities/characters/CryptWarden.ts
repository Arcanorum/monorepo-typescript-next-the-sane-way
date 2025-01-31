import Mob from './Mob';

class Entity extends Mob {
    constructor(x: number, y: number, config: any) {
        config.displayName = 'Crypt warden';
        super(x, y, config);
    }
}

Entity.prototype.animationSetName = 'crypt-warden';

export default Entity;
