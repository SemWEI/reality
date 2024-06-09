type Article = CreativeWork & {
    articleBody?: string;
    articleSection?: string;
    backstory?: CreativeWork | string;
    pageEnd?: number | string;
    pageStart?: number | string;
    pagination?: string;
    //speakable?: SpeakableSpecification | URL;
    wordCount?: number;
};