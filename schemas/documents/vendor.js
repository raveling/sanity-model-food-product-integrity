export default {
  title: 'Vendor',
  name: 'vendor',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'summary',
      type: 'text',
    },
    {
      title: 'Vendor Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Certifications',
      name: 'certifications',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'certification'}]
      }]
    },
    {
      title: 'Location',
      name: 'location',
      type: 'object',
      fields: [
        {title: 'Country', name: 'country', type: 'string'},
        {title: 'State', name: 'state', type: 'string'},
        {title: 'City/Town', name: 'city', type: 'string'},
      ]
    }
  ]
}