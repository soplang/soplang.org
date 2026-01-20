export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Soplang - The First Somali Programming Language',
    url: 'https://soplang.org',
    description:
        'Soplang is the first programming language designed for Somali speakers, enabling software development in the Somali language.',
    potentialAction: {
        '@type': 'SearchAction',
        target: 'https://soplang.org/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
    },
    keywords:
        'Somalia programming, Somali coding, Soplang, software development, technology education',
    inLanguage: ['so-SO', 'en-US'],
    audience: {
        '@type': 'Audience',
        geographicArea: {
            '@type': 'Country',
            name: 'Somalia',
        },
        audienceType: 'Developers, Students, Educators',
    },
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
        '@type': 'Organization',
        name: 'Soplang Software Foundation',
    },
    mainEntity: {
        '@type': 'SoftwareApplication',
        name: 'Soplang',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Windows, macOS, Linux, Unix',
    },
    funding: {
        '@type': 'Grant',
        name: 'Open Source Community Support',
        funder: {
            '@type': 'Organization',
            name: 'Soplang Software Foundation',
        },
    },
};

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Soplang Software Foundation',
    url: 'https://soplang.org',
    logo: {
        '@type': 'ImageObject',
        url: 'https://soplang.org/images/logo/logo-512.png',
        width: 512,
        height: 512,
    },
    sameAs: [
        'https://github.com/soplang',
        'https://x.com/soplangorg',
        'https://discord.gg/n296G4dd7x',
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@soplang.org',
        contactType: 'customer support',
        availableLanguage: ['Somali', 'English'],
    },
    foundingDate: '2023',
    founders: [
        {
            '@type': 'Person',
            name: 'Mr Sharafdin',
            url: 'https://github.com/sharafdin',
        },
    ],
    location: {
        '@type': 'Place',
        name: 'Mogadishu, Somalia',
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '2.0469',
            longitude: '45.3182',
        },
    },
    parentOrganization: null,
    funder: null,
    member: [
        {
            '@type': 'Person',
            name: 'Omar Tood',
        },
        {
            '@type': 'Person',
            name: 'Ismail Ainte',
        },
        {
            '@type': 'Person',
            name: 'Abdihakin Shiine',
        },
    ],
    award: 'First Somali Programming Language',
    nonprofitStatus: 'Nonprofit501c3',
    slogan: 'Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo!',
};

export const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Soplang',
    description:
        'A Somali programming language that makes coding intuitive, inclusive, and accessible for Somali peoples.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Windows, macOS, Linux, Unix',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
    },
    screenshot: 'https://soplang.org/images/logo/logo-512.png',
    softwareVersion: '2.0',
    author: {
        '@type': 'Organization',
        name: 'Soplang Software Foundation',
        url: 'https://soplang.org',
    },
    downloadUrl: 'https://soplang.org/downloads',
    releaseNotes: 'https://soplang.org/blog/release-notes',
    softwareHelp: 'https://soplang.org/docs',
    featureList: [
        'Native Somali syntax',
        'Object-Oriented Programming',
        'Dual typing system',
        'Error handling',
        'Simple control flow',
    ],
    programmingLanguage: 'Soplang',
    interactivityType: 'Active',
    fileSize: '20MB',
    processorRequirements: 'Any modern processor',
    storageRequirements: '50MB',
    memoryRequirements: '512MB RAM',
    permissions: 'No special permissions required',
    installUrl: 'https://soplang.org/downloads/latest',
    isAccessibleForFree: true,
    copyrightHolder: {
        '@type': 'Organization',
        name: 'Soplang Software Foundation',
    },
};

export const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://soplang.org',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Documentation',
            item: 'https://soplang.org/docs',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Downloads',
            item: 'https://soplang.org/downloads',
        },
        {
            '@type': 'ListItem',
            position: 4,
            name: 'Community',
            item: 'https://soplang.org/community',
        },
        {
            '@type': 'ListItem',
            position: 5,
            name: 'About',
            item: 'https://soplang.org/about',
        },
    ],
};

export const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is Soplang?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Soplang (short for Somali Programming Language) is a culturally-rooted programming language designed specifically for Somali speakers. It allows developers to write code using native Somali syntax and expressions.',
            },
        },
        {
            '@type': 'Question',
            name: 'Who can use Soplang?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Soplang is designed for everyone, but especially Somali speakers who want to learn programming using their native language. It's particularly useful for students, teachers, and new developers in Somalia and the Somali diaspora.",
            },
        },
        {
            '@type': 'Question',
            name: 'Is Soplang free to use?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, Soplang is completely free and open-source under the MIT License. You can download, use, and contribute to its development without any cost.',
            },
        },
        {
            '@type': 'Question',
            name: 'What platforms does Soplang work on?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Soplang works on Windows, macOS, and Linux/UNIX operating systems. It has a Python-based interpreter that runs on all major platforms.',
            },
        },
        {
            '@type': 'Question',
            name: 'How can I contribute to Soplang?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can contribute to Soplang by helping with code development, documentation, translations, or community building. Visit our Contribute page for more information on getting involved.',
            },
        },
    ],
};

export const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Introduction to Soplang Programming',
    description:
        'Learn the basics of programming using Soplang, the first Somali programming language.',
    provider: {
        '@type': 'Organization',
        name: 'Soplang Software Foundation',
        sameAs: 'https://soplang.org',
    },
    hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        inLanguage: 'so-SO',
        offers: {
            '@type': 'Offer',
            price: 0,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
        },
    },
    courseCode: 'SOPLANG-101',
    educationalLevel: 'Beginner',
    teaches: 'Programming fundamentals using the Somali language',
    learningResourceType: 'Online Tutorial',
    url: 'https://soplang.org/docs/tutorial',
};

export const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Soplang 2.0 Release',
    startDate: '2023-12-01T09:00:00+03:00',
    endDate: '2023-12-01T18:00:00+03:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    location: {
        '@type': 'VirtualLocation',
        url: 'https://discord.gg/n296G4dd7x',
    },
    image: ['https://soplang.org/images/logo/logo-512.png'],
    description:
        'Join us for the official release of Soplang 2.0, featuring new language improvements and expanded documentation.',
    organizer: {
        '@type': 'Organization',
        name: 'Soplang Software Foundation',
        url: 'https://soplang.org',
    },
    offers: {
        '@type': 'Offer',
        url: 'https://soplang.org/community/events',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        validFrom: '2023-11-01T00:00:00+03:00',
    },
    performer: {
        '@type': 'Person',
        name: 'Mr Sharafdin',
    },
};

export const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Soplang: The First Somali Programming Language',
    image: 'https://soplang.org/images/logo/logo-512.png',
    datePublished: '2023-01-15T08:00:00+03:00',
    dateModified: new Date().toISOString(),
    author: {
        '@type': 'Person',
        name: 'Mr Sharafdin',
        url: 'https://github.com/sharafdin',
    },
    publisher: {
        '@type': 'Organization',
        name: 'Soplang Software Foundation',
        logo: {
            '@type': 'ImageObject',
            url: 'https://soplang.org/images/logo/logo-512.png',
            width: 512,
            height: 512,
        },
    },
    description:
        'Explore the story behind Soplang, the first programming language designed specifically for Somali speakers.',
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://soplang.org/about',
    },
    articleSection: 'About',
    wordCount: 1200,
    keywords: 'Soplang, Somali programming language, coding education',
};

export const getJsonLd = () => {
    return [
        websiteSchema,
        organizationSchema,
        softwareApplicationSchema,
        breadcrumbSchema,
        faqSchema,
        courseSchema,
        eventSchema,
        articleSchema
    ];
};
