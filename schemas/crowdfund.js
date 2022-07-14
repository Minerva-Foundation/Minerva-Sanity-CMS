export default {
    name: 'crowdfund',
    title: 'Crowdfund',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        description: 'Only for Sanity',
        type: 'string',
      },
      {
        name: 'soon',
        title: 'Soon',
        description: 'Set to "True" if not all infos are known yet and/or crowdfund/NFTs are not minted yet. Will produce different design with only card image, winemaker name and country visible. Set "planned start time" & "planned end time" really low if True!!!',
        type: 'boolean',
        validation: Rule => Rule.required()
      },
      {
        name: 'contract',
        title: 'Contract Address',
        description: 'VERY VERY IMPORTANT: Contract address used for THIS crowdfund!!!',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'start',
        title: 'Planned Start Time',
        description: '!!! Set to short ime ago (like 10h ago, SHORTER AGO THAN ANY OTHER CROWDFUND HAS ENDED) if "Soon" is set to True !!!',
        type: 'datetime',
        validation: Rule => Rule.required()
      },
      {
        name: 'end',
        title: 'Planned End Time',
        type: 'datetime',
        description: '!!! Set to something in the past if "Soon" is set to True !!!',
        validation: Rule => Rule.required()
      },
      {
        name: 'maxSold',
        title: 'Maximum NFTs to be sold',
        description: 'IMPORTANT: Same as crowdfund contract can sell!',
        type: 'number',
        validation: Rule => Rule.required()
      },
      {
        name: 'price',
        title: 'Price',
        description: 'IMPORTANT: HAS TO BE THE SAME ONE USED TO START THE SALE!',
        type: 'number',
        validation: Rule => Rule.required()
      },
      {
        name: 'maxBuy',
        title: 'Max per person',
        description: 'IMPORTANT: Same as to be used in crowdfund!',
        type: 'number',
        validation: Rule => Rule.required()
      },
      {
        name: 'merchant',
        title: 'Merchant',
        type: 'reference',
        to: {type: 'merchant'},
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'NFTs Contract Address',
        description: 'VERY IMPORTANT: NFT address of asset sold here!!!',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'cardImage',
        title: 'Winecard image',
        description: 'Square or higher than wide, NOT wider than high!',
        type: 'image',
        options: {
          hotspot: true,
        },
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
        name: 'type',
        title: 'Wine Type',
        description: 'IMPORTANT: Same as in NFT metadata!',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'variety',
        title: 'Wine Variety',
        description: 'IMPORTANT: Same as in NFT metadata!',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'vintage',
        title: 'Vintage',
        description: 'IMPORTANT: Same as in NFT metadata!',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'date',
        title: 'Delivery Snapshot date',
        description: 'IMPORTANT: Same as in NFT metadata!',
        type: 'date',
        validation: Rule => Rule.required()
      },
      {
        name: 'tc',
        title: 'Terms and conditions, link to document',
        description: 'IMPORTANT: Same as in NFT metadata!',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'countryShorts',
        title: 'Country Shorthands',
        description: 'Country shorthand available for delivery, seperated by ","',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'countryLongs',
        title: 'Countries written out',
        description: 'Seperated by ","',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'shortInfo',
        title: 'Short Info',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'detail1',
        title: 'Detailed description category 1',
        description: 'Start with bold text in seperate row for title of category. MIN 300 CHARS!',
        type: 'blockContent',
        validation: Rule => Rule.required()
      },
      {
        name: 'detail2',
        title: 'Detailed description category 2',
        description: 'Start with bold text in seperate row for title of category. MIN 300 CHARS!',
        type: 'blockContent',
        validation: Rule => Rule.required()
      },
      {
        name: 'detail3',
        title: 'Detailed description category 3',
        description: 'Start with bold text in seperate row for title of category',
        type: 'blockContent',
      },
      {
        name: 'body',
        title: 'Body 1-100',
        type: 'number',
        validation: Rule => Rule.required()
      },
      {
        name: 'acidity',
        title: 'Acidity 1-100',
        type: 'number',
        validation: Rule => Rule.required()
      },
      {
        name: 'fruitiness',
        title: 'Fruitiness 1-100',
        type: 'number',
        validation: Rule => Rule.required()
      },
      {
        name: 'bottleimage',
        title: 'Bottle Image 1',
        description: 'Bottle for the crowdfund details of wine variety 1',
        type: 'image',
      },
      {
        name: 'varietyFirst',
        title: 'Variety of first one in case',
        description: 'Name of Variety, if only one in case then same as NFT metadata!',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'bottleCount',
        title: 'Number of bottles of wine type 1 in case',
        description: 'Optional, necessary if more than one type in case!',
        type: 'number',
      },
      {
        name: 'addDetails',
        title: 'Additional Details for more wines in one case',
        type: 'array',
        of: [{type: 'object', fields: [
          {
          name: 'variety',
          title: 'Variety',
          description: 'Name of Variety of this part of case',
          type: 'string',
          validation: Rule => Rule.required()
        },{
          name: 'bottleCount',
          title: 'Number of bottles of wine type in case',
          type: 'number',
          validation: Rule => Rule.required()
        },{
          name: 'body',
          title: 'Body 1-100',
          type: 'number',
          validation: Rule => Rule.required()
        },
        {
          name: 'acidity',
          title: 'Acidity 1-100',
          type: 'number',
          validation: Rule => Rule.required()
        },
        {
          name: 'fruitiness',
          title: 'Fruitiness 1-100',
          type: 'number',
          validation: Rule => Rule.required()
        },{name: 'shortInfo', type: 'string', title: 'Short Info',
        validation: Rule => Rule.required()},{
          name: 'bottleimage',
          title: 'Bottle Image',
          description: 'Bottle for the crowdfund details of this wine variety',
          type: 'image',
        },{name: 'detail1', type: 'blockContent', title: 'Detail cat. 1',
        validation: Rule => Rule.required()},{name: 'detail2', type: 'blockContent', title: 'Detail cat. 2',validation: Rule => Rule.required()},{name: 'detail3', type: 'blockContent', title: 'Detail cat. 3'}]}]
      },
    ],
  }
  