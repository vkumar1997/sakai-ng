import { ItemSubGroups } from "../itemsubgroups/itemsubgroups.model"
import { ItemAdditionalInfo } from "../itemadditionalinfo/itemadditionalinfo.model"

export class ItemGroups {
    ItemGroupCdSr: number;
    ItemGroupCd: string;
    ItemGroupName: string;
    ItemGroupDesc: string;
    CreatedBy: string;
    CreatedDt: string;
    ModifiedBy: string;
    ModifiedDt: string;
    SubGroupsList: ItemSubGroups[];
}
