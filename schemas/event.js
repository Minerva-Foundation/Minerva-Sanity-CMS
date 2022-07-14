export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'eventID',
        title: 'Event ID',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'signUpPeriod',
        title: 'Signing up ends in:',
        type: 'datetime',
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
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'date',
        title: 'Date & Time',
        type: 'datetime',
        validation: Rule => Rule.required()
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'hints',
        title: 'Extra Hints',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'contracts',
        title: 'Assets contract addresses needed for participation',
        type: 'array',
        of: [{type: 'string'}]
      },
    ],
  }
  