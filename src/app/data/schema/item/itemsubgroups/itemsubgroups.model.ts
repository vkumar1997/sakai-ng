import { ItemPropertyType } from "../itempropertytype/itempropertytype.model"

export class ItemSubGroups {
    ItemSubGroupCdSr: number;
    ItemSubGroupCd: string;
    ItemGroupCdSr: number;
    ItemSubGroupName: string;
    ItemSubGroupDesc: string;
    CreatedBy: string;
    CreatedDt: string;
    ModifiedBy: string;
    ModifiedDt: string;
    ItemPropertyTypeList: ItemPropertyType[];
}
