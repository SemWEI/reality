import { Person } from "./person";
import { SemEvent } from "./semevent";
import { SportsTeam } from "./sports-team";

export type SportsEvent = SemEvent & {
    awayTeam?: Person | SportsTeam;
    competitor?: Person | SportsTeam;
    homeTeam?: Person | SportsTeam;
    sport?: string | URL;
};