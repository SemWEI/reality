type SportsTeam = SportsOrganization & {
    athlete?: Person;
    coach?: Person;
    //gender?: GenderType | string;
}