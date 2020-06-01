export interface IFireShow{
    singleFire():void;
    doubleFire():void;
}

export interface IWisdomShow{
    suanshuti():void;
    dance():void
}

export interface IBalanceShow{
    dumuqiao():void;
    zougangsi():void;
}

// 2.所有动物进行火圈表演的动物，进行表演

export function hasFireShow(ani:object):ani is IFireShow {
    if((ani as IFireShow).singleFire && (ani as IFireShow).doubleFire) {
        return true;
    }
    return false;
}
//3.所有智慧表演的动物进行表演

export function hasWisdomShow(ani:object):ani is IWisdomShow {
    if((ani as IWisdomShow).dance && (ani as IWisdomShow).suanshuti) {
        return true;
    }
    return false;
}