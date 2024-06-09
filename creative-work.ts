/*some fields excluded*/
type CreativeWork = {
    about?: Thing;
    abstract?: string;
    accessMode?: string;
    accessibilityAPI?: string;
    accessibilityControl?: string;
    accessibilityFeature?: string;
    accessibilityHazard?: string;
    accessibilitySummary?: string;
    acquireLicensePage?: CreativeWork | URL;
    alternativeHeadline?: string;
    associatedMedia?: MediaObject;
    award?: string;
    citation?: CreativeWork | string;
    comment?: Comment;
    commentCount?: number;
    conditionsOfAccess?: string;
    copyrightNotice?: string;
    copyrightYear?: number;
    discussionUrl?: URL;
    editEIDR?: string | URL;
    encoding?: MediaObject;
    encodingFormat?: string | URL;
    exampleOfWork?: CreativeWork;
    genre?: string | URL;
    hasPart?: CreativeWork;
    headline?: string;
    interactivityType?: string;
    isAccessibleForFree?: boolean;
    isFamilyFriendly?: boolean;
    isPartOf?: CreativeWork | URL;
    license?: CreativeWork | URL;
    mainEntity?: Thing;
    mentions?: Thing;
    position?: number | string;
    publishingPrinciples?: CreativeWork | URL;
    recordedAt?: Event;
    schemaVersion?: string | URL;
    sdDatePublished?: Date;
    sdLicense?: CreativeWork | URL;
    text?: string;
    thumbnail?: ImageObject;
    thumbnailUrl?: URL;
    translationOfWork?: CreativeWork;
    typicalAgeRange?: string;
    usageInfo?: CreativeWork | URL;
    version?: number | string;
    workExample?: CreativeWork;
    workTranslation?: CreativeWork;
  };
  