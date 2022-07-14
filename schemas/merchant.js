export default {
    name: 'merchant',
    title: 'Merchant',
    type: 'document',
    fields: [
      {
        name: 'seo',
        title: 'SEO',
        type: 'seo-tools', // use seo-tools type
        options: {
            baseUrl: 'https://minerva-articles.sanity.studio/', // (REQUIRED) This is the baseUrl for your site
            slug(doc) { // (REQUIRED) a function to return the slug of the current page, which will be appended to the baseUrl
                return doc.slug.current;
            },
            fetchRemote: true, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
            title(doc) {
                return 'page title'; // (OPTIONAL) return page title otherwise inferred from scrape
            },
            description(doc) {
                return 'page description'; // (OPTIONAL) return page description otherwise inferred from scrape
            },
            locale(doc) {
                return 'page locale'; // (OPTIONAL) return page locale otherwise inferred from scrape
            },
            contentSelector: 'description' // (OPTIONAL) option to finetune where Yoast will look for the content. (only applicable for scraping without content function)
        },
      },
      {
        name: 'title',
        title: 'Name',
        description: 'IMPORTANT: Same as in NFT metadata!',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'country',
        title: 'Country',
        description: 'IMPORTANT: Same as in NFT metadata!',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'flag',
        title: 'Flag of the country',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'card',
        title: 'Card Image',
        description: 'In the merchants overview',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'largeFirstImage',
        title: 'First large image',
        description: 'IMPORTANT: Min width of 1920px, best 2560px',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Descrition of merchant',
        description: 'Next to map',
        type: 'blockContent',
        validation: Rule => Rule.required().max(1200)
      },
      {
        name: 'description2',
        title: 'Descrition of merchant',
        description: 'Bottom left block of text',
        type: 'blockContent',
      },
      {
        name: 'description3',
        title: 'Descrition of merchant',
        description: 'Bottom right block of text',
        type: 'blockContent',
      },
      {
        name: 'map',
        title: 'Map',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'quote',
        title: 'Big & bold sentence about merchant',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'largeSecondImage',
        title: 'Second large image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'links',
        title: 'Links',
        type: 'array',
        of: [{type: 'object', fields: [{name: 'text', type: 'string', title: 'Link Text'},{name: 'url', type: 'string', title: 'Link URL'}]}]
      },
    ],
  }
  