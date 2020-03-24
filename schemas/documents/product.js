export default {
  title: 'Product',
  name: 'product',
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
      title: 'Price',
      name: 'price',
      type: 'number',
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string',
    },
    {
      title: 'Product Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Ingredients',
      name: 'ingredients',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'ingredient'}]
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
    },
    {
      title: 'Barcode',
      name: 'barcode',
      type: 'number',
    },
    {
      title: 'Classifications',
      name: 'classifications',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'classification'}]
      }],
      description: 'Presence of allergens, meat, dairy, etc.',
    },
    {
      title: 'Awards',
      name: 'awards',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'award'}]
      }],
      description: 'Gold medal, blue ribbons, press article, honorable mentions, etc',
    },
  ]
}