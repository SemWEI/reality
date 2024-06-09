type Place = Thing & {
    additionalProperty?: PropertyValue;
    address?: PostalAddress | string;
    aggregateRating?: AggregateRating;
    amenityFeature?: LocationFeatureSpecification;
    branchCode?: string;
    containedInPlace?: Place;
    containsPlace?: Place;
    event?: Event;
    faxNumber?: string;
    geo?: GeoCoordinates | GeoShape;
    geoContains?: GeospatialGeometry | Place;
    geoCoveredBy?: GeospatialGeometry | Place;
    geoCovers?: GeospatialGeometry | Place;
    geoCrosses?: GeospatialGeometry | Place;
    geoDisjoint?: GeospatialGeometry | Place;
    geoEquals?: GeospatialGeometry | Place;
    geoIntersects?: GeospatialGeometry | Place;
    geoOverlaps?: GeospatialGeometry | Place;
    geoTouches?: GeospatialGeometry | Place;
    geoWithin?: GeospatialGeometry | Place;
    globalLocationNumber?: string;
    hasCertification?: Certification;
    hasDriveThroughService?: boolean;
    hasGS1DigitalLink?: URL;
    hasMap?: Map | URL;
    isAccessibleForFree?: boolean;
    isicV4?: string;
    keywords?: DefinedTerm | string | URL;
    latitude?: number | string;
    logo?: ImageObject | URL;
    longitude?: number | string;
    maximumAttendeeCapacity?: number;
    openingHoursSpecification?: OpeningHoursSpecification;
    photo?: ImageObject | Photograph;
    publicAccess?: boolean;
    review?: Review;
    slogan?: string;
    smokingAllowed?: boolean;
    specialOpeningHoursSpecification?: OpeningHoursSpecification;
    telephone?: string;
    tourBookingPage?: URL;
  };
  