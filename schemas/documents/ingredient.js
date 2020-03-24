export default {
  title: 'Ingredient',
  name: 'ingredient',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Vendor',
      name: 'vendor',
      type: 'reference',
      to: [{type: 'vendor'}],
    },
    {
      title: 'Nutritional Data',
      name: 'nutritionData',
      type: 'array',
      of: [{
        type: 'nutritionItem'
      }]
    },
    {
      title: 'Certifications',
      name: 'certifications',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'certification'}]
      }]
    }
  ]
}