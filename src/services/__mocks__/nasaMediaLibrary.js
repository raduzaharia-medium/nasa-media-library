const mockData = {
  collection: {
    version: "1.0",
    href: "http://images-api.nasa.gov/search?q=orion&media_type=image&page_size=10&page=1",
    items: [
      {
        href: "https://images-assets.nasa.gov/image/JSC-20160921-PH_JNB01_0002/collection.json",
        data: [
          {
            center: "KSC",
            title: "Orion's Neutral Buoyancy Lab (NBL) Activities",
            photographer: "NASA/James Blair",
            keywords: ["Orion", "GSDO", "recovery", "JSC", "NBL", "EM-1", "exploration", "journey to Mars"],
            location: "Orion NBL",
            nasa_id: "JSC-20160921-PH_JNB01_0002",
            media_type: "image",
            date_created: "2016-09-21T00:00:00Z",
            description: "description",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/JSC-20160921-PH_JNB01_0002/JSC-20160921-PH_JNB01_0002~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/JSC-20160920-PH_JNB01_0002/collection.json",
        data: [
          {
            center: "KSC",
            title: "Orion Neutral Buoyancy Lab (NBL) Activities",
            photographer: "NASA/James Blair",
            keywords: ["Orion", "GSDO", "recovery", "JSC", "NBL", "EM-1", "exploration", "journey to Mars"],
            location: "Orion NBL",
            nasa_id: "JSC-20160920-PH_JNB01_0002",
            media_type: "image",
            date_created: "2016-09-20T00:00:00Z",
            description: "description",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/JSC-20160920-PH_JNB01_0002/JSC-20160920-PH_JNB01_0002~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/JSC-20160920-PH_JNB01_0003/collection.json",
        data: [
          {
            center: "KSC",
            title: "Orion Neutral Buoyancy Lab (NBL) Activities",
            photographer: "NASA/James Blair",
            keywords: ["Orion", "GSDO", "recovery", "JSC", "NBL", "EM-1", "exploration", "journey to Mars"],
            location: "Orion NBL",
            nasa_id: "JSC-20160920-PH_JNB01_0003",
            media_type: "image",
            date_created: "2016-09-20T00:00:00Z",
            description: "description",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/JSC-20160920-PH_JNB01_0003/JSC-20160920-PH_JNB01_0003~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/JSC-20160921-PH_JNB01_0001/collection.json",
        data: [
          {
            center: "KSC",
            title: "Orion's Neutral Buoyancy Lab (NBL) Activities",
            photographer: "NASA/James Blair",
            keywords: ["Orion", "GSDO", "recovery", "JSC", "NBL", "EM-1", "exploration", "journey to Mars"],
            location: "Orion NBL",
            nasa_id: "JSC-20160921-PH_JNB01_0001",
            media_type: "image",
            date_created: "2016-09-21T00:00:00Z",
            description: "description",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/JSC-20160921-PH_JNB01_0001/JSC-20160921-PH_JNB01_0001~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/JSC-20160920-PH_JNB01_0001/collection.json",
        data: [
          {
            center: "KSC",
            title: "Orion Neutral Buoyancy Lab (NBL) Activities",
            photographer: "NASA/James Blair",
            keywords: ["Orion", "GSDO", "recovery", "JSC", "NBL", "EM-1", "exploration", "Journey to Mars"],
            location: "Orion NBL",
            nasa_id: "JSC-20160920-PH_JNB01_0001",
            media_type: "image",
            date_created: "2016-09-20T00:00:00Z",
            description: "description",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/JSC-20160920-PH_JNB01_0001/JSC-20160920-PH_JNB01_0001~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/JSC-20160921-PH_JNB01_0003/collection.json",
        data: [
          {
            center: "KSC",
            title: "Orion's Neutral Buoyancy Lab (NBL) Activities",
            photographer: "NASA/James Blair",
            keywords: ["GSDO", "Orion", "recovery", "JSC", "NBL", "EM-1", "exploration", "journey to Mars"],
            location: "Orion NBL",
            nasa_id: "JSC-20160921-PH_JNB01_0003",
            media_type: "image",
            date_created: "2016-09-21T00:00:00Z",
            description: "description",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/JSC-20160921-PH_JNB01_0003/JSC-20160921-PH_JNB01_0003~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/JSC-20160921-PH_JNB01_0004/collection.json",
        data: [
          {
            center: "KSC",
            title: "Orion's Neutral Buoyancy Lab (NBL) Activities",
            photographer: "NASA/James Blair",
            keywords: ["Orion", "GSDO", "recovery", "JSC", "NBL", "EM-1", "exploration", "journey to Mars"],
            location: "Orion NBL",
            nasa_id: "JSC-20160921-PH_JNB01_0004",
            media_type: "image",
            date_created: "2016-09-21T00:00:00Z",
            description: "description",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/JSC-20160921-PH_JNB01_0004/JSC-20160921-PH_JNB01_0004~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GRC-2015-C-06290/collection.json",
        data: [
          {
            center: "GRC",
            title: "Orion Crew Module Adapter",
            keywords: ["CMA", "crew module adapter", "ESA", "Plum Brook", "space", "component", "test", "Orion"],
            nasa_id: "GRC-2015-C-06290",
            date_created: "2015-11-12T00:00:00Z",
            media_type: "image",
            description_508: "Orion Crew Module Adapter",
            description: "description",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GRC-2015-C-06290/GRC-2015-C-06290~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA08655/collection.json",
        data: [
          {
            center: "JPL",
            title: "A Slice of Orion",
            nasa_id: "PIA08655",
            date_created: "2006-08-15T16:26:39Z",
            keywords: ["Orion", "Spitzer Space Telescope"],
            media_type: "image",
            description_508: "description",
            secondary_creator: "NASA/JPL-Caltech/Univ. of Toledo/NOAO",
            description: "description",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA08655/PIA08655~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA08656/collection.json",
        data: [
          {
            center: "JPL",
            title: "Infrared Spotlight on Orion Sword",
            nasa_id: "PIA08656",
            date_created: "2006-08-15T16:30:59Z",
            keywords: ["Orion", "Spitzer Space Telescope"],
            media_type: "image",
            description_508: "description",
            secondary_creator: "NASA/JPL-Caltech/IRAS /H. McCallon",
            description: "description",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA08656/PIA08656~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
    ],
    metadata: {
      total_hits: 14871,
    },
    links: [
      {
        rel: "next",
        prompt: "Next",
        href: "http://images-api.nasa.gov/search?q=orion&media_type=image&page_size=10&page=2",
      },
    ],
  },
};

export async function getMediaItems(query, startYear, endYear, page) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(mockData));
  });
}
