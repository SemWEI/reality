type SportsEvent = {
    awayTeam?: Person | SportsTeam;
    competitor?: Person | SportsTeam;
    homeTeam?: Person | SportsTeam;
    sport?: string | URL;
};