import { MediaObject } from "./media-object";
import { PropertyValue } from "./property-value";

export type ImageObject = {
    caption?: MediaObject | string;
    embeddedTextCaption?: string;
    exifData?: PropertyValue | string;
    representativeOfPage?: boolean;
};