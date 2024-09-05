import { CreativeWork } from "./creative-work";
import { ImageObject } from "./image-object";
import { PropertyValue } from "./property-value";
import { TextObject } from "./text-object";

export type Thing = {
    additionalType?: string | URL;
    alternateName?: string;
    description?: string | TextObject;
    disambiguatingDescription?: string;
    identifier?: PropertyValue | string | URL;
    image?: ImageObject | URL;
    mainEntityOfPage?: CreativeWork | URL;
    name?: string;
    //potentialAction?: SemAction;
    sameAs?: URL;
    subjectOf?: CreativeWork | Event;
    url?: URL;
}