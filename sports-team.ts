import { Person } from "./person";
import { SportsOrganization } from "./sports-organization";

export type SportsTeam = SportsOrganization & {
    athlete?: Person;
    coach?: Person;
    //gender?: GenderType | string;
}